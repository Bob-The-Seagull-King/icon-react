
import {IAbilityDescription, AbilityDescription} from '../../classes/feature/abilities/AbilityDescription'
import {IAddonParent, IPlayerAddon, PlayerAddon } from '../../classes/feature/addons/Addon'
import {IPlayerAbility, PlayerAbility} from '../../classes/feature/abilities/Ability'

class AbilityFactory {

    static CreateAbility(_ability: IPlayerAbility) {
        const ability = new PlayerAbility(_ability)

        let i = 0;
        for (i = 0; i < ability.Description.length; i++) {
            let list = ability.Description[i].ReturnAddonValues();
        }

        return ability;
    }

}

export {AbilityFactory}