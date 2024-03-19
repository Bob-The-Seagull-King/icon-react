import React from 'react'
import {convertStringToContent} from '../../utility/util';

const ClassDescriptionDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const classDescriptionData = props.data;
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div>
            <div><b>Strengths:</b> <span>{convertStringToContent(classDescriptionData.info.strengths)}</span></div>
            <div><b>Weaknesses:</b> <span>{convertStringToContent(classDescriptionData.info.weaknesses)}</span></div>
            <div><b>Complexity:</b> <span>{convertStringToContent(classDescriptionData.info.complexity)}</span></div>
            <br/>
            <div><span>{convertStringToContent(classDescriptionData.info.description)}</span></div>
        </div>
    )
    // ---------------------------------------------
}

export default ClassDescriptionDisplay