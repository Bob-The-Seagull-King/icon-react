import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

/**
 * Data structure for the player addon's
 */
interface ITrait extends IIconpendiumItemData {
    description: [] // Descriptive text of the Addon
}

class Trait extends IconpendiumItem {
    public readonly Description;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAddon format
     */
    public constructor(data: ITrait)
    {
        super(data)
        this.Description = DescriptionFactory(data.description);
    }
}

export { ITrait, Trait}

