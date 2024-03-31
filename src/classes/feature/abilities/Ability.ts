import {IIconpendiumItemData, IconpendiumItem} from '../../IconpendiumItem'
import {ItemType} from '../../Enum'
import {IAbilityDescription, AbilityDescription} from './AbilityDescription'
import { PlayerAddon } from '../addons/Addon'

interface IPlayerAbility extends IIconpendiumItemData {
    chapter: number,
    class_id: string,
    job_id: string,
    attachments: [],
    blurb: string,
    description: []
}

class PlayerAbility extends IconpendiumItem {
    public readonly Chapter;
    public readonly Class;
    public readonly Job;
    public readonly Attachments;
    public readonly Blurb;
    public readonly Description;
    public Addons: PlayerAddon[] = [];

    public constructor(data: IPlayerAbility)
    {
        super(data)
        this.ItemType = ItemType.Ability;
        this.Chapter = data.chapter;
        this.Class = data.class_id;
        this.Job = data.job_id;
        this.Attachments = data.attachments;
        this.Blurb = data.blurb;
        this.Description = this.DescriptionFactory(data.description);
    }

    private DescriptionFactory(data: []) {
        let i = 0;
        const array: AbilityDescription[] = []
        for (i = 0; i < data.length; i++) {
            const tempAD = new AbilityDescription(data[i])
            array.push(tempAD)
        }
        return array;
    }
    
    public AddAddons(list: PlayerAddon) {
        this.Addons.push(list);
    }
    
    destructor() {
        let i = 0;
        for (i = 0; i < this.Addons.length; i++) {
            delete this.Addons[i];
        }
    }

}

export {IPlayerAbility, PlayerAbility}

