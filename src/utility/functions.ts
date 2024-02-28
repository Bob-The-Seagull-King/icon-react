/**
 * This function can be used anywhere in the app to greet the user
 * @param userName The user's first name
 * @returns A kind greeting message
 */
export const sayHello = (userName: string): string => {
    return 'Welcome ' + userName + '!'
}

/**
 * Returns a capitalized version of a given string
 * @param stringVal The string to be capitalized
 * @returns The string with the first letter capitalized
 */
export function capitalizeTag(stringVal: string) {
    return stringVal[0].toUpperCase() + stringVal.slice(1).toLowerCase();
}

/**
 * Returns the class-colour based on the provided name
 * @param name The job or class of the given item
 * @returns The colour associated with that job or class
 */
export function getColour(name: string){
    const yellow = ["yellow", "vagabond", "fool", "freelancer", "shade", "warden"];
    const red = ["red", "stalwart", "bastion", "demon slayer", "colossus", "knave"];
    const green = ["green", "mendicant", "chanter", "harvester", "sealer", "seer"];
    const blue = ["blue", "wright", "enochian", "geomancer", "spellblade", "stormbender"];

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

    return "";
}

export function containsTag(tag:any, value:string) {
    let i = 0;

    for (i = 0; i < tag.length; i++) {
        if (tag[i].tag_name == value) {
            return true;
        }
    }
    return false;
}

export function getTagValue(tag:any, value:string) {
    let i = 0;

    for (i = 0; i < tag.length; i++) {
        if (tag[i].tag_name == value) {
            return tag[i].val;
        }
    }
    return "";
}