import React from 'react'
import GlossaryPopup from "../components/pagecomponents/GlossaryPopup";

export function convertStringToContent(contentstring: string) {
    const split = contentstring.split(/({{{{[^}]{0,}}}}})/g);
    return (
        <span>
            {split.map((item) => (
                <span key={item + ( Math.random().toString())}>{checkerStringToContent(item)}</span>
            ))}
        </span>
    )
}

function checkerStringToContent(string: string) {
    if ((string.length > 8)) {
        if ((string.substring(0,4) == "{{{{")) {
            return (
                <GlossaryPopup data={string.substring(4,string.length-4)} />
            )
        } else {
            return (
                <span dangerouslySetInnerHTML={{__html: (string)}}></span>
            )
        }
    } else {
        return (
            <span dangerouslySetInnerHTML={{__html: (string)}}></span>
        )
    }
}