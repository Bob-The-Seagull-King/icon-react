import React from 'react'
import { capitalizeTag, getColour } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import {convertStringToContent} from '../../utility/util';

const SummonDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const summonData = props.data;
    const bannedSummonTags: string[] = ["ability"];
    // ---------------------------------------------

    // Run evaluations -----------------------------
    const limitText = limitVal();
    const tagsArray = tagReturn(); 
    // ---------------------------------------------

    // Evaluation functions ------------------------

    /**
     * Returns a string based on the summon name and
     * how many of a summon you can have at once
     * @returns String describing how many of a summon
     * the player can have
     */
    function limitVal() {
        let _limitVal = "";

        if (summonData.limit == 0) {
            _limitVal = "You can have any number of " + summonData.name + "s at a time."
        } else if (summonData.limit == 1) {
            _limitVal = "You can only have 1 " + summonData.name + " at a time."
        } else {
            _limitVal = "You can have a maximum of " + summonData.limit + " " + summonData.name + "s at a time."
        }

        return _limitVal;
    }

    /**
     * Returns a string to display summon tag information
     * @returns String with all valid tags, their values
     * and formatting if required
     */
    function tagReturn() {
        const _tagArray: string[] = [];
        let _tagExport = "";
        let i = 0
        
        for (i = 0; i < summonData.tags.length; i++) {
            if (!bannedSummonTags.includes( summonData.tags[i].tag_name )) {
                let tagName = capitalizeTag(summonData.tags[i].tag_name);
                if (summonData.tags[i].val != undefined) {
                    tagName+= " " + summonData.tags[i].val;
                }
                _tagArray.push(tagName);
            }
        }

        for (i = 0; i < _tagArray.length; i++) {
            _tagExport += _tagArray[i];
            if (i < _tagArray.length - 1) {
                _tagExport += ", ";
            }
        }

        return _tagExport;
    }
    // ---------------------------------------------

    // Navigation ----------------------------------
    function navClickSummon () {    
        window.open(location.protocol + '//' + location.host +'/player/tactics/summon/'+summonData.name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return render -------------------------------
    return (
        <div className='summonStructure'>
            <h1 className={'titleShape title'+getColour(summonData.job)}>{summonData.name}</h1>
            <p>{tagsArray}</p>
            <div><p>{convertStringToContent(summonData.description)}</p></div>
            <p>{limitText}</p>
        </div>
    )
    // ---------------------------------------------
}

export default SummonDisplay