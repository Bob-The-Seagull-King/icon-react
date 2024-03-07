import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

import GT_Glossary from '../components/subpagecomponents/GT_Glossary'

const TacticalGeneralPage: React.FC = () => {

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Routes>
                <Route path={ROUTES.GT_GLOSSARY} element={<GT_Glossary/>} />
            </Routes>
        </div>
    )
    // -------------------------------------------
}

export default TacticalGeneralPage
