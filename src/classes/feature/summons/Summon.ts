import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { PlayerAddon } from '../addons/Addon'

interface IPlayerSummon extends IIconpendiumItemData {
    colour: string, // Colour of the summon (reflective of class)
    blurb: [], // Flavour text
    description: [], // Mechanical description of the item
    limit: number // The maximum number of that summon a player can have at a time (0 === no limit)
}

class PlayerSummon extends IconpendiumItem {
    public readonly Colour;
    public readonly Blurb;
    public readonly Description;
    public readonly Limit;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IPlayerSummon)
    {
        super(data)
        this.Colour = data.colour;
        this.Limit = data.limit;
        this.Blurb = DescriptionFactory(data.blurb);
        this.Description = DescriptionFactory(data.description);
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

export {PlayerSummon, IPlayerSummon}

