import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'

import PlayerTacticsAbilities from '../../display/pages/PlayerTacticsAbilities'
import { ViewAbilitiesCollection } from '../../classes/viewmodel/collections/ViewAbilitiesCollections'

const HomeRoute: React.FC = () => {

    // Initialize Controller //
    const AbilitiesCollectionController = new ViewAbilitiesCollection()
    AbilitiesCollectionController.UpdateSearchParams({searchtype: "file", searchparam: {type: "abilities"}})
    if (AbilitiesCollectionController.GetResults().length == 0){
        AbilitiesCollectionController.RunSearch();
    }

    // Return result -----------------------------
    return (
        <PlayerTacticsAbilities controller={AbilitiesCollectionController}/>
    )
    // -------------------------------------------
}

export default HomeRoute