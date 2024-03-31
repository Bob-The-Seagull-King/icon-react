import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './resources/routes-constants'

import './resources/styles/_icon.scss'

const RootComponent: React.FC = () => {
    return (
        <div>
        <Router>
            <Routes>
            </Routes>
        </Router>
        </div>
    )
}

export default RootComponent
