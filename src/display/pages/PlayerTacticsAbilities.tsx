import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import { ViewAbilitiesCollection } from '../../classes/viewmodel/collections/ViewAbilitiesCollections'
import { AllAbilitiesListPage } from '../../classes/viewmodel/pages/AllAbilitiesListPage'
import { AbilitiesFilterManager } from '../../classes/viewmodel/collections/filters/AbilitiesFilterManager'

import AbilityDisplay from '../components/features/abilities/AbilityDisplay'
import ViewTableItemDisplay from '../../display/components/subcomponents/list/ViewTableItemDisplay'
import FilterSelectDisplay from '../../display/components/subcomponents/filters/FilterSelectDisplay'

const PlayerTacticsAbilities = (prop: any) => {
    // Initialize controllers and managers
    const ViewPageController: AllAbilitiesListPage = prop.controller
    const AbilitiesCollectionController: ViewAbilitiesCollection = ViewPageController.Collection;
    const FilterManager: AbilitiesFilterManager = ViewPageController.FilterManager;

    // Initialize Use State

    const [_activeItems, returnstate] = useState(AbilitiesCollectionController.AbilitiesList);
    const [_foundItems, returntable] = useState(AbilitiesCollectionController.itemcollection);

    // --------------------------------------------------------------------------------------------

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

    function ReturnSearchFilterBox() {
        return (
            <FilterSelectDisplay controller={ViewPageController}/>
        )
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
                        <div className='col-12'>
                            {ReturnSearchFilterBox()}
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-12'>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-12'>
                            <div className='bordermainpurple roundBody no-padding '>
                                {_foundItems.map((item) => (
                                    <div className="col-12 my-0 py-0 no-margin" key={"tableItemDisplay"+item.HeldItem.ID}>
                                        <ViewTableItemDisplay data={item} parent={AbilitiesCollectionController} statefunction={ItemRecall}/>
                                    </div>
                                ))}
                            </div>
                        </div>
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