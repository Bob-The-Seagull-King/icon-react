import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'

import PlayerTacticsHeader from './PlayerTacticsHeader'

const SuperHeader: React.FC = () => {
  

    // Return result -----------------------------
    return (
        <div className="topbarStructure">
            <Routes>
                <Route path={ROUTES.COMPENDIUM_ROUTE} element={<PlayerTacticsHeader/>} />
            </Routes>
        </div>
    )
    // -------------------------------------------
}

export default SuperHeader