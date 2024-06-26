import React from 'react'
import '../../styles/iconcomponent.scss';
import {convertStringToContent} from '../../utility/util';

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
            <div><p>{convertStringToContent(ruledata.description)}</p></div>
        </div>
    )
    // ------------------------------------------
}

export default GlossaryRuleDisplay