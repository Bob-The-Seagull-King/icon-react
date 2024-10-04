import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { PlayerAddon } from '../addons/Addon'
import { AddonFactory } from '../../../factories/features/AddonFactory';
import { Trait } from '../trait/Trait';
import { TraitFactory } from '../../../factories/features/TraitFactory';
import { IFoeStats, SortAbilities } from './FoeStats';

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
            array.push(AddonFactory.CreateNewAddon(_data[i], 'foeabilities'))
        }
        return SortAbilities(array);
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

