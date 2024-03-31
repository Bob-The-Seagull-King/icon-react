import { ViewCollectionsModel } from "./ViewCollectionsModel";
import { IPlayerAbility, PlayerAbility } from "../../../classes/feature/abilities/Ability";
import { AbilityFactory } from "../../../factories/features/AbilityFactory";

class ViewAbilitiesCollection extends ViewCollectionsModel {

    private AbilitiesList: PlayerAbility[] = [];

    constructor(){
        super()
    }

    public RunSearch() {
        super.RunSearch();
        this.PostSearch();
    }

    PostSearch() {
        this.CleanupAbilities;
        let i = 0;
        for (i = 0; i < this.dataresults.length; i++) {
            const abilityNew = AbilityFactory.CreateAbility(this.dataresults[i]);
            this.AbilitiesList.push(abilityNew);
        }
    }

    destructor() {
        this.CleanupAbilities() 
    }

    CleanupAbilities() {
        let i = 0;
        for (i = 0; i < this.AbilitiesList.length; i ++) {
            delete this.AbilitiesList[i]
        }
        this.AbilitiesList = []
    }

    public ReturnAbilities() {
        return this.AbilitiesList;
    }
}

export {ViewAbilitiesCollection}