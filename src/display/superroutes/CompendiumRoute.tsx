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
            <Route path={ROUTES.COMPENDIUM_RELIC_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.RelicsCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_GLOSSARY_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.GlossaryCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_TROPHY_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.TrophyCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_POWER_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.PowerCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_ACTION_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.ActionCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_BOND_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.BondCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_KIN_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.KinCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_CULTURE_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.CultureCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_CAMP_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.CampItemCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_RULE_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.RulesCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_FOECLASS_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.FoeClassCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_FOEFACTION_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.FoeFactionCollectionController}/>} />
            <Route path={ROUTES.COMPENDIUM_FOEJOB_ROUTE} element={<BaseDisplayCompendium controller={prop.controller.FoeJobCollectionController}/>} />
        </Routes>
        </div>
    )
    // -------------------------------------------
}

export default CompendiumRoute