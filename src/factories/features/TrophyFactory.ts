import { Requester } from '../Requester';
import { ITrophy, Trophy } from '../../classes/feature/trophy/Trophy'

class TrophyFactory {

    /**
     * Creates a Trophy object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The trophy that was created
     */
    static CreateTrophy(_addon: ITrophy) {
        const addon = new Trophy(_addon)
        return addon;
    }

    static CreateNewTrophy(_val : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "trophies", id: _val}}) as ITrophy
        const addonNew = TrophyFactory.CreateTrophy(addondata)
        return addonNew;
    }

}

export {TrophyFactory}