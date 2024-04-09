import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'
import * as HoverCard from '@radix-ui/react-hover-card';

// Import the typescript class shown by the object
import { GlossaryRule } from '../../../../classes/feature/glossary/Glossary'

// Import the display component
import GlossaryDisplay from './GlossaryDisplay'

const GlossaryHover = (props: any) => {
    // Initialize props
    const ruleObject: GlossaryRule = props.data
    const ruleName = props.titlename

    // Return result ------------------------------------------------------------------
    return (
        <HoverCard.Root>
            <HoverCard.Trigger asChild>
                <span className='glossaryPurple hovermouse'>{ruleName}</span> {/* Text string to be hovered over */}
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content className="HoverCardContent" sideOffset={5}>
                    <div className='popupBody'> <GlossaryDisplay data={ruleObject}/> </div> {/* Component that displays when hovering over the text */}
                    <HoverCard.Arrow className="HoverCardArrow" />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}

export default GlossaryHover;