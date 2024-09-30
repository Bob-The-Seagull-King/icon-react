
import React, { useState } from 'react'
import Image from 'react-bootstrap/Image';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface EditTextType {
    title      : string,
    returnBaseValue : (_objitem : any | null, _subitem? : any | null) => string,
    returnButton : (_manager : any, _objitem : any | null, open : any, _subitem? : any | null, _item? : string | null) => JSX.Element,
    updateText : (_manager : any, _objitem : any | null, itemName : string, close : any, update: any, _subitem? : any | null) => void
}

export interface EditTextDataTable {[moveid: Lowercase<string>]: EditTextType}

export const EditTextDataDex : EditTextDataTable = {
    fighttitle : {
        title : 'Update Fight Title',
        returnBaseValue (_objitem : any | null, _subitem? : any | null) {
            console.log(_objitem)
            if (_objitem) {
                console.log("DHASKJDHASKJ")
                return _objitem.Title}
            return ""
        },
        returnButton (_manager : any, _objitem : any | null, open : any, _subitem? : any | null) {
            const Fight_Name = (_objitem)? _objitem.Title : "";

            return (
                <div className="largefonttext" style={{display:"flex",alignItems:"center"}}>
                    <div style={{width:"fit-content"}}>
                        <div style={{marginRight:"0.5em",textAlign:"center",width:"fit-content"}} className="d-none d-md-block">{Fight_Name}</div>
                        <div style={{marginRight:"0.1em",fontSize:"0.7em",lineHeight:"0.75em",textAlign:"center",width:"fit-content"}} className="d-block d-md-none">{Fight_Name}</div>
                    </div>
                    <FontAwesomeIcon icon={faPenToSquare} className="hovermouse" style={{fontSize:"0.5em"}}  onClick={() => open()}/>
                </div>
            )
        },
        updateText (_manager : any, _objitem : any | null, itemName : string, close : any, update: any, _subitem? : any | null) {    
            if (_objitem != null) {
                _objitem.Title = itemName.trim();
                update()
            }
            close();
        }
    }
}