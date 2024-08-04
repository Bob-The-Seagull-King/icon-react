import { IDescriptionItemData, DescriptionItem } from './DescriptionItem'

/**
 * Interface for an ability description item
 */
interface IAdvancedDescription extends IDescriptionItemData {
    glossary?: [] // The glossary of a given description item
}

class AdvancedDescription extends DescriptionItem {
    public readonly Glossary;
    public SubContent;

    /**
     * Assign parameter values
     * @param data The data in IAbilityDescription format
     */
    public constructor(data: IAdvancedDescription)
    {
        super (data)
        this.Glossary = data.glossary;
        this.SubContent = this.AdvancedSubConstructor(data.subcontent)
    }
    

    /**
     * Deconstructs the description JSON object into an
     * array of AbilityDescription objects.
     * @param data The description array
     * @returns Array of DescriptionItems
     */
    AdvancedSubConstructor(data?: []) {
        const sublist: AdvancedDescription[] = []
        if (data) {
            let i = 0;
            for (i = 0; i < data.length; i++) {
                const tempDI = new AdvancedDescription(data[i])
                sublist.push(tempDI);
            }
            return sublist;
        } else {
            return sublist;
        }
    }
}

export {IAdvancedDescription, AdvancedDescription}