import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { getTagValue, getTagSetValue} from '../../../../utility/functions'
import { ConvertContentWithGlossary } from '../../../../utility/util'
import { AdvancedDescription} from '../../../../classes/AdvancedDescription'
import { PlayerAbility } from '../../../../classes/feature/abilities/Ability'
import { AddonFactory } from '../../../../factories/features/AddonFactory'
import { PlayerAddon } from '../../../../classes/feature/addons/Addon'
import { SummonFactory } from '../../../../factories/features/SummonFactory'
import { PlayerSummon } from '../../../../classes/feature/summons/Summon'
import { PlayerTable } from '../../../../classes/feature/table/tablebody'
import { TableFactory } from '../../../../factories/features/TableFactory'
import { Trait } from '../../../../classes/feature/trait/Trait'
import { TraitFactory } from '../../../../factories/features/TraitFactory'
import { FoeJob } from '../../../../classes/feature/foes/FoeJob'
import { FoeFactory } from '../../../../factories/features/FoeFactory'

// Components
import GenericDisplay from '../../../../display/components/generics/GenericDisplay'
import AddonDisplay from '../../../../display/components/features/addons/AddonDisplay'
import TableDisplay from '../../../../display/components/features/table/TableDisplay'
import SummonDisplay from '../../../../display/components/features/summons/SummonDisplay'
import GenericHover from '../../../../display/components/generics/GenericHover'
import TraitDisplay from '../../../../display/components/features/trait/TraitDisplay'
import EmptyDisplay from '../../../../display/components/generics/EmptyDisplay'
import FoeJobDisplay from '../../../../display/components/features/foes/FoeJobDisplay'
import GenericPopup from '../../../../display/components/generics/GenericPopup'

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
        switch (getTagSetValue(item.Tags, "desc_type")) {
            case "paragraph": {
                return (
                    <div style={{width:"100%"}}>
                        <span style={{width:"100%"}}>
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
                    <div style={{width:"100%"}}>
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
            case "foeability": {
                return (
                    <div style={{width:"100%"}}>
                        <div className='addonbox'>{findFoeAddon(item.Content?.toString() || "")}</div>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </div>
                )
            }
            case "summon": {
                return (
                    <div style={{width:"100%"}}>
                        <div className='addonbox'>{findSummon(item.Content?.toString() || "")}</div>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </div>
                )
            }
            case "foesummon": {
                return (
                    <div style={{width:"100%"}}>
                        <div className='addonbox'>{findFoeSummon(item.Content?.toString() || "")}</div>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </div>
                )
            }
            case "textsummon": {
                return (
                    <span>
                        <span className=''>{findTextSummon(item.Content?.toString() || "")}</span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </span>
                )
            }
            case "textfoe": {
                return (
                    <span>
                        <span className=''>{findTextFoe(item.Content?.toString() || "")}</span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </span>
                )
            }
            case "trait": {
                return (
                    <div style={{width:"100%"}}>
                        <div className='addonbox'>{findTrait(item.Content?.toString() || "")}</div>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </div>
                )
            }
            case "foetrait": {
                return (
                    <div style={{width:"100%"}}>
                        <div className='addonbox'>{findFoeTrait(item.Content?.toString() || "")}</div>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </div>
                )
            }
            case "texttrait": {
                return (
                    <span>
                        <span className=''>{findTextTrait(item.Content?.toString() || "")}</span>
                        <span>
                            {item.SubContent?.map((subitem) => (
                               <AdvancedDescriptionItemDisplay key="descriptionsubitem" data={subitem} parent={parentItem}/>
                            ))}
                        </span>
                        <span>{" "}</span>
                    </span>
                )
            }
            case "table": {
                return (
                    <div style={{width:"100%"}}>
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
                    <div style={{width:"100%"}}>
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
                    <div style={{width:"100%"}}>
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
        addon = AddonFactory.CreateNewAddon(id, "addons")

        return (
            <GenericDisplay d_colour={parentItem.Class} d_name={addon.Name} d_type={"sub"} d_method={() => <AddonDisplay data={addon} />}/>
        )
    }
    /**
     * returns a component showing an Addon display
     * @param id The ID of the addon
     * @returns Display component with the Addon
     */
    function findFoeAddon(id: string) {
        let addon: PlayerAddon | null = null;
        addon = AddonFactory.CreateNewAddon(id, "foeabilities")
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
            <EmptyDisplay d_colour={parentItem.Class} d_name={table.Name} d_type={"sub"} d_method={() => <TableDisplay d_colour={parentItem.Class} d_type={"sub"} data={table} />}/>
        )
    }

    /**
     * returns a component showing an Addon display
     * @param id The ID of the addon
     * @returns Display component with the Addon
     */
    function findSummon(id: string) {
        let summon: PlayerSummon | null = null;

        summon = SummonFactory.CreateNewSummon(id, "summons")

        return (
            <GenericDisplay d_colour={parentItem.Class} d_name={summon.Name} d_type={"sub"} d_method={() => <SummonDisplay data={summon} />}/>
        )
    }

    /**
     * returns a component showing an Addon display
     * @param id The ID of the addon
     * @returns Display component with the Addon
     */
    function findFoeSummon(id: string) {
        let summon: PlayerSummon | null = null;

        summon = SummonFactory.CreateNewSummon(id, "foesummons")

        return (
            <GenericDisplay d_colour={parentItem.Class} d_name={summon.Name} d_type={"sub"} d_method={() => <SummonDisplay data={summon} />}/>
        )
    }

    /**
     * returns a component showing an Addon display
     * @param id The ID of the addon
     * @returns Display component with the Addon
     */
    function findTrait(id: string) {
        let trait: Trait | null = null;

        trait = TraitFactory.CreateNewTrait(id, "traits", parentItem.Class)

        return (
            <GenericDisplay d_colour={parentItem.Class} d_name={trait.Name} d_type={"sub"} d_method={() => <TraitDisplay data={trait} />}/>
        )
    }

    /**
     * returns a component showing an Addon display
     * @param id The ID of the addon
     * @returns Display component with the Addon
     */
    function findFoeTrait(id: string) {
        let trait: Trait | null = null;

        trait = TraitFactory.CreateNewTrait(id, "foetraits", parentItem.Class)

        return (
            <GenericDisplay d_colour={parentItem.Class} d_name={trait.Name} d_type={"sub"} d_method={() => <TraitDisplay data={trait} />}/>
        )
    }

    /**
     * returns a component showing a Summon display when hovered over
     * @param id The ID of the addon
     * @returns Display component with the Addon
     */
    function findTextSummon (id: string) {
        let summon: PlayerSummon | null = null;

        summon = SummonFactory.CreateNewSummon(id, "summons")

        return (
            <GenericHover d_colour={'icon'} d_name={summon.Name} titlename={summon.Name} d_type={""} d_method={() => <SummonDisplay data={summon} />}/>
        )
    }

    /**
     * returns a component showing a Summon display when hovered over
     * @param id The ID of the addon
     * @returns Display component with the Addon
     */
    function findTextFoe (id: string) {
        let summon: FoeJob | null = null;

        summon = FoeFactory.CreateNewFoeJob(id)

        return (
            <GenericPopup titlename={summon.Name} d_colour={'icon'} d_name={summon.Name} d_type={""} d_method={() => <FoeJobDisplay data={summon} />}/>
        )
    }

    /**
     * returns a component showing a Summon display when hovered over
     * @param id The ID of the addon
     * @returns Display component with the Addon
     */
    function findTextTrait (id: string) {
        let trait: Trait | null = null;

        trait = TraitFactory.CreateNewTrait(id, "traits", parentItem.Class)

        return (
            <GenericHover d_colour={'icon'} d_name={trait.Name} titlename={trait.Name} d_type={""} d_method={() => <TraitDisplay data={trait} />}/>
        )
    }

    return (
        <span>
            {returnFullItem(description)}
        </span>
    )
}

export default AdvancedDescriptionItemDisplay;