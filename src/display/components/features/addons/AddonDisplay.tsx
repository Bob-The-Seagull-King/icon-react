import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

import { returnTags, returnDescription } from '../../../../utility/util';
import { PlayerAddon } from '../../../../classes/feature/addons/Addon';

const AddonDisplay = (props: any) => {
    const AddonObject: PlayerAddon = props.data
    const bannedAbilityTags = ["inflict", "type"]

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnTags( AddonObject.Tags, bannedAbilityTags)}
            </div>
            <div className="verticalspacer"/>
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {returnDescription(AddonObject, AddonObject.Description)}
            </div>
        </div>
    )
}

export default AddonDisplay;