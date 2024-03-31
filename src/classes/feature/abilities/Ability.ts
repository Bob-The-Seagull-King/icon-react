import {IIconpendiumItemData, IconpendiumItem} from '../../IconpendiumItem'
import {ItemType} from '../../Enum'
import {IAbilityDescription, AbilityDescription} from './AbilityDescription'

interface IPlayerAbility extends IIconpendiumItemData {
    chapter: Number,
    class_id: string,
    job_id: string,
    blurb: string,
    description: []
}

class PlayerAbility extends IconpendiumItem {
    public readonly Chapter;
    public readonly Class;
    public readonly Job;
    public readonly Blurb;
    public readonly Description;

    public constructor(data: IPlayerAbility)
    {
        super(data)
        this.Chapter = data.chapter;
        this.Class = data.class_id;
        this.Job = data.job_id;
        this.Blurb = data.blurb;
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

export {IPlayerAbility, PlayerAbility}

