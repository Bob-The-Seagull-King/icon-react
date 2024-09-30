
import React, { useState } from 'react'
import Image from 'react-bootstrap/Image';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface EditListType {
    title      : string,
    smallwidth : string,
    widewidth : string,
    baseValue : (_manager : any, _objitem : any | null,  _subitem? : any | null, _item? : string | null) => any,
    returnBaseValue : (_objitem : any | null, _subitem? : any | null) => string,
    returnOptions : (_manager : any, _objitem : any | null,  _subitem? : any | null, _item? : string | null) => JSX.Element,
    updateValue : (_manager : any, _objitem : any | null, itemName : string, update: any, _subitem? : any | null) => void
}

export interface EditListDataTable {[moveid: Lowercase<string>]: EditListType}

export const EditListDataDex : EditListDataTable = {
    fightchapter : {
        title : 'Update Fight Chapter',
        smallwidth : "1",
        widewidth : "2",
        baseValue(_manager : any, _objitem : any | null) {
            return _objitem.Chapter;
        },
        returnBaseValue (_objitem : any | null, _subitem? : any | null) {
            if (_objitem) {
                return _objitem.Title}
            return ""
        },
        returnOptions (_manager : any, _objitem : any | null, _subitem? : any | null) {
            const Fight_Name = (_objitem)? _objitem.Title : "";

            return (
                <>                
                <option key={"factionoption1"}>{1}</option>
                <option key={"factionoption1"}>{2}</option>
                <option key={"factionoption1"}>{3}</option>
                </>
            )
        },
        updateValue (_manager : any, _objitem : any | null, itemName : string, update: any, _subitem? : any | null) {    
            if (_objitem != null) {
                _objitem.Chapter = Number(itemName);
                update()
            }
        }
    }
}