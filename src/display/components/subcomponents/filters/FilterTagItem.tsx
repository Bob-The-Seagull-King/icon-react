import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import { FilterTag } from '../../../../classes/viewmodel/collections/filters/FilterInterfaces'

const FilterTagItem = (prop: any) => {
    const ItemFilter: FilterTag = prop.data

    // Return result -----------------------------
    return (
        <div className="col">
            <div className="centerPosition">
                {ItemFilter.TagType.Name}
            </div>
        </div>
    )
    // -------------------------------------------
}

export default FilterTagItem