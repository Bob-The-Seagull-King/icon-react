import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'

import PlayerTacticsAbilities from '../../display/pages/PlayerTacticsAbilities'
import { AllAbilitiesListPage } from '../../classes/viewmodel/pages/AllAbilitiesListPage'
import { ControllerController } from '../../classes/ControllerController'
import path from 'path'

import { useGlobalState } from './../../utility/globalstate'


interface IControllerProp {
    controller : ControllerController;
}

const CompendiumRoute: React.FC<IControllerProp> = (prop) => {

    const [theme, setTheme] = useGlobalState('theme');

    if ((theme == "" ) || (theme == null)) {
        setTheme('light');
    }

    // Return result -----------------------------
    return (
        <div className="backgroundBaseColour" data-theme={theme}>
        <Routes>
            <Route path={ROUTES.COMPENDIUM_ABILITY_ROUTE} element={<PlayerTacticsAbilities controller={prop.controller.AbilitiesCollectionController}/>} />
        </Routes>
        </div>
    )
    // -------------------------------------------
}

export default CompendiumRoute