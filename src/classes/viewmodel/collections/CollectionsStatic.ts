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
import { IClass } from "../../feature/class/Class";
import { ClassFactory } from "../../../factories/features/ClassFactory";
import { IRelic } from "../../feature/relics/Relic";
import { RelicFactory } from "../../../factories/features/RelicFactory";
import { GlossaryRule, IGlossaryRule } from "../../feature/glossary/Glossary";
import { ITrophy } from "../../feature/trophy/Trophy";
import { TrophyFactory } from "../../../factories/features/TrophyFactory";
import { IPower } from "../../feature/powers/Power";
import { PowerFactory } from "../../../factories/features/PowerFactory";
import { IAction } from "../../feature/actions/Action";
import { ActionFactory } from "../../../factories/features/ActionFactory";
import { BondFactory } from "../../../factories/features/BondFactory";
import { IBond } from "../../feature/bonds/Bond";
import { IKin } from "../../feature/character/Kin";
import { Kin } from "../../feature/character/Kin";
import { KinFactory } from "../../../factories/features/KinFactory";
import { CultureFactory } from "../../../factories/features/CultureFactory";
import { ICulture } from "../../feature/character/Culture";
import { ICampItem } from "../../feature/camp/CampItem";
import { CampItemFactory } from "../../../factories/features/CampItemFactory";

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
    },
    classes: {
        searchId: 'classes', 
        pageName: 'Classes',
        sort: ["source", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IClass>(["source", "name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = ClassFactory.CreateClass(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour(summonNew.ID));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    relics: {
        searchId: 'relics', 
        pageName: 'Relics',
        sort: ["source", "colour", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IRelic>(["source", "colour", "name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = RelicFactory.CreateRelic(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour(summonNew.Colour));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    glossary: {
        searchId: 'glossary', 
        pageName: 'Glossary',
        sort: ["source", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IGlossaryRule>(["source", "name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = new GlossaryRule(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('icon'));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    trophies: {
        searchId: 'trophies', 
        pageName: 'trophies',
        sort: ["source", "category", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<ITrophy>(["source", "category", "name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = TrophyFactory.CreateTrophy(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('icon'));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    powers: {
        searchId: 'powers', 
        pageName: 'Powers',
        sort: ["source", "category", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IPower>(["source", "name", "id",]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = PowerFactory.CreatePower(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('icon'));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    actions: {
        searchId: 'actions', 
        pageName: 'Actions',
        sort: ["source", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IAction>(["source", "name", "id",]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = ActionFactory.CreateAction(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('icon'));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    bonds: {
        searchId: 'bonds', 
        pageName: 'Bonds',
        sort: ["source", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IBond>(["source", "name", "id",]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = BondFactory.CreateBond(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('icon'));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    kins: {
        searchId: 'kins', 
        pageName: 'Kin',
        sort: ["source", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IKin>(["source", "name", "id",]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = KinFactory.CreateKin(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('icon'));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    cultures: {
        searchId: 'cultures', 
        pageName: 'Culture',
        sort: ["source", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<ICulture>(["source", "name", "id",]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = CultureFactory.CreateCulture(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('icon'));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    campitems: {
        searchId: 'campitems', 
        pageName: 'Camp Items',
        sort: ["source", "name", "id", "purchase"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<ICampItem>(["source", "name", "id", "purchase"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = CampItemFactory.CreateCampItem(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('icon'));
                model.itemcollection.push(ItemNew);
            }
        }
    }
}