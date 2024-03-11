import React from 'react'
import '../../styles/iconcomponent.scss';

import bonddata from '../../resources/data/player/bond.json';

import BondFullDisplay from '../itemdisplaycomponents/BondFullDisplay';

const PN_BondFull = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => (((value.name.toLowerCase() == (searchVal.toLowerCase()))));

    /**
     * Takes the path and returns the bond
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
        window.open(location.protocol + '//' + location.host + '/player/tactics/' + dir + '/' + name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    // Return render -------------------------------
    return (
        <div className='widthPT centerPosition topPosition'>
            {bonddata.filter(isSearched).map((item) => (
                <div className='centerPosition' key={item.name + "bondfull"}  >
                    <BondFullDisplay data={item}/>
                </div>
                ))}
        </div>
    )
}

export default PN_BondFull