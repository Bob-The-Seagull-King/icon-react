import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

import PN_Bond from '../components/subpagecomponents/PN_Bond'
import PN_BondFull from '../components/subpagecomponents/PN_BondFull'
import PN_Power from '../components/subpagecomponents/PN_Power'

const NarrativePlayerPage: React.FC = () => {

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Routes>
                <Route path={ROUTES.PN_BOND} element={<PN_Bond/>} />
                <Route path={ROUTES.PN_BONDFULL} element={<PN_BondFull/>} />
                <Route path={ROUTES.PN_POWER} element={<PN_Power/>} />
            </Routes>
        </div>
    )
    // -------------------------------------------
}

export default NarrativePlayerPage
