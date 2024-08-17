import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { PlayerAddon } from '../addons/Addon'

interface IJob extends IIconpendiumItemData {
    class_id: string, // Class of the ability (determined by job)
    subtitle: string,
    blurb: [], // Flavour text
    playstyle: [], // Mechanical description of the item
    traits: [],
    abilities: [],
    limitbreak: string,
    upgrade_trait: string
}

class Job extends IconpendiumItem {
    public readonly Class;
    public readonly Subtitle;
    public readonly Blurb;
    public readonly Playstyle

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IJob)
    {
        super(data)
        this.Class = data.class_id;
        this.Subtitle = data.subtitle;
        this.Blurb = DescriptionFactory(data.blurb);
        this.Playstyle = DescriptionFactory(data.playstyle);
    }

}

export {IJob, Job}

