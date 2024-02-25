import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../utility/functions';

const ClassDescriptionDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const classDescriptionData = props.data;
    // ---------------------------------------------

    // Run evaluations -----------------------------
    // ---------------------------------------------

    // Evaluation functions ------------------------

    return (
        <div>
            <div><b>Strengths:</b> <span dangerouslySetInnerHTML={{__html: (classDescriptionData.info.strengths || '')}}/></div>
            <div><b>Weaknesses:</b> <span dangerouslySetInnerHTML={{__html: (classDescriptionData.info.weaknesses || '')}}/></div>
            <div><b>Complexity:</b> <span dangerouslySetInnerHTML={{__html: (classDescriptionData.info.complexity || '')}}/></div>
            <br/>
            <div><span dangerouslySetInnerHTML={{__html: (classDescriptionData.info.description || '')}}/></div>
        </div>
    )
}

export default ClassDescriptionDisplay