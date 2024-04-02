import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import { ViewAbilitiesCollection } from '../../classes/viewmodel/collections/ViewAbilitiesCollections'
import AbilityDisplay from '../components/features/abilities/AbilityDisplay'
import ViewTableItemDisplay from '../../display/components/subcomponents/list/ViewTableItemDisplay'

const PlayerTacticsAbilities = (prop: any) => {

    const AbilitiesCollectionController: ViewAbilitiesCollection = prop.controller;

    const BaseActiveItems = AbilitiesCollectionController.AbilitiesList
    const BaseFoundItems = AbilitiesCollectionController.itemcollection

    // Initialize Use State
    const [_activeItems, returnstate] = useState(BaseActiveItems);
    const [_foundItems, returntable] = useState(BaseFoundItems)

    function ItemRecall() {
        returnstate(RecallAbilities())
    }

    function RecallAbilities() {
        const abilities = AbilitiesCollectionController.ReturnAbilities();
        return abilities;
    }
    function RecallTable() {
        const table = AbilitiesCollectionController.ReturnItems();
        return table;
    }

    // Return result -----------------------------
    return (
        <div className="container">
            <div className="row my-0 py-0">
                {_foundItems.map((item) => (
                        <div className="col-12 my-0 py-0" key={"tableItemDisplay"+item.HeldItem.ID}>
                            <ViewTableItemDisplay data={item} parent={AbilitiesCollectionController} statefunction={ItemRecall}/>
                        </div>
                    ))}
            </div>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
                    {_activeItems.map((item) => (
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

export default PlayerTacticsAbilities