import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { getTagValue} from '../../../../utility/functions'
import { ConvertContentWithGlossary } from '../../../../utility/util'
import { AbilityDescription} from '../../../../classes/feature/abilities/AbilityDescription'
import { PlayerAbility } from '../../../../classes/feature/abilities/Ability'

// Components
import GenericDisplay from '../../../../display/components/generics/GenericDisplay'
import AddonDisplay from '../../../../display/components/features/addons/AddonDisplay'

const AbilityDescriptionItemDisplay = (props: any) => {
    const description: AbilityDescription = props.data
    const parentItem: PlayerAbility = props.parent

    /**
     * Takes a description and combines all tags, subcomponents,
     * and glossary items into a DOM element.
     * @param item The base description body
     * @returns Full DOM element containing the rendered description
     */
    function returnFullItem(item: AbilityDescription) {
        switch (getTagValue(item.Tags, "desc_type")) {
            case "effect": {
                return (
                    <div>
                        <span><b>{ConvertContentWithGlossary((item.Glossary), item.Content?.toString() || "")} </b></span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AbilityDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                    </div>
                )
            }
            case "subeffect": {
                return (
                    <span>
                        <span><i>{ConvertContentWithGlossary((item.Glossary), item.Content?.toString() || "")} </i></span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AbilityDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </span>
                )
            }
            case "desc": {
                return (
                    <span>
                        <span>{ConvertContentWithGlossary((item.Glossary), item.Content?.toString() || "")} </span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AbilityDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
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
                               <AbilityDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </div>
                )
            }
            default: {
                return (
                    <span>
                    <span>{ConvertContentWithGlossary((item.Glossary), item.Content?.toString() || "")}</span>
                    <span>
                        {item.SubContent?.map((subitem) => (
                               <AbilityDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                        ))}
                    </span>
                    </span>
                )
            }
        }
    }

    /**
     * returns a component showing an Addon display
     * @param id The ID of the addon
     * @returns Display component with the Addon
     */
    function findAddon(id: string) {
        let AddonFound: any = null;

        let i = 0;
        for (i = 0; i < parentItem.Addons.length; i++) {
            if (parentItem.Addons[i].ID == id) {
                AddonFound = parentItem.Addons[i];
            }
        }

        if (AddonFound != null) {
            return (
                <GenericDisplay d_colour={parentItem.Class} d_name={AddonFound.Name} d_type={"sub"} d_method={() => <AddonDisplay data={AddonFound} />}/>
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