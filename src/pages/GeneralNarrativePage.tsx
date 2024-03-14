import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

import GN_Actions from '../components/subpagecomponents/GN_Actions'
const NarrativeGeneralPage: React.FC = () => {

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Routes>
                <Route path={ROUTES.GN_ACTIONS} element={<GN_Actions/>} />
            </Routes>
        </div>
    )
    // -------------------------------------------
}

export default NarrativeGeneralPage
