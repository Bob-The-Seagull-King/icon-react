import { CollectionsListPage } from "./../viewmodel/pages/CollectionListPage"

class ControllerController {
   
    AbilitiesCollectionController;
    SummonsCollectionController;

    constructor () {
        this.AbilitiesCollectionController = new CollectionsListPage('abilities')
        this.SummonsCollectionController = new CollectionsListPage('summons')
    }
}

export {ControllerController}