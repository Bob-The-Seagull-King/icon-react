import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../utility/functions';
import '../styles/iconcomponent.scss';

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

    /**
     * Returns array of all summons for a job
     * @returns Array any[] of all job summons
     */
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

    /**
     * Returns HTML for all a job's summons
     * @returns HTML structure with all summons
     * displayed
     */
    function summonStructure() {
        if (summonAddonArray.length > 0) {
            return (
            <div className='jobFeature' >
                <h1 className={'titleShape title'+getColour(jobData.name)}>Summons</h1>
                <div>
                    {summonAddonArray.map((item) => (
                    <div key={item.name}>
                        <br/>
                        <SummonDisplay data={item}/>
                    </div>
                    ))}
                </div>
            </div>
            )
        }
    }
    // --------------------------------------------

    // Return result -------------------------------
    return (
        <div className='jobStructure'>
            <div className='centerPosition'>
                <h1 className={'megatitleShape title'+getColour(jobData.name)}>{capitalizeTag( jobData.name )}</h1>
            </div>
            <div className='centerPosition'>
                <h3><b>{jobData.tagline}</b></h3>
            </div>
            <p><i><span dangerouslySetInnerHTML={{__html: (jobData.description || '')}}/></i></p>

            <div className='jobFeaturePosition'>
                <div  className='jobFeature'>
                    <JobPlaystyleDisplay key={jobData.name + "Playstyle"} data={jobData}/>
                </div>
                <div  className='jobFeature'>
                    <TraitsDisplay className='jobFeature' key={jobData.name + "Traits"} data={jobData}/>
                </div>
            </div>
            
            <div className='jobFeaturePosition'>
                <div  className='jobFeature'>
                <LimitBreakDisplay className='jobFeature' key={jobData.name + "LimitBreak"} data={jobData}/>
                </div>
                {summonStructure()}
            </div>
            <br/>
        </div>
    )
    // ---------------------------------------------
}

export default JobDisplay
