import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'

import PlayerTacticsAbilities from '../../display/pages/PlayerTacticsAbilities'
import { AllAbilitiesListPage } from '../../classes/viewmodel/pages/AllAbilitiesListPage'

const HomeRoute: React.FC = () => {

    // Initialize Controller //
    const AbilitiesCollectionController = new AllAbilitiesListPage()    

    // Return result -----------------------------
    return (
        <Routes>
            <Route path={ROUTES.HOME_ROUTE} element={<PlayerTacticsAbilities controller={AbilitiesCollectionController}/>} />
        </Routes>
    )
    // -------------------------------------------
}

export default HomeRoute