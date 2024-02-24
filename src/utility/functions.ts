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
    const yellow = ["yellow", "Vagabond", "Fool", "Freelancer", "Shade", "Warden"];
    const red = ["red", "Stalwart", "Bastion", "Demon Slayer", "Colossus", "Knave"];
    const green = ["green", "Mendicant", "Chanter", "Harvester", "Sealer", "Seer"];
    const blue = ["blue", "Wright", "Enochian", "Geomancer", "Spellblade", "Stormbender"];

    if (yellow.includes(name)) {
        return yellow[0];
    }

    if (red.includes(name)) {
        return red[0];
    }

    if (green.includes(name)) {
        return green[0];
    }

    if (blue.includes(name)) {
        return blue[0];
    }

    return "";
}