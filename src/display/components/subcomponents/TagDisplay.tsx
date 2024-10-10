import 'bootstrap/dist/css/bootstrap.css'
import '../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import {capitalizeString, makestringpresentable} from '../../../utility/functions'

const TagDisplay = (props: any) => {
    const key : string = props.itemkey;
    const val : string | boolean | number | null = props.itemval

    return (
        <div className="tagItem tagText">
            &#x2b9e; {(key.toString() || "")} {makestringpresentable(((val)? val : '').toString() || "")}
        </div>
    )
}

export default TagDisplay;