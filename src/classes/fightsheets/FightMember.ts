import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../IconpendiumItem'
import { DescriptionFactory } from '../../utility/functions';
import { IFoeJob } from '../feature/foes/FoeJob';
import { Requester } from '../../factories/Requester';
import { FoeFactory } from '../../factories/features/FoeFactory';

interface IFightMember {
    base_id : string
    faction_id : string
    elite : boolean
}

class FightMember {
    public Base;
    public Faction;
    public Job;
    public Elite;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IAction format
     */
    public constructor(data: IFightMember, chapter : number)
    {
        this.Base = data.base_id;
        this.Faction = data.faction_id;
        this.Elite = data.elite;
        
        const jobdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foejobs", id: data.base_id}}) as IFoeJob

        this.Job = FoeFactory.CreateFoeJob(jobdata, chapter, this.Faction, this.Elite)
    }

    public ConvertToInterface() {
        const obj_int : IFightMember = {                    
            base_id : this.Base,
            faction_id : this.Faction,
            elite : this.Elite
        }
        return obj_int;
    }

}

export {IFightMember, FightMember}

