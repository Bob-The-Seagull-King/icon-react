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
import { Kin } from '../../../../classes/feature/character/Kin';
import ImageSetDisplay from '../../../components/generics/ImageSetDisplay';

const KinDisplay = (props: any) => {
    const KinObject: Kin = props.data
    const bannedAbilityTags = ["inflict", "type"]

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnTags(KinObject.Tags, bannedAbilityTags)}
            </div>
            <div className="verticalspacer"/>
            <div className="row justify-content-center">
                <div className="col-10">
                    <img src={KinObject.Image} style={{width:"100%"}}/>
                </div>
            </div> 
            <div className="verticalspacerbig"/>
            <br/>
            <div>
                {returnDescription(KinObject, KinObject.Description)}
            </div>
            {KinObject.Images.length > 0 &&
                <>
                <div className="verticalspacer"/> 
                <div>
                    <div className="separator">Gallery</div>
                </div> 
                <div className="verticalspacer"/>
                <div>
                    <ImageSetDisplay data={KinObject.Images}/>
                </div>
                </>
            }
            
        </div>
    )
}

export default KinDisplay;