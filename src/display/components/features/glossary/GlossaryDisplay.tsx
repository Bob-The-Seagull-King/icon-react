import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { GlossaryRule } from '../../../../classes/feature/glossary/Glossary'
import { returnDescription } from '../../../../utility/util'

const GlossaryDisplay = (props: any) => {
    const ruleObject: GlossaryRule = props.data

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnDescription(ruleObject, ruleObject.Description)}
            </div>
        </div>
    )
}

export default GlossaryDisplay;