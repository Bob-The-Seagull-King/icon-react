import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../IconpendiumItem'
import { DescriptionFactory } from '../../utility/functions';
import { IFightMember, FightMember } from './FightMember';
import { INote } from '../Note';

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

        for (let i = 0; i < data.members.length; i++) {
            this.Members.push(new FightMember(data.members[i], this.Chapter))
        }
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

