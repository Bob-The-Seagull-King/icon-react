import { Requester } from '../Requester';
import { IPower, Power } from '../../classes/feature/powers/Power'

class PowerFactory {

    /**
     * Creates a Trophy object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The trophy that was created
     */
    static CreatePower(_addon: IPower) {
        const addon = new Power(_addon)
        return addon;
    }

    static CreateNewPower(_val : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "powers", id: _val}}) as IPower
        const addonNew = PowerFactory.CreatePower(addondata)
        return addonNew;
    }

}

export {PowerFactory}