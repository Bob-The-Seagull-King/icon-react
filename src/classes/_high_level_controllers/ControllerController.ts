import { CollectionsListPage } from "./../viewmodel/pages/CollectionListPage"

class ControllerController {
   
    AbilitiesCollectionController;
    SummonsCollectionController;
    JobsCollectionController;
    ClassesCollectionController;
    RelicsCollectionController;
    GlossaryCollectionController;
    TrophyCollectionController;
    PowerCollectionController;
    ActionCollectionController;
    BondCollectionController;
    KinCollectionController;
    CultureCollectionController;
    CampItemCollectionController;
    RulesCollectionController;
    FoeClassCollectionController;
    FoeFactionCollectionController;
    FoeJobCollectionController;

    constructor () {
        this.AbilitiesCollectionController = new CollectionsListPage('abilities')
        this.SummonsCollectionController = new CollectionsListPage('summons')
        this.JobsCollectionController = new CollectionsListPage('jobs')
        this.ClassesCollectionController = new CollectionsListPage('classes')
        this.RelicsCollectionController = new CollectionsListPage('relics')
        this.GlossaryCollectionController = new CollectionsListPage('glossary')
        this.TrophyCollectionController = new CollectionsListPage('trophies')
        this.PowerCollectionController = new CollectionsListPage('powers')
        this.ActionCollectionController = new CollectionsListPage('actions')
        this.BondCollectionController = new CollectionsListPage('bonds')
        this.KinCollectionController = new CollectionsListPage('kins')
        this.CultureCollectionController = new CollectionsListPage('cultures')
        this.CampItemCollectionController = new CollectionsListPage('campitems')
        this.RulesCollectionController = new CollectionsListPage('rules')
        this.FoeClassCollectionController = new CollectionsListPage('foeclass')
        this.FoeFactionCollectionController = new CollectionsListPage('foefaction')
        this.FoeJobCollectionController = new CollectionsListPage('foejobs')
    }
}

export {ControllerController}