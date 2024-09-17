import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { CampUpgradeFactory } from '../../../factories/features/CampUpgradeFactory';

interface ICampUpgrade extends IIconpendiumItemData {
    description: [],
    cost: number | true,
    upgradelist: string[]
}

class CampUpgrade extends IconpendiumItem {
    public readonly Description;
    public readonly Cost;
    public readonly UpgradeList

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IAction format
     */
    public constructor(data: ICampUpgrade, cost : number)
    {
        super(data)
        this.ItemType = ItemType.Action;
        this.Description = DescriptionFactory(data.description);
        if (data.cost === true) {
            this.Cost = cost
        } else {
            this.Cost = data.cost
        }

        this.UpgradeList = this.UpgradesFactory(data.upgradelist, cost)
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

export {ICampUpgrade, CampUpgrade}

