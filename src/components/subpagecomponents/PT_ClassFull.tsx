import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

import classData from '../../resources/data/class.json';
import ClassFullDisplay from '../itemdisplaycomponents/ClassFullDisplay'

const PT_ClassFull = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => (((value.name.toLowerCase() == (searchVal.toLowerCase()))));

    function urlParse() {
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');
        urlSplits[4] = urlSplits[4].replaceAll('%20', ' ');
        console.log(urlSplits[4]);

        return urlSplits[4];
    }

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host + '/player/tactics/' + dir + '/' + name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    function renderList() {

        return (
            <div className='widthPT centerPosition topPosition'>
                {classData.filter(isSearched).map((item) => (
                    <div className='gridItem' key={item.name + "class"}  >
                        <ClassFullDisplay data={item}/>
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

export default PT_ClassFull