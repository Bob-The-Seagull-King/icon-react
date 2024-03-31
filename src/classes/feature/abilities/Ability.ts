import {IIconpendiumItemData, IconpendiumItem} from '../../IconpendiumItem'
import {ItemType} from '../../Enum'

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
        this.Description = data.description;
    }

    public Deserialize() {
        return  {
                    id: this.ID,
                    type: this.ItemType,
                    source: this.Source,
                    tags: this.Tags,
                    chapter: this.Chapter,
                    class_id: this.Class,
                    job_id: this.Job,
                    blurb: this.Blurb,
                    description: this.Description
                }
    }
}

export {IPlayerAbility, PlayerAbility}

