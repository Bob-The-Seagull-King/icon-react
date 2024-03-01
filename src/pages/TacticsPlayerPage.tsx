import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

import PT_Ability from '../components/subpagecomponents/PT_Ability'
import PT_Class from '../components/subpagecomponents/PT_Class'
import PT_Job from '../components/subpagecomponents/PT_Job'
import PT_Relic from '../components/subpagecomponents/PT_Relic'
import PT_Summon from '../components/subpagecomponents/PT_Summon'
import PT_ClassFull from '../components/subpagecomponents/PT_ClassFull'
import PT_JobFull from '../components/subpagecomponents/PT_JobFull'

const TacticsPlayerPage: React.FC = () => {

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            
                <Routes>
                    <Route path={ROUTES.PT_ABILITY} element={<PT_Ability/>} />
                    <Route path={ROUTES.PT_CLASS} element={<PT_Class/>} />
                    <Route path={ROUTES.PT_JOB} element={<PT_Job/>} />
                    <Route path={ROUTES.PT_RELIC} element={<PT_Relic/>} />
                    <Route path={ROUTES.PT_SUMMON} element={<PT_Summon/>} />
                    <Route path={ROUTES.PT_CLASSFULL} element={<PT_ClassFull/>} />
                    <Route path={ROUTES.PT_JOBFULL} element={<PT_JobFull/>} />
                </Routes>
        </div>
    )
    // -------------------------------------------
}

export default TacticsPlayerPage
