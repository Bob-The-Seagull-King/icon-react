import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

const GC_Item = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => (true);

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
        <div>
            General_Camp_Items
        </div>
    )
}

export default GC_Item