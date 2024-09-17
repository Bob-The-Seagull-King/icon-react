
import { Requester } from '../Requester'
import { ILimitBreak } from '../../classes/feature/abilities/LimitBreak'
import { LimitBreak } from '../../classes/feature/abilities/LimitBreak'

class LimitBreakFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateLimitBreak(_ability: ILimitBreak, _col : string) {
        const ability = new LimitBreak(_ability, _col)
        return ability;
    }

    static CreateNewLimitBreak(_val : string, _col : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "limitbreaks", id: _val}}) as ILimitBreak
        const addonNew = LimitBreakFactory.CreateLimitBreak(addondata, _col)
        return addonNew;
    }   

    

}

export {LimitBreakFactory}