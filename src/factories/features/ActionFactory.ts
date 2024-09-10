import { IAction, Action } from '../../classes/feature/actions/Action'
import { Requester } from '../Requester'

class ActionFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateAction(_ability: IAction) {
        const relic = new Action(_ability)
        return relic;
    }

    static CreateNewAction(_val : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "actions", id: _val}}) as IAction
        const addonNew = ActionFactory.CreateAction(addondata)
        return addonNew;
    }   

}

export {ActionFactory}