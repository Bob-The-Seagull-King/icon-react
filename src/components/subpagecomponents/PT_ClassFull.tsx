import React from 'react'
import '../../styles/iconcomponent.scss';

import classData from '../../resources/data/player/class.json';
import ClassFullDisplay from '../itemdisplaycomponents/ClassFullDisplay'

const PT_ClassFull = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => (((value.name.toLowerCase() == (searchVal.toLowerCase()))));

    /**
     * Takes the path and returns the job full
     * page search, or "" if none is provided.
     */
    function urlParse() {
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');
        urlSplits[4] = urlSplits[4].replaceAll('%20', ' ');

        return urlSplits[4];
    }

    function renderList() {
        return (
            <div className='centerPosition'>
                <div className='centerPosition topPosition'>
                    {classData.filter(isSearched).map((item) => (
                        <div className='gridItem' key={item.name + "class"}  >
                            <ClassFullDisplay data={item}/>
                        </div>
                        ))}
                </div>
            </div>
        )
    }

    // Return render -------------------------------
    return (
        <div style={{width:"100%"}}>
            {renderList()}
        </div>
    )
}

export default PT_ClassFull