import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'

import PlayerTacticsAbilities from '../../display/pages/PlayerTacticsAbilities'
import { AllAbilitiesListPage } from '../../classes/viewmodel/pages/AllAbilitiesListPage'

const HomeRoute: React.FC = () => {

    // Initialize Controller //
    const AbilitiesCollectionController = new AllAbilitiesListPage()    

    // Return result -----------------------------
    return (
        <PlayerTacticsAbilities controller={AbilitiesCollectionController}/>
    )
    // -------------------------------------------
}

export default HomeRoute