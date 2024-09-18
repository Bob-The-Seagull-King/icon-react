interface ILevelInfo {
    level : number // The current level of the character
    xp : number // The amount of experience a character has
    xpobjectives : IXPGainCollection // Objectives a character checks each session to mark XP
}

interface IXPGain {
    isgained : boolean // If this objective has been achieved
    information : string // The description of this objective
}

interface IXPGainCollection {
    universal : IXPGain[]   // XP objectives all characters share
    ideals  : IXPGain[] // XP objectives based on character ideals
    unique : IXPGain[] // XP objectives unique to that character
}

interface Ambition {
    title : string // The title for the ambition
    content : string // The description / content of that ambition
    size : number // How may segments in the ambition clock
    progress : number // How many segments of the ambition are filled out
}

interface AmbitionSet {
    standard : Ambition[] // Basic ambitions that are always available (4, 6, 10 segments)
    custom : Ambition[] // Custom ambitions (such as bond powers)
}

interface CampItem {
    base_item : string // ID of the camp item
    upgrades : string[] // Upgrade IDs for the camp item
}

interface CharacterNote {
    title : string // The name of the note
    body : string // The content of the note
}

interface CharacterBasics {
    name : string // The name of the player character
    kin_id : string // ID of the character's kintype
    culture_id : string // ID of the character's culture
}

interface DustState {
    dust_cur : number // The current amount of Dust a character is holding
    dust_cap : number // The maximum amount of Dust a character can hold
}

interface CoreAction {
    action_id : string // The ID of this action
    action_rating : number // The rating a character has in this action
}

interface CustomAction {
    action_name : string // The Name of this action
    action_rating : number // The rating a character has in this action
    action_max : number // The maximum rating this action can have
}

interface Power {
    power_id : string // The ID of the power
    power_uses : string // How many times the power has been used
}

interface NarrativeStats {
    effort : number // How much effort the character has available
    strain : number // How much strain the character currently suffers from
    secondwind : boolean // If the character's second wind has been used
}

interface GearKits {
    kit_id: string // The ID of the Gear Kit
    used_items : string[] // The items from the kit that have been used
}

interface CustomKit {
    title : string // The name of this kit
    items : string[] // Items in this custom kit
    used_items : string[] // The items from the kit that have been used
}

interface Gear {
    chosenkits : GearKits[] // Kits taken from the bond
    customkits : CustomKit[] // Items and gear custom-selected
    loosegear : string[] // Loose gear items which can be taken
}

interface Burden {
    title : string // The title for the burden
    content : string // The description / content of that burden
    size : number // How may segments in the burden clock
    progress : number // How many segments of the burden are filled out
    actions : CoreAction[] // Which ACTIONS a burden impacts
}

interface BurdenSet {
    standard : Burden[] // Basic burden that are always available (4, 6, 10 segments)
    custom : Burden[] // Custom burdens
}

interface NarrativeInfo {
    bond_id : string // The ID of a character's bond
    core_ratings : CoreAction[] // The character's rating in certain actions
    custom_ratings : CustomAction[] // Custom actions a character has
    powers : Power[] // Current bond powers
    stats : NarrativeStats // Numerical narrative information
    gear : Gear // The gear a character has/has taken
    burdens : BurdenSet // Burdens a character suffers from
}

interface CharacterJobs {
    job_id : string // The id of the chosen job
    is_main : boolean // If this job is the primary job
}

interface CustomStatus {
    name : string // The name of the custom status
    colour : string // The colour of the status
}

interface Statuses {
    status_ids : string[] // Statuses currently being suffered
    customstatuses : CustomStatus[] // Custom statuses (such as marks)
}

interface CombatState {
    hitpoints : number // How much HP the character has remaining
    wounds : number // How many wounds the character suffers from
    vigor : number // How much vigor the character has
    status : Statuses // Any statuses/marks/etc the character is suffering from
}

interface RelicInfo {
    relic_id : string // The ID of the relic
    tier : number // What tier it is (aspected === 4)
    dust_infused : number // How much dust is currently infused inside it
    gambit: boolean[] // Which gambits, if any, have been used (no gambit === false)
}

interface AbilityInfo {
    ability_id : string // The ID of the ability
    active : boolean // If the ability is currently taken
    talent : number // Which talent is selected (0 === no talent)
    mastery : boolean // If the ability has been mastered
}

interface TrophyInfo {
    trophy_id : string // The ID of the trophy
    uses : number // How many times it's been used
}

interface TacticalInfo {
    jobs : CharacterJobs // Job information
    resolve : number // Resolve level a character currently has
    currentstate : CombatState // The current condition of the character
    relics : RelicInfo[] // Relics a character has
    abilities : AbilityInfo[] // Abilities a character has
    trophies : TrophyInfo[] // What trophies a character has
}

interface Unspent {
    job : number
    abilitypoint : number
    mastery : number
    relic : number
    actionpoint : number
    bondpower : number
    combat_choice : number
    narrative_choice : number
}

interface IPlayerCharacter {
    basics : CharacterBasics // The core flavour information of a character
    level : ILevelInfo // The level and XP a character has
    dust : DustState // The amount of dust a character has / can have
    camp : CampItem[] // Items the character has in their camp
    ambitions : AmbitionSet // Ambitions a character has/can have
    notes : CharacterNote[] // Custom text objects for a player to have on hand
    narrative : NarrativeInfo // Narrative information on a character
    tactical : TacticalInfo // Tactical information on a character
    unspent_items : Unspent // Types of thing still available to choose from
}

class PlayerCharacter{

    public PC_Data : IPlayerCharacter;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IPlayerCharacter)
    {
        this.PC_Data = data;
    }

}

export {IPlayerCharacter, PlayerCharacter}

