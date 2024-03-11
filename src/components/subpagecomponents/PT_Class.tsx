import React from 'react'
import '../../styles/iconcomponent.scss';

import classData from '../../resources/data/player/class.json';
import ClassDisplay from '../itemdisplaycomponents/ClassDisplay'

const PT_Class = (props: any) => {
    
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
            <div className='centerPosition'>
                <div className='widthPT topPosition classContainer'>
                    {classData.filter(isSearched).map((item) => (
                            <div className='gridjoblistItem centerPosition' onClick={() => navClick('classfull', item.name)} key={item.name + "class"}  >
                                <ClassDisplay data={item}/>
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

export default PT_Class