import React, { useState } from 'react'
import '../../styles/iconcomponent.scss';
import '../../styles/iconbuild.scss';
import '../../styles/iconnav.scss';
import 'react-toastify/dist/ReactToastify.css';
import Tooltip from '@mui/material/Tooltip';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import '../../styles/styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'
import { capitalizeTag, containsTag} from '../../utility/functions';
import * as HoverCard from '@radix-ui/react-hover-card';


import combatglossary from '../../resources/data/general/combatglossary.json'
import GlossaryRuleDisplay from '../itemdisplaycomponents/GlossaryRuleDisplay';

const GlossaryPopup = (props: any) => {
    const termname = props.data;
    const itemdata  = findItem();

    function findItem() {
        let i = 0;

        for (i = 0; i < combatglossary.length; i++) {
            if (combatglossary[i].name.toLowerCase() == termname.toLowerCase()) {
                return combatglossary[i];
            }
        }
        return {
          "name": "",
          "tags": [
              
          ],
          "description": ""
      }
    }

    return (  <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <span className='glossaryPurple'>{termname}</span>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className="HoverCardContent" sideOffset={5}>
            <GlossaryRuleDisplay data={itemdata}/>
            <HoverCard.Arrow className="HoverCardArrow" />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    
    );
      // ---------------------------------------------
}

export default GlossaryPopup