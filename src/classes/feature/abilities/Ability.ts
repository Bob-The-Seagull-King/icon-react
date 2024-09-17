import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { PlayerAddon } from '../addons/Addon'

interface IPlayerAbility extends IIconpendiumItemData {
    chapter: number, // Chapter of the ability
    class_id: string, // Class of the ability (determined by job)
    job_id: string, // Job of the ability
    blurb: [], // Flavour text
    description: [], // Mechanical description of the item
    talent: [], // Talents an ability has
    mastery: [] // The ability's mastery
}

class PlayerAbility extends IconpendiumItem {
    public readonly Chapter;
    public readonly Class;
    public readonly Job;
    public readonly Blurb;
    public readonly Description;
    public readonly Talents;
    public readonly Mastery;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IPlayerAbility)
    {
        super(data)
        this.ItemType = ItemType.Ability;
        this.Chapter = data.chapter;
        this.Class = data.class_id;
        this.Job = data.job_id;
        this.Blurb = DescriptionFactory(data.blurb);
        this.Description = DescriptionFactory(data.description);
        this.Talents = data.talent;
        this.Mastery = data.mastery;
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

export {IPlayerAbility, PlayerAbility}

