import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { PlayerAddon } from '../addons/Addon'
import { IPlayerAbility, PlayerAbility } from '../abilities/Ability';
import { AbilityFactory } from '../../../factories/features/AbilityFactory';
import { Trait } from '../trait/Trait';
import { TraitFactory } from '../../../factories/features/TraitFactory';
import { LimitBreakFactory } from '../../../factories/features/LimitBreakFactory';
import { AddonFactory } from '../../../factories/features/AddonFactory';
import { PlayerSummon } from '../summons/Summon';
import { SummonFactory } from '../../../factories/features/SummonFactory';
import { Requester } from '../../../factories/Requester';
import { IFoePhase, IFoeChapter, FoePhase, FoeChapter, IFoeStats, StatBuilder, MergeLists } from './FoeStats';
import { FoeClass, IFoeClass } from './FoeClass';
import { IFoeFaction } from './FoeFaction';
import { FoeFactory } from '../../../factories/features/FoeFactory';
import { FoeJob, IFoeJob } from './FoeJob';

interface IFoeFactionClass extends IIconpendiumItemData {
    faction_id : string
    class_id : string
    description: []
    stats: IFoeStats
    actions : string[]
    removed_actions : string[]
    traits : string[]
    removed_traits : string[]
    chapters : IFoeChapter[]
}

class FoeFactionClass extends IconpendiumItem {
    public Class;
    public Description;
    public Stats;
    public Chapters : FoeChapter[] = [];
    public Data;

    public Members;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IFoeFactionClass)
    {
        super(data)
        this.Data = data;
        const classdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foeclass", id: data.class_id}}) as IFoeClass
        const factiondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foefaction", id: data.faction_id}}) as IFoeFaction
        this.Stats = StatBuilder(data.stats, StatBuilder(factiondata.stats, classdata.stats));
        this.Class = classdata.class;
        this.Description = DescriptionFactory(data.description)

        const actionlist : string[] = MergeLists(
            [ data.actions,
                factiondata.actions_added,
                classdata.actions ], 
            [ data.removed_actions ]
        )
        
        const traitlist : string[] = MergeLists(
            [ data.traits,
                factiondata.traits_added,
                classdata.traits ], 
            [ data.removed_traits ]
        )

        if (data.chapters.length === 0) {
            const basechapter : IFoeChapter = {                
                chapter: 0,
                name: "",
                actions: [],
                removed_actions: [],
                traits: [],
                removed_traits: [],
                stats: {}
            }

            this.Chapters.push(new FoeChapter(basechapter, actionlist, traitlist, this.Stats, this.Class))
        } else {
            data.chapters.forEach(_chapter => {
                this.Chapters.push(new FoeChapter(_chapter, actionlist, traitlist, this.Stats, this.Class))
            })
        }

        this.Members = this.JobsFactory(factiondata.id, classdata.id)
    }

    
    private JobsFactory(faction : string, _class : string) {
        const array : FoeJob[] = []
        
        const _data = Requester.MakeRequest({searchtype: "complex", searchparam: {type: "foejobs", request: {
            operator: "and",
            terms: [{
                item        : "faction_id",
                value       : faction,
                equals      : true,
                strict      : true,
                istag       : false
            },{
                item        : "class_id",
                value       : _class,
                equals      : true,
                strict      : true,
                istag       : false
            },{
                item        : "category",
                value       : 'job',
                equals      : true,
                strict      : true,
                istag       : false
            }],
            subparams: []
        }}}) as IFoeJob[]
        
        _data.sort((one, two) => (one.chapter > two.chapter ? -1 : 1));
        
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(FoeFactory.CreateFoeJob(_data[i]))
        }
        return array;
    }

}

export {IFoeFactionClass, FoeFactionClass}

