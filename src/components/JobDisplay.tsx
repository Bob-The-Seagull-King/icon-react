import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../utility/functions';

import SummonDisplay from '../components/SummonDisplay'
import TraitsDisplay from '../components/TraitsDisplay'
import LimitBreakDisplay from '../components/LimitBreakDisplay'
import JobPlaystyleDisplay from '../components/JobPlaystyleDisplay'

import summonData from '../resources/data/summon.json';

const JobDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const jobData = props.data;
    // ---------------------------------------------

    // Run evaluations -----------------------------
    const summonAddonArray = summonAddonReturn();
    // ---------------------------------------------

    // Evaluation functions ------------------------

    function summonAddonReturn() {
        const summonAddons = [];
        let i = 0;

        for (i = 0; i < summonData.length; i++) {
            if ((summonData[i].job == jobData.name) && (!containsTag(summonData[i].tags, "ability"))) {
                summonAddons.push(summonData[i]);   
            }
        }

        return summonAddons;
    }

    function summonStructure() {
        if (summonAddonArray.length > 0) {
            return (
            <div>
                <h1 style={{color: getColour(jobData.name)}}>Summons</h1>
                <div>
                    {summonAddonArray.map((item) => (
                    <div key={item.name} style={{paddingLeft: "10%", paddingRight: "10%"}} >
                        <SummonDisplay data={item}/>
                    </div>
                    ))}
                </div>
            </div>
            )
        }
    }
    // --------------------------------------------

    return (
        <div>
            <h1 style={{color: getColour(jobData.name), fontSize: '3em'}}>{capitalizeTag( jobData.name )}</h1>
            <h3><b>{jobData.tagline}</b></h3>
            <p><i><span dangerouslySetInnerHTML={{__html: (jobData.description || '')}}/></i></p>
            <JobPlaystyleDisplay key={jobData.name + "Playstyle"} data={jobData}/>
            <TraitsDisplay key={jobData.name + "Traits"} data={jobData}/>
            <LimitBreakDisplay key={jobData.name + "LimitBreak"} data={jobData}/>
            <span>
                {summonStructure()}
            </span>
        </div>
    )
}

export default JobDisplay
