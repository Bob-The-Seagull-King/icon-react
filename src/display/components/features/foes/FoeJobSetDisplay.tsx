import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { FoeJob } from '../../../../classes/feature/foes/FoeJob';

// Components
import GenericPopup from '../../../components/generics/GenericPopup';
import FoeJobDisplay from './FoeJobDisplay';

const FoeJobSetDisplay = (props: any) => {
    const JobObject: FoeJob = props.data
    
    return (
        <div className="row row-cols-3">
            <div className="col-4">
                <div className="equipbody">
                    <GenericPopup titlename={JobObject.Name} d_colour={JobObject.Class} d_name={JobObject.Name} d_type={""} d_method={() => <FoeJobDisplay data={JobObject}/>}/>
                </div>
            </div>
            <div className="col-4">
                <div className="equipbody">
                    {JobObject.ClassName}
                </div>
            </div>
            <div className="col-4">
                <div className="equipbody">
                    {JobObject.Chapter}
                </div>
            </div>
        </div>
    )
}

export default FoeJobSetDisplay;