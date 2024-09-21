import { IIconpendiumItemData, IconpendiumItem } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { Requester } from '../../../factories/Requester';
import { IFoePhase, IFoeChapter, FoePhase, FoeChapter, IFoeStats, StatBuilder, MergeLists } from './FoeStats';
import { IFoeClass } from './FoeClass';
import { IFoeFaction } from './FoeFaction';
import { IFoeFactionClass } from './FoeFactionClass';

interface IFoeJob extends IIconpendiumItemData {
    faction_id : string
    class_id : string
    category : string // legend elite unique or job
    stats: IFoeStats
    actions : string[]
    removed_actions : string[]
    traits : string[]
    removed_traits : string[]
    phases : IFoePhase[]
    chapter: number
    description: []
}

interface ChapterSet {
    chapter : FoeChapter
    phases : FoePhase[]
}

/*
    Legend = Class
    Unique = Class, Faction
    Elite = Class, Faction
    Job = Class, Faction, ClassFaction
*/

class FoeJob extends IconpendiumItem {
    public readonly Category;
    public readonly Class;
    public readonly Stats;
    public readonly ChapterSets : ChapterSet[] = [];
    public readonly Chapter;
    public readonly Description;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IFoeJob)
    {
        super(data)

        const classdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foeclass", id: data.class_id}}) as IFoeClass

        this.Chapter = data.chapter;
        this.Class = classdata.class;
        this.Category = data.category;

        this.Description = DescriptionFactory(data.description)

        const _actionLists = [];
        const _actionremovedLists = [];
        const _traitLists = [];
        const _traitremovedLists = [];
        let _chapters : IFoeChapter[] = [];
        const ChapterObjects : FoeChapter[] = [];
        let _statsVal = classdata.stats;

        _actionLists.push(classdata.actions)
        _actionLists.push(data.actions)
        _actionremovedLists.push(data.removed_actions)
        _traitLists.push(classdata.traits)
        _traitLists.push(data.traits)
        _traitremovedLists.push(data.removed_traits)

        if ((this.Category != 'legend')) {
            const factiondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foefaction", id: data.faction_id}}) as IFoeFaction
            _actionLists.push(factiondata.actions_added)
            _traitLists.push(factiondata.traits_added)
            _statsVal = StatBuilder(factiondata.stats, _statsVal)
        }

        if ((this.Category === 'job') && (data.faction_id != 'fc_general')) {
            const factionclassdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foefactionclass", id: (data.faction_id + "_" + data.class_id)}}) as IFoeFactionClass
            _actionLists.push(factionclassdata.actions)
            _actionremovedLists.push(data.removed_actions)
            _traitLists.push(factionclassdata.traits)
            _traitremovedLists.push(data.removed_traits)
            _chapters = factionclassdata.chapters
            _statsVal = StatBuilder(factionclassdata.stats, _statsVal)
        }

        this.Stats = StatBuilder(data.stats, _statsVal )
        const actionlist : string[] = MergeLists(_actionLists, _actionremovedLists)
        const traitlist : string[] = MergeLists(_traitLists, _traitremovedLists)

        if (_chapters.length === 0) {
            const basechapter : IFoeChapter = {                
                chapter: 0,
                name: "",
                actions: [],
                removed_actions: [],
                traits: [],
                removed_traits: [],
                stats: {}
            }

            ChapterObjects.push(new FoeChapter(basechapter, actionlist, traitlist, this.Stats, this.Class))
        } else {
            _chapters.forEach(_chapter => {
                ChapterObjects.push(new FoeChapter(_chapter, actionlist, traitlist, this.Stats, this.Class))
            })
        }

        ChapterObjects.forEach(_chapter => {
            console.log(_chapter);
            const PhaseSet : FoePhase[] = [];            

            if (data.phases.length === 0) {
                const _phase : IFoePhase = {     
                    description: [],
                    trigger: [],
                    name: '',
                    actions: [],
                    traits: [],
                    stats: {}
                }

                PhaseSet.push(new FoePhase(_phase, _chapter.Stats, this.Class))
            } else {
                data.phases.forEach(_phase => {
                    PhaseSet.push(new FoePhase(_phase, _chapter.Stats, this.Class))
                })
            }

            this.ChapterSets.push(
                {
                    chapter : _chapter,
                    phases : PhaseSet
                }
            )
        })

    }
}

export {IFoeJob, FoeJob, ChapterSet}

