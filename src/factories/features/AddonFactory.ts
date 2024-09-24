import { Requester } from '../Requester';
import { IPlayerAddon, PlayerAddon } from '../../classes/feature/addons/Addon'

class AddonFactory {

    /**
     * Creates a PlayerAddon object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The addon that was created
     */
    static CreateAddon(_addon: IPlayerAddon, colour? : string) {
        const addon = new PlayerAddon(_addon, colour)
        return addon;
    }

    static CreateNewAddon(_val : string, _type : string, colour? : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: _type, id: _val}}) as IPlayerAddon
        const addonNew = AddonFactory.CreateAddon(addondata, colour)
        return addonNew;
    }

}

export {AddonFactory}