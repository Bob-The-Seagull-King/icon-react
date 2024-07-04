/*
util.tsx holds functions that are used often in
multiple locations, and also return DOM elements.
*/
import React from 'react'
import { Requester } from '../factories/Requester';
import { IGlossaryRule, GlossaryRule } from '../classes/feature/glossary/Glossary';
import GlossaryHover from '../display/components/subcomponents/glossary/GlossaryHover';

/**
 * Takes a string, and an array of string:glossary_id pairs, and turns
 * each word in the array into a hoverable element.
 * @param glossary  An array of JSON pairs in the format 
 *                  {val: String, id: String}
 * @param content   The string to convert
 * @returns Span element containing all elements of the text, with
 *          some parts of the text as <GlossaryHover/> elements.
 */
export function ConvertContentWithGlossary(glossary: any[] | undefined, content: string) {
    if (glossary) {
        let i = 0;
        let splitSet : string[] = [content];
        for (i = 0; i < (glossary?.length || 0); i ++) {
            const modifiers = "g"
            const matchstring = "("+glossary[i].val.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')+")" //eslint-disable-line
            const patt = new RegExp(matchstring,modifiers);
            const tempsplit : string[] = [];
            let j = 0;
            for (j = 0; j < splitSet.length; j ++) {
                const split = splitSet[j].split(patt);
                let k = 0;
                for (k = 0; k < split.length; k ++) {
                    tempsplit.push(split[k])
                }
            }

            splitSet = tempsplit;
            
        }
        
        return (
            <span>
                {splitSet.map((item) => (
                    <span key='glossarysplititem'>
                        {ArrayItemIntoHtml(item, glossary)}
                    </span>
                ))}
            </span>
        )
    }
    return content;
}

/**
 * Transforms a single part of the string into the right element
 * @param content The content to be converted
 * @param delim The value the content should be if it's a hover item
 * @returns Either a <span> or <GlossaryHover> containing the content
 */
function ArrayItemIntoHtml(content: string, delim: any) {
    if (content != "") {
        let i = 0;
        for (i = 0; i < delim.length; i ++) {
            if (content == delim[i].val) {
                const GlossaryData: IGlossaryRule = Requester.MakeRequest( {searchtype: "id", searchparam: {type: "glossary", id: delim[i].id}} ) as IGlossaryRule
                const GlossaryObject = new GlossaryRule(GlossaryData)

                return ( <GlossaryHover data={GlossaryObject} titlename={content}/> )
            }
        }
        
        return ( <span>{content}</span> )
        
    }
    return ( <span></span> )
}