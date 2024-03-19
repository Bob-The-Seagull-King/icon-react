import React from 'react'
import { getColour } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import {convertStringToContent} from '../../utility/util';

const JobPlaystyleDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const jobPlaystyleData = props.data;
    const bannedAbilityTags = ["slay", "infuse", "mastery", "trait"];
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div>
            <h1 className={'titleShape title'+getColour(jobPlaystyleData.name)}>Playstyle</h1>
            <span>{convertStringToContent(jobPlaystyleData.playstyle)}</span>
        </div>
    )
    // ---------------------------------------------
}

export default JobPlaystyleDisplay