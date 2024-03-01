import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

import abilityData from '../../resources/data/ability.json';
import AbilityDisplay from '../itemdisplaycomponents/AbilityDisplay';

const PT_Ability = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => ((!containsTag(value.tags, "trait")) && ((value.name.toLowerCase().includes(searchVal.toLowerCase())) || (value.job.toLowerCase().includes(searchVal.toLowerCase()))));

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

    function renderList() {

        return (
            <div className='widthPT centerPosition topPosition'>
                {abilityData.filter(isSearched).map((item) => (
                    <div className='gridItem' onClick={() => navClick('ability', item.name)} key={item.name + "ability"}  >
                        <AbilityDisplay data={{values:item, _talents:3, _mastery:true}}/>
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

export default PT_Ability