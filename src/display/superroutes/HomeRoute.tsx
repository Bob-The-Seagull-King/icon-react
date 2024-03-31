import '../../resources/styles/_icon.scss'
import React from 'react'

import { ViewAbilitiesCollection } from '../../classes/viewmodel/collections/ViewAbilitiesCollections'

const HomeRoute: React.FC = () => {

    const AbilitiesCollectionController = new ViewAbilitiesCollection()
    AbilitiesCollectionController.UpdateSearchParams({searchtype: "id", searchparam: {type: "abilities", id: "ab_endlessbattlement"}})
    AbilitiesCollectionController.RunSearch();
    const data = AbilitiesCollectionController.ReturnAbilities();
    console.log(data);

    // Return result -----------------------------
    return (
        <div>
            <p className="hometitle">Test</p>
        </div>
    )
    // -------------------------------------------
}

export default HomeRoute