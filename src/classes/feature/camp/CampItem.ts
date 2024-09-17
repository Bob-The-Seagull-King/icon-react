import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { CampUpgradeFactory } from '../../../factories/features/CampUpgradeFactory';
import { CampUpgrade } from './CampUpgrade';

interface ICampItem extends IIconpendiumItemData {
    description: [],
    purchase: number,
    upgrade: number,
    upgradelist: string[]
}

class CampItem extends IconpendiumItem {
    public readonly Description;
    public readonly Purchase;
    public readonly Upgrade;
    public readonly UpgradeList;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IAction format
     */
    public constructor(data: ICampItem)
    {
        super(data)
        this.ItemType = ItemType.Action;
        this.Description = DescriptionFactory(data.description);
        this.Purchase = data.purchase;
        this.Upgrade = data.upgrade;
        this.UpgradeList = this.UpgradesFactory(data.upgradelist, data.upgrade)
    }
    
    private UpgradesFactory(_data : string[], cost : number) {
        const array : CampUpgrade[] = []
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(CampUpgradeFactory.CreateNewCampUpgrade(_data[i], cost))
        }
        return array;
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

export {ICampItem, CampItem}

