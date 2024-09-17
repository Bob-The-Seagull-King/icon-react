import { Requester } from '../Requester';
import { ICampUpgrade, CampUpgrade } from '../../classes/feature/camp/CampUpgrade'

class CampUpgradeFactory {

    /**
     * Creates a Trophy object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The trophy that was created
     */
    static CreateCampUpgrade(_addon: ICampUpgrade, cost : number) {
        const addon = new CampUpgrade(_addon, cost)
        return addon;
    }

    static CreateNewCampUpgrade(_val : string, cost : number) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "campupgrades", id: _val}}) as ICampUpgrade
        const addonNew = CampUpgradeFactory.CreateCampUpgrade(addondata, cost)
        return addonNew;
    }

}

export {CampUpgradeFactory}