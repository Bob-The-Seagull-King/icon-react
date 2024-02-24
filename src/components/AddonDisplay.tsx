import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../utility/functions';

const AddonDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const addonData = props.data;
    const bannedAddonTags = ["slay", "infuse", "mastery"];
    // ---------------------------------------------

    // Run evaluations -----------------------------
    const title = titleReturn();
    const tagsArray = tagReturn(); 
    // ---------------------------------------------

    // Evaluation functions ------------------------
    function titleReturn() {
        let _title = "";

        if (containsTag(addonData.tags, "slay")) {
            _title += "Slay or "
        }

        if (containsTag(addonData.tags, "infuse")) {
            _title += "Infuse " + getTagValue(addonData.tags, "infuse").toString() + ": "; 
        }

        _title += addonData.name;
        
        return _title;
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

        
        for (i = 0; i < addonData.tags.length; i++) {
            if ((!bannedAddonTags.includes( addonData.tags[i].tag_name ))) {
                let tagName = capitalizeTag(addonData.tags[i].tag_name);
                if (addonData.tags[i].val != undefined) {
                    tagName+= " " + addonData.tags[i].val;
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

    return (
        <div>
            <h3 style={{color: getColour(addonData.job)}}>{title}</h3>
            <p>{tagsArray}</p>
            <div><p dangerouslySetInnerHTML={{__html: (addonData.description || '')}}></p></div>
        </div>
    )
}

export default AddonDisplay