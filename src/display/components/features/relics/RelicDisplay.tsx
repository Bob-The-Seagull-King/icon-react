import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnDescription } from '../../../../utility/util';
import { Relic, RelicAction } from '../../../../classes/feature/relics/Relic';
import { ITable } from '../../../../classes/feature/table/tablebody';
import { ITableItem } from '../../../../classes/feature/table/tableitem';
import { TableFactory } from '../../../../factories/features/TableFactory';
import { makestringpresentable } from '../../../../utility/functions';

// Components
import EmptyDisplay from '../../../components/generics/EmptyDisplay';
import TableDisplay from '../table/TableDisplay';

const RelicDisplay = (props: any) => {
    const RelicObject: Relic = props.data

    function returnRelicUpdates() {        

        const TableItems : ITableItem[] = []

        
        let titleI = "I";
        if (RelicObject.TierI.Invoke === true) {
            if (RelicObject.TierI.InvokeType) {
                titleI += " (Invoke : " + makestringpresentable( RelicObject.TierI.InvokeType)
                if (RelicObject.TierI.InvokeVal) {
                    titleI += " " + RelicObject.TierI.InvokeVal
                }
                titleI += ")"
            }
        }

        const ItemI : ITableItem = {
            id: "ti_"+RelicObject.Name + "aspect",
            type: "TableItem",
            source: "core",
            name: "",
            tags: {},
            eventtags: {},
            description: [
                {                    
                    tags: {desc_type : "effect"},
                    content: titleI
                },
                {
                    tags: {desc_type : "desc"},
                    content: "",
                    subcontent: RelicObject.Data.tier_i.description
                }]
        }

        TableItems.push(ItemI)
        
        let titleII = "II";
        if (RelicObject.TierII.Invoke === true) {
            if (RelicObject.TierII.InvokeType) {
                titleII += " (Invoke : " + makestringpresentable( RelicObject.TierII.InvokeType)
                if (RelicObject.TierI.InvokeVal) {
                    titleII += " " + RelicObject.TierII.InvokeVal
                }
                titleII += ")"
            }
        }

        const ItemII : ITableItem = {
            id: "ti_"+RelicObject.Name + "aspect",
            type: "TableItem",
            source: "core",
            name: "",
            tags: {},
            eventtags: {},
            description: [
                {                    
                    tags: {desc_type : "effect"},
                    content: titleII
                },
                {
                    tags: {desc_type : "desc"},
                    content: "",
                    subcontent: RelicObject.Data.tier_ii.description
                }]
        }

        TableItems.push(ItemII)
        
        let titleIII = "III";
        if (RelicObject.TierIII.Invoke === true) {
            if (RelicObject.TierIII.InvokeType) {
                titleIII += " (Invoke : " + makestringpresentable( RelicObject.TierIII.InvokeType)
                if (RelicObject.TierI.InvokeVal) {
                    titleIII += " " + RelicObject.TierIII.InvokeVal
                }
                titleIII += ")"
            }
        }

        const ItemIII : ITableItem = {
            id: "ti_"+RelicObject.Name + "aspect",
            type: "TableItem",
            source: "core",
            name: "",
            tags: {},
            eventtags: {},
            description: [
                {                    
                    tags: {desc_type : "effect"},
                    content: titleIII
                },
                {
                    tags: {desc_type : "desc"},
                    content: "",
                    subcontent: RelicObject.Data.tier_iii.description
                }]
        }

        TableItems.push(ItemIII)

        const _itable : ITable = {
            id: "tb_"+RelicObject.Name + "tiers",
            type: "Table",
            source: "core",
            tags: {},
            eventtags: {},
            name: '',
            colnames: ["Tier","Effect"],
            description: [ ],
            items: TableItems
        }

        const table = TableFactory.CreateTable(_itable)

        return (
            <EmptyDisplay d_colour={RelicObject.Colour} d_name={table.Name} d_type={"sub"} d_method={() => <TableDisplay d_colour={RelicObject.Colour} d_type={"sub"} data={table} />}/>
        )
    }

    function returnRelicAspects() {        

        const TableItems : ITableItem[] = []
        
        let titleaspect = "Aspect";
        if (RelicObject.TierII.Invoke === true) {
            if (RelicObject.TierII.InvokeType) {
                titleaspect += " (Invoke : " + makestringpresentable( RelicObject.TierII.InvokeType)
                if (RelicObject.TierI.InvokeVal) {
                    titleaspect += " " + RelicObject.TierII.InvokeVal
                }
                titleaspect += ")"
            }
        }

        const Item : ITableItem = {
            id: "ti_"+RelicObject.Name + "aspect",
            type: "TableItem",
            source: "core",
            name: "",
            tags: {},
            eventtags: {},
            description: [
                {
                    tags: {desc_type : "desc"},
                    content: "",
                    subcontent: RelicObject.Data.quest
                },
                {
                    tags: {desc_type : "desc"},
                    content: "",
                    subcontent: RelicObject.Data.aspected.description
                }
                ]
        }

        TableItems.push(Item)

        const _itable : ITable = {
            id: "tb_"+RelicObject.Name + "aspect",
            type: "Table",
            source: "core",
            tags: {},
            eventtags: {},
            name: '',
            colnames: ["Quest",titleaspect],
            description: [ ],
            items: TableItems
        }

        const table = TableFactory.CreateTable(_itable)

        return (
            <EmptyDisplay d_colour={RelicObject.Colour} d_name={table.Name} d_type={"sub"} d_method={() => <TableDisplay d_colour={RelicObject.Colour} d_type={"sub"} data={table} />}/>
        )
    }

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnDescription(RelicObject, RelicObject.Blurb)}
            </div> 
            <br/> 

            <div>
                {returnRelicUpdates()}
            </div>

            <div className="verticalspacer"/> 
            <div>
                <div className="separator">Aspect</div>
            </div> 
            <div className="verticalspacer"/>

            <div>
                {returnRelicAspects()}
            </div>
            
        </div>
    )
}

export default RelicDisplay;