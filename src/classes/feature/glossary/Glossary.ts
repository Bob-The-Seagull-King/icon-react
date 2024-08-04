import { IIconpendiumItemData, IconpendiumItem } from '../../IconpendiumItem'
import { ItemType } from '../../Enum'
import { DescriptionFactory } from '../../../utility/functions';

interface IGlossaryRule extends IIconpendiumItemData {
    description: [] // Additional description field for display
}

class GlossaryRule extends IconpendiumItem {
    public readonly Description;
    
    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IGlossaryRule)
    {
        super(data)
        this.ItemType = ItemType.GlossaryRule;
        this.Description = DescriptionFactory(data.description);
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

export {IGlossaryRule, GlossaryRule}

