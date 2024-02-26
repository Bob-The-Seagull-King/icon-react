import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../utility/functions';
import '../styles/iconcomponent.scss';

import abilityData from '../resources/data/ability.json';
import AbilityDisplay from '../components/AbilityDisplay'

const TraitsDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const traitsData = props.data.traits;
    const job = props.data.name;
    // ---------------------------------------------

    // Evaluation functions ------------------------
    /**
     * Checks if a trait has any addons, and returns the
     * addon display HTML if needed.
     * @param trait The name of the trait being checked
     * @returns HTML map of all abilities being added on
     */
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

        return (
            <div style={{paddingLeft: "20%", paddingRight: "20%"}}>
            {addonArray.map((item:any) => (
                <AbilityDisplay key={item.name} data={{values:item, _talents:3, _mastery:true}}/>
                ))}
            </div>
        )
    }
    // ---------------------------------------------

    // Return render -------------------------------
    return (
        <div>
            <h1 className={'titleShape title'+getColour(job)}>Traits</h1>
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
    // ---------------------------------------------
}

export default TraitsDisplay