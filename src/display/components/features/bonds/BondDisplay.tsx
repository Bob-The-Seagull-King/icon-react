import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Classes
import { returnDescription } from '../../../../utility/util';
import { ITable } from '../../../../classes/feature/table/tablebody';
import { ITableItem } from '../../../../classes/feature/table/tableitem';
import { TableFactory } from '../../../../factories/features/TableFactory';
import { capitalizeString } from '../../../../utility/functions';
import { Bond, GearOption } from '../../../../classes/feature/bonds/Bond';

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import BondPowerDisplay from './BondPowerDisplay';
import ItemStat from '../../subcomponents/description/ItemStat';
import TableDisplay from '../table/TableDisplay';

const BondDisplay = (props: any) => {
    const BondObject: Bond = props.data

    function returnGearBody(item : GearOption) {
        
        const TableName = (item.Choose > 0)? "Choose " + item.Choose : "Gain";

        const TableItems : ITableItem[] = []

        item.Kits.forEach(kit => {
            const KitItems : any[] = [];

            kit.Items.forEach(item => KitItems.push(
                {
                    tags: {desc_type : "desc"},
                    content: capitalizeString(item)
                }
            ))

            const Item : ITableItem = {
                id: "ti_"+BondObject.Name + "kit" + kit.Name,
                type: "TableItem",
                source: "core",
                name: "",
                tags: {},
                eventtags: {},
                description: [{
                    tags: {desc_type : "desc"},
                    content: kit.Name
                },
                    {
                    tags: {desc_type : "list"},
                    content: "",
                    subcontent: KitItems
                }]
            }

            TableItems.push(Item)
        })

        const _itable : ITable = {
            id: "tb_"+BondObject.Name + "gear"+item.Choose,
            type: "Table",
            source: "core",
            tags: {},
            eventtags: {},
            name: TableName,
            colnames: [],
            description: [ ],
            items: TableItems
        }


        const table = TableFactory.CreateTable(_itable)

        return (
            <GenericDisplay d_colour={'icon'} d_name={table.Name} d_type={"sub"} d_method={() => <TableDisplay d_colour={'icon'} d_type={"sub"} data={table} />}/>
        )
    }

    function returnStats() {
        let Actions = ""
        for (let i = 0; i < BondObject.Actions.length; i ++) {
            if (i != 0) {
                Actions += ", "
            }
            Actions += BondObject.Actions[i].Name;
        }

        return (
            <div>
                <div className="row row-cols-lg-8 row-cols-md-8 row-cols-sm-4 justify-content-center">
                <ItemStat title={"Effort"} value={BondObject.Effort}/>
                <ItemStat title={"Strain"} value={BondObject.Strain}/>
                <ItemStat title={"Actions"} value={Actions}/>
                </div>
            </div>
        )
    }

    function ReturnPowers() {
        return (
            <div className="row row-cols-3">
                <div className="col-4">
                    <div className="equiptitle">Name</div>
                </div>
                <div className="col-4">
                    <div className="equiptitle">Restrictions</div>
                </div>
                <div className="col-2">
                    <div className="equiptitle">Uses</div>
                </div>
                <div className="col-2">
                    <div className="equiptitle">Use Type</div>
                </div>
            </div>
        )
    }

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnStats()} 
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <div className="verticalspacer"/>
                    {returnDescription(BondObject, BondObject.Blurb)}     
                </div>               
                <div className="col">
                    <div className="verticalspacer"/>
                    <h1 className={'titleShape titlebody subbackgroundicon'}>{"Ideals"}</h1>
                    
                    {BondObject.Ideals.map(item => <div className={"tablerowbody tablerow" + (BondObject.Ideals.indexOf(item) % 2)} key={"idealslist"+item}>{item}</div>)}
                    
                </div>
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <div className="verticalspacer"/>
                    {BondObject.SpecialAbility.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="traitloop" d_colour={'icon'} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacerbig"/></div>)}        
                </div>
                <div className="col">
                    <div className="verticalspacer"/>
                    {BondObject.SecondWind.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="traitloop" d_colour={'icon'} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacerbig"/></div>)}       
                </div> 
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">Gear</div>
            </div> 
            <div className="verticalspacer"/>
            
            <div className="row">
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: ((BondObject.Gear.length > 1)? 2 : 1)}} >
                    <Masonry gutter="20px">
                        {BondObject.Gear.map(item => returnGearBody(item))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">Abilities</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {ReturnPowers()}
                {BondObject.Powers.map((item) => <BondPowerDisplay key={"bondpower"+item.Name} data={item}/>)}
            </div>

        </div>
    )
}

export default BondDisplay;