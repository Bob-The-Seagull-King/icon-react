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

interface IJob extends IIconpendiumItemData {
    class_id: string, // Class of the ability (determined by job)
    subtitle: string,
    blurb: [], // Flavour text
    playstyle: [], // Mechanical description of the item
    addons: string[],
    summons: string[],
    traits: string[],
    limitbreak: string,
    upgrade_trait: string
}

class Job extends IconpendiumItem {
    public readonly Class;
    public readonly Subtitle;
    public readonly Blurb;
    public readonly Playstyle
    public readonly Abilities;
    public readonly Traits;
    public readonly UpgradeTrait;
    public readonly LimitBreak;
    public readonly Addons;
    public readonly Summon;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IJob)
    {
        super(data)
        this.Class = data.class_id;
        this.Subtitle = data.subtitle;
        this.Blurb = DescriptionFactory(data.blurb);
        this.Playstyle = DescriptionFactory(data.playstyle);
        this.Abilities = this.AbilitiesFactory();
        this.Traits = this.TraitsFactory(data.traits)
        this.UpgradeTrait = this.TraitsFactory([data.upgrade_trait])
        this.LimitBreak = this.LimitBreakFactory(data.limitbreak)
        this.Addons = this.AddonsFactory(data.addons)
        this.Summon = this.SummonsFactory(data.addons)
    }

    private AbilitiesFactory() {
        const array : PlayerAbility[] = []
        
        const _data = Requester.MakeRequest({searchtype: "complex", searchparam: {type: "abilities", request: {
            operator: "and",
            terms: [{
                item        : "job_id",
                value       : this.ID,
                equals      : true,
                strict      : true,
                istag       : false
            }],
            subparams: []
        }}}) as IPlayerAbility[]
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(AbilityFactory.CreateAbility(_data[i]))
        }
        return array;
    }

    private TraitsFactory(_data : string[]) {
        const array : Trait[] = []
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(TraitFactory.CreateNewTrait(_data[i], 'traits'))
        }
        return array;
    }

    private AddonsFactory(_data : string[]) {
        const array : PlayerAddon[] = []
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(AddonFactory.CreateNewAddon(_data[i]))
        }
        return array;
    }

    private SummonsFactory(_data : string[]) {
        const array : PlayerSummon[] = []
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(SummonFactory.CreateNewSummon(_data[i]))
        }
        return array;
    }

    private LimitBreakFactory(_data : string) {
        return LimitBreakFactory.CreateNewLimitBreak(_data);
    }

}

export {IJob, Job}

