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
            <div className="row">
                <br/>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 col-12 my-0 py-0">
                    <div className="row">
                        <div className='col-12'>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        {_foundItems.map((item) => (
                            <div className="col-12 my-0 py-0" key={"tableItemDisplay"+item.HeldItem.ID}>
                                <ViewTableItemDisplay data={item} parent={AbilitiesCollectionController} statefunction={ItemRecall}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 col-12">
                    <div className="row">
                        <div className='col-12'>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-12'>
                            {_activeItems.length == 0 &&
                                <div className="">
                                    <div className='bordersubgrey emptyboxStructure'>
                                        <h1 className="subtletext">No Items Selected</h1>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sx-1 row-cols-xs-1 row-cols-1">
                        {_activeItems.map((item) => (
                            <div className="col" key={"abilityDisplay"+item.ID}>
                                <AbilityDisplay data={item}/>
                                <br/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default PlayerTacticsAbilities