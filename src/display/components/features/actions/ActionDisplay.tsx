import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { Action } from "../../../../classes/feature/actions/Action";
import { TableFactory } from '../../../../factories/features/TableFactory';
import { capitalizeString } from '../../../../utility/functions';
import { ITable } from '../../../../classes/feature/table/tablebody';

// Components
import EmptyDisplay from '../../../components/generics/EmptyDisplay';
import TableDisplay from '../table/TableDisplay';

const ActionDisplay = (props: any) => {
    const ActionObject: Action = props.data
    const bannedAbilityTags = ["inflict", "type"]

    function returnChapterExamples() {

        const Chapter1Desc : any[] = [];//eslint-disable-line
        const Chapter2Desc : any[] = [];
        const Chapter3Desc : any[] = [];

        ActionObject.ChapterOne.forEach(item => Chapter1Desc.push(
            {
                tags: {desc_type : "desc"},
                content: capitalizeString(item) + "."
            }
        ))

        ActionObject.ChapterTwo.forEach(item => Chapter2Desc.push(
            {
                tags: {desc_type : "desc"},
                content: capitalizeString(item) + "."
            }
        ))

        ActionObject.ChapterThree.forEach(item => Chapter3Desc.push(
            {
                tags: {desc_type : "desc"},
                content: capitalizeString(item) + "."
            }
        ))

        const _itable : ITable = {
            id: "tb_"+ActionObject.Name + "chapters",
            type: "Table",
            source: "core",
            tags: {},
            eventtags: {},
            name: ActionObject.Name + " By Chapter",
            colnames: ["Chapter", "Examples"],
            description: [ ],
            items: [
                {
                    id: "ti_"+ActionObject.Name + "chapter1",
                    type: "TableItem",
                    source: "core",
                    name: "",
                    tags: {},
                    eventtags: {},
                    description: [{
                        tags: {desc_type : "desc"},
                        content: "One"
                    },
                        {
                        tags: {desc_type : "list"},
                        content: "",
                        subcontent: Chapter1Desc
                    }]
                },
                {
                    id: "ti_"+ActionObject.Name + "chapter2",
                    type: "TableItem",
                    source: "core",
                    name: "",
                    tags: {},
                    eventtags: {},
                    description: [{
                        tags: {desc_type : "desc"},
                        content: "Two"
                    },
                        {
                        tags: {desc_type : "list"},
                        content: "",
                        subcontent: Chapter1Desc
                    }]
                },
                {
                    id: "ti_"+ActionObject.Name + "chapter3",
                    type: "TableItem",
                    source: "core",
                    name: "",
                    tags: {},
                    eventtags: {},
                    description: [{
                        tags: {desc_type : "desc"},
                        content: "Three"
                    },
                        {
                        tags: {desc_type : "list"},
                        content: "",
                        subcontent: Chapter1Desc
                    }]
                }
            ]
        }


        const table = TableFactory.CreateTable(_itable)

        return (
            <EmptyDisplay d_colour={'icon'} d_name={table.Name} d_type={"sub"} d_method={() => <TableDisplay d_colour={'icon'} d_type={"sub"} data={table} />}/>
        )
    }

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnTags(ActionObject.Tags, bannedAbilityTags)}
            </div>
            <div className="verticalspacer"/>
            <div>
                {returnDescription(ActionObject, ActionObject.Laconic)}
            </div> 
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {returnDescription(ActionObject, ActionObject.Description)}
            </div> 
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {returnChapterExamples()}
            </div> 
            
        </div>
    )
}

export default ActionDisplay;