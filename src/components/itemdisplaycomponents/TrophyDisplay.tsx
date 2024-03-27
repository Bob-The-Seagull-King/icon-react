import React from 'react'
import { capitalizeTag, containsTag} from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import {convertStringToContent} from '../../utility/util';

const TrophyDisplay = (props: any) => {
    const trophydata = props.data.val;
    const factionname = props.data.faction;

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/' + dir + '/player/tactics/'+ name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    function getlegendname() {
        let result = "";

        let i = 0;
        for (i = 0; i < trophydata.faction.length; i++) {
            if ((trophydata.faction[i] != "legend") && (trophydata.faction[i] != factionname)) {
                result = trophydata.faction[i];
            }
        }

        return capitalizeTag(result);
    }

    // Return result -------------------------------
    return (
        <div className='ruleStructure'>
            <h2 className={'titleShape subtitlePurple'}>{trophydata.name}</h2>
            {trophydata.faction.includes("legend") &&
            <div>
                <h3>LEGENDARY TROPHY: {getlegendname()}</h3>
            </div>
            }
            <div><span><b>Uses: </b> {trophydata.use[0].number} {trophydata.use[1].duration}</span></div>
            <div><p>{convertStringToContent(trophydata.desc)}</p></div>
        </div>
    )
    // ------------------------------------------
}

export default TrophyDisplay