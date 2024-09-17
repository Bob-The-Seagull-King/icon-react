import { IRule } from '../../classes/feature/rule/Rule';
import { Rule } from '../../classes/feature/rule/Rule';

class RuleFactory {

    /**
     * Creates a PlayerAddon object
     * @param _addon Data on the addon to be sent to the constructor
     * @returns The addon that was created
     */
    static CreateRule(_rule: IRule) {
        const rule = new Rule(_rule)
        return rule;
    }

}

export {RuleFactory}