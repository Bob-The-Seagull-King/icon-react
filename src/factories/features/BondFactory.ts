import { Requester } from '../Requester';
import { IBond, Bond } from '../../classes/feature/bonds/Bond'

class BondFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateBond(_ability: IBond) {
        const ability = new Bond(_ability)
        return ability;
    }  

    static CreateNewBond(_val : string) {
        const jobdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "bonds", id: _val}}) as IBond
        const jobNew = BondFactory.CreateBond(jobdata)
        return jobNew;
    }   


}

export {BondFactory}