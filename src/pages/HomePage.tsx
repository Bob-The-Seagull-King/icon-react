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

import summonData from '../resources/data/summon.json';
import relicData from '../resources/data/relic.json';
import addonData from '../resources/data/abilityaddon.json';
import abilityData from '../resources/data/ability.json';
import classData from '../resources/data/class.json';

const HomePage: React.FC = () => {

    const jobArray = getJobs();

    function getJobs() {
        let i = 0;
        const _jobArray = [];

        for (i = 0; i < classData.length; i++) {
            //let j = 0;

           _jobArray.push(classData[i])
            /*for (j = 0; j < classData[i].jobs.length; j++) {
                _jobArray.push(classData[i]["jobs"][j]);
            }*/
        }

        return _jobArray;
    }

    return (
        <div style={{ position: 'relative', paddingLeft: '30%', paddingRight: '30%',  width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
            {jobArray.map((item) => (
                    <ClassStatsDisplay key={item.name + "stats"} data={item}/>
                    ))}
        </div>
    )
}

export default HomePage
