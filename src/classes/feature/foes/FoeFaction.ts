import { IIconpendiumItemData, IconpendiumItem } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { PlayerAddon } from '../addons/Addon'
import { AddonFactory } from '../../../factories/features/AddonFactory';
import { PlayerAbility } from '../abilities/Ability';
import { AbilityFactory } from '../../../factories/features/AbilityFactory';
import { Trait } from '../trait/Trait';
import { TraitFactory } from '../../../factories/features/TraitFactory';
import { Requester } from '../../../factories/Requester';
import { IFoeStats } from './FoeStats';
import { FoeFactory } from '../../../factories/features/FoeFactory';
import { FoeJob, IFoeJob } from './FoeJob';
import { FoeFactionClass, IFoeFactionClass } from './FoeFactionClass';
import { ITrophy, Trophy } from '../trophy/Trophy';
import { TrophyFactory } from '../../../factories/features/TrophyFactory';

interface IFoeFaction extends IIconpendiumItemData {
    description : [],   // Lore of the faction
    template: [],   // Information on making a foe part of this faction
    traits: string[],   // Traits this faction has (such as extra units)
    actions: string[]   // Actions this faction has
    traits_added: string[], // Traits given to each member of the faction
    actions_added: string[], // Actions given to each member of the faction (such as Demon's Devour)
    stats : IFoeStats
}

class FoeFaction extends IconpendiumItem {
    public readonly Description;
    public readonly Template;
    public readonly Traits;
    public readonly Actions;
    public readonly UnitTraits;
    public readonly UnitActions;
    public readonly Data;

    public readonly Classes;
    public readonly Unique;
    public readonly Elites;
    public readonly Legends;
    public readonly Trophies;

    public readonly Class = "icon";

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IFoeFaction)
    {
        super(data)

        this.Data = data;
        this.UnitTraits = data.traits_added;
        this.UnitActions = data.actions_added;
        this.Description = DescriptionFactory(data.description);
        this.Template = DescriptionFactory(data.template);
        this.Traits = this.TraitsFactory(data.traits);
        this.Actions = this.AbilitiesFactory(data.actions)

        this.Unique = this.JobsFactory(this.ID, "unique");
        this.Elites = this.JobsFactory(this.ID, "elite");
        this.Legends = this.JobsFactory(this.ID, "legend");
        this.Classes = this.ClassFactory(this.ID);
        this.Trophies = this.TrophiesFactory(this.ID);
    }
    
    private AbilitiesFactory(_data : string[]) {
        const array : PlayerAddon[] = []

        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(AddonFactory.CreateNewAddon(_data[i], 'foeabilities'))
        }
        return array;
    }

    private TraitsFactory(_data : string[]) {
        const array : Trait[] = []
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(TraitFactory.CreateNewTrait(_data[i], 'foetraits', 'icon'))
        }
        return array;
    }  

    
    private JobsFactory(faction : string, _category : string) {
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
                item        : "category",
                value       : _category,
                equals      : true,
                strict      : true,
                istag       : false
            }],
            subparams: []
        }}}) as IFoeJob[]
        
        _data.sort((one, two) => (one.name > two.name ? -1 : 1));
        _data.sort((one, two) => (one.chapter > two.chapter ? -1 : 1));

        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(FoeFactory.CreateFoeJob(_data[i]))
        }
        return array;
    }

    private ClassFactory(faction : string) {
        const array : FoeFactionClass[] = []
        
        const _data = Requester.MakeRequest({searchtype: "complex", searchparam: {type: "foefactionclass", request: {
            operator: "and",
            terms: [{
                item        : "faction_id",
                value       : faction,
                equals      : true,
                strict      : true,
                istag       : false
            }],
            subparams: []
        }}}) as IFoeFactionClass[]

        _data.sort((one, two) => (one.class_id < two.class_id ? -1 : 1));

        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(FoeFactory.CreateFoeFactionClass(_data[i]))
        }
        return array;
    }

    private TrophiesFactory(faction : string) {
        const array : Trophy[] = []
        
        const _data = Requester.MakeRequest({searchtype: "complex", searchparam: {type: "trophies", request: {
            operator: "and",
            terms: [{
                item        : "category",
                value       : faction,
                equals      : true,
                strict      : true,
                istag       : false
            }],
            subparams: []
        }}}) as ITrophy[]
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(TrophyFactory.CreateTrophy(_data[i]))
        }
        return array;
    }

}

export {IFoeFaction, FoeFaction}

