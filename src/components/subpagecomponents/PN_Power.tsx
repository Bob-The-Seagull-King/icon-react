import React from 'react'
import '../../styles/iconcomponent.scss';

import powerdata from '../../resources/data/player/power.json';
import PowerDisplay from '../itemdisplaycomponents/PowerDisplay';


const PN_Power = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => ((value.name.toLowerCase().includes(searchVal.toLowerCase())) || (value.bond.toLowerCase().includes(searchVal.toLowerCase())));

    /**
     * Takes the path and returns the power
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
        window.open(location.protocol + '//' + location.host + '/player/narrative/' + dir + '/' + name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    // Return render -------------------------------
    return (
        <div style={{width:"100%"}}>
            <div className='centerPosition'>
                <div className='widthPT centerPosition topPosition'>
                    {powerdata.filter(isSearched).map((item) => (
                        <div className='gridItemPower' onClick={() => navClick('power', item.name)} key={item.name + "power"}  >
                            <PowerDisplay data={item}/>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PN_Power