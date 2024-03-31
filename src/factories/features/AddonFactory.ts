
import {IAbilityDescription, AbilityDescription} from '../../classes/feature/abilities/AbilityDescription'
import {IAddonParent, IPlayerAddon, PlayerAddon} from '../../classes/feature/addons/Addon'

class AddonFactory {

    static CreateAddon(_addon: IPlayerAddon) {
        const addon = new PlayerAddon(_addon)
        return addon;
    }

}

export {AddonFactory}