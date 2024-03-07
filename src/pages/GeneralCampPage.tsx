import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

import GC_Rules from '../components/subpagecomponents/GC_Rules'
import GC_Item from '../components/subpagecomponents/GC_Item'

const CampGeneralPage: React.FC = () => {

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Routes>
                <Route path={ROUTES.GC_RULES} element={<GC_Rules/>} />
                <Route path={ROUTES.GC_ITEM} element={<GC_Item/>} />
            </Routes>
        </div>
    )
    // -------------------------------------------
}

export default CampGeneralPage
