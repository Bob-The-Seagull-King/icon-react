import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnDescription } from '../../../../utility/util';
import { Trait } from '../../../../classes/feature/trait/Trait';

const TraitDisplay = (props: any) => {
    const TraitObject: Trait = props.data

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnDescription(TraitObject, TraitObject.Description)}
            </div>
        </div>
    )
}

export default TraitDisplay;