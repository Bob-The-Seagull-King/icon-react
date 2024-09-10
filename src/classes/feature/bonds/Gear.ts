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

interface IGear extends IIconpendiumItemData {
    items: string[]
}


class GearKit extends IconpendiumItem {

    public constructor(_data : IGear) {
        super(_data)
    }
}

export {IGear, GearKit}