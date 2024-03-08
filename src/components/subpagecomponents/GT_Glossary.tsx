import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag} from '../../utility/functions';
import '../../styles/iconcomponent.scss';

import rulesdata from '../../resources/data/general/combatglossary.json';
import GlossaryRuleDisplay from '../../components/itemdisplaycomponents/GlossaryRuleDisplay';

const GT_Glossary = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => ((value.name.toLowerCase().includes(searchVal.toLowerCase())));

    const searchedrules = rulesdata.filter(isSearched).sort((a, b) => a.name.localeCompare(b.name));

    const foundTags = findTags();

    function urlParse() {
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');
        if (urlSplits.length >= 5) {
            
            urlSplits[4] = urlSplits[4].replaceAll('%20', ' ');
            return urlSplits[4];
        }
        return "";
    }

    function findTags() {
        const temp: string[] = [];
        let i = 0;

        for (i = 0; i < searchedrules.length; i++) {
            let j = 0;
            for (j = 0; j < searchedrules[i].tags.length; j++) {
                if (!temp.includes(searchedrules[i].tags[j].tag_name)) {
                    temp.push(searchedrules[i].tags[j].tag_name)
                }
            }
        }
        return temp.sort((a, b) => a.localeCompare(b));
    }

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host + '/general/tactics/' + dir + '/' + name, '_selfs', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    function returnTagCat(category: string) {


        return (
            <div className='widthPN centerPosition topPosition'>
            {searchedrules.filter(isSearched).map((item: any) => (
                <div key={item.name+category}>
                    {containsTag(item.tags, category) &&
                        <div className='gridItemRule' onClick={() => navClick('glossary', item.name)} key={item.name + "rule"}  >
                            <GlossaryRuleDisplay data={item}/>
                        </div>
                    }
                </div>
                ))}
            </div>
        )
    }

    // Return render -------------------------------
    return (
        <div className=''>
            {foundTags.map((item: string) => (
                <div key={item}>
                    
                <div className='centerPosition'>
                    <h1 className={'megatitleShape titlePurple'}>{capitalizeTag(item)}</h1>
                </div>
                {returnTagCat(item)}
                </div>
                
            ))}
        </div>
    )
}

export default GT_Glossary