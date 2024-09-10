import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

interface ICulture extends IIconpendiumItemData {
    description: [],
    values: []
}

class Culture extends IconpendiumItem {
    public readonly Description;
    public readonly Values;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in ICulture format
     */
    public constructor(data: ICulture)
    {
        super(data)
        this.ItemType = ItemType.Action;
        this.Description = DescriptionFactory(data.description);
        this.Values = DescriptionFactory(data.values);
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

export {ICulture, Culture}

