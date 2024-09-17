import { IIconpendiumItemData, IconpendiumItem } from '../../IconpendiumItem';
import { DescriptionFactory } from '../../../utility/functions';
import { IRule, Rule } from './Rule';
import { RuleFactory } from '../../../factories/features/RuleFactory';

interface IRuleset extends IIconpendiumItemData {
    description: [],
    rules: IRule[]
}

class Ruleset extends IconpendiumItem {
    public readonly Description;
    public readonly Rules;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAddon format
     */
    public constructor(data: IRuleset)
    {
        super(data)

        this.Rules = this.rulesFactory(data.rules)
        this.Description = DescriptionFactory(data.description);
    }

    private rulesFactory(data : IRule[]) {
        const array : Rule[] = []

        data.forEach(item => {
            const NewRule = RuleFactory.CreateRule(item)
            array.push(NewRule);
        })

        return array;
    }
}



export {IRuleset, Ruleset}