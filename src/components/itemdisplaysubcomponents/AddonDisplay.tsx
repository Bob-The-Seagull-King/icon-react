import React from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

const AddonDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const addonData = props.data;
    const bannedAddonTags = ["slay", "infuse", "mastery", "combo"];
    // ---------------------------------------------

    // Run evaluations -----------------------------
    const title = titleReturn();
    const tagsArray = tagReturn(); 
    // ---------------------------------------------

    // Evaluation functions ------------------------
    /**
     * Returns the title of an addon
     * @returns String title for an addon
     */
    function titleReturn() {
        let _title = "";

        if (containsTag(addonData.tags, "combo")) {
            _title += "Combo"
        }

        if (containsTag(addonData.tags, "slay")) {
            _title += "Slay or "
        }

        if (containsTag(addonData.tags, "infuse")) {
            _title += "Infuse " + getTagValue(addonData.tags, "infuse").toString(); 
        }

        if (_title.length > 0) {
            _title += ": "
        }

        _title += addonData.name;
        
        return _title;
    }

    /**
     * Returns a string to display addon tag information
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
                if (tagName == "Action 0") {
                    tagName = "Free Action";
                }
                if (tagName == "Action 1") {
                    tagName = "1 Action";
                }
                if (tagName == "Action 2") {
                    tagName = "2 Actions";
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

    // Return result -------------------------------
    return (
        <div className='addonStructure'>
            <h3 className={'titleShape subtitle'+getColour(addonData.job)}>{title}</h3>
            <p>{tagsArray}</p>
            <div><p dangerouslySetInnerHTML={{__html: (addonData.description || '')}}></p></div>
        </div>
    )
    // ---------------------------------------------
}

export default AddonDisplay