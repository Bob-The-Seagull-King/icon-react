import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../utility/functions';

import ClassDescriptionDisplay from '../components/ClassDescriptionDisplay'
import ClassMechanicDisplay from '../components/ClassMechanicDisplay'
import ClassStatsDisplay from '../components/ClassStatsDisplay'
import TraitsDisplay from '../components/TraitsDisplay'

const ClassDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const classData = props.data;
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div>
            <h1 style={{color: getColour(classData.name), fontSize: '3em'}}>{capitalizeTag( classData.name )}</h1>
            <h3><b>{classData.description}</b></h3>
            <ClassDescriptionDisplay key={classData.name + "description"} data={classData}/>
            <ClassStatsDisplay key={classData.name + "stats"} data={classData}/>
            <TraitsDisplay key={classData.name + "traits"} data={classData}/>
            <ClassMechanicDisplay key={classData.name + "mechanic"} data={classData}/>
        </div>
    )
    // ---------------------------------------------
}

export default ClassDisplay
