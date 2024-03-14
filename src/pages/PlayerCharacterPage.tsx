import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

import PC_Culture from '../components/subpagecomponents/PC_Culture';
import PC_Kin from '../components/subpagecomponents/PC_Kin';

const PlayerCharacterPage: React.FC = () => {

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Routes>
                <Route path={ROUTES.PC_CULTURE} element={<PC_Culture/>} />
                <Route path={ROUTES.PC_KIN} element={<PC_Kin/>} />
            </Routes>
        </div>
    )
    // -------------------------------------------
}

export default PlayerCharacterPage
