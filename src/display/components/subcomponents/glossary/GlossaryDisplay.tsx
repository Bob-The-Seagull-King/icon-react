import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { GlossaryRule } from '../../../../classes/feature/glossary/Glossary'
import { returnDescription } from '../../../../utility/util'

const GlossaryDisplay = (props: any) => {
    const ruleObject: GlossaryRule = props.data

    return (
        <div className={'abilityStructure borderstyler bordericon'}>
            <h1 className={'titleShape titlebody backgroundicon'}>{ruleObject.Name || ""}</h1>
            <div className='abilityInternalStructure'>
                <div>
                    {returnDescription(ruleObject, ruleObject.Description)}
                </div>
            </div>
        </div>
    )
}

export default GlossaryDisplay;