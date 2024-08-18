import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { Trait } from '../trait/Trait';
import { TraitFactory } from '../../../factories/features/TraitFactory';
import { IRule } from '../rule/Rule';
import { IJob, Job } from '../jobs/Job';
import { JobFactory } from '../../../factories/features/JobFactory';
import { RuleFactory } from '../../../factories/features/RuleFactory';
import { Requester } from '../../../factories/Requester';

interface IClass extends IIconpendiumItemData {
    subtitle: string,
    description: [], // Mechanical description of the item
    traits: string[],
    specialmechanic: IRule,
    gambit: IRule,
    complexity: string,
    strengths: string,
    weaknessess: string,
    stats: IStats
}

interface IStats {
    vit: number,
    hp : number,
    defense : number,
    speed : number,
    dash : number,
    fray : number,
    damage : number,
    basicrange : number
}

class Class extends IconpendiumItem {
    public readonly Subtitle; //
    public readonly Description; //
    public readonly Traits; //
    public readonly Jobs;
    public readonly SpecialMechanic; //
    public readonly Gambit; //
    public readonly Complexity; //
    public readonly Strength; //
    public readonly Weakness; //
    public readonly Stats; //

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: IClass)
    {
        super(data)
        this.Subtitle = data.subtitle;

        this.Description = DescriptionFactory(data.description);
        this.Traits = this.TraitsFactory(data.traits);
        this.Jobs = this.JobsFactory()

        this.SpecialMechanic = RuleFactory.CreateRule(data.specialmechanic);
        this.Gambit = RuleFactory.CreateRule(data.gambit);

        this.Complexity = data.complexity;
        this.Strength = data.strengths;
        this.Weakness = data.weaknessess;
        this.Stats = data.stats;
    }

    private TraitsFactory(_data : string[]) {
        const array : Trait[] = []
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            array.push(TraitFactory.CreateNewTrait(_data[i], 'traits'))
        }
        return array;
    }

    private JobsFactory() {
        const array : Job[] = []
        let i = 0;
        const _data = Requester.MakeRequest({searchtype: "complex", searchparam: {type: "jobs", request: {
                operator: "and",
                terms: [{
                    item        : "class_id",
                    value       : this.ID,
                    equals      : true,
                    strict      : true,
                    istag       : false
                }],
                subparams: []
            }}}) as IJob[]
        for (i = 0; i < _data.length; i++) {
            array.push(JobFactory.CreateNewJob(_data[i].id))
        }
        return array;
    }

}

export {IClass, Class, IStats}

