import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

interface IPower extends IIconpendiumItemData {
    description: [],
    uses: number | string,
    usetype: string,
    restriction: string,
    bondid: string
}

class Power extends IconpendiumItem {
    public readonly Description;
    public readonly Uses;
    public readonly UseType;
    public readonly Restriction;
    public readonly BondID;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPower format
     */
    public constructor(data: IPower)
    {
        super(data)
        this.ItemType = ItemType.Power;
        this.Description = DescriptionFactory(data.description);
        this.Uses = data.uses;
        this.UseType = data.usetype;
        this.Restriction = data.restriction;
        this.BondID = data.bondid;
    }
    
    /**
     * When destroyed, also delete all associated
     * addon objects.
     */
    destructor() {
        let i = 0;
        for (i = 0; i < this.Description.length; i++) {
            delete this.Description[i];
        }
    }

}

export {IPower, Power}

