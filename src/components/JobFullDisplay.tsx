import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../utility/functions';
import '../styles/iconcomponent.scss';
import { useNavigate } from "react-router-dom";

import JobDisplay from '../components/JobDisplay'
import AbilityDisplay from '../components/AbilityDisplay'

import abilityData from '../resources/data/ability.json';

const JobDisplayFull = (props: any) => {
    // Declare Summon Variables --------------------
    const jobData = props.data;
    const bannedUltimateTags: string[] = [];
    // ---------------------------------------------

    // Run evaluations -----------------------------
    const abilityChapter1: any[] = [];
    const abilityChapter2: any[] = [];
    const abilityChapter3: any[] = [];
    abilitySort();
    // ---------------------------------------------

    // Evaluation functions ------------------------
    /**
     * Splits all abilities for a job into three
     * arrays, one for each chapter
     */
    function abilitySort() {
        let i = 0;

        for (i = 0; i < abilityData.length; i++) {
            if ((abilityData[i].job == jobData.name) && (!containsTag(abilityData[i].tags, "trait"))) {
                if (abilityData[i].chapter == 1) {
                    abilityChapter1.push(abilityData[i]);
                }
                if (abilityData[i].chapter == 2) {
                    abilityChapter2.push(abilityData[i]);
                }
                if (abilityData[i].chapter == 3) {
                    abilityChapter3.push(abilityData[i]);
                }
            }
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

        
        for (i = 0; i < jobData.ultimatetrait.tags.length; i++) {
            if ((!bannedUltimateTags.includes( jobData.ultimatetrait.tags[i].tag_name ))) {
                let tagName = capitalizeTag(jobData.ultimatetrait.tags[i].tag_name);
                if (jobData.ultimatetrait.tags[i].val != undefined) {
                    tagName+= " " + jobData.ultimatetrait.tags[i].val;
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
    // --------------------------------------------

    // Navigation ----------------------------------
    function navClickAbility (name: string) {    
        window.open(location.protocol + '//' + location.host +'/ability/'+name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Navigation ----------------------------------
    function navClickSummon (name: string) {    
        window.open(location.protocol + '//' + location.host +'/summon/'+name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return result ------------------------------
    return (
        <div className='jobcontainer'>
            <div className='jobitema'>
                <JobDisplay key={jobData.name} data={jobData}/>
            </div>
            <div className='jobitemb'>
                <h1 className={'titleShape title'+getColour(jobData.name)}>Abilities:</h1>
                <h2>Chapter 1:</h2>
                <div className='abilityContainer'>
                    {abilityChapter1.map((item) => (
                    <div className='gridItem' onClick={() => navClickAbility(item.name)} key={item.name + "ability"}  >
                        <AbilityDisplay data={{values:item, _talents:3, _mastery:true}}/>
                    </div>
                    ))}
                </div>
                <h2>Chapter 2:</h2>
                <div className='abilityContainer'>
                    {abilityChapter2.map((item) => (
                    <div className='gridItem' onClick={() => navClickAbility(item.name)} key={item.name + "ability"}  >
                        <AbilityDisplay data={{values:item, _talents:3, _mastery:true}}/>
                    </div>
                    ))}
                </div>
                <h2>Chapter 3:</h2>
                <div className='bonustraitStructure gridItem'>
                    <p><b>{jobData.ultimatetrait.name}: {tagReturn()} </b><span dangerouslySetInnerHTML={{__html: (jobData.ultimatetrait.description || '')}} /></p>
                </div>
                <div className='abilityContainer'>
                    {abilityChapter3.map((item) => (
                    <div className='gridItem' onClick={() => navClickAbility(item.name)} key={item.name + "ability"}  >
                        <AbilityDisplay data={{values:item, _talents:3, _mastery:true}}/>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
    // ---------------------------------------------
}

export default JobDisplayFull
