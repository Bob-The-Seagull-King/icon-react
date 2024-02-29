import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

const ClassStatsDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const classStatsData = props.data;
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div className='statsStructure'>
            <h1 className={'titleShape title'+getColour(classStatsData.name)}>Class Statistics</h1>
            <p><b>VIT:</b> {classStatsData.stats.vitality}</p>
            <p><b>HP:</b> {classStatsData.stats.vitality*4}</p>
            <p><b>Defense:</b> {classStatsData.stats.defence}</p>
            <p><b>Speed:</b> {classStatsData.stats.speed} (dash {classStatsData.stats.dash})</p>
            <p><b>Fray Damage:</b> {classStatsData.stats.fray}</p>
            <p><b>Damage Die:</b> d{classStatsData.stats.dice}</p>
            <p><b>Basic Attack:</b> Range {classStatsData.stats.basic_atk}</p>
        </div>
    )
    // ---------------------------------------------
}

export default ClassStatsDisplay