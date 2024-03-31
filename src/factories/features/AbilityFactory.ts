
import {IAbilityDescription, AbilityDescription} from '../../classes/feature/abilities/AbilityDescription'
import {IAddonParent, IPlayerAddon, PlayerAddon } from '../../classes/feature/addons/Addon'
import {IPlayerAbility, PlayerAbility} from '../../classes/feature/abilities/Ability'

class AbilityFactory {

    static CreateAbility(_ability: IPlayerAbility) {
        const ability = new PlayerAbility(_ability)

        return ability;
    }

}

export {AbilityFactory}