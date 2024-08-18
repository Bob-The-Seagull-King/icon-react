import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { Job } from '../../../../classes/feature/jobs/Job';
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';

const JobDisplay = (props: any) => {
    const JobObject: Job = props.data
    const bannedAbilityTags = ["inflict", "type"]

    return (
        <div className='abilityInternalStructure'>
            <div>
                <div className="separator">{JobObject.Subtitle}</div>
            </div> 
            <div className="verticalspacer"/>
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    {returnDescription(JobObject, JobObject.Blurb)} 
                </div>
                <div className="col">
                    {returnDescription(JobObject, JobObject.Playstyle)} 
                </div>
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                <div className="row">
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 2}} >
                        <Masonry gutter="20px">
                            {JobObject.Traits.map((item) => <GenericDisplay key="traitloop" d_colour={JobObject.Class} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/>)}             
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </div>
    )
}

export default JobDisplay;