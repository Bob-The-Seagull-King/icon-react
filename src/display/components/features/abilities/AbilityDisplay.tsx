import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

import { getColour } from '../../../../utility/functions';
import { IPlayerAbility, PlayerAbility } from "../../../../classes/feature/abilities/Ability";

const AbilityDisplay = (props: any) => {
    const AbilityObject: PlayerAbility = props.data

    return (
        <div className={'abilityStructure bordermain'+getColour(AbilityObject.Class)}>
            <h1 className={'titleShape title'+getColour(AbilityObject.Class)}>{AbilityObject.Name || ""}</h1>
            <div className='abilityInternalStructure'>
                <div>
                    <i>{AbilityObject.Blurb || ""}</i>
                </div>   
            </div>
        </div>
    )
}

export default AbilityDisplay;