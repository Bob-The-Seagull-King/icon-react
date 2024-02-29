import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

import addonData from '../../resources/data/abilityaddon.json';
import AddonDisplay from '../itemdisplaysubcomponents/AddonDisplay'
import summonData from '../../resources/data/summon.json';
import SummonDisplay from '../itemdisplaycomponents/SummonDisplay'

const JobPlaystyleDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const jobPlaystyleData = props.data;
    const bannedAbilityTags = ["slay", "infuse", "mastery", "trait"];
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div>
            <h1 className={'titleShape title'+getColour(jobPlaystyleData.name)}>Playstyle</h1>
            <span dangerouslySetInnerHTML={{__html: (jobPlaystyleData.playstyle || '')}}/>
        </div>
    )
    // ---------------------------------------------
}

export default JobPlaystyleDisplay