import React from 'react'
import '../../styles/iconcomponent.scss';

import actiondata from '../../resources/data/general/actions.json';
import ActionDisplay from '../../components/itemdisplaycomponents/ActionDisplay';

const GN_Actions = (props: any) => {
    
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
        window.open(location.protocol + '//' + location.host + '/general/narrative/' + dir + '/' + name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    // Return render -------------------------------
    return (
        <div className='widthPT centerPosition topPosition'>
            {actiondata.filter(isSearched).map((item) => (
            <div className='gridItem' onClick={() => navClick('action', item.name)} key={item.name + "camp"}  >
                <ActionDisplay data={item}/>
            </div>))}
        </div>
    )
}

export default GN_Actions