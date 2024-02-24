import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../utility/functions';

import abilityData from '../resources/data/ability.json';
import AbilityDisplay from '../components/AbilityDisplay'

const TraitsDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const traitsData = props.data.traits;
    const job = props.data.name;
    // ---------------------------------------------

    // Run evaluations -----------------------------
    function returnAddons(trait: string) {
        const addonArray = [];
        let i = 0;

        for (i = 0; i < abilityData.length; i++) {
            if ((containsTag(abilityData[i].tags,"trait"))) {
                if (getTagValue(abilityData[i].tags, "trait") == trait) {
                    addonArray.push(abilityData[i]);
                }
            }
        }

        console.log(addonArray);

        return (
            <div style={{paddingLeft: "20%", paddingRight: "20%"}}>
            {addonArray.map((item:any) => (
                <AbilityDisplay key={item.name} data={item}/>
                ))}
            </div>
        )
    }
    // ---------------------------------------------

    // Evaluation functions ------------------------
    // ---------------------------------------------

    return (
        <div>
            <h1 style={{color: getColour(job)}}>Traits</h1>
            <div>
            {traitsData.map((item: any) => (
                    <div key={item.name}>
                        <div><b>{item.name}:</b> <span dangerouslySetInnerHTML={{__html: (item.desc || '')}} />
                        </div>
                        {returnAddons(item.name)}
                    </div>
            ))}
            </div>
        </div>
    )
}

export default TraitsDisplay