import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'

// Import Typescript classes
import { ViewAbilitiesCollection } from '../../classes/viewmodel/collections/ViewAbilitiesCollections'
import { AllAbilitiesListPage } from '../../classes/viewmodel/pages/AllAbilitiesListPage'
import { AbilitiesFilterManager } from '../../classes/viewmodel/collections/filters/AbilitiesFilterManager'

// Import React components
import AbilityDisplay from '../components/features/abilities/AbilityDisplay'
import ViewTableItemDisplay from '../../display/components/subcomponents/list/ViewTableItemDisplay'
import FilterSelectDisplayAbility from '../components/subcomponents/filters/FilterSelectors/FilterSelectDisplayAbility'

const PlayerTacticsAbilities = (prop: any) => {
    // Initialize ---------------------------------------------------------------------------------

    // Controllers and Managers
    const ViewPageController: AllAbilitiesListPage = prop.controller
    const AbilitiesCollectionController: ViewAbilitiesCollection = ViewPageController.Collection;

    // Use States
    const [_activeItems, returnstate] = useState(AbilitiesCollectionController.AbilitiesList);
    const [_foundItems, returntable] = useState(AbilitiesCollectionController.itemcollection);
    const [_keyval, updatekey] = useState(1);
    let listcolourval = 0;

    // Functions ----------------------------------------------------------------------------------
    
    /**
     * Increases the colour value, this means that
     * every alternate list item will have a white
     * translucent overlay.
     */
    function getcolor() {
        listcolourval += 1;
        return listcolourval;
    }

    /**
     * Updates the current use state of abilities that
     * have been actively selected.
     */
    function ItemRecall() {
        returnstate(RecallAbilities())
    }

    /**
     * Updates the current use state of list items and
     * abilities currently selected.
     */
    function UpdateSearch() {
        ViewPageController.updateSearch();
        returntable(RecallTable())
        returnstate(RecallAbilities())
        updatekey(_keyval+1)
    }

    /**
     * Use state updater for Abilities
     * @returns List of ability objects
     */
    function RecallAbilities() {
        const abilities = AbilitiesCollectionController.ReturnAbilities();
        return abilities;
    }

    /**
     * Use state updater for List Items
     * @returns List of found abilities
     */
    function RecallTable() {
        const table = AbilitiesCollectionController.ReturnItems();
        return table;
    }

    // Return result ------------------------------------------------------------------------------
    return (
        <div className="container">
            <div className="row"><br/></div> {/* Gap row */}
                
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 col-12 my-0 py-0">
                    <div className="row"> <div className='col-12'><br/></div></div> {/* Gap row */} 

                    {/* Holds the filter selection and display component */}
                    <div className="row">
                        <div className='col-12'>
                            <FilterSelectDisplayAbility controller={ViewPageController} runfunction={UpdateSearch}/>
                        </div>
                    </div>

                    <div className="row"> <div className='col-12'><br/></div></div> {/* Gap row */}
                    
                    {/* Holds the table list of searched abilities */}
                    <div className="row">
                        <div className='col-12'>
                            <div className='bordermainpurple roundBody no-padding '>
                                {_foundItems.length == 0 && 
                                    <div className="">
                                        <h1 className="subtletext">No Abilities Found</h1> {/* Show if no abilities found */}
                                    </div>
                                }
                                {_foundItems.map((item) => (
                                    <div className="col-12 my-0 py-0 no-margin" key={"tableItemDisplay"+item.HeldItem.ID+(_keyval.toString())}>
                                        <ViewTableItemDisplay key={"tableItemDisplay"+item.HeldItem.ID+(_keyval.toString())} data={item} parent={AbilitiesCollectionController} statefunction={ItemRecall} positionid={getcolor}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Displays any selected abilities */}
                <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 col-12">

                    <div className="row"><div className='col-12'><br/></div></div> {/* Gap row */}

                    <div className="row">
                        <div className='col-12'>
                            {_activeItems.length == 0 &&
                                <div className="">
                                    <div className='bordersubgrey emptyboxStructure'>
                                        <h1 className="subtletext">No Items Selected</h1> {/* Show if no abilities selected */}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="row row-cols-lg-1 row-cols-md-1 row-cols-sx-1 row-cols-xs-1 row-cols-1">
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