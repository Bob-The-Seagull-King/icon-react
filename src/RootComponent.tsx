import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './resources/routes-constants'
import TacticsPlayerPage from './pages/TacticsPlayerPage'
import BuildPage from './pages/BuildPage'
import NotFoundPage from './pages/NotFoundPage'
import './styles/main.sass'
import './styles/iconcomponent.scss'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.BUILD_ROUTE} element={<BuildPage />} />
                <Route path={ROUTES.TACTICS_PLAYERS_ROUTE} element={<TacticsPlayerPage/>} />
            </Routes>
        </Router>
    )
}

export default RootComponent
