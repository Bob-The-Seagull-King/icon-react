import React from 'react'

const ClassDescriptionDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const classDescriptionData = props.data;
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div>
            <div><b>Strengths:</b> <span dangerouslySetInnerHTML={{__html: (classDescriptionData.info.strengths || '')}}/></div>
            <div><b>Weaknesses:</b> <span dangerouslySetInnerHTML={{__html: (classDescriptionData.info.weaknesses || '')}}/></div>
            <div><b>Complexity:</b> <span dangerouslySetInnerHTML={{__html: (classDescriptionData.info.complexity || '')}}/></div>
            <br/>
            <div><span dangerouslySetInnerHTML={{__html: (classDescriptionData.info.description || '')}}/></div>
        </div>
    )
    // ---------------------------------------------
}

export default ClassDescriptionDisplay