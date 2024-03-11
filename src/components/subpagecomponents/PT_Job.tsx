import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

import classData from '../../resources/data/player/class.json'
import JobDisplay from '../itemdisplaycomponents/JobDisplay';

const PT_Job = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => (( (value.name.toLowerCase().includes(searchVal.toLowerCase()))));
    const jobData = getJobs();

    /**
     * Takes the path and returns the relic
     * page search, or "" if none is provided.
     */
    function urlParse() {
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');
        if (urlSplits.length >= 5) {
            urlSplits[4] = urlSplits[4].replaceAll('%20', ' ');
            return urlSplits[4];
        }
        return "";
    }

    function getJobs() {
        const _jobs: any[] = [];

        let i = 0;
        for (i = 0; i < classData.length; i++) {  
            let j = 0;
            for (j = 0; j < classData[i].jobs.length; j++) {
                _jobs.push(classData[i].jobs[j]);
            }
        }

        return _jobs;
    }

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host + '/player/tactics/' + dir + '/' + name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    function renderList() {
        return (
            <div className='centerPosition'>
                <div className='widthPT topPosition classContainer'>
                    {jobData.filter(isSearched).map((item) => (
                    <div className='gridjoblistItem' onClick={() => navClick('jobfull', item.name)} key={item.name + "job"}  >
                        <JobDisplay data={item}/>
                    </div> ))}
                </div>
            </div>
        )
    }

    // Return render -------------------------------
    return (
        <div style={{width:"100%"}}>
            {renderList()}
        </div>
    )
}

export default PT_Job