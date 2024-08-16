import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { getTagValue} from '../../../../utility/functions'
import { ConvertContentWithGlossary } from '../../../../utility/util'
import { AdvancedDescription} from '../../../../classes/AdvancedDescription'
import { PlayerAbility } from '../../../../classes/feature/abilities/Ability'
import { AddonFactory } from '../../../../factories/features/AddonFactory'
import { PlayerAddon } from '../../../../classes/feature/addons/Addon'

// Components
import GenericDisplay from '../../../../display/components/generics/GenericDisplay'
import AddonDisplay from '../../../../display/components/features/addons/AddonDisplay'
import { PlayerTable } from '../../../../classes/feature/table/tablebody'
import { TableFactory } from '../../../../factories/features/TableFactory'
import TableDisplay from '../../../../display/components/features/table/TableDisplay'

const AdvancedDescriptionItemDisplay = (props: any) => {
    const description: AdvancedDescription = props.data
    const parentItem: PlayerAbility = props.parent

    /**
     * Takes a description and combines all tags, subcomponents,
     * and glossary items into a DOM element.
     * @param item The base description body
     * @returns Full DOM element containing the rendered description
     */
    function returnFullItem(item: AdvancedDescription) {
        switch (getTagValue(item.Tags, "desc_type")) {
            case "paragraph": {
                return (
                    <div>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                    </div>
                )

            }
            case "effect": {
                return (
                    <span>
                        <span><b>{ConvertContentWithGlossary((item.Glossary), item.Content?.toString() || "")} </b></span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                    </span>
                )
            }
            case "subeffect": {
                return (
                    <span>
                        <span><i>{ConvertContentWithGlossary((item.Glossary), item.Content?.toString() || "")} </i></span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
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
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
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
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </div>
                )
            }
            case "table": {
                return (
                    <div>
                        <div className='addonbox'>{findTable(item.Content?.toString() || "")}</div>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </div>
                )
            }
            case "gap": {
                return (
                    <div>
                        <div><br/></div>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </div>
                )
            }
            case "list": {
                return (
                    <div>
                        <span>{ConvertContentWithGlossary((item.Glossary), item.Content?.toString() || "")} </span>
                        <span>
                            <ul>
                                {item.SubContent?.map((subitem) => (
                                    <li  key="descriptionsubitem">
                                        <AdvancedDescriptionItemDisplay data={subitem} parent={parentItem}/>
                                    </li>
                                ))}
                            </ul>
                        </span>
                    </div>
                )
            }
            default: {
                return (
                    <span>
                    <span>{ConvertContentWithGlossary((item.Glossary), item.Content?.toString() || "")}</span>
                    <span>
                        {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
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
        let addon: PlayerAddon | null = null;

        addon = AddonFactory.CreateNewAddon(id)

        return (
            <GenericDisplay d_colour={parentItem.Class} d_name={addon.Name} d_type={"sub"} d_method={() => <AddonDisplay data={addon} />}/>
        )
    }
    /**
     * returns a component showing an Addon display
     * @param id The ID of the addon
     * @returns Display component with the Addon
     */
    function findTable(id: string) {
        let table: PlayerTable | null = null;

        table = TableFactory.CreateNewTable(id)

        return (
            <GenericDisplay d_colour={parentItem.Class} d_name={table.Name} d_type={"sub"} d_method={() => <TableDisplay data={table} />}/>
        )
    }

    return (
        <span>
            {returnFullItem(description)}
        </span>
    )
}

export default AdvancedDescriptionItemDisplay;