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
import GenericDisplay from '../../generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import LimitBreakDisplay from '../abilities/LimitBreakDisplay';
import AddonDisplay from '../addons/AddonDisplay';
import SummonDisplay from '../summons/SummonDisplay';

const ClassDisplay = (props: any) => {
    const JobObject: Job = props.data

    return (
        <div className='abilityInternalStructure'>
        </div>
    )
}

export default ClassDisplay;