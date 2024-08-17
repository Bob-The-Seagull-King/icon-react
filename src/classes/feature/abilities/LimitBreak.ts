import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { PlayerAddon } from '../addons/Addon'

interface ILimitBreak extends IIconpendiumItemData {
    blurb: [], // Flavour text
    description: [], // Mechanical description of the item
    ultimate: [] // The ability's mastery
}

class LimitBreak extends IconpendiumItem {
    public readonly Blurb;
    public readonly Description;
    public readonly Ultimate;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: ILimitBreak)
    {
        super(data)
        this.ItemType = ItemType.Ability;
        this.Blurb = DescriptionFactory(data.blurb);
        this.Description = DescriptionFactory(data.description);
        this.Ultimate = data.ultimate;
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

export {ILimitBreak, LimitBreak}

