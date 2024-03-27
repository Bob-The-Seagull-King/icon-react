import React from 'react'
import { capitalizeTag, getColour, containsTag } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import {convertStringToContent} from '../../utility/util';

import SummonDisplay from '../itemdisplaycomponents/SummonDisplay'
import TraitsDisplay from '../itemdisplaysubcomponents/TraitsDisplay'
import LimitBreakDisplay from '../itemdisplaysubcomponents/LimitBreakDisplay'
import JobPlaystyleDisplay from '../itemdisplaysubcomponents/JobPlaystyleDisplay'

import summonData from '../../resources/data/player/summon.json';

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
    // --------------------------------------------

    // Navigation ----------------------------------
    function navClickSummon (name: string) {    
        window.open(location.protocol + '//' + location.host +'/player/tactics/summon/'+name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div className='jobStructure'>
            <div className='centerPosition'>
                <h1 className={'megatitleShape title'+getColour(jobData.name)}>{convertStringToContent( jobData.name )}</h1>
            </div>
            <div className='centerPosition'>
                <h3><b>{jobData.tagline}</b></h3>
            </div>
            <p><i><span>{convertStringToContent(jobData.description)}</span> </i></p>

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
                <LimitBreakDisplay className='jobFeature' key={jobData.name + "LimitBreak"} data={{values:jobData, ultimate:true}}/>
                </div>
                {summonStructure()}
            </div>
            <br/>
        </div>
    )
    // ---------------------------------------------
}

export default JobDisplay
