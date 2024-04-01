import '../../resources/styles/_icon.scss'
import React from 'react'

import { ViewAbilitiesCollection } from '../../classes/viewmodel/collections/ViewAbilitiesCollections'

const HomeRoute: React.FC = () => {

    const AbilitiesCollectionController = new ViewAbilitiesCollection()
    AbilitiesCollectionController.UpdateSearchParams({searchtype: "complex", searchparam: {
                                                                                            type: "abilities", 
                                                                                            request: 
                                                                                                {
                                                                                                    operator: 'and',
                                                                                                    terms: [
                                                                                                        {
                                                                                                            item: "name", // The string name of the key being checked
                                                                                                            value: "tt", // The desired value of the key
                                                                                                            equals: true, // true -> check if item == value, false -> check if item != value
                                                                                                            strict: false, // true -> exact match of value, false -> item includes value
                                                                                                        }
                                                                                                    ],
                                                                                                    subparams: []
                                                                                                }
                                                                                            }})
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