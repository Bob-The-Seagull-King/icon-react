import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './resources/routes-constants'

import TacticsPlayerPage from './pages/PlayerTacticalPage'
import BuildTacticalPage from './pages/BuildTacticalPage'
import BuildNarrativePage from './pages/BuildNarrativePage'
import HomePage from './pages/HomePage'
import CampGeneralPage from './pages/GeneralCampPage'
import TacticalGeneralPage from './pages/GeneralTacticalPage'
import NarrativePlayerPage from './pages/PlayerNarrativePage'
import NarrativeGeneralPage from './pages/GeneralNarrativePage'
import PlayerCharacterPage from './pages/PlayerCharacterPage'
import BuildCharacter from './pages/BuildCharacter'

import './styles/main.sass'
import './styles/iconcomponent.scss'

import SiteNav from './components/pagecomponents/SiteNav';

const RootComponent: React.FC = () => {
    return (
        <div>
        <Router>
            <SiteNav/>
            <Routes>
                <Route path={ROUTES.BUILD_TACTICS_ROUTE} element={<BuildTacticalPage />} />
                <Route path={ROUTES.BUILD_NARRATIVE_ROUTE} element={<BuildNarrativePage />} />
                <Route path={ROUTES.TACTICS_PLAYERS_ROUTE} element={<TacticsPlayerPage/>} />
                <Route path={ROUTES.NARRATIVE_PLAYERS_ROUTE} element={<NarrativePlayerPage/>} />
                <Route path={ROUTES.NARRATIVE_GENERAL_ROUTE} element={<NarrativeGeneralPage/>} />
                <Route path={ROUTES.TACTICS_GENERAL_ROUTE} element={<TacticalGeneralPage/>} />
                <Route path={ROUTES.CAMP_GENERAL_ROUTE} element={<CampGeneralPage/>} />
                <Route path={ROUTES.CHARACTER_PLAYERS_ROUTE} element={<PlayerCharacterPage/>} />
                <Route path={ROUTES.HOME_ROUTE} element={<HomePage/>} />
            </Routes>
        </Router>
        </div>
    )
}

export default RootComponent
