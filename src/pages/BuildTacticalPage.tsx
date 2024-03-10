import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../utility/functions';
import '../styles/iconcomponent.scss';
import '../styles/iconbuild.scss';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

import SummonDisplay from '../components/itemdisplaycomponents/SummonDisplay'
import RelicDisplay from '../components/itemdisplaycomponents/RelicDisplay'
import AbilityDisplay from '../components/itemdisplaycomponents/AbilityDisplay'
import ClassStatsDisplay from '../components/itemdisplaysubcomponents/ClassStatsDisplay';
import LimitBreakDisplay from '../components/itemdisplaysubcomponents/LimitBreakDisplay';
import ClassMechanicDisplay from '../components/itemdisplaysubcomponents/ClassMechanicDisplay';
import TraitsDisplay from '../components/itemdisplaysubcomponents/TraitsDisplay';
import BuildSearch from '../components/pagecomponents/BuildSearch';

import summonData from '../resources/data/player/summon.json';
import relicData from '../resources/data/player/relic.json';
import abilityData from '../resources/data/player/ability.json';
import classData from '../resources/data/player/class.json';

const BuildTacticalPage: React.FC = () => {
    /**
     * URL FORMAT
     * 
     * c=[Class Name];j=[Job Name];l=[Level];r=[Relics];a=[Abilities]
     * 
     * RELICS FORMAT
     * [Name],[Tier]:[Name],[Tier]: etc etc
     * 
     * ABILITIES FORMAT
     * [Name],[Talent],[Mastery Y/N]:[Name],[Talent],[Mastery Y/N]: etc etc
     */
    
    const bannedUltimateTags: string[] = [];

    // JSON data used in this build -------------------------
    const relicsdata: any[] = [];
    const abilitydata: any[] = [];
    const characterdata: any[] = [];
    const summondata: any[] = [];
    const traitdata: any[] = [];
    const gambitdata: any[] = [];
    // ------------------------------------------------------

    // Reads URL and gathers appropriate data ---------------
    parseURL();
    const isValid = validateURL();
    if (isValid) {
        gatherTraits();
        gatherGambits();
    }
    // ------------------------------------------------------

    // Parse URL into Data --------------------------

    function grabURL() {
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');
        let urlBuildParam = "";
        if (urlSplits.length >= 4) {
            urlBuildParam = urlSplits[3];
            if (urlBuildParam.length > 0) {
                Cookies.set('tacticsbuildparam', urlBuildParam);
                return urlBuildParam;
            }
        }

        urlBuildParam = Cookies.get('tacticsbuildparam') ?? "";
        
        return urlBuildParam;
    }

    /**
     * Takes the URL, splits it into the needed components,
     * and sends the right value into the relavent parsing
     * methods.
     */
    function parseURL() {
        // Grab Splits ------------------------------
        
        const urlBuildParam = grabURL();
        const buildSplits = urlBuildParam.split(';');
        // ------------------------------------------

        // Store Values For Params ------------------
        let classVal = '';
        let jobVal = '';
        let levelVal = '';
        let relicVal = '';
        let abilityVal = '';
        // ------------------------------------------

        let i = 0;
        for (i = 0; i < buildSplits.length; i++) {
            const tempSplit = buildSplits[i].split('=');

            if (tempSplit[0] == 'c') { classVal = tempSplit[1]; }
            if (tempSplit[0] == 'j') { jobVal = tempSplit[1]; }
            if (tempSplit[0] == 'l') { levelVal = tempSplit[1]; }
            if (tempSplit[0] == 'r') { relicVal = tempSplit[1]; }
            if (tempSplit[0] == 'a') { abilityVal = tempSplit[1]; }
        }

        parseCharacter(classVal, jobVal, levelVal);
        parseRelic(relicVal);
        parseAbility(abilityVal);
        parsesummons(jobVal);
    }

    /**
     * Takes values to find the right class and job data
     * while also storing the player's level.
     * 
     * Format [Class JSON Data, Job JSON Data, Charcter Level]
     * 
     * @param classVal Name of the player's Class
     * @param jobVal Name of the player's Job
     * @param levelVal The player's current Level
     */
    function parseCharacter(classVal: string, jobVal: string, levelVal: string) {        
        classVal = classVal.replaceAll('%20', ' ');
        jobVal = jobVal.replaceAll('%20', ' ');
        levelVal = levelVal.replaceAll('%20', ' ');
        
        let i = 0;
        for (i=0; i < classData.length; i++) {
            if (classData[i].name.toLowerCase() == classVal.toLowerCase()) {
                characterdata[0] = classData[i];

                let j = 0;
                for (j = 0; j < classData[i].jobs.length; j ++) {
                    if (classData[i].jobs[j].name.toLowerCase() == jobVal.toLowerCase()) {
                        characterdata[1] = classData[i].jobs[j];
                    }
                }
            }
        }
        characterdata[2] = levelVal;
    }

    /**
     * Takes the relic string, splits it up, and
     * finds the relic data for each one and creates
     * an array of arrays.
     * 
     * Format: [Relic JSON Data, Tier of Relic]
     * 
     * @param relicVal URL-found string of relic information
     */
    function parseRelic(relicVal: string) {
        const relicsplit = relicVal.split(':');
        
        let i = 0;
        for (i = 0; i < relicsplit.length; i++) {
            const relictemp = relicsplit[i].split(',');
            relictemp[0] = relictemp[0].replaceAll('%20', ' ');
            const newrelic: any[] = [];

            let j = 0;
            for (j = 0; j < relicData.length; j++) {
                if (relicData[j].name.toLowerCase() == relictemp[0].toLowerCase()) {
                    newrelic[0] = relicData[j];
                    newrelic[1] = relictemp[1];
                }
            }
            if (newrelic.length > 0) { relicsdata.push(newrelic); }
        }
    }

    /**
     * Takes the ability string, splits it up, and
     * finds the ability data for each one and creates
     * an array of arrays.
     * 
     * Format: [Ability JSON Data, Ability Talent, Ability Mastery]
     * 
     * @param abilityVal URL-found string of ability information
     */
    function parseAbility(abilityVal: string) {
        const abilitysplit = abilityVal.split(':');
        
        let i = 0;
        for (i = 0; i < abilitysplit.length; i++) {
            const abilitytemp = abilitysplit[i].split(',');
            abilitytemp[0] = abilitytemp[0].replaceAll('%20', ' ');
            const newability: any[] = [];

            let j = 0;
            for (j = 0; j < abilityData.length; j++) {
                if (abilityData[j].name.toLowerCase() == abilitytemp[0].toLowerCase()) {
                    newability[0] = abilityData[j];
                    newability[1] = abilitytemp[1];
                    newability[2] = abilitytemp[2];
                }
            }

            if (newability.length > 0) { abilitydata.push(newability); }
        }
    }

    /**
     * Finds the summons mentioned in the job for display
     * and pushes their JSON data to the summondata array.
     * @param jobval The character's Job
     */
    function parsesummons(jobval: string) {
        let i = 0;

        for (i = 0; i < summonData.length; i++) {
            if ((summonData[i].job.toLowerCase() == jobval.toLowerCase()) && (!containsTag(summonData[i].tags, "ability"))) {
                summondata.push(summonData[i]);   
            }
        }
    }

    /**
     * Gathers all traits for both the Class and the
     * Job and puts them into one list for generating
     * a single Traits component.
     */
    function gatherTraits() {
        const traits: any[] = [];

        let i = 0;
        for (i = 0; i < characterdata[0].traits.length; i++) {
            traits.push(characterdata[0].traits[i]); }
        for (i = 0; i < characterdata[1].traits.length; i++) {
            traits.push(characterdata[1].traits[i]); }

        const obj = {"traits":traits, "name": characterdata[1].name};
        traitdata.push(obj);
    }

    /**
     * Checks all abilities and creates a list of any
     * classes that are present and not the character's
     * main class. Then pushes to an array all the
     * gambit information for those classes (if any).
     */
    function gatherGambits() {
        let i = 0;
        const classes: string[] = [];

        for (i = 0; i < abilitydata.length; i++) {
            const colour = getColour(abilitydata[i][0].job);
            if (!classes.includes(colour)) {
                classes.push(colour);
            }
        }

        for (i = 0; i < classes.length; i++) {
            if (!(classes[i] == getColour(characterdata[0].name))) {
                let j = 0;

                for (j = 0; j < classData.length; j++) {
                    console.log(classes[i]);
                    if (classes[i] == getColour(classData[j].name)) {
                        gambitdata.push({"name": classData[j].name, "data": classData[j].mechanic});
                    }
                }
            }
        }
    }

    // -------------------------------------------

    // Validate Content --------------------------

    /**
     * Makes sure all required data is present
     * @returns True if the player class, job,
     * and level exists
     */
    function validateURL() {
        if ((characterdata[0] != undefined)
        && (characterdata[1] != undefined)
        && (characterdata[2] != "")
        ) {
            return true;
        }
        return false;
    }

    /**
     * Checks if the character should show their ultimate
     * @returns True if the player level is 9 or higher
     */
    function isUltimate() { return (characterdata[2] >= 9); }

    // -------------------------------------------

    // Return content ----------------------------
    
    function summonStructure() {
        if (summondata.length > 0) {
            return (
            <div>
                <h1 className={'titleShape title'+getColour(characterdata[1].name)}>Summons</h1>
                <div>
                    {summondata.map((item) => (
                    <div key={item.name} onClick={() => navClick('summon', item.name)}>
                        <br/>
                        <SummonDisplay data={item}/>
                    </div>
                    ))}
                </div>
            </div>
            )
        }
    }

    /**
     * Returns a span with all valid tags in human
     * readable format
     * @returns Span with string of all tags
     */
    function tagReturn() {
        const _tagArray: string[] = [];
        let _tagExport = " ";

        let i = 0
        for (i = 0; i < characterdata[1].ultimatetrait.tags.length; i++) {
            if ((!bannedUltimateTags.includes( characterdata[1].ultimatetrait.tags[i].tag_name ))) {
                let tagName = capitalizeTag(characterdata[1].ultimatetrait.tags[i].tag_name);
                if (characterdata[1].ultimatetrait.tags[i].val != undefined) {
                    tagName+= " " + characterdata[1].ultimatetrait.tags[i].val;
                }
                if (tagName == "Action 0") { tagName = "Free Action"; }
                if (tagName == "Action 1") { tagName = "1 Action"; }
                if (tagName == "Action 2") { tagName = "2 Actions"; }
                _tagArray.push(tagName);
            }
        }

        for (i = 0; i < _tagArray.length; i++) {
            _tagExport += _tagArray[i];
            if (i < _tagArray.length - 1) { _tagExport += ", "; }
        }

        return ( <span>{_tagExport}</span> )
    }

    /**
     * Returns the Prop-Formatted data for a RelicDisplay
     * @param data relicdata entry for the Relic item
     * @returns Prop in the form {values: Relic Data, tier: Number}
     */
    function getRelicData(data: any) { return {values:data[0], tier:data[1]}; }

    /**
     * Returns the Prop-Formatted data for an AbilityDisplay
     * @param data abilitydata entry for the Ability item
     * @returns Prop in the form {values: Ability Data, _talents: Which talents to show, _mastery: If the mastery should be shown}
     */
    function getAbilityData(data: any) { return {values:data[0], _talents:data[1], _mastery:((data[2].toLowerCase() == "y"))}; }
    // --------------------------------------------

    // Navigation ----------------------------------
    /**
     * Opens a page based on the parameters
     * @param page The initial /page/ of the route
     * @param name The end-params for the route
    */
    function navClick (page: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/player/tactics/' + page + '/'+name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{width: '100%', padding: '1.5em'}}>
                <BuildSearch/>
            </div>
            {isValid && 
                <div className='pagecontainer'>
                    <div className='pageitema'>
                        <div className='baseStructure' onClick={() => navClick('job', characterdata[1].name)}>
                            <div>
                                <div className='centerPosition'>
                                    <h1 className={'megatitleShape title'+getColour(characterdata[1].name)}>{capitalizeTag( characterdata[1].name )}</h1>
                                </div>
                                <div className='centerPosition'>
                                    <h3><b>{characterdata[1].tagline}</b></h3>
                                </div>
                            </div>
                            <div className='jobfeaturecontainer'>
                                <div className='gridItem'>
                                    <ClassStatsDisplay key={characterdata[0].name + "stats"} data={characterdata[0]}/>
                                    <br/>
                                    <ClassMechanicDisplay key={characterdata[0].name + "mechanic"} data={characterdata[0]}/>
                                    <div>
                                        <div>
                                            {gambitdata.map((item) => (
                                            <div key={item.name}>
                                                <br/>
                                                <h1 className={'titleShape title'+getColour(item.name)}>{item.name} Gambit:</h1>
                                                <br/>
                                                <span dangerouslySetInnerHTML={{__html: (item.data.gambit || '')}}/>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='gridItem'> 
                                    <TraitsDisplay key={characterdata[0].name + "traits"} data={traitdata[0]}/>
                                    {characterdata[2] >= 9 &&
                                    <div className='baseStructure gridItem'>
                                        <p><b>{characterdata[1].ultimatetrait.name}: {tagReturn()} </b><span dangerouslySetInnerHTML={{__html: (characterdata[1].ultimatetrait.description || '')}} /></p>
                                    </div> }
                                </div>
                            </div>
                            <div className='jobfeaturecontainer'>
                                {characterdata[2] >= 1 &&
                                <div className='gridItem'>
                                    <LimitBreakDisplay className='jobFeature' key={characterdata[1].name + "LimitBreak"} data={{values:characterdata[1], ultimate:isUltimate()}}/>
                                </div> }
                                <div className='gridItem'> 
                                    {summonStructure()}
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className='baseCleanStructure'>
                            <div className='centerPosition'>
                                <h1 className={'medtitleShape title'+getColour(characterdata[1].name)}>Relics</h1>
                            </div>
                            <div className='reliccontainer'>
                                {relicsdata.map((item) => (
                                <div className='relicgriditem' onClick={() => navClick('relic', item[0].name)} key={item[0].name + "relic"}  >
                                    <RelicDisplay data={getRelicData(item)}/>
                                </div> ))}
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className='pageitemb'>
                        <div className='baseCleanStructure'>                            
                            <div className='centerPosition'>
                                <h1 className={'medtitleShape title'+getColour(characterdata[1].name)}>Abilities</h1>
                            </div>
                            <br/>
                            <div className='abilitycontainer'>
                                {abilitydata.map((item) => (
                                <div className='abilitygriditem' onClick={() => navClick('ability', item[0].name)} key={item[0].name + "ability"}  >
                                    <AbilityDisplay data={getAbilityData(item)}/>
                                </div>
                                ))}
                            </div> 
                        </div>
                    </div>
                </div>
            }
            {!isValid &&
                <div>
                    <br/>
                    <div className='baseStructure'>
                        <h1 className='centerPosition' style={{paddingLeft: '2em', paddingRight: '2em'}}>Enter your character details above and<br/>press search to view your build.</h1>
                        <br/>
                    </div>
                </div>
            }
        </div>
    )
    // -------------------------------------------
}

export default BuildTacticalPage
