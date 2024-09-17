import 'bootstrap/dist/css/bootstrap.css'
import '../../../resources/styles/_icon.scss'
import { Button, Collapse } from "react-bootstrap";
import React, { useState } from 'react'

// Classes
import { getColour } from '../../../utility/functions';

const GenericDisplay = (props: any) => {
    const DisplayColour : string = props.d_colour;
    const DisplayName : string = props.d_name;
    const DisplayType : string = props.d_type;
    const displayMethod = props.d_method
    const DefaultState = props.d_state

    const [open, setOpen]   = useState((DefaultState != undefined)? DefaultState : true);

    return (
        <div className={'abilityStructure borderstyler ' + DisplayType + 'border'+getColour(DisplayColour)}>
            <div onClick={() => {setOpen(!open)}} className={'titleShape hovermouse titlebody ' + DisplayType + 'background'+getColour(DisplayColour)}>{DisplayName || ""}</div>
            <Collapse in={open}>
            <div>
                {displayMethod()}
            </div>
            </Collapse>
        </div>
    )
}

export default GenericDisplay;