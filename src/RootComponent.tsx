import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './resources/routes-constants'
import './resources/styles/_icon.scss'

import HomeRoute from './display/superroutes/HomeRoute'

const RootComponent: React.FC = () => {
    return (
        <div>
        <Router>
            <Routes>
                <Route path={ROUTES.HOME_ROUTE} element={<HomeRoute />} />
            </Routes>
        </Router>
        </div>
    )
}

export default RootComponent
