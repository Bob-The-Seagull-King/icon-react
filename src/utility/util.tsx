/*
util.tsx holds functions that are used often in
multiple locations, and also return DOM elements.
*/
import React from 'react'

// Classes
import { Requester } from '../factories/Requester';
import { IGlossaryRule, GlossaryRule } from '../classes/feature/glossary/Glossary';

// Components
import GenericHover from '../display/components/generics/GenericHover';
import TagDisplay from '../display/components/subcomponents/TagDisplay';
import AdvancedDescriptionItemDisplay from '../display/components/subcomponents/description/AdvancedDescriptionItemDisplay';
import GlossaryDisplay from '../display/components/features/glossary/GlossaryDisplay';
import { makestringpresentable } from './functions';
import { ObjectTag } from '../classes/IconpendiumItem';

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
                return (<GenericHover d_colour={'icon'} d_name={content} titlename={GlossaryObject.Name} d_type={""} d_method={() => <GlossaryDisplay data={GlossaryObject} />}/>)
            }
        }
        
        return ( <span>{content}</span> )
        
    }
    return ( <span></span> )
}

/**
 * Renders a list of Tags associated with an item
 * @param taglist List of tag objects the item has
 * @param bannedList Any tag which matches a string in here should not be shown
 * @returns Map of TagDisplay objects
 */
export function returnTags(taglist: ObjectTag, bannedList : string[]) {
    const displaytags: ObjectTag = sortTagsForDisplay(taglist, bannedList)

    return (
        <div className="tagBox">
                {Object.keys(displaytags).map((item) => (
                    <div key={"tagDisplay"+item+displaytags[item]}>
                        <TagDisplay itemkey={item} itemval={displaytags[item]}/>
                    </div>
                ))}
        </div>
    )
}

/**
 * Gathers the list of tags that should be rendered
 * @param taglist List of tag objects the item has
 * @param bannedList Any tag which matches a string in here should not be shown
 * @returns Array of tag objects
 */
function sortTagsForDisplay(taglist:  ObjectTag, bannedList : string[]) {
    const tagarray: ObjectTag = {}

    for (const key of Object.keys(taglist)) {
        if (!bannedList.includes(key)) {
            tagarray[makestringpresentable(key)] = (typeof taglist[key] === 'boolean')? null : taglist[key];
        }
    }

    return tagarray;
}

/**
 * Returns the organized description of an object based on model data
 * @param baseObject The model which this description is attatched to
 * @param objectArray The array of description items to render
 * @returns Map of AbilityDescriptionItemDisplay elements
 */
export function returnDescription(baseObject: any, objectArray : any[]) {
    return (
        <div style={{width:"100%"}}>
            {objectArray.map((item) => (
                <div key={"descriptionDisplay"}>
                    <AdvancedDescriptionItemDisplay data={item} parent={baseObject}/>
                </div>
            ))}
        </div>
    )
}