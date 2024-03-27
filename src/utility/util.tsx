import React from 'react'
import GlossaryPopup from "../components/pagecomponents/GlossaryPopup";
import SummonPopup from '../components/pagecomponents/SummonPopup';

export function convertStringToContent(contentstring: string) {
    const split = contentstring.split(/(\[\[\[\[[^\]]*\]\]\]\])|({{{{[^}]{0,}}}}})/g);
    console.log(split);
    return (
        <span>
            {split.filter(item => item !== undefined).map((item) => (
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
        } else if ((string.substring(0,4) == "[[[[")) {
            return (
                <SummonPopup data={string.substring(4,string.length-4)} />
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