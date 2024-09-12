import { IIconpendiumItemData, IconpendiumItem } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

interface IRelic extends IIconpendiumItemData {
    colour: string,
    blurb: [], // Flavour text
    tier_i: IRelicAction, // Mechanical description of the item
    tier_ii: IRelicAction, // Mechanical description of the item
    tier_iii: IRelicAction, // Mechanical description of the item
    aspected: IRelicAction, // Mechanical description of the item
    quest: [], // Mechanical description of the item
}

interface IRelicAction {
    invoke: boolean,
    invoke_type?: string,
    invoke_val?: string | number,
    description: []
}

class Relic extends IconpendiumItem {
    public readonly Colour;
    public readonly Blurb;
    public readonly TierI;
    public readonly TierII;
    public readonly TierIII;
    public readonly Aspected;
    public readonly Quest;
    public readonly Data;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IRelic)
    {
        super(data)
        this.Colour = data.colour;
        this.Blurb = DescriptionFactory(data.blurb);
        this.TierI = new RelicAction(data.tier_i);
        this.TierII = new RelicAction(data.tier_ii);
        this.TierIII = new RelicAction(data.tier_iii);
        this.Aspected = new RelicAction(data.aspected);
        this.Quest = DescriptionFactory(data.quest);
        this.Data = data;
    }
    
    /**
     * When destroyed, also delete all associated
     * addon objects.
     */
    destructor() {
        let i = 0;
        for (i = 0; i < this.Blurb.length; i++) {
            delete this.Blurb[i];
        }
    }

}

class RelicAction {

    public readonly Invoke;
    public readonly InvokeType;
    public readonly InvokeVal;
    public readonly Description;

    public constructor(data: IRelicAction)
    {
        this.Invoke = data.invoke
        if (data.invoke_type) {
            this.InvokeType = data.invoke_type;
        } else {
            this.InvokeType = null;
        }
        if (data.invoke_val) {
            this.InvokeVal = data.invoke_val
        } else {
            this.InvokeVal = null;
        }
        this.Description = DescriptionFactory(data.description)
    }

}

export {IRelic, Relic, RelicAction}

