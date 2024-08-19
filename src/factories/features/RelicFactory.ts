import { IRelic, Relic } from '../../classes/feature/relics/Relic'
import { Requester } from '../Requester'

class RelicFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateRelic(_ability: IRelic) {
        const relic = new Relic(_ability)
        return relic;
    }

    static CreateNewRelic(_val : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "relics", id: _val}}) as IRelic
        const addonNew = RelicFactory.CreateRelic(addondata)
        return addonNew;
    }   

}

export {RelicFactory}