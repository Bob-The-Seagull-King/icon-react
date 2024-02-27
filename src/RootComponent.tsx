import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BuildPage from './pages/BuildPage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import './styles/iconcomponent.scss'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.BUILD_ROUTE} element={<BuildPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
