import { Requester } from '../Requester';
import { ICulture, Culture } from '../../classes/feature/character/Culture'

class CultureFactory {

    /**
     * Creates a Trophy object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The trophy that was created
     */
    static CreateCulture(_addon: ICulture) {
        const addon = new Culture(_addon)
        return addon;
    }

    static CreateNewCulture(_val : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "cultures", id: _val}}) as ICulture
        const addonNew = CultureFactory.CreateCulture(addondata)
        return addonNew;
    }

}

export {CultureFactory}