import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'

import ToolsContentManager from '../../display/pages/ToolsContentManager'
import path from 'path'

const ToolsRoute: React.FC = () => {

    // Initialize Controller //

    // Return result -----------------------------
    return (
        <Routes>
            <Route path={ROUTES.TOOLS_CONTENT_UPLOAD_ROUTE} element={<ToolsContentManager/>} />
        </Routes>
    )
    // -------------------------------------------
}

export default ToolsRoute