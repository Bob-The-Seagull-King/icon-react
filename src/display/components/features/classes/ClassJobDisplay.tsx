import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags } from '../../../../utility/util';

// Components
import GenericPopup from '../../../components/generics/GenericPopup';
import { Job } from '../../../../classes/feature/jobs/Job';
import JobDisplay from '../jobs/JobDisplay';

const ClassJobDisplay = (props: any) => {
    const JobObject: Job = props.data
    const bannedAbilityTags = ["inflict", "type"]

    
    return (
        <div className="row row-cols-3">
            <div className="col-2">
                <div className="equipbody">
                    <GenericPopup titlename={JobObject.Name} d_colour={JobObject.Class} d_name={JobObject.Name} d_type={""} d_method={() => <JobDisplay data={JobObject}/>}/>
                </div>
            </div>
            <div className="col-4">
                <div className="equipbody">
                    {JobObject.Subtitle}
                </div>
            </div>
            <div className="col-6">
                <div className="equipbody">
                    {returnTags(JobObject.Tags, bannedAbilityTags)}
                </div>
            </div>
        </div>
    )
}

export default ClassJobDisplay;