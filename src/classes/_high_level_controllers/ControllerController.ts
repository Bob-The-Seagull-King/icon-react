import { CollectionsListPage } from "./../viewmodel/pages/CollectionListPage"

class ControllerController {
   
    AbilitiesCollectionController;
    SummonsCollectionController;
    JobsCollectionController;
    ClassesCollectionController;
    RelicsCollectionController;

    constructor () {
        this.AbilitiesCollectionController = new CollectionsListPage('abilities')
        this.SummonsCollectionController = new CollectionsListPage('summons')
        this.JobsCollectionController = new CollectionsListPage('jobs')
        this.ClassesCollectionController = new CollectionsListPage('classes')
        this.RelicsCollectionController = new CollectionsListPage('relics')
    }
}

export {ControllerController}