import { byPropertiesOf } from "../../../utility/functions";
import { ViewCollectionsModel } from "./ViewCollectionsModel";
import { IPlayerAbility } from "../../feature/abilities/Ability";
import { AbilityFactory } from "../../../factories/features/AbilityFactory";
import { ViewTableItem } from "./ViewTableItem";
import { getColour } from "../../../utility/functions";
import { IPlayerSummon } from "../../feature/summons/Summon";
import { SummonFactory } from "../../../factories/features/SummonFactory";
import { IJob } from "../../feature/jobs/Job";
import { JobFactory } from "../../../factories/features/JobFactory";

export interface CollectionType {
    searchId      : string,
    pageName      : string,
    sort          : string[],
    postSearch: (model : ViewCollectionsModel) => void;
}

export interface CollectionDataTable {[moveid: Lowercase<string>]: CollectionType}

export const CollectionDataDex : CollectionDataTable = {
    abilities: {
        searchId: 'abilities', 
        pageName: 'Abilities',
        sort: ["chapter", "source", "class_id", "job_id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IPlayerAbility>(['class_id', 'job_id', 'name', 'source', 'id']))
            for (i = 0; i < model.dataresults.length; i++) {
                const abilityNew = AbilityFactory.CreateAbility(model.dataresults[i]);
                const ItemNew = new ViewTableItem(abilityNew, getColour(abilityNew.Class));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    summons: {
        searchId: 'summons', 
        pageName: 'Summons',
        sort: ["source", "name", "id", "colour"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IPlayerSummon>(["source", "name", "id", "colour"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = SummonFactory.CreateSummon(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour(summonNew.Colour));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    jobs: {
        searchId: 'jobs', 
        pageName: 'Jobs',
        sort: ["source", "class_id", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IJob>(["source", "class_id", "name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = JobFactory.CreateJob(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour(summonNew.Class));
                model.itemcollection.push(ItemNew);
            }
        }
    }
}