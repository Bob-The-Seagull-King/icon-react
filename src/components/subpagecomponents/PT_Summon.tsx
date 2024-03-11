import React from 'react'
import '../../styles/iconcomponent.scss';

import summonData from '../../resources/data/player/summon.json';
import SummonDisplay from '../itemdisplaycomponents/SummonDisplay';

const PT_Summon = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => (((value.name.toLowerCase().includes(searchVal.toLowerCase()))));

    /**
     * Takes the path and returns the summon
     * page search, or "" if none is provided.
     */
    function urlParse() {
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');
        if (urlSplits.length >= 5) {
            urlSplits[4] = urlSplits[4].replaceAll('%20', ' ');
            return urlSplits[4];
        }
        return "";
    }

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host + '/player/tactics/' + dir + '/' + name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    function renderList() {
        return (
            <div className='centerPosition'>
                <div className='widthPT centerPosition topPosition'>
                    {summonData.filter(isSearched).map((item) => (
                    <div className='gridItem' onClick={() => navClick('summon', item.name)} key={item.name + "relic"}  >
                        <SummonDisplay data={item}/>
                    </div> ))}
                </div>
            </div>
        )
    }

    // Return render -------------------------------
    return (
        <div>
            {renderList()}
        </div>
    )
}

export default PT_Summon