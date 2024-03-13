import React  from 'react'
import { capitalizeTag, containsTag} from '../../utility/functions';
import '../../styles/iconcomponent.scss';

import rulesdata from '../../resources/data/general/combatglossary.json';
import GlossaryRuleDisplay from '../../components/itemdisplaycomponents/GlossaryRuleDisplay';
import InfoSubset from '../pagecomponents/InfoSubset';

const GT_Glossary = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => ((value.name.toLowerCase().includes(searchVal.toLowerCase())));
    const searchedrules = rulesdata.filter(isSearched).sort((a, b) => a.name.localeCompare(b.name));

    const foundTags = findTags();
    
    /**
     * Takes the path and returns the rule
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

    // Return render -------------------------------
    return (
        <div className=''>
            {foundTags.map((item: string) => (
                <div key={item}>
                    <InfoSubset data={{name:item, items:searchedrules.filter(isSearched).filter((product) => containsTag(product.tags, item)), type: 'glossary', visible: true}}/>
                </div>
            ))}
        </div>
    )
}

export default GT_Glossary