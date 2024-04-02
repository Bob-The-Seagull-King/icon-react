import { ViewCollectionsModel } from "./ViewCollectionsModel";
import { IconpendiumItem } from "../../../classes/IconpendiumItem";
import { AbilityFactory } from "../../../factories/features/AbilityFactory";

class ViewTableItem {

    readonly HeldItem: IconpendiumItem;
    readonly Colour: string;
    IsActive = false;

    /**
     * Empty constructor
     */
    constructor(item: IconpendiumItem, colourName: string){
        this.HeldItem = item;
        this.Colour = colourName;
    }

    SwitchStates() {
        if (this.IsActive) {
            this.IsActive = false;
        } else {
            this.IsActive = true;
        }
    }
}

export {ViewTableItem}