import React from 'react'
import { getColour} from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import {convertStringToContent} from '../../utility/util';

const ClassMechanicDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const classMechanicData = props.data;
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div>
            <h1 className={'titleShape title'+getColour(classMechanicData.name)}>Special Mechanics: {classMechanicData.mechanic.name}</h1>
            <span>{convertStringToContent(classMechanicData.mechanic.description)}</span>
            <h3>{classMechanicData.name} Gambit:</h3>
            <span>{convertStringToContent(classMechanicData.mechanic.gambit)}</span>
        </div>
    )
    // ---------------------------------------------
}

export default ClassMechanicDisplay