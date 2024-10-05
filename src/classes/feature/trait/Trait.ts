import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

/**
 * Data structure for the player addon's
 */
interface ITrait extends IIconpendiumItemData {
    description: [] // Descriptive text of the Addon
    class? : string
}

class Trait extends IconpendiumItem {
    public readonly Description;
    public readonly Class;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAddon format
     */
    public constructor(data: ITrait, _col : string)
    {
        super(data)
        this.Class = _col;
        this.Description = DescriptionFactory(data.description);
    }
}

export { ITrait, Trait}

