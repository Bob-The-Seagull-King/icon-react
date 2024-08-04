import { IPlayerAddon } from '../../classes/feature/addons/Addon'
import { IPlayerAbility, PlayerAbility } from '../../classes/feature/abilities/Ability'
import { AddonFactory } from './AddonFactory'
import { Requester } from '../Requester'

class AbilityFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateAbility(_ability: IPlayerAbility) {
        const ability = new PlayerAbility(_ability)
        return ability;
    }

    

}

export {AbilityFactory}