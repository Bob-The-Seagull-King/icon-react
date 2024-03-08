import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import { useNavigate } from "react-router-dom";

const GlossaryRuleDisplay = (props: any) => {
    const ruledata = props.data;

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/' + dir + '/player/tactics/'+ name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div className='ruleStructure'>
            <h2 className={'titleShape subtitlePurple'}>{ruledata.name}</h2>
            <div><p dangerouslySetInnerHTML={{__html: (ruledata.description || '')}}></p></div>
        </div>
    )
    // ------------------------------------------
}

export default GlossaryRuleDisplay