import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

// Import typescript class
import { ViewTableItem } from '../../../../classes/viewmodel/collections/ViewTableItem'

const ViewTableItemDisplay = (props: any) => {
    // Assign prop values
    const tableItem: ViewTableItem = props.data // Object being displayed
    const parentView = props.parent; // The view component that hosts this table display item 
    const updateHost = props.statefunction; // The method that trigger's the parent to update
    const position = props.positionid; // Method from the host to determine the current position in the list

    // Initialize use state
    const [_activestate, checkstate] = useState(tableItem.IsActive);

    // Function ---------------------------------------------------------------------------------------------

    /**
     * Triggers an update of the host page to display/hide the associated ability
     */
    function UpdateComponent() {
        tableItem.SwitchStates();
        parentView.UpdateList();
        updateHost();
        checkstate(tableItem.IsActive);
    }

    // Return result ----------------------------------------------------------------------------------------
    return (
        <div style={{width: "100%", marginBottom: "0px", position: "relative"}} className='hovermouse' onClick={() => UpdateComponent()}>
            {(position() % 2 == 0) &&
                <div className="colourOverlay"/>  /* Will display on every alternating item in the list, slightly brightens the colour */
            }
            {_activestate && /* Displays when the associated item is meant to be shown on screen */
                <h1 className={"title" + tableItem.Colour + " no-padding itemlisttext softpad"}> 
                    {tableItem.HeldItem.Name}
                </h1>
            }
            {!_activestate && /* Displays when the associated item is meant to not be on screen */
                <h1 className={"subtitle" + tableItem.Colour + " no-padding itemlisttext softpad"}>
                    {tableItem.HeldItem.Name}
                </h1>
            }
        </div>
    )
}

export default ViewTableItemDisplay;