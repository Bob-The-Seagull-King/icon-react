import '../../resources/styles/_icon.scss'
import React from 'react'

import { Requester } from '../../factories/Requester'
import { IPlayerAbility, PlayerAbility } from '../../classes/feature/abilities/Ability'
import { AbilityFactory } from '../../factories/features/AbilityFactory'

const HomeRoute: React.FC = () => {

    const playerdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "abilities", id: "ab_endlessbattlement"}}) as IPlayerAbility
    const player: PlayerAbility = AbilityFactory.CreateAbility(playerdata)
    console.log(player.Name)

    // Return result -----------------------------
    return (
        <div>
            <p className="hometitle">Test</p>
        </div>
    )
    // -------------------------------------------
}

export default HomeRoute