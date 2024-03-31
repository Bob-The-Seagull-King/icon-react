import {ItemType} from './Enum'

interface IIconpendiumItemData {
    id: string,
    type: string,
    name: string,
    source: string,
    tags: []
}

abstract class IconpendiumItem {
    public readonly ItemType;
    public readonly Source;
    public readonly ID;
    public readonly Tags;

    public constructor(data?: IIconpendiumItemData)
    {
        this.ItemType = ItemType.None
        if (data) {
            this.ID = data.id;
            this.Source = data.source;
            this.Tags = data.tags;
            this.ItemType = data.type;
        }

    }
}

export {IIconpendiumItemData, IconpendiumItem}