import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import {PlayerAbility } from "../../../../classes/feature/abilities/Ability";
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';
import { Relic } from '../../../../classes/feature/relics/Relic';

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';

const RelicDisplay = (props: any) => {
    const RelicObject: Relic = props.data
    const bannedAbilityTags = ["inflict", "type"]

    return (
        <div className='abilityInternalStructure'>
            
        </div>
    )
}

export default RelicDisplay;