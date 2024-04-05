import { IPlayerAbility, PlayerAbility } from "../../../classes/feature/abilities/Ability";
import { AbilityFactory } from "../../../factories/features/AbilityFactory";
import { getColour } from "../../../utility/functions";
import { ViewAbilitiesCollection } from "../collections/ViewAbilitiesCollections";
import { AbilitiesFilterManager } from "../collections/filters/AbilitiesFilterManager";
import { ConvertFiltersToRequest } from "../collections/filters/FilterConvert";

class AllAbilitiesListPage {

    Collection: ViewAbilitiesCollection;
    FilterManager: AbilitiesFilterManager;

    constructor() {
        this.Collection = new ViewAbilitiesCollection();
        this.FilterManager = new AbilitiesFilterManager();

        this.initCollection();
    }

    initCollection() {
        this.Collection.UpdateSearchParams({searchtype: "file", searchparam: {type: "abilities"}});
        this.Collection.RunSearch();
    }

    updateSearch() {
        const newfilter = ConvertFiltersToRequest(this.FilterManager, "abilities")
        this.Collection.UpdateSearchParams(newfilter);
        this.Collection.RunSearch();
    }
    
}

export {AllAbilitiesListPage}