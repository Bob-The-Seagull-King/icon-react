import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { PlayerAddon } from '../addons/Addon'
import { IPlayerAbility, PlayerAbility } from '../abilities/Ability';
import { AbilityFactory } from '../../../factories/features/AbilityFactory';
import { Trait } from '../trait/Trait';
import { TraitFactory } from '../../../factories/features/TraitFactory';
import { LimitBreakFactory } from '../../../factories/features/LimitBreakFactory';
import { AddonFactory } from '../../../factories/features/AddonFactory';
import { PlayerSummon } from '../summons/Summon';
import { SummonFactory } from '../../../factories/features/SummonFactory';
import { Requester } from '../../../factories/Requester';
import { IFoeStats } from './FoeStats';

interface IFoeClass extends IIconpendiumItemData {
    stats : IFoeStats,
    traits : string[],
    actions: string[],
    class: string
}

class FoeClass extends IconpendiumItem {
    public readonly Stats;
    public readonly Traits;
    public readonly Actions;
    public readonly Class;
    public readonly Data;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IFoeClass)
    {
        super(data)
        this.Data = data;
        this.Stats = data.stats;
        this.Class = data.class;
        this.Traits = this.TraitsFactory(data.traits);
        this.Actions = this.AbilitiesFactory(data.actions)
    }

    private AbilitiesFactory(_data : string[]) {
        const array : PlayerAddon[] = []

        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(AbilityFactory.CreateNewAbility(_data[i], 'foeabilities'))
        }
        return array;
    }

    private TraitsFactory(_data : string[]) {
        const array : Trait[] = []
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(TraitFactory.CreateNewTrait(_data[i], 'foetraits', this.Class))
        }
        return array;
    }   

}

export {IFoeClass, FoeClass}

