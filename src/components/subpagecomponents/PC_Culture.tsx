import React from 'react'
import '../../styles/iconcomponent.scss';

import culturedata from '../../resources/data/player/culture.json';
import CultureDisplay from '../../components/itemdisplaycomponents/CultureDisplay';

const PC_Culture = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => ((value.name.toLowerCase().includes(searchVal.toLowerCase())) );
    
    /**
     * Takes the path and returns the camp item
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
        window.open(location.protocol + '//' + location.host + '/player/character/' + dir + '/' + name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    // Return render -------------------------------
    return (
        <div className='widthPT centerPosition topPosition'>
            {culturedata.filter(isSearched).map((item) => (
            <div className='gridItem' onClick={() => navClick('culture', item.name)} key={item.name + "culture"}  >
                <CultureDisplay data={item}/>
            </div>))}
        </div>
    )
}

export default PC_Culture