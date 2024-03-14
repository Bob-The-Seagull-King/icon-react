import React  from 'react'
import { capitalizeTag, containsTag} from '../../utility/functions';
import '../../styles/iconcomponent.scss';

import trophydata from '../../resources/data/general/trophies.json';
import TrophyDisplay from '../../components/itemdisplaycomponents/TrophyDisplay';
import InfoSubset from '../pagecomponents/InfoSubset';

const GT_Trophies = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => ((value.name.toLowerCase().includes(searchVal.toLowerCase())));
    const searchedrules = trophydata.filter(isSearched).sort((a, b) => a.name.localeCompare(b.name));
    const hiddentags = ["legend"];
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
            for (j = 0; j < searchedrules[i].faction.length; j++) {
                if (!temp.includes(searchedrules[i].faction[j])) {
                    if (!(searchedrules[i].faction.includes("legend") && (searchedrules[i].faction[j] != "legend"))) {
                        temp.push(searchedrules[i].faction[j])
                    }
                }
            }
        }
        return temp.sort((a, b) => a.localeCompare(b));
    }

    // Return render -------------------------------
    return (
        <div style={{width:"100%"}}>
            {foundTags.map((item: string) => (
                <div key={item}>
                    <InfoSubset data={{name:item, items:searchedrules.filter(isSearched).filter((product) => product.faction.includes(item)), type: 'trophy', visible: true}}/>
                </div>
            ))}
        </div>
    )
}

export default GT_Trophies