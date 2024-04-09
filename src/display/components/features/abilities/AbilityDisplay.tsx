import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Imports functions and typescript classes
import { getColour } from '../../../../utility/functions';
import { PlayerAbility } from "../../../../classes/feature/abilities/Ability";
import { IIconpendiumItemTag } from '../../../../classes/IconpendiumItem'

// Imports react components
import TagDisplay from '../../subcomponents/TagDisplay'
import AbilityDescriptionItemDisplay from '../../subcomponents/description/AbilityDescriptionItemDisplay';

const AbilityDisplay = (props: any) => {
    // Initialize props ------------------------------------------------------------------
    const AbilityObject: PlayerAbility = props.data // The ability being displayed
    const bannedAbilityTags = ["inflict", "type"] // Tags which will not be shown

    /**
     * Returns the AbilityDescriptionItemDisplay
     * component for this ability.
     * @returns AbilityDescriptionItemDisplay
     */
    function returnDescription() {
        return (
            <div>
                {AbilityObject.Description.map((item) => (
                    <div key={"descriptionDisplay"}>
                        <AbilityDescriptionItemDisplay data={item} parent={AbilityObject}/>
                    </div>
                ))}
            </div>
        )
    }

    /**
     * Displays a list of sorted tags
     * @returns List of TagDisplay components
     */
    function returnTags() {
        const displaytags = sortTagsForDisplay()

        return (
            <div className="tagBox">
                    {displaytags.map((item) => (
                        <div key={"tagDisplay"+item.tag_name+item.val}>
                            <TagDisplay data={item}/>
                        </div>
                    ))}
            </div>
        )
    }

    /**
     * Sorts through the list of tags in this item
     * to find any banned tags or any tag names that
     * need a different display name.
     * @returns Array of IIconpendiumItemTags
     */
    function sortTagsForDisplay() {
        const tagarray: IIconpendiumItemTag[] = []

        let i = 0;
        for (i = 0; i < (AbilityObject.Tags?.length || 0); i++) {
            if (AbilityObject.Tags != undefined) {
                const temptag: IIconpendiumItemTag = AbilityObject.Tags[i]

                if ((temptag.tag_name == "blast_size") || (temptag.tag_name == "blast_distance")) {
                    temptag.tag_name = "blast"; }

                if (!bannedAbilityTags.includes(temptag.tag_name)) {
                    tagarray.push(temptag);
                }}}
        return tagarray;
    }

    // Return result ---------------------------------------------------------------------
    return (
        <div className={'abilityStructure bordermain'+getColour(AbilityObject.Class)}>
            <h1 className={'titleShape title'+getColour(AbilityObject.Class)}>{AbilityObject.Name || ""}</h1>
            <div className='abilityInternalStructure'>
                <div>
                    {returnTags()}
                </div>
                <div className="verticalspacer"/>
                <div>
                    <i>{AbilityObject.Blurb || ""}</i>
                </div> 
                <div className="verticalspacer"/> 
                <div>
                    <div className="separator">&#x27E1;</div>
                </div> 
                <div className="verticalspacer"/>
                <div>
                    {returnDescription()}
                </div>
            </div>
        </div>
    )
}

export default AbilityDisplay;