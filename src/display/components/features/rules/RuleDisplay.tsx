import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { Rule } from '../../../../classes/feature/rule/Rule';
import { returnDescription } from '../../../../utility/util';

const RuleDisplay = (props: any) => {
    const RuleObject: Rule = props.data

    return (
        <div className='abilityInternalStructure'>          
            <div>
                {returnDescription(RuleObject, RuleObject.Description)}     
            </div>

        </div>
    )
}

export default RuleDisplay;