import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import { ViewTableItem } from '../../../../classes/viewmodel/collections/ViewTableItem'


const ViewTableItemDisplay = (props: any) => {
    const tableItem: ViewTableItem = props.data
    const parentView = props.parent;
    const updateHost = props.statefunction
    const [_activestate, checkstate] = useState(tableItem.IsActive);
    function UpdateComponent() {
        tableItem.SwitchStates();
        parentView.UpdateList();
        updateHost();
        checkstate(tableItem.IsActive);
    }

    return (
        <div style={{width: "100%", marginBottom: "0px"}} className='hovermouse' onClick={() => UpdateComponent()}>
            {_activestate && 
                <h1 className={"title" + tableItem.Colour + " no-padding itemlisttext softpad"}>
                {tableItem.HeldItem.Name}
                </h1>
            }
            {!_activestate &&
                <h1 className={"subtitle" + tableItem.Colour + " no-padding itemlisttext softpad"}>
                {tableItem.HeldItem.Name}
                </h1>
            }
        </div>
    )
}

export default ViewTableItemDisplay;