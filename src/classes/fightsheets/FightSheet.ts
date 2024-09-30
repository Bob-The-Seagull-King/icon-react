import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../IconpendiumItem'
import { DescriptionFactory } from '../../utility/functions';
import { IFightMember, FightMember } from './FightMember';
import { INote } from '../Note';
import { MergeLists } from '../../classes/feature/foes/FoeStats';
import { PlayerAddon } from '../../classes/feature/addons/Addon';
import { Trait } from '../../classes/feature/trait/Trait';
import { AddonFactory } from '../../factories/features/AddonFactory';
import { TraitFactory } from '../../factories/features/TraitFactory';

interface IFightSheet {
    id : string,
    title : string,
    notes : INote[],
    members : IFightMember[],
    chapter : number
}

class FightSheet {
    public Title;
    public Notes;
    public Members : FightMember[] = [];
    public Chapter;
    public ID;
    public Abilities;
    public Traits;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IAction format
     */
    public constructor(data: IFightSheet)
    {
        this.ID = data.id;
        this.Title = data.title;
        this.Notes = data.notes;
        this.Chapter = data.chapter;

        let FactionTraitList : string[] = []
        let FactionTraitRemovedList : string[] = []
        let FactionActionList : string[] = []
        let FactionActionRemovedList : string[] = []

        for (let i = 0; i < data.members.length; i++) {
            const NewMember : FightMember = new FightMember(data.members[i], this.Chapter)
            this.Members.push(NewMember)
            
            if (NewMember.Job.FactionData) {
                FactionTraitList = FactionTraitList.concat(NewMember.Job.FactionData.traits)
                FactionTraitRemovedList = FactionTraitList.concat(NewMember.Job.FactionData.traits_added)
                FactionActionList = FactionTraitList.concat(NewMember.Job.FactionData.actions)
                FactionActionRemovedList = FactionTraitList.concat(NewMember.Job.FactionData.actions_added)
            }
        }

        const actionlist : string[] = MergeLists([FactionTraitList], [FactionTraitRemovedList])
        const traitlist : string[] = MergeLists([FactionActionList], [FactionActionRemovedList])
        
        this.Traits = this.TraitsFactory(traitlist);
        this.Abilities = this.AbilitiesFactory(actionlist)
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

    public ConvertToInterface() {
        const FightMembers : IFightMember[] = []
        for (let i = 0; i < this.Members.length; i++) {
            FightMembers.push(this.Members[i].ConvertToInterface())
        }

        const _objint : IFightSheet = {
            id : this.ID,
            title : this.Title,
            notes : this.Notes,
            members : FightMembers,
            chapter : this.Chapter
        }
        
        return _objint;
    }

}

export {IFightSheet, FightSheet}

