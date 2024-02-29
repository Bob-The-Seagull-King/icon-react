import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

import ClassDescriptionDisplay from '../itemdisplaysubcomponents/ClassDescriptionDisplay'
import ClassMechanicDisplay from '../itemdisplaysubcomponents/ClassMechanicDisplay'
import ClassStatsDisplay from '../itemdisplaysubcomponents/ClassStatsDisplay'
import TraitsDisplay from '../itemdisplaysubcomponents/TraitsDisplay'

const ClassDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const classData = props.data;
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div className='classStructure' >
            <div className='centerPosition'>
                <h1 className={'megatitleShape title'+getColour(classData.name)}>{capitalizeTag( classData.name )}</h1>
            </div>
            <div className='centerPosition'>
                <h3><b>{classData.description}</b></h3>
            </div>
                <ClassDescriptionDisplay key={classData.name + "description"} data={classData}/>
            <div className='classContainer'>
                <div className='classFeature'>
                    <ClassStatsDisplay key={classData.name + "stats"} data={classData}/>
                    <br/>
                    <TraitsDisplay key={classData.name + "traits"} data={classData}/>
                </div>
                <div className='classFeature'>
                    <ClassMechanicDisplay key={classData.name + "mechanic"} data={classData}/>
                </div>
            </div>
        </div>
    )
    // ---------------------------------------------
}

export default ClassDisplay
