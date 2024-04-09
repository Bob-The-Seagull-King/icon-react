import 'bootstrap/dist/css/bootstrap.css'
import '../../../resources/styles/_icon.scss'
import React from 'react'

// Import functions and typescrip classes
import {capitalizeString} from '../../../utility/functions'
import {IIconpendiumItemTag} from '../../../classes/IconpendiumItem'

const TagDisplay = (props: any) => {
    // Tag object that is displayed with this component
    const tag: IIconpendiumItemTag = props.data

    return (
        <div className="tagItem tagText">
            &#x2b9e; {capitalizeString(tag.tag_name.toString() || "")} {capitalizeString(tag.val.toString() || "")}
        </div>
    )
}

export default TagDisplay;