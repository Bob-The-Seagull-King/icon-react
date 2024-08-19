import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnDescription } from '../../../../utility/util';
import { Relic, RelicAction } from '../../../../classes/feature/relics/Relic';

// Components
import { makestringpresentable } from '../../../../utility/functions';

const RelicDisplay = (props: any) => {
    const RelicObject: Relic = props.data

    function returnRelicAction(_title : string, _item : RelicAction) {
        let title = _title;

        if (_item.Invoke === true) {
            if (_item.InvokeType) {
                title += " (Invoke : " + makestringpresentable( _item.InvokeType)
                if (_item.InvokeVal) {
                    title += " " + _item.InvokeVal
                }
                title += ")"
            }
        }

        return (
            <div style={{display:"flex"}}><span className="boldtextColNormal" style={{marginRight:"0.5em"}}>{title + ": "}</span> {returnDescription(_item, _item.Description)}</div>
        )
    }

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnDescription(RelicObject, RelicObject.Blurb)}
            </div> 
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>

            <div>
                {returnRelicAction("I", RelicObject.TierI)}
            </div>
            <div>
                {returnRelicAction("II", RelicObject.TierII)}
            </div>
            <div>
                {returnRelicAction("III", RelicObject.TierIII)}
            </div>

            <div className="verticalspacer"/> 
            <div>
                <div className="separator">Aspect</div>
            </div> 
            <div className="verticalspacer"/>
            
            <div>
                {returnDescription(RelicObject, RelicObject.Quest)}
            </div> 
            <div className="verticalspacerbig"/>

            <div>
                {returnRelicAction("Aspected", RelicObject.Aspected)}
            </div>
            
        </div>
    )
}

export default RelicDisplay;