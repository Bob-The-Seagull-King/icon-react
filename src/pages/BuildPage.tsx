import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../utility/functions';
import '../styles/iconcomponent.scss';
import '../styles/iconbuild.scss';
import { useNavigate } from "react-router-dom";

import SummonDisplay from '../components/SummonDisplay'
import RelicDisplay from '../components/RelicDisplay'
import AbilityDisplay from '../components/AbilityDisplay'
import JobFullDisplay from '../components/JobFullDisplay'
import ClassFullDisplay from '../components/ClassFullDisplay'
import ClassStatsDisplay from '../components/ClassStatsDisplay';
import LimitBreakDisplay from '../components/LimitBreakDisplay';
import ClassMechanicDisplay from '../components/ClassMechanicDisplay';
import TraitsDisplay from '../components/TraitsDisplay';

import summonData from '../resources/data/summon.json';
import relicData from '../resources/data/relic.json';
import abilityData from '../resources/data/ability.json';
import classData from '../resources/data/class.json';

const BuildPage: React.FC = () => {
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

    const relicsdata: any[] = [];
    const abilitydata: any[] = [];
    const characterdata: any[] = [];
    const summondata: any[] = [];
    const traitdata: any[] = [];

    parseURL();
    const isValid = validateURL();
    gatherTraits();
    

    // Parse URL into Data --------------------------

    function parseURL() {
        // Grab Splits ------------------------------
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');
        const urlBuildParam = urlSplits[2];
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

            if (tempSplit[0] == 'c') {
                classVal = tempSplit[1];
            }
            if (tempSplit[0] == 'j') {
                jobVal = tempSplit[1];
            }
            if (tempSplit[0] == 'l') {
                levelVal = tempSplit[1];
            }
            if (tempSplit[0] == 'r') {
                relicVal = tempSplit[1];
            }
            if (tempSplit[0] == 'a') {
                abilityVal = tempSplit[1];
            }
        }

        parseCharacter(classVal, jobVal, levelVal);
        parseRelic(relicVal);
        parseAbility(abilityVal);
        parsesummons(jobVal);
    }

    function parseCharacter(classVal: string, jobVal: string, levelVal: string) {
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

    function parseRelic(relicVal: string) {
        const relicsplit = relicVal.split(':');
        
        let i = 0;
        for (i = 0; i < relicsplit.length; i++) {
            const relictemp = relicsplit[i].split(',');
            relictemp[0] = relictemp[0].replace('%20', ' ');

            const newrelic: any[] = [];

            let j = 0;
            for (j = 0; j < relicData.length; j++) {
                if (relicData[j].name.toLowerCase() == relictemp[0].toLowerCase()) {
                    newrelic[0] = relicData[j];
                    newrelic[1] = relictemp[1];
                }
            }

            if (newrelic.length > 0) {
                relicsdata.push(newrelic);
            }

        }
    }

    function parseAbility(abilityVal: string) {
        const abilitysplit = abilityVal.split(':');
        
        let i = 0;
        for (i = 0; i < abilitysplit.length; i++) {
            const abilitytemp = abilitysplit[i].split(',');
            abilitytemp[0] = abilitytemp[0].replace('%20', ' ');

            const newability: any[] = [];

            let j = 0;
            for (j = 0; j < abilityData.length; j++) {
                if (abilityData[j].name.toLowerCase() == abilitytemp[0].toLowerCase()) {
                    newability[0] = abilityData[j];
                    newability[1] = abilitytemp[1];
                    newability[2] = abilitytemp[2];
                }
            }

            if (newability.length > 0) {
                abilitydata.push(newability);
            }

        }
    }

    function parsesummons(jobval: string) {
        let i = 0;

        for (i = 0; i < summonData.length; i++) {
            if ((summonData[i].job.toLowerCase() == jobval.toLowerCase()) && (!containsTag(summonData[i].tags, "ability"))) {
                summondata.push(summonData[i]);   
            }
        }
    }

    function gatherTraits() {
        const traits: any[] = [];

        let i = 0;
        for (i = 0; i < characterdata[0].traits.length; i++) {
            traits.push(characterdata[0].traits[i]);
        }
        for (i = 0; i < characterdata[1].traits.length; i++) {
            traits.push(characterdata[1].traits[i]);
        }

        const obj = {"traits":traits, "name": characterdata[1].name};

        traitdata.push(obj);
    }

    // -------------------------------------------

    // Validate Content --------------------------

    function validateURL() {

        if ((characterdata[0] != undefined)
        && (characterdata[1] != undefined)
        && (characterdata[2] != "")
        ) {
            return true;
        }

        return false;
    }

    function isUltimate() {
        return (characterdata[2] >= 9);
    }

    // -------------------------------------------

    // Return content ----------------------------
    
    function summonStructure() {
        if (summondata.length > 0) {
            return (
            <div>
                <h1 className={'titleShape title'+getColour(characterdata[1].name)}>Summons</h1>
                <div>
                    {summondata.map((item) => (
                    <div key={item.name} onClick={() => navClickSummon(item.name)}>
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

        return (
            <span>{_tagExport}</span>
        )
    }

    function getRelicData(data: any) {
        return {values:data[0], tier:data[1]};
    }
    function getAbilityData(data: any) {
        const mastered = (data[2].toLowerCase == "y");
        return {values:data[0], _talents:data[1], _mastery:mastered};
    }
    // --------------------------------------------

    // Navigation ----------------------------------
    function navClickSummon (name: string) {    
        window.open(location.protocol + '//' + location.host +'/summon/'+name, '_blank', 'noopener,noreferrer');
    }
    function navClickRelic (name: string) {    
        window.open(location.protocol + '//' + location.host +'/relic/'+name, '_blank', 'noopener,noreferrer');
    }
    function navClickAbility (name: string) {    
        window.open(location.protocol + '//' + location.host +'/ability/'+name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {isValid && 
                <div className='pagecontainer'>



                    <div className='baseStructure'>

                        <div className='pageitema'>
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
                            </div>
                            <div className='gridItem'> 
                                <TraitsDisplay key={characterdata[0].name + "traits"} data={traitdata[0]}/>
                                {characterdata[2] >= 9 &&
                                
                                    <div className='baseStructure gridItem'>
                                        <p><b>{characterdata[1].ultimatetrait.name}: {tagReturn()} </b><span dangerouslySetInnerHTML={{__html: (characterdata[1].ultimatetrait.description || '')}} /></p>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className='jobfeaturecontainer'>
                            {characterdata[2] >= 1 &&
                            <div className='gridItem'>
                                <LimitBreakDisplay className='jobFeature' key={characterdata[1].name + "LimitBreak"} data={{values:characterdata[1], ultimate:isUltimate()}}/>
                            </div>
                            }
                            <div className='gridItem'> 
                                {summonStructure()}
                            </div>
                        </div>
                        
                    </div>



                    <div className='pageitemb'>
                        <div className='baseCleanStructure'>
                                
                            <div className='centerPosition'>
                                <h1 className={'medtitleShape title'+getColour(characterdata[1].name)}>Relics</h1>
                            </div>
                            <br/>
                            <div className='reliccontainer'>
                                {relicsdata.map((item) => (
                                <div className='gridItem' onClick={() => navClickRelic(item[0].name)} key={item[0].name + "relic"}  >
                                    <RelicDisplay data={getRelicData(item)}/>
                                </div>
                                ))}
                            </div>
                            <br/>
                            
                            <div className='centerPosition'>
                                <h1 className={'medtitleShape title'+getColour(characterdata[1].name)}>Abilities</h1>
                            </div>
                            <br/>
                            <div className='abilitycontainer'>
                                {abilitydata.map((item) => (
                                <div className='gridItem' onClick={() => navClickAbility(item[0].name)} key={item[0].name + "ability"}  >
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
                    <h1 style={{fontSize:'4em'}}>DATA ERROR</h1>
                </div>
            }
        </div>
    )
    // -------------------------------------------
}

export default BuildPage
