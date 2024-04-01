import { ViewCollectionsModel } from "./ViewCollectionsModel";
import { IPlayerAbility, PlayerAbility } from "../../../classes/feature/abilities/Ability";
import { AbilityFactory } from "../../../factories/features/AbilityFactory";

class ViewAbilitiesCollection extends ViewCollectionsModel {

    private AbilitiesList: PlayerAbility[] = [];

    /**
     * Empty constructor
     */
    constructor(){
        super()
    }

    /**
     * After the search has been run, create ability objects
     * and assign them to the collection
     */
    public RunSearch() {
        super.RunSearch();
        this.PostSearch();
    }

    /**
     * For each entry in the data results, create an Ability object
     * and add it to the internal list.
     */
    PostSearch() {
        this.CleanupAbilities;
        let i = 0;
        for (i = 0; i < this.dataresults.length; i++) {
            const abilityNew = AbilityFactory.CreateAbility(this.dataresults[i]);
            this.AbilitiesList.push(abilityNew);
        }
    }

    /**
     * When destroyed, delete all ability objects
     */
    destructor() {
        this.CleanupAbilities() 
    }

    /**
     * Delete each ability object stored in the collection
     */
    CleanupAbilities() {
        let i = 0;
        for (i = 0; i < this.AbilitiesList.length; i ++) {
            delete this.AbilitiesList[i]
        }
        this.AbilitiesList = []
    }

    /**
     * Basic get function
     */
    public ReturnAbilities() {
        return this.AbilitiesList;
    }
}

export {ViewAbilitiesCollection}