import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

// Import functions
import { makestringpresentable } from '../../../../utility/functions'

const FilterDisplay = (prop: any) => {
    // Initialize props
    const title = prop.title // The filter type
    const value = prop.value // Specific value of the filter
    const exists = prop.state // If the filter is inclusive (green) or exclusive (red)

    // Return result -----------------------------
    return (
        <div className="">
            <div className="centerPosition">
                <div className={"filterobjectdisplay"+exists}>
                    {makestringpresentable(title)}{(value.toString().trim().length == 0)? "" : ": "}{makestringpresentable(value)}
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default FilterDisplay