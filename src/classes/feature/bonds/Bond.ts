import { IIconpendiumItemData, IconpendiumItem } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { Trait } from '../trait/Trait';
import { TraitFactory } from '../../../factories/features/TraitFactory';
import { Requester } from '../../../factories/Requester';
import { GearKit, IGear } from './Gear';
import { IPower, Power } from '../powers/Power';
import { PowerFactory } from '../../../factories/features/PowerFactory';
import { ActionFactory } from '../../../factories/features/ActionFactory';
import { Action } from '../actions/Action';

interface IGearOption {
    choose: number,
    kits: string[]
}

class GearOption {
    public readonly Choose;
    public readonly Kits;

    public constructor(_data : IGearOption) {
        this.Choose = _data.choose;
        this.Kits = this.GearKitFactory(_data.kits)
    }

    private GearKitFactory(data : string[]) {
        const array : GearKit[] = []
        
        data.forEach(item => {
            const _data = Requester.MakeRequest({searchtype: "id", searchparam:{type: "gears", id: item}}) as IGear
            const NewGear = new GearKit(_data);
            array.push(NewGear);
        })
        return array;
    }
}

interface IBond extends IIconpendiumItemData {
    blurb: [], // Flavour text
    ideals: string[],
    effort: number,
    strain: number,
    secondwind: string,
    specialability: string,
    actions: string[],
    gear: IGearOption[]
}

class Bond extends IconpendiumItem {
    public readonly Blurb;
    public readonly Ideals;
    public readonly Effort;
    public readonly Strain;
    public readonly Gear;
    public readonly SecondWind;
    public readonly SpecialAbility;
    public readonly Actions;
    public readonly Powers;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IBond)
    {
        super(data)
        this.Blurb = DescriptionFactory(data.blurb);
        this.Ideals = data.ideals;
        this.Effort = data.effort;
        this.Strain = data.strain;
        this.Gear = this.KitsFactory(data.gear)
        this.SecondWind = this.TraitsFactory(data.secondwind, 'secondwinds')
        this.SpecialAbility = this.TraitsFactory(data.specialability, 'specialabilities')

        this.Powers = this.PowersFactory();
        this.Actions = this.ActionsFactory(data.actions)
    }

    private KitsFactory(_data : IGearOption[]) {
        const array : GearOption[] = []

        _data.forEach(item => {
            const NewOption = new GearOption(item);
            array.push(NewOption)
        })

        return array;
    }

    private PowersFactory() {
        const array : Power[] = []
        
        const _data = Requester.MakeRequest({searchtype: "complex", searchparam: {type: "powers", request: {
            operator: "and",
            terms: [{
                item        : "bondid",
                value       : this.ID,
                equals      : true,
                strict      : true,
                istag       : false
            }],
            subparams: []
        }}}) as IPower[]
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(PowerFactory.CreatePower(_data[i]))
        }
        return array;
    }

    private TraitsFactory(_data : string, _type : string) {
        const array : Trait[] = []        
        array.push(TraitFactory.CreateNewTrait(_data, _type, 'icon'))
        return array;
    }

    private ActionsFactory(_data : string[]) {
        const array : Action[] = []
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(ActionFactory.CreateNewAction(_data[i]))
        }
        return array;
    }

}

export {IBond, Bond, GearOption, IGearOption}

