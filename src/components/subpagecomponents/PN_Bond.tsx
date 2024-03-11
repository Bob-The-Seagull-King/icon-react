import React from 'react'
import '../../styles/iconcomponent.scss';


import bonddata from '../../resources/data/player/bond.json';
import BondDisplay from '../itemdisplaycomponents/BondDisplay';

const PN_Bond = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => ((value.name.toLowerCase().includes(searchVal.toLowerCase())) );
    
    /**
     * Takes the path and returns the Bond
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
        <div className='widthPT centerPosition topPosition'>
            {bonddata.filter(isSearched).map((item) => (
                <div className='gridItem' onClick={() => navClick('bondfull', item.name)} key={item.name + "bond"}  >
                    <BondDisplay data={item}/>
                </div>
                ))}
        </div>
    )
}

export default PN_Bond