import { AbilityFactory } from "../../../factories/features/AbilityFactory";
import { TraitFactory } from "../../../factories/features/TraitFactory";
import { PlayerAbility } from "../abilities/Ability";
import { Trait } from "../trait/Trait";
import { PlayerAddon } from "../addons/Addon";
import { DescriptionFactory } from "../../../utility/functions";
import { AddonFactory } from "../../../factories/features/AddonFactory";

interface IFoeStats {
    vit?        : number,   //
    hp?         : number,   //
    defense?    : number,   //
    speed?      : number,   //
    dash?       : number,   //
    fray?       : number,   //
    damage?     : number,   //
    members?    : number,   //
    hits?       : number,   //
    size?       : number,   //
    turns?      : number,   //
    actions?    : number,    //
    hp_mod?     : number
}

export function StatBuilder(stats: IFoeStats, base : IFoeStats) {
    const Stats = base;

    if (stats.vit) { Stats.vit = stats.vit; }
    if (stats.hp) { Stats.hp = stats.hp; }
    if (stats.defense) { Stats.defense = stats.defense; }
    if (stats.speed) { Stats.speed = stats.speed; }
    if (stats.dash) { Stats.dash = stats.dash; }
    if (stats.fray) { Stats.fray = stats.fray; }
    if (stats.damage) { Stats.damage = stats.damage; }
    if (stats.members) { Stats.members = stats.members; }
    if (stats.hits) { Stats.hits = stats.hits; }
    if (stats.size) { Stats.size = stats.size; }
    if (stats.turns) { Stats.turns = stats.turns; }
    if (stats.actions) { Stats.actions = stats.actions; }
    if (stats.hp_mod) { Stats.hp_mod = stats.hp_mod; }

    return Stats;
}

export function MergeLists(add_lists : string[][], remove_lists : string[][]) {
    let FinalArray : string[] = []

    add_lists.forEach( _list => {
        FinalArray = FinalArray.concat(_list)
    })

    remove_lists.forEach( _list => {
        FinalArray = FinalArray.filter(item => !(_list.includes(item)))
    })

    return FinalArray;
}

interface IFoePhase {
    description: [],
    trigger: [],
    name: string,
    actions: string[],
    traits: string[],
    stats: IFoeStats
}

class FoePhase {
    public readonly Description;
    public readonly Trigger;
    public readonly Name;
    public readonly Actions;
    public readonly Traits;
    public readonly Stats;
    public readonly Class;

    public constructor(data : IFoePhase, stats : IFoeStats, _class : string) {
        this.Name = data.name
        this.Stats = StatBuilder(data.stats, stats);
        this.Class = _class;

        this.Description = DescriptionFactory(data.description)
        this.Trigger = DescriptionFactory(data.trigger)

        this.Actions = AbilitiesFactory(data.actions);
        this.Traits = TraitsFactory(data.actions, this.Class);
    }
}

interface IFoeChapter {
    chapter: number,
    name: string,
    actions: string[],
    removed_actions: string[],
    traits: string[],
    removed_traits: string[],
    stats: IFoeStats
}

class FoeChapter {
    public Chapter;
    public Name;
    public Actions;
    public Traits;
    public Stats;
    public Class;

    public constructor(data : IFoeChapter, actions : string[], traits: string[], stats : IFoeStats, _class : string) {
        this.Chapter = data.chapter;
        this.Name = data.name
        this.Stats = StatBuilder(data.stats, stats);
        this.Class = _class;

        const _actions = MergeLists([data.actions, actions], [data.removed_actions])
        const _traits = MergeLists([data.traits, traits], [data.removed_traits])

        this.Actions = AbilitiesFactory(_actions);
        this.Traits = TraitsFactory(_traits, this.Class);
    } 
}



function AbilitiesFactory(_data : string[]) {
    const array : PlayerAddon[] = []

    let i = 0;
    for (i = 0; i < _data.length; i++) {
        array.push(AddonFactory.CreateNewAddon(_data[i], 'foeabilities'))
    }
    return array;
}

function TraitsFactory(_data : string[], _class : string) {
    const array : Trait[] = []
    let i = 0;
    for (i = 0; i < _data.length; i++) {
        array.push(TraitFactory.CreateNewTrait(_data[i], 'foetraits', _class))
    }
    return array;
} 

export {IFoeStats, FoePhase, FoeChapter, IFoePhase, IFoeChapter}

