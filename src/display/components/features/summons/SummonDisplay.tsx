import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { PlayerSummon } from "../../../../classes/feature/summons/Summon";

const AbilityDisplay = (props: any) => {
    const SummonObject: PlayerSummon = props.data
    const bannedAbilityTags = ["inflict", "type"]

    function returnLimit() {
        return (<> { SummonObject.Limit > 0 &&
                <p> {"Up to " + SummonObject.Limit + " " + SummonObject.Name + ((SummonObject.Limit > 1)? "s" : "") + " may be summoned at once."} </p>
                } </> )
    }

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnTags(SummonObject.Tags, bannedAbilityTags)}
            </div>
            <div className="verticalspacer"/>
            <div>
                {returnDescription(SummonObject, SummonObject.Blurb)}
            </div> 
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {returnDescription(SummonObject, SummonObject.Description)}
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {returnLimit()}
            </div>
        </div>
    )
}

export default AbilityDisplay;