import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

interface IKin extends IIconpendiumItemData {
    description: [],
    image: string
}

class Kin extends IconpendiumItem {
    public readonly Description;
    public readonly Image;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IAction format
     */
    public constructor(data: IKin)
    {
        super(data)
        this.ItemType = ItemType.Action;
        this.Description = DescriptionFactory(data.description);
        this.Image = data.image
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

export {IKin, Kin}

