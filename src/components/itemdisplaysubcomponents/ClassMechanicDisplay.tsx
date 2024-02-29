import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

const ClassMechanicDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const classMechanicData = props.data;
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div>
            <h1 className={'titleShape title'+getColour(classMechanicData.name)}>Special Mechanics: {classMechanicData.mechanic.name}</h1>
            <span dangerouslySetInnerHTML={{__html: (classMechanicData.mechanic.description || '')}}/>
            <h3>{classMechanicData.name} Gambit:</h3>
            <span dangerouslySetInnerHTML={{__html: (classMechanicData.mechanic.gambit || '')}}/>
        </div>
    )
    // ---------------------------------------------
}

export default ClassMechanicDisplay