import { Requester } from '../Requester';
import { ICampItem, CampItem } from '../../classes/feature/camp/CampItem'

class CampItemFactory {

    /**
     * Creates a Trophy object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The trophy that was created
     */
    static CreateCampItem(_addon: ICampItem) {
        const addon = new CampItem(_addon)
        return addon;
    }

    static CreateNewCampItem(_val : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "campitems", id: _val}}) as ICampItem
        const addonNew = CampItemFactory.CreateCampItem(addondata)
        return addonNew;
    }

}

export {CampItemFactory}