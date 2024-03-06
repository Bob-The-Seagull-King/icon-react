import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../../utility/functions';
import { useNavigate } from "react-router-dom";

import JobDisplay from '../itemdisplaycomponents/JobDisplay'
import ClassDisplay from '../itemdisplaycomponents/ClassDisplay'

const ClassFullDisplay = (props: any) => {
    // Declare Summon Variables --------------------
    const classData = props.data;
    // ---------------------------------------------

    // Navigation ----------------------------------
    function navClickJob (name: string) {    
        window.open(location.protocol + '//' + location.host +'/player/tactics/jobfull/'+name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div>
            <div className='centerPosition'>
                <ClassDisplay key={classData.name + "base"} data={classData}/>
            </div>
            <br/>
            <div className='gridjobItem'>
                <div className='classjobStructure'>
                    <div className='abilityContainer'>
                    {classData.jobs.map((item: any) => (
                        <div key={item.name + "job"} onClick={() => navClickJob(item.name)} className='gridItem'>
                            <JobDisplay   data={item}/>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
    // ---------------------------------------------
}

export default ClassFullDisplay
