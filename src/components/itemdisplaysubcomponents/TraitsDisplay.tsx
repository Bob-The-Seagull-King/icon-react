import React from 'react'
import {getColour, containsTag, getTagValue } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import {convertStringToContent} from '../../utility/util';

import abilityData from '../../resources/data/player/ability.json';
import AbilityDisplay from '../itemdisplaycomponents/AbilityDisplay'

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
            <div className='abilityAddonPosition'>
            {addonArray.map((item:any) => (
                <div onClick={() => navClickAbility(item.name)} key={item.name}>
                    <AbilityDisplay data={{values:item, _talents:3, _mastery:true}}/>
                </div>
                ))}
            </div>
        )
    }
    // ---------------------------------------------

    // Navigation ----------------------------------
    function navClickAbility (name: string) {    
        window.open(location.protocol + '//' + location.host +'/player/tactics/ability/'+name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return render -------------------------------
    return (
        <div>
            <h1 className={'titleShape title'+getColour(job)}>Traits</h1>
            <div>
            {traitsData.map((item: any) => (
                    <div key={item.name}>
                        <div><b>{item.name}:</b> <span>{convertStringToContent(item.desc)}</span>
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