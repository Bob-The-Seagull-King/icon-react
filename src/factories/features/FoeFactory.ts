import { Requester } from '../Requester';
import { IJob, Job } from '../../classes/feature/jobs/Job'
import { IFoeClass } from '../../classes/feature/foes/FoeClass';
import { FoeClass } from '../../classes/feature/foes/FoeClass';
import { IFoeFaction } from '../../classes/feature/foes/FoeFaction';
import { FoeFaction } from '../../classes/feature/foes/FoeFaction';
import { IFoeFactionClass, FoeFactionClass } from '../../classes/feature/foes/FoeFactionClass';
import { IFoeJob, FoeJob } from '../../classes/feature/foes/FoeJob';

class FoeFactory {


    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */

    static CreateFoeClass(_ability: IFoeClass) {
        const ability = new FoeClass(_ability)
        return ability;
    }  

    static CreateFoeFaction(_ability: IFoeFaction) {
        const ability = new FoeFaction(_ability)
        return ability;
    }  

    static CreateFoeFactionClass(_ability: IFoeFactionClass) {
        const ability = new FoeFactionClass(_ability)
        return ability;
    }  

    static CreateFoeJob(_ability: IFoeJob) {
        const ability = new FoeJob(_ability)
        return ability;
    }  

    static CreateNewFoeClass(_val : string) {
        const jobdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foeclass", id: _val}}) as IFoeClass
        const jobNew = FoeFactory.CreateFoeClass(jobdata)
        return jobNew;
    }  

    static CreateNewFoeFaction(_val : string) {
        const jobdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foefaction", id: _val}}) as IFoeFaction
        const jobNew = FoeFactory.CreateFoeFaction(jobdata)
        return jobNew;
    }   

    static CreateNewFoeFactionClass(_val : string) {
        const jobdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foefactionclass", id: _val}}) as IFoeFactionClass
        const jobNew = FoeFactory.CreateFoeFactionClass(jobdata)
        return jobNew;
    }   

    static CreateNewFoeJob(_val : string) {
        const jobdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "foejobs", id: _val}}) as IFoeJob
        const jobNew = FoeFactory.CreateFoeJob(jobdata)
        return jobNew;
    }   


}

export {FoeFactory}