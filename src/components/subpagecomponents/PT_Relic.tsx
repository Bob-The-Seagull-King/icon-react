import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

import relicData from '../../resources/data/relic.json';
import RelicDisplay from '../itemdisplaycomponents/RelicDisplay';

const PT_Relic = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => (((value.name.toLowerCase().includes(searchVal.toLowerCase()))));

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
            <div className='widthPT centerPosition topPosition'>
                {relicData.filter(isSearched).map((item) => (
                    <div className='gridItem' onClick={() => navClick('relic', item.name)} key={item.name + "relic"}  >
                        <RelicDisplay data={{values:item, tier:4}}/>
                    </div>
                    ))}
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

export default PT_Relic