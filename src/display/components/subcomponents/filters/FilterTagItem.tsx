import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FilterTag } from '../../../../classes/viewmodel/collections/filters/FilterInterfaces'
import { makestringpresentable } from '../../../../utility/functions'

const FilterTagItem = (prop: any) => {
    const ItemFilter: FilterTag = prop.data

    const [_currentstate, returnactivetext] = useState(GetDisplayVal());
    
    function GetDisplayVal(){
        if (ItemFilter.TagType.IsActive) {
            if (ItemFilter.TagType.DoInclude) {
                return "positive"
            } else {
                return "negative"
            }
        } else {
            return ""
        }
    }

    function SwitchStates() {
        if (ItemFilter.TagType.IsActive) {
            if (ItemFilter.TagType.DoInclude) {
                ItemFilter.TagType.IsActive = true;
                ItemFilter.TagType.DoInclude = false;
            } else {
                ItemFilter.TagType.IsActive = false;
                ItemFilter.TagType.DoInclude = false;
            }
        } else {
            ItemFilter.TagType.IsActive = true;
            ItemFilter.TagType.DoInclude = true;
        }
        returnactivetext(GetDisplayVal())
    }

    function updateName(value: string) {
        ItemFilter.TagVal.Val = value;
    }


    // Return result -----------------------------
    return (
        <div className="">
            <div className="centerPosition">
                <div className={"tagBox " + (_currentstate == "" ? "filterobjectdisplay" : _currentstate == "positive" ? "filterobjectdisplaypositive" : "filterobjectdisplaynegative")} >
                    <div className='tagpad'/>
                    <div onClick={() => SwitchStates()} className="tagboxtitle">
                        {makestringpresentable(ItemFilter.TagType.Name)}
                    </div>
                    <div className='tagpad'/>
                    <div className=''>
                        <InputGroup className="shorten tagboxpad">
                            <Form.Control  size="sm" className="no-margins " onChange={e => updateName(e.target.value)} aria-label="Text input with checkbox" placeholder=""/>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default FilterTagItem