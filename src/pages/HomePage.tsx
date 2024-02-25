import React from 'react'

import SummonDisplay from '../components/SummonDisplay'
import RelicDisplay from '../components/RelicDisplay'
import AddonDisplay from '../components/AddonDisplay'
import AbilityDisplay from '../components/AbilityDisplay'
import TraitsDisplay from '../components/TraitsDisplay'
import LimitBreakDisplay from '../components/LimitBreakDisplay'
import JobDisplay from '../components/JobDisplay'
import JobFullDisplay from '../components/JobFullDisplay'
import ClassStatsDisplay from '../components/ClassStatsDisplay'
import ClassMechanicDisplay from '../components/ClassMechanicDisplay'
import ClassDescriptionDisplay from '../components/ClassDescriptionDisplay'
import ClassDisplay from '../components/ClassDisplay'
import ClassFullDisplay from '../components/ClassFullDisplay'

import summonData from '../resources/data/summon.json';
import relicData from '../resources/data/relic.json';
import addonData from '../resources/data/abilityaddon.json';
import abilityData from '../resources/data/ability.json';
import classData from '../resources/data/class.json';

const HomePage: React.FC = () => {

    // Get URL Path Content ----------------------
    function getRequestedContent() {
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');

        if (urlSplits.length >= 3) {
            urlSplits[2] = urlSplits[2].replace('%20', ' ');

            if (urlSplits[1].toLowerCase() == "class" ) {
                return returnClass(urlSplits[2]);
            }
    
            if (urlSplits[1].toLowerCase() == "classfull" ) {
                return returnClassFull(urlSplits[2]);
            }
    
            if (urlSplits[1].toLowerCase() == "job" ) {
                return returnJob(urlSplits[2]);
            }
    
            if (urlSplits[1].toLowerCase() == "jobfull" ) {
                return returnJobFull(urlSplits[2]);
            }
    
            if (urlSplits[1].toLowerCase() == "ability" ) {
                return returnAbility(urlSplits[2]);
            }
    
            if (urlSplits[1].toLowerCase() == "relic" ) {
                return returnRelic(urlSplits[2]);
            }
            
        }

        return (
            <h1>PAGE NOT FOUND</h1>
        )


    }

    function returnClass(classname:string) {
        let i = 0;

        for (i=0; i < classData.length; i++) {
            if (classData[i].name.toLowerCase() == classname.toLowerCase()) {
                return (
                    <ClassDisplay key={classData[i].name + "classdisplay"} data={classData[i]}/>
                )
            }
        }

        return (
            <h1>CLASS NOT FOUND</h1>
        );
    }

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

    function returnJob(jobName:string) {
        let i = 0;

        for (i=0; i < classData.length; i++) {
            let j = 0
            for (j = 0; j < classData[i].jobs.length; j++) {
                if (classData[i].jobs[j].name.toLowerCase() == jobName.toLowerCase()) {
                    return (
                        <JobDisplay key={classData[i].jobs[j].name + "jobdisplay"} data={classData[i].jobs[j]}/>
                    )
                }
            }
        }

        return (
            <h1>JOB NOT FOUND</h1>
        );
    }

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



    // -------------------------------------------

    return (
        <div style={{ position: 'relative', paddingLeft: '20%', paddingRight: '20%',  width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {getRequestedContent()}
        </div>
    )
}

export default HomePage
