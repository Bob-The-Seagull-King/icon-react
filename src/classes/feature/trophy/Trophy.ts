import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

/**
 * Data structure for the player addon's
 */
interface ITrophy extends IIconpendiumItemData {
    category    : string,
    uses        : number,
    usetype     : string
    description : []
}

class Trophy extends IconpendiumItem {
    public readonly Description;
    public readonly Category;
    public readonly Uses;
    public readonly UseType;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAddon format
     */
    public constructor(data: ITrophy)
    {
        super(data)
        this.ItemType = ItemType.Addon;
        this.Category = data.category;
        this.Uses = data.uses;
        this.UseType = data.usetype;
        this.Description = DescriptionFactory(data.description);
    }
}

export { ITrophy, Trophy}

