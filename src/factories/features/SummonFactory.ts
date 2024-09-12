import { Requester } from '../Requester';
import { IPlayerAddon, PlayerAddon } from '../../classes/feature/addons/Addon'
import { IPlayerSummon } from '../../classes/feature/summons/Summon';
import { PlayerSummon } from '../../classes/feature/summons/Summon';

class SummonFactory {

    /**
     * Creates a PlayerAddon object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The addon that was created
     */
    static CreateSummon(_addon: IPlayerSummon) {
        const summon = new PlayerSummon(_addon)
        return summon;
    }

    static CreateNewSummon(_val : string, _type : string) {
        const summondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: _type, id: _val}}) as IPlayerSummon
        const summonNew = SummonFactory.CreateSummon(summondata)
        return summonNew;
    }

}

export {SummonFactory}