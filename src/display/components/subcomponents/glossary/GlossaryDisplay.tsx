import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Import typescript class
import { GlossaryRule } from '../../../../classes/feature/glossary/Glossary'

// Import components for item description
import AbilityDescriptionItemDisplay from '../description/AbilityDescriptionItemDisplay'

const GlossaryDisplay = (props: any) => {
    // Initialize props
    const ruleObject: GlossaryRule = props.data

    // Return result -------------------------------------------------------------------------
    return (
        <div className={'abilityStructure bordermainpurple'}>
            <h1 className={'titleShape titlepurple'}>{ruleObject.Name || ""}</h1> {/* Name of rule */}
            <div className='abilityInternalStructure'>
                <div>
                    {ruleObject.Description.map((item) => (
                        <div key={"descriptionDisplay"}>
                            <AbilityDescriptionItemDisplay data={item} parent={ruleObject}/> {/* Description display */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GlossaryDisplay;