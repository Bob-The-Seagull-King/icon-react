import { DescriptionFactory } from '../../../utility/functions';

interface IRule {
    title: string,
    description: []
}

class Rule {
    public readonly Description;
    public readonly Title;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAddon format
     */
    public constructor(data: IRule)
    {
        this.Title = data.title;
        this.Description = DescriptionFactory(data.description);
    }
}



export {IRule, Rule}