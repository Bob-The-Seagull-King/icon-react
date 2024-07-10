import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

import { getColour } from '../../../../utility/functions';
import { returnTags, returnDescription } from '../../../../utility/util';
import {PlayerAbility } from "../../../../classes/feature/abilities/Ability";
import {IIconpendiumItemTag} from '../../../../classes/IconpendiumItem'

import TagDisplay from '../../subcomponents/TagDisplay'
import AbilityDescriptionItemDisplay from '../../subcomponents/description/AbilityDescriptionItemDisplay';

const AbilityDisplay = (props: any) => {
    const AbilityObject: PlayerAbility = props.data
    const bannedAbilityTags = ["inflict", "type"]

    return (
        <div className={'abilityStructure borderstyler border'+getColour(AbilityObject.Class)}>
            <h1 className={'titleShape titlebody background'+getColour(AbilityObject.Class)}>{AbilityObject.Name || ""}</h1>
            <div className='abilityInternalStructure'>
                <div>
                    {returnTags(AbilityObject.Tags, bannedAbilityTags)}
                </div>
                <div className="verticalspacer"/>
                <div>
                    {returnDescription(AbilityObject, AbilityObject.Blurb)}
                </div> 
                <div className="verticalspacer"/> 
                <div>
                    <div className="separator">&#x27E1;</div>
                </div> 
                <div className="verticalspacer"/>
                <div>
                    {returnDescription(AbilityObject, AbilityObject.Description)}
                </div>
            </div>
        </div>
    )
}

export default AbilityDisplay;