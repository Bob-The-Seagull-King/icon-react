import React from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../../utility/functions';
import {convertStringToContent} from '../../utility/util';
import '../../styles/iconcomponent.scss';

import addonData from '../../resources/data/player/abilityaddon.json';
import AddonDisplay from '../itemdisplaysubcomponents/AddonDisplay'
import summonData from '../../resources/data/player/summon.json';
import SummonDisplay from '../itemdisplaycomponents/SummonDisplay'
import GlossaryPopup from '../../components/pagecomponents/GlossaryPopup';

const AbilityDisplay = (props: any) => {
    /**
     * Prop format {values:item, _talents:NUMBER, _mastery:BOOLEAN}
     * _talents:    0 = none
     *              1 = talent 1
     *              2 = talent 2
     *              3 = both
     */


    // Declare Summon Variables --------------------
    const abilityData = props.data.values;
    const talents = props.data._talents;
    const mastery = props.data._mastery;
    const bannedAbilityTags = ["slay", "infuse", "mastery", "trait"];
    // ---------------------------------------------

    // Run evaluations -----------------------------
    const tagsArray = tagReturn(); 
    const abilityAddonArray = abilityAddonReturn();
    const summonAddonArray = summonAddonReturn();
    const masteryAddonArray = masteryAddonReturn();
    const isNotTrait = !isTrait();
    // ---------------------------------------------

    // Evaluation functions ------------------------
    /**
     * Checks if an ability is part of a trait
     * @returns Boolean result
     */
    function isTrait() {
        const isDisplay = containsTag(abilityData.tags, "trait");
        return isDisplay;
    }

    /**
     * Returns all ability specific addons
     * @returns Array any[] of ability addons
     */
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

    /**
     * Returns all ability specific summmons
     * @returns Array any[] of ability summons
     */
    function summonAddonReturn() {
        const summonAddons = [];
        let i = 0;

        for (i = 0; i < summonData.length; i++) {
            if ((containsTag(summonData[i].tags, "ability"))) {
                if (getTagValue(summonData[i].tags, "ability") == abilityData.name) {
                    summonAddons.push(summonData[i]);
                }
            }
        }

        return summonAddons;
    }

    /**
     * Returns all mastery addons
     * @returns Array any[] of mastery addons
     */
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
     * Returns a string to display ability tag information
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

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/' +  '/player/tactics/'+ dir + name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    // Return result -------------------------------
    return (
        <div className='abilityStructure'>
            <h1 className={'titleShape title'+getColour(abilityData.job)}>{abilityData.name}</h1>
            <p>{tagsArray}</p>
            <p><i>{abilityData.blurb}</i></p>
            <div>
                <p>
                    {convertStringToContent(abilityData.description)}
                </p>
            </div>
            <div>
                {abilityAddonArray.map((item) => (
                <div key={item.name} className='abilityAddonPosition'>
                    <AddonDisplay className='abiltyAddonSize' data={item}/>
                </div>
                ))}
            </div>
            <div>
                {summonAddonArray.map((item) => (
                <div key={item.name}  onClick={() => navClick('summon', item.name)}   className='abilityAddonPosition'>
                    <SummonDisplay className='abiltyAddonSize' data={item}/>
                </div>
                ))}
            </div>
            {(isNotTrait == true)&& <span>
                {(talents == 1 || talents == 3) &&
                <p><b>I.</b>   
                    <span>{convertStringToContent(abilityData.talent1)}</span></p>
                }
                {(talents == 2 || talents == 3) &&
                <p><b>II.</b>  
                    <span>{convertStringToContent(abilityData.talent2)}</span></p>
                }
                {(mastery == true) &&
                <span>
                    <h2>Mastery: {capitalizeTag(abilityData.masteryname)}</h2>
                    <div>
                        <p>{convertStringToContent(abilityData.masterdescription)}</p></div>
                    <div>
                        {masteryAddonArray.map((item) => (
                        <div key={item.name}  className='abilityAddonPosition' >
                            <AddonDisplay className='abiltyAddonSize' data={item}/>
                        </div>
                        ))}
                    </div>
                </span>
                }
                </span>
            }
            <br/>
        </div>
    )
    // ------------------------------------------
}

export default AbilityDisplay