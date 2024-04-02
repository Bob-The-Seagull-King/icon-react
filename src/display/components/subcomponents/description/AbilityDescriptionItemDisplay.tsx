import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

import {capitalizeString, getTagValue} from '../../../../utility/functions'
import {IAbilityDescription, AbilityDescription} from '../../../../classes/feature/abilities/AbilityDescription'
import { PlayerAbility } from '../../../../classes/feature/abilities/Ability'
import AddonDisplay from '../../../../display/components/features/addons/AddonDisplay'
import { PlayerAddon } from '../../../../classes/feature/addons/Addon'


const AbilityDescriptionItemDisplay = (props: any) => {
    const description: AbilityDescription = props.data
    const parentItem: PlayerAbility = props.parent

    function returnFullItem(item: AbilityDescription) {
        switch (getTagValue(item.Tags, "desc_type")) {
            case "effect": {
                return (
                    <div>
                        <span><b>{item.Content?.toString() || ""} </b></span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <span key="descriptionsubitem">
                                {returnFullItem(subitem)}
                               </span>
                            ))}
                        </span>
                    </div>
                )
            }
            case "subeffect": {
                return (
                    <span>
                        <span><i>{item.Content?.toString() || ""} </i></span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <span key="descriptionsubitem">
                                {returnFullItem(subitem)}
                               </span>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </span>
                )
            }
            case "desc": {
                return (
                    <span>
                        <span>{item.Content?.toString() || ""} </span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <span key="descriptionsubitem">
                                {returnFullItem(subitem)}
                               </span>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </span>
                )
            }
            case "addon": {
                return (
                    <div>
                        <div className='addonbox'>{findAddon(item.Content?.toString() || "")}</div>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <span key="descriptionsubitem">
                                {returnFullItem(subitem)}
                               </span>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </div>
                )
            }
            default: {
                return (
                    <span>
                    <span>{item.Content || ""}</span>
                    <span>
                        {item.SubContent?.map((subitem) => (
                           <span key="descriptionsubitem">
                            {returnFullItem(subitem)}
                           </span>
                        ))}
                    </span>
                    </span>
                )
            }
        }
    }

    function findAddon(id: string) {
        let AddonFound = null;

        let i = 0;
        for (i = 0; i < parentItem.Addons.length; i++) {
            if (parentItem.Addons[i].ID == id) {
                AddonFound = parentItem.Addons[i];
            }
        }

        if (AddonFound != null) {
            return (
                <AddonDisplay data={AddonFound}/>
            )
        } else {
            return (
                <span>ERROR: ADDON NOT FOUND</span>
            )
        }
    }

    return (
        <span>
            {returnFullItem(description)}
        </span>
    )
}

export default AbilityDescriptionItemDisplay;