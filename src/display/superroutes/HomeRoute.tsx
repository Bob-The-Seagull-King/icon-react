import '../../resources/styles/_icon.scss'
import React from 'react'

import { DataResponder } from '../../resources/data/child/util/DataResponder'

const HomeRoute: React.FC = () => {

    console.log(DataResponder.ComplexSearch({   type: "abilities",
                                                request: {
                                                        operator: "or",
                                                        terms:[ 
                                                            {item: "tags", value: "type", equals: true, istag: true, tagvalue: "attack"},
                                                            {item: "tags", value: "range", equals: true, istag: true, tagvalue: ""}],
                                                        subparams: []
                                                    }}))

    // Return result -----------------------------
    return (
        <div>
            <p className="hometitle">Test</p>
        </div>
    )
    // -------------------------------------------
}

export default HomeRoute