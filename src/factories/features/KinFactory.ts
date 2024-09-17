import { Requester } from '../Requester';
import { IKin, Kin } from '../../classes/feature/character/Kin'

class KinFactory {

    /**
     * Creates a Trophy object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The trophy that was created
     */
    static CreateKin(_addon: IKin) {
        const addon = new Kin(_addon)
        return addon;
    }

    static CreateNewKin(_val : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "kins", id: _val}}) as IKin
        const addonNew = KinFactory.CreateKin(addondata)
        return addonNew;
    }

}

export {KinFactory}