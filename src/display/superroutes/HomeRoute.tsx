import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'

import { ViewAbilitiesCollection } from '../../classes/viewmodel/collections/ViewAbilitiesCollections'

const HomeRoute: React.FC = () => {

    const AbilitiesCollectionController = new ViewAbilitiesCollection()
    AbilitiesCollectionController.UpdateSearchParams({searchtype: "file", searchparam: {
                                                                                            type: "abilities"
                                                                                            }})
    AbilitiesCollectionController.RunSearch();
    const data = AbilitiesCollectionController.ReturnAbilities();
    console.log(data);

    // Return result -----------------------------
    return (
        <div className="container">
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
                {AbilitiesCollectionController.ReturnAbilities().map((item) => (
                        <div className="col" key={"abilityDisplay"+item.ID}>{item.Name}</div>
                    ))}
            </div>
        </div>
    )
    // -------------------------------------------
}

export default HomeRoute