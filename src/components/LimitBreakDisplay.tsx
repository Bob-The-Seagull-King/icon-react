import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../utility/functions';

import addonData from '../resources/data/abilityaddon.json';
import AddonDisplay from '../components/AddonDisplay'
import summonData from '../resources/data/summon.json';
import SummonDisplay from '../components/SummonDisplay'

const LimitBreakDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const limitBreakData = props.data;
    const bannedAbilityTags = ["slay", "infuse", "mastery", "trait"];
    // ---------------------------------------------

    // Run evaluations -----------------------------
    const tagsArray = tagReturn();
    const abilityAddonArray = abilityAddonReturn();
    const summonAddonArray = summonAddonReturn();
    const masteryAddonArray = masteryAddonReturn();
    // ---------------------------------------------

    // Evaluation functions ------------------------


    function abilityAddonReturn() {
        const abilityAddons = [];
        let i = 0;

        for (i = 0; i < addonData.length; i++) {
            if ((addonData[i].ability == limitBreakData.limitbreak.name) && (!containsTag(addonData[i].tags, "mastery"))) {
                abilityAddons.push(addonData[i]);
            }
        }

        return abilityAddons;
    }

    function summonAddonReturn() {
        const summonAddons = [];
        let i = 0;

        for (i = 0; i < summonData.length; i++) {
            if ((containsTag(summonData[i].tags, "ability"))) {
                if (getTagValue(summonData[i].tags, "ability") == limitBreakData.limitbreak.name) {
                    summonAddons.push(summonData[i]);
                }
            }
        }

        return summonAddons;
    }

    function masteryAddonReturn() {
        const masteryAddons = [];
        let i = 0;

        for (i = 0; i < addonData.length; i++) {
            if ((addonData[i].ability == limitBreakData.limitbreak.name) && (containsTag(addonData[i].tags, "mastery"))) {
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

        
        for (i = 0; i < limitBreakData.limitbreak.tags.length; i++) {
            if ((!bannedAbilityTags.includes( limitBreakData.limitbreak.tags[i].tag_name ))) {
                let tagName = capitalizeTag(limitBreakData.limitbreak.tags[i].tag_name);
                if (limitBreakData.limitbreak.tags[i].val != undefined) {
                    tagName+= " " + limitBreakData.limitbreak.tags[i].val;
                }
                if (tagName == "Action 0") {
                    tagName = "Free Action";
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
            <h1 style={{color: getColour(limitBreakData.name)}}>{limitBreakData.limitbreak.name}</h1>
            
            <p>{tagsArray}</p>
            <span><i><p dangerouslySetInnerHTML={{__html: (limitBreakData.limitbreak.blurb || '')}}/></i></span>
            <div><p dangerouslySetInnerHTML={{__html: (limitBreakData.limitbreak.description || '')}}></p></div>
            
            <div>
                {abilityAddonArray.map((item) => (
                <div key={item.name} style={{paddingLeft: "20%", paddingRight: "20%"}} >
                    <AddonDisplay data={item}/>
                </div>  
                ))}
            </div>
            <div>
                {summonAddonArray.map((item) => (
                <div key={item.name} style={{paddingLeft: "20%", paddingRight: "20%"}} >
                    <SummonDisplay data={item}/>
                </div>
                ))}
            </div> 
            <span>
                <h2>Mastery: {capitalizeTag(limitBreakData.limitbreak.ultimate.name)}</h2>
                <div><p dangerouslySetInnerHTML={{__html: (limitBreakData.limitbreak.ultimate.desc || '')}}></p></div>
                <div>
                    {masteryAddonArray.map((item) => (
                    <div key={item.name} style={{paddingLeft: "20%", paddingRight: "20%"}} >
                        <AddonDisplay data={item}/>
                    </div>
                    ))}
                </div>
            </span>
        </div>
    )
}

export default LimitBreakDisplay