import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../IconpendiumItem'
import { DescriptionFactory } from '../../utility/functions';
import { IFoeJob } from '../feature/foes/FoeJob';
import { Requester } from '../../factories/Requester';
import { FoeFactory } from '../../factories/features/FoeFactory';

interface IFightMember {
    base_id : string
    faction_id : string
}

class FightMember {
    public Base;
    public Faction;
    public Job;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IAction format
     */
    public constructor(data: IFightMember, chapter : number)
    {
        this.Base = data.base_id;
        this.Faction = data.faction_id;
        
        const jobdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foejobs", id: data.base_id}}) as IFoeJob

        this.Job = FoeFactory.CreateFoeJob(jobdata, chapter, this.Faction)
    }

    public ConvertToInterface() {
        const obj_int : IFightMember = {                    
            base_id : this.Base,
            faction_id : this.Faction
        }
        return obj_int;
    }

}

export {IFightMember, FightMember}

