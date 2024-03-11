import React from 'react'
import '../../styles/iconcomponent.scss';

import campdata from '../../resources/data/general/camp.json';
import CampItemDisplay from '../../components/itemdisplaycomponents/CampItemDisplay';

const GC_Item = (props: any) => {
    
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
        window.open(location.protocol + '//' + location.host + '/general/camp/' + dir + '/' + name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    // Return render -------------------------------
    return (
        <div className='widthPT centerPosition topPosition'>
            {campdata.filter(isSearched).map((item) => (
            <div className='gridItem' onClick={() => navClick('item', item.name)} key={item.name + "camp"}  >
                <CampItemDisplay data={item}/>
            </div>))}
        </div>
    )
}

export default GC_Item