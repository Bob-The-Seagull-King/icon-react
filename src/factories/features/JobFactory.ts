import { Requester } from '../Requester';
import { IJob, Job } from '../../classes/feature/jobs/Job'

class JobFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateJob(_ability: IJob) {
        const ability = new Job(_ability)
        return ability;
    }  

    static CreateNewJob(_val : string) {
        const jobdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "jobs", id: _val}}) as IJob
        const jobNew = JobFactory.CreateJob(jobdata)
        return jobNew;
    }   


}

export {JobFactory}