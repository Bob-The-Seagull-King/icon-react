import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../utility/functions';

import JobFullDisplay from '../components/JobFullDisplay'
import ClassDisplay from '../components/ClassDisplay'

const ClassFullDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const classData = props.data;
    // ---------------------------------------------

    // Run evaluations -----------------------------
    // ---------------------------------------------

    // Evaluation functions ------------------------
    // --------------------------------------------

    return (
        <div>
            <ClassDisplay key={classData.name + "base"} data={classData}/>
            <div style={{paddingLeft: "10%", paddingRight: "10%"}}>
            {classData.jobs.map((item: any) => (
                    <JobFullDisplay key={item.name + "job"} data={item}/>
                    ))}
            </div>
        </div>
    )
}

export default ClassFullDisplay
