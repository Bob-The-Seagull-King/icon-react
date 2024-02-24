import React from 'react'
import SummonDisplay from '../components/SummonDisplay'
import RelicDisplay from '../components/RelicDisplay'
import summonData from '../resources/data/summon.json';
import relicData from '../resources/data/relic.json';


const HomePage: React.FC = () => {


    return (
        <div style={{ position: 'relative', paddingLeft: '30%', paddingRight: '30%',  width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
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
