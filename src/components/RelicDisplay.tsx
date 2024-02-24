import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour } from '../utility/functions';

const RelicDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const relicData = props.data;
    // ---------------------------------------------

    return (
        <div>
            <h1 style={{color: getColour(relicData.colour)}}>{capitalizeTag( relicData.name )}</h1>
            <p><i>{relicData.desc}</i></p>
            <p>I.   <span dangerouslySetInnerHTML={{__html: (relicData.tier1 || '')}}></span></p>
            <p>II.  <span dangerouslySetInnerHTML={{__html: (relicData.tier2 || '')}}></span></p>
            <p>III. <span dangerouslySetInnerHTML={{__html: (relicData.tier3 || '')}}></span></p>
            <p><b>Aspected: </b> <span dangerouslySetInnerHTML={{__html: (relicData.tier4 || '')}}></span></p>
            <p><i>Aspect quest: </i> <span dangerouslySetInnerHTML={{__html: (relicData.quest || '')}}></span></p>
        </div>
    )
}

export default RelicDisplay