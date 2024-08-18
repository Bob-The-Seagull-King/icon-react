import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { Job } from '../../../../classes/feature/jobs/Job';
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';

const JobDisplay = (props: any) => {
    const AbilityObject: Job = props.data
    const bannedAbilityTags = ["inflict", "type"]

    return (
        <div className='abilityInternalStructure'>
            
        </div>
    )
}

export default JobDisplay;