import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'

import { ViewAbilitiesCollection } from '../../classes/viewmodel/collections/ViewAbilitiesCollections'
import AbilityDisplay from '../components/features/abilities/AbilityDisplay'

const HomeRoute: React.FC = () => {

    const AbilitiesCollectionController = new ViewAbilitiesCollection()
    AbilitiesCollectionController.UpdateSearchParams({searchtype: "file", searchparam: {type: "abilities"}})
    AbilitiesCollectionController.RunSearch();
    const data = AbilitiesCollectionController.ReturnAbilities();

    // Return result -----------------------------
    return (
        <div className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-xs-1 row-cols-1">
                {AbilitiesCollectionController.ReturnAbilities().map((item) => (
                        <div className="col" key={"abilityDisplay"+item.ID}>
                            <AbilityDisplay data={item}/>
                            <br/>
                        </div>
                    ))}
            </div>
        </div>
    )
    // -------------------------------------------
}

export default HomeRoute