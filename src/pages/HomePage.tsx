import React from 'react'
import SummonDisplay from '../components/SummonDisplay'
import RelicDisplay from '../components/RelicDisplay'
import AddonDisplay from '../components/AddonDisplay'
import AbilityDisplay from '../components/AbilityDisplay'
import summonData from '../resources/data/summon.json';
import relicData from '../resources/data/relic.json';
import addonData from '../resources/data/abilityaddon.json';
import abilityData from '../resources/data/ability.json';


const HomePage: React.FC = () => {


    return (
        <div style={{ position: 'relative', paddingLeft: '30%', paddingRight: '30%',  width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
            {abilityData.map((item) => (
            <AbilityDisplay key={item.name} data={item}/>
            ))}
            {addonData.map((item) => (
            <AddonDisplay key={item.name} data={item}/>
            ))}
            {relicData.map((item) => (
            <RelicDisplay key={item.name} data={item}/>
            ))}
            {summonData.map((item) => (
            <SummonDisplay key={item.name} data={item}/>
            ))}
        </div>
    )
}

export default HomePage
