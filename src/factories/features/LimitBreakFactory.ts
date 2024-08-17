
import { Requester } from '../Requester'
import { ILimitBreak } from '../../classes/feature/abilities/LimitBreak'
import { LimitBreak } from '../../classes/feature/abilities/LimitBreak'

class LimitBreakFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateLimitBreak(_ability: ILimitBreak) {
        const ability = new LimitBreak(_ability)
        return ability;
    }

    static CreateNewLimitBreak(_val : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "limitbreaks", id: _val}}) as ILimitBreak
        const addonNew = LimitBreakFactory.CreateLimitBreak(addondata)
        return addonNew;
    }   

    

}

export {LimitBreakFactory}