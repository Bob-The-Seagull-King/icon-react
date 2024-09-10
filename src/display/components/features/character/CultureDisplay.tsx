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
import { Culture } from '../../../../classes/feature/character/Culture';

const CultureDisplay = (props: any) => {
    const CultureObject: Culture = props.data
    const bannedAbilityTags = ["inflict", "type"]

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnDescription(CultureObject, CultureObject.Description)}
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {returnDescription(CultureObject, CultureObject.Values)}
            </div>
            
        </div>
    )
}

export default CultureDisplay;