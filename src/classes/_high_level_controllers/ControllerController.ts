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
    }
}

export {ControllerController}