import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'

// Components
import BaseDisplayCompendium from '../pages/BaseDisplayCompendium'

// Classes
import { ControllerController } from '../../classes/_high_level_controllers/ControllerController'
import { useGlobalState } from './../../utility/globalstate'

interface IControllerProp {
    controller : ControllerController; // The controller being passed through
}

const CompendiumRoute: React.FC<IControllerProp> = (prop) => {

    // State
    const [theme, setTheme] = useGlobalState('theme');

    // Default to the light theme
    if ((theme == "" ) || (theme == null)) {
        setTheme('light');
    }

    // Return result -----------------------------
    return (
        <div className="backgroundBaseColour" data-theme={theme}>
        <Routes>
            <Route path={ROUTES.COMPENDIUM_ABILITY_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.AbilitiesCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_SUMMON_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.SummonsCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_JOB_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.JobsCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_CLASS_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.ClassesCollectionController}/>} />
        </Routes>
        </div>
    )
    // -------------------------------------------
}

export default CompendiumRoute