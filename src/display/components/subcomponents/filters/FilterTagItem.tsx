import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Import functions and typescript classes
import { FilterTag } from '../../../../classes/viewmodel/collections/filters/FilterInterfaces'
import { makestringpresentable } from '../../../../utility/functions'

const FilterTagItem = (prop: any) => {

    // Initialize --------------------------------------------------------------------------

    // Props
    const ItemFilter: FilterTag = prop.data

    // Use states
    const [_currentstate, returnactivetext] = useState(GetDisplayVal());
    
    // Functions ---------------------------------------------------------------------------

    /**
     * Reads the filter tag object and returns a string
     * added on to the end of the component class name
     * that changes how its displayed.
     * @returns 
     */
    function GetDisplayVal(){
        if (ItemFilter.TagType.IsActive) {
            if (ItemFilter.TagType.DoInclude) {
                return "positive"
            } else { return "negative" }
        } else { return "" }
    }

    /**
     * Switched an object between three states.
     * Off                          => Must Include This Tag
     * Must Include This Tag        => Must Not Include This Tag
     * Must Not Include This Tag    => Off
     */
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

    /**
     * Updates the value of the tag.
     * @param value Value of the input box
     */
    function updateName(value: string) {
        ItemFilter.TagVal.Val = value;
    }


    // Return result --------------------------------------------------------------------------
    return (
        <div className="">
            <div className="centerPosition">
                <div className={"tagBox " + (_currentstate == "" ? "filterobjectdisplay" : _currentstate == "positive" ? "filterobjectdisplaypositive" : "filterobjectdisplaynegative")} >
                    <div className='hovermouse tagpad'/>
                    <div onClick={() => SwitchStates()} className="hovermouse tagboxtitle">
                        {makestringpresentable(ItemFilter.TagType.Name)}
                    </div>
                    <div className='tagpad'/>
                    <div className=''>
                        <InputGroup className="shorten tagboxpad">
                            <Form.Control  size="sm" className="no-margins " onChange={e => updateName(e.target.value)} aria-label="Text input with checkbox" defaultValue={ItemFilter.TagVal.Val} placeholder=""/>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default FilterTagItem