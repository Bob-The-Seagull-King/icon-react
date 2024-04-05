/**
 * Returns a capitalized version of a given string
 * @param stringVal The string to be capitalized
 * @returns The string with the first letter capitalized
 */
export function capitalizeString(stringVal: string) {
    if (stringVal.length > 0) {
        return stringVal[0].toUpperCase() + stringVal.slice(1).toLowerCase();
    }
    return "";
}

export function makestringpresentable(stringVal: string) {
    const pairedString = stringVal.toString().replace(/_/g, ' ').split(" "); 
    let stringreturned = "";
    
    let i = 0 
    for (i = 0; i < pairedString.length; i++) {
        const tempstring = capitalizeString(pairedString[i])
        stringreturned = stringreturned + ((i == 0)?  "" : " ") + tempstring
    }
    return stringreturned;
}

/**
 * Returns the class-colour based on the provided name
 * @param name The job or class of the given item
 * @returns The colour associated with that job or class
 */
export function getColour(name: string){
    const yellow = ["yellow", "cl_vagabond", "vagabond", "fool", "freelancer", "shade", "warden"];
    const red = ["red","cl_stalwart", "stalwart", "bastion", "demon slayer", "colossus", "knave"];
    const green = ["green", "cl_mendicant", "mendicant", "chanter", "harvester", "sealer", "seer"];
    const blue = ["blue","cl_wright", "wright", "enochian", "geomancer", "spellblade", "stormbender"];
    const purple = ["Purple", "purple"];

    if (yellow.includes(name.toLowerCase())) {
        return yellow[0];
    }

    if (red.includes(name.toLowerCase())) {
        return red[0];
    }

    if (green.includes(name.toLowerCase())) {
        return green[0];
    }

    if (blue.includes(name.toLowerCase())) {
        return blue[0];
    }

    if (purple.includes(name.toLowerCase())) {
        return purple[0];
    }

    return purple[0];
}

/**
 * Checks if a tag-set contains a specific value
 * @param tag the array of {} tags
 * @param value the value of the tag_name to be checked
 * @returns Boolean, if one of the tags has tag_name
 * that matches the value.
 */
export function containsTag(tag:any, value:string) {
    let i = 0;

    for (i = 0; i < tag.length; i++) {
        if (tag[i].tag_name == value) {
            return true;
        }
    }
    return false;
}

/**
 * Gets the value of a tage from a tag array
 * @param tag the array of {} tags
 * @param value the tag_name to get the value of
 * @returns the val of a given tag, returns ""
 * if no tag exists within the param tag.
 */
export function getTagValue(tag:any, value:string) {
    let i = 0;

    for (i = 0; i < tag.length; i++) {
        if (tag[i].tag_name == value) {
            return tag[i].val;
        }
    }
    return "";
}