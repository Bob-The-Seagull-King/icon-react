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
import { IRuleset } from "../../feature/rule/Ruleset";
import { RulesetFactory } from "../../../factories/features/RulesetFactory";
import { IFoeClass } from "../../feature/foes/FoeClass";
import { FoeFactory } from "../../../factories/features/FoeFactory";
import { IFoeFaction } from "../../feature/foes/FoeFaction";
import { IFoeJob } from "../../feature/foes/FoeJob";

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
        sort: ["colour", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IPlayerSummon>(["colour", "name", "id"]))
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
        sort: ["class_id", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IJob>(["class_id", "name", "id"]))
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
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IClass>(["name", "id"]))
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
        sort: ["colour", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IRelic>(["colour", "name", "id"]))
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
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IGlossaryRule>(["name", "id"]))
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
        sort: ["name", "id", "category"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<ITrophy>([ "name", "id", "category"]))
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
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IPower>(["name", "id", ]))
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
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IAction>(["name", "id",]))
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
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IBond>([ "name", "id",]))
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
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IKin>(["name", "id",]))
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
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<ICulture>(["name", "id",]))
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
        sort: ["name", "id", "purchase"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<ICampItem>(["name", "id", "purchase"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = CampItemFactory.CreateCampItem(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('icon'));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    rules: {
        searchId: 'rules', 
        pageName: 'Rules',
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IRuleset>(["name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew =  RulesetFactory.CreateRuleset(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('icon'));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    foeclass: {
        searchId: 'foeclass', 
        pageName: 'Class',
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IFoeClass>(["name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew =  FoeFactory.CreateFoeClass(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, summonNew.Class);
                model.itemcollection.push(ItemNew);
            }
        }
    },
    foefaction: {
        searchId: 'foefaction', 
        pageName: 'Faction',
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IFoeFaction>(["name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew =  FoeFactory.CreateFoeFaction(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, summonNew.Class);
                model.itemcollection.push(ItemNew);
            }
        }
    },
    foejobs: {
        searchId: 'foejobs', 
        pageName: 'Faction',
        sort: ["faction_id", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IFoeJob>(["faction_id","name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew =  FoeFactory.CreateFoeJob(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, summonNew.Class);
                model.itemcollection.push(ItemNew);
            }
        }
    }
}