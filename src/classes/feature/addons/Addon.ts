import {IIconpendiumItemData, IconpendiumItem} from '../../IconpendiumItem'
import {ItemType} from '../../Enum'
import {IAbilityDescription, AbilityDescription} from '../abilities/AbilityDescription'

interface IAddonParent {
    type: string,
    id: string
}

interface IPlayerAddon extends IIconpendiumItemData {
    class_id: string,
    job_id: string,
    parent: IAddonParent,
    description: []
}

class PlayerAddon extends IconpendiumItem {
    public readonly Class;
    public readonly Job;
    public readonly Parent;
    public readonly Description;

    public constructor(data: IPlayerAddon)
    {
        super(data)
        this.ItemType = ItemType.Addon;
        this.Class = data.class_id;
        this.Job = data.job_id;
        this.Parent = data.parent;
        this.Description = this.DescriptionFactory(data.description);
    }

    private DescriptionFactory(data: []) {
        let i = 0;
        const array: AbilityDescription[] = []
        for (i = 0; i < data.length; i++) {
            let tempAD = new AbilityDescription(data[i])
            array.push(tempAD)
        }
        return array;
    }

}

export {IAddonParent, IPlayerAddon, PlayerAddon}

