
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
            if (_objitem) {
                return _objitem.Title}
            return ""
        },
        returnButton (_manager : any, _objitem : any | null, open : any, _subitem? : any | null) {
            const Fight_Name = (_objitem)? _objitem.Title : "";

            return (
                <div className="largefonttext" style={{display:"flex",alignItems:"center"}}>
                    <div style={{width:"fit-content",marginRight:"0.5rem"}}>
                        {Fight_Name}
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
    },
    notetitle : {
        title : 'Update Note Title',
        returnBaseValue (_objitem : any | null, _subitem? : any | null) {
            if (_objitem) {
                return _objitem.title}
            return ""
        },
        returnButton (_manager : any, _objitem : any | null, open : any, _subitem? : any | null) {
            const Note_Name = (_objitem)? _objitem.title : "";

            return (
                <div className="" style={{width:"100%",display:"flex",alignItems:"center"}}>
                    <div style={{width:"fit-content",marginRight:"0.5rem"}}>
                        {Note_Name}
                    </div>
                    <FontAwesomeIcon icon={faPenToSquare} className="hovermouse"  onClick={() => open()}/>
                </div>
            )
        },
        updateText (_manager : any, _objitem : any | null, itemName : string, close : any, update: any, _subitem? : any | null) {    
            if (_objitem != null) {
                _objitem.title = itemName.trim();
                update()
            }
            close();
        }
    }
}