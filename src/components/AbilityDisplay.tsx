import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../utility/functions';

import addonData from '../resources/data/abilityaddon.json';
import AddonDisplay from '../components/AddonDisplay'

const AbilityDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const abilityData = props.data;
    const bannedAbilityTags = ["slay", "infuse", "mastery"];
    // ---------------------------------------------

    // Run evaluations -----------------------------
    const tagsArray = tagReturn(); 
    const abilityAddonArray = abilityAddonReturn();
    const masteryAddonArray = masteryAddonReturn();
    const isNotTrait = !isTrait();
    // ---------------------------------------------

    // Evaluation functions ------------------------
    function isTrait() {
        const isDisplay = containsTag(abilityData.tags, "trait");
        return isDisplay;
    }

    function abilityAddonReturn() {
        const abilityAddons = [];
        let i = 0;

        for (i = 0; i < addonData.length; i++) {
            if ((addonData[i].ability == abilityData.name) && (!containsTag(addonData[i].tags, "mastery"))) {
                abilityAddons.push(addonData[i]);
            }
        }

        return abilityAddons;
    }

    function masteryAddonReturn() {
        const masteryAddons = [];
        let i = 0;

        for (i = 0; i < addonData.length; i++) {
            if ((addonData[i].ability == abilityData.name) && (containsTag(addonData[i].tags, "mastery"))) {
                masteryAddons.push(addonData[i]);
            }
        }

        return masteryAddons;
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

        
        for (i = 0; i < abilityData.tags.length; i++) {
            if ((!bannedAbilityTags.includes( abilityData.tags[i].tag_name ))) {
                let tagName = capitalizeTag(abilityData.tags[i].tag_name);
                if (abilityData.tags[i].val != undefined) {
                    tagName+= " " + abilityData.tags[i].val;
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
            <h1 style={{color: getColour(abilityData.job)}}>{abilityData.name}</h1>
            <p>{tagsArray}</p>
            <p><i>{abilityData.blurb}</i></p>
            <div><p dangerouslySetInnerHTML={{__html: (abilityData.description || '')}}></p></div>
            <div>
                {abilityAddonArray.map((item) => (
                <AddonDisplay key={item.name} data={item}/>
                ))}
            </div>
            {isNotTrait == true && <span>
                <p>I.   <span dangerouslySetInnerHTML={{__html: (abilityData.talent1 || '')}}></span></p>
                <p>II.  <span dangerouslySetInnerHTML={{__html: (abilityData.talent2 || '')}}></span></p>
                <h2>Mastery: {abilityData.masteryname}</h2>
                <div><p dangerouslySetInnerHTML={{__html: (abilityData.masterdescription || '')}}></p></div>
                <div>
                    {masteryAddonArray.map((item) => (
                    <AddonDisplay key={item.name} data={item}/>
                    ))}
                </div>
                </span>
            }
        </div>
    )
}

export default AbilityDisplay