import React from 'react'

import SummonDisplay from '../components/SummonDisplay'
import RelicDisplay from '../components/RelicDisplay'
import AbilityDisplay from '../components/AbilityDisplay'
import JobFullDisplay from '../components/JobFullDisplay'
import ClassFullDisplay from '../components/ClassFullDisplay'

import summonData from '../resources/data/summon.json';
import relicData from '../resources/data/relic.json';
import abilityData from '../resources/data/ability.json';
import classData from '../resources/data/class.json';

const HomePage: React.FC = () => {

    // Get URL Path Content ----------------------

    /**
     * Finds the URL parameters and returns the 
     * appropriate ICON content as HTML
     * @returns 
     */
    function getRequestedContent() {
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');

        if (urlSplits.length >= 3) {
            urlSplits[2] = urlSplits[2].replace('%20', ' ');
    
            if (urlSplits[1].toLowerCase() == "class" ) {
                return returnClassFull(urlSplits[2]);
            }
            if (urlSplits[1].toLowerCase() == "job" ) {
                return returnJobFull(urlSplits[2]);
            }
    
            if (urlSplits[1].toLowerCase() == "ability" ) {
                return returnAbility(urlSplits[2]);
            }
    
            if (urlSplits[1].toLowerCase() == "relic" ) {
                return returnRelic(urlSplits[2]);
            }
    
            if (urlSplits[1].toLowerCase() == "summon" ) {
                return returnSummon(urlSplits[2]);
            }  
        }

        return (
            <h1>PAGE NOT FOUND</h1>
        )
    }

    /**
     * Returns HTML for a class and all jobs
     * @param classname The name of the class
     * @returns HTML elements
     */
    function returnClassFull(classname:string) {
        let i = 0;

        for (i=0; i < classData.length; i++) {
            if (classData[i].name.toLowerCase() == classname.toLowerCase()) {
                return (
                    <ClassFullDisplay key={classData[i].name + "classfulldisplay"} data={classData[i]}/>
                )
            }
        }

        return (
            <h1>CLASS NOT FOUND</h1>
        );
    }

    /**
     * Returns HTML for a job and all abilities
     * @param jobName The name of the job
     * @returns HTML elements
     */
    function returnJobFull(jobName:string) {
        let i = 0;

        for (i=0; i < classData.length; i++) {
            let j = 0
            for (j = 0; j < classData[i].jobs.length; j++) {
                if (classData[i].jobs[j].name.toLowerCase() == jobName.toLowerCase()) {
                    return (
                        <JobFullDisplay key={classData[i].jobs[j].name + "jobfulldisplay"} data={classData[i].jobs[j]}/>
                    )
                }
            }
        }

        return (
            <h1>JOB NOT FOUND</h1>
        );
    }

    /**
     * Returns HTML for an ability
     * @param abilityName The name of the ability
     * @returns HTML elements
     */
    function returnAbility(abilityName:string) {
        let i = 0;

        for (i=0; i < abilityData.length; i++) {
            if (abilityData[i].name.toLowerCase() == abilityName.toLowerCase()) {
                return (
                    <AbilityDisplay key={abilityData[i].name + "ability"} data={{values:abilityData[i], _talents:3, _mastery:true}}/>
                )
            }
        }

        return (
            <h1>ABILITY NOT FOUND</h1>
        );
    }

    /**
     * Returns HTML for a relic
     * @param relicName The name of the relic
     * @returns HTML elements
     */
    function returnRelic(relicName:string) {
        let i = 0;

        for (i=0; i < relicData.length; i++) {
            if (relicData[i].name.toLowerCase() == relicName.toLowerCase()) {
                return (
                    <RelicDisplay key={relicData[i].name + "relic"} data={{values:relicData[i], tier:4}}/>
                )
            }
        }

        return (
            <h1>RELIC NOT FOUND</h1>
        );
    }

    /**
     * Returns HTML for a summon
     * @param summonName The name of the summon
     * @returns HTML elements
     */
    function returnSummon(summonName:string) {
        let i = 0;

        for (i=0; i < summonData.length; i++) {
            if (summonData[i].name.toLowerCase() == summonName.toLowerCase()) {
                return (
                    <SummonDisplay key={summonData[i].name + "summon"} data={summonData[i]}/>
                )
            }
        }

        return (
            <h1>RELIC NOT FOUND</h1>
        );
    }
    // -------------------------------------------

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div><br/></div>
            {getRequestedContent()}
        </div>
    )
    // -------------------------------------------
}

export default HomePage
