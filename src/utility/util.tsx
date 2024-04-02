import React from 'react'
import { Requester } from '../factories/Requester';
import { IGlossaryRule, GlossaryRule } from '../classes/feature/glossary/Glossary';
import GlossaryHover from '../display/components/subcomponents/glossary/GlossaryHover';

export function ConvertContentWithGlossary(glossary: any[] | undefined, content: string) {
    let i = 0;

    if (glossary) {
        for (i = 0; i < (glossary?.length || 0); i ++) {
            const modifiers = "g"
            const matchstring = "("+glossary[i].val.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')+")" //eslint-disable-line
            const patt = new RegExp(matchstring,modifiers);
            const split = content.split(patt);
            
            return (
                <span>
                    {split.map((item) => (
                            <span key='glossarysplititem'>
                                {ArrayItemIntoHtml(item, glossary[i])}
                            </span>
                        ))}
                </span>
            )
        }
    }
    return content;
}

function ArrayItemIntoHtml(content: string, delim: any) {
    if (content != "") {
        if (content == delim.val) {

            const GlossaryData: IGlossaryRule = Requester.MakeRequest(
                                                        {searchtype: "id", searchparam: {type: "glossary", id: delim.id}}
                                                        ) as IGlossaryRule
            const GlossaryObject = new GlossaryRule(GlossaryData)

            return (
                <GlossaryHover data={GlossaryObject} titlename={content}/>
            )
        } else {
            return (
                <span>{content}</span>
            )
        }
    }
    return (
        <span>
        </span>
    )
}
