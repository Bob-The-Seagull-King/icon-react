import { Requester } from '../Requester';
import { ITrait, Trait } from '../../classes/feature/trait/Trait'

class TraitFactory {

    /**
     * Creates a PlayerAddon object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The addon that was created
     */
    static CreateTrait(_addon: ITrait, _col : string) {
        const addon = new Trait(_addon, _col)
        return addon;
    }

    static CreateNewTrait(_val : string, _type : string, _col : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: _type, id: _val}}) as ITrait
        const addonNew = TraitFactory.CreateTrait(addondata, _col)
        return addonNew;
    }

}

export {TraitFactory}