import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

import {capitalizeString, getTagValue} from '../../../../utility/functions'
import { GlossaryRule } from '../../../../classes/feature/glossary/Glossary'
import * as HoverCard from '@radix-ui/react-hover-card';
import GlossaryDisplay from './GlossaryDisplay'


const GlossaryHover = (props: any) => {
    const ruleObject: GlossaryRule = props.data
    const ruleName = props.titlename

    return (
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <span className='glossaryPurple'>{ruleName}</span>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className="HoverCardContent" sideOffset={5}>
            <GlossaryDisplay data={ruleObject}/>
            <HoverCard.Arrow className="HoverCardArrow" />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    )
}

export default GlossaryHover;