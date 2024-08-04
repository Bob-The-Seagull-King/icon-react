import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

/**
 * Data structure for the player addon's
 */
interface IPlayerAddon extends IIconpendiumItemData {
    class_id: string, // The class this Addon is a part of
    job_id: string, // The job this Addon is a part of
    description: [] // Descriptive text of the Addon
}

class PlayerAddon extends IconpendiumItem {
    public readonly Description;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAddon format
     */
    public constructor(data: IPlayerAddon)
    {
        super(data)
        this.ItemType = ItemType.Addon;
        this.Description = DescriptionFactory(data.description);
    }
}

export { IPlayerAddon, PlayerAddon}

