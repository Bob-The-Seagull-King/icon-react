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

}

export {JobFactory}