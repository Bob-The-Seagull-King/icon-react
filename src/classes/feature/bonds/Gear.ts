import { IIconpendiumItemData, IconpendiumItem } from '../../IconpendiumItem'

interface IGear extends IIconpendiumItemData {
    items: string[]
}

class GearKit extends IconpendiumItem {
    public readonly Items;

    public constructor(_data : IGear) {
        super(_data)
        this.Items = _data.items;
    }
}

export {IGear, GearKit}