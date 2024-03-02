import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './resources/routes-constants'
import TacticsPlayerPage from './pages/TacticsPlayerPage'
import BuildPage from './pages/BuildPage'
import HomePage from './pages/HomePage'
import './styles/main.sass'
import './styles/iconcomponent.scss'

import SiteNav from './components/pagecomponents/SiteNav';

const RootComponent: React.FC = () => {
    return (
        <div>
        <Router>
            <SiteNav/>
            <Routes>
                <Route path={ROUTES.BUILD_ROUTE} element={<BuildPage />} />
                <Route path={ROUTES.TACTICS_PLAYERS_ROUTE} element={<TacticsPlayerPage/>} />
                <Route path={ROUTES.HOME_ROUTE} element={<HomePage/>} />
            </Routes>
        </Router>
        </div>
    )
}

export default RootComponent
