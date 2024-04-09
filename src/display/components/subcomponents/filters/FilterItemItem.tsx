import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import { FilterItem } from '../../../../classes/viewmodel/collections/filters/FilterInterfaces'
import { makestringpresentable } from '../../../../utility/functions'

const FilterItemItem = (prop: any) => {

    // Initialize --------------------------------------------------------------------------

    // Props
    const ItemFilter: FilterItem = prop.data
    
    // Use states
    const [_currentstate, returnactivetext] = useState(GetDisplayVal());
    
    // Functions ---------------------------------------------------------------------------
    
    /**
     * Reads the filter object and returns a string
     * added on to the end of the component class name
     * that changes how its displayed.
     * @returns 
     */
    function GetDisplayVal(){
        if (ItemFilter.IsActive) {
            if (ItemFilter.DoInclude) {
                return "positive"
            } else {
                return "negative"
            }
        } else {
            return ""
        }
    }

    /**
     * Switched an object between three states.
     * Off                          => Must Include This Tag
     * Must Include This Tag        => Must Not Include This Tag
     * Must Not Include This Tag    => Off
     */
    function SwitchStates() {
        if (ItemFilter.IsActive) {
            if (ItemFilter.DoInclude) {
                ItemFilter.IsActive = true;
                ItemFilter.DoInclude = false;
            } else {
                ItemFilter.IsActive = false;
                ItemFilter.DoInclude = false;
            }
        } else {
            ItemFilter.IsActive = true;
            ItemFilter.DoInclude = true;
        }
        returnactivetext(GetDisplayVal())
    }

    // Return result -------------------------------------------------------------------------
    return (
        <div className="col">
            <div className="centerPosition">
                <div className={"hovermouse " + (_currentstate == "" ? "filterobjectdisplay" : _currentstate == "positive" ? "filterobjectdisplaypositive" : "filterobjectdisplaynegative")} onClick={() => SwitchStates()}>
                    {makestringpresentable(ItemFilter.Group)}: {makestringpresentable(ItemFilter.Name)}
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default FilterItemItem