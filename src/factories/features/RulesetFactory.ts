import { Requester } from '../Requester';
import { IRuleset, Ruleset } from '../../classes/feature/rule/Ruleset';

class RulesetFactory {

    /**
     * Creates a PlayerAddon object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The addon that was created
     */
    static CreateRuleset(_rule: IRuleset) {
        const rule = new Ruleset(_rule)
        return rule;
    }

    static CreateNewRuleset(_val : string) {
        const addondata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "rules", id: _val}}) as IRuleset
        const addonNew = RulesetFactory.CreateRuleset(addondata)
        return addonNew;
    } 

}

export {RulesetFactory}