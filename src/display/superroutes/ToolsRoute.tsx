import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Data and Classes
import { ROUTES } from '../../resources/routes-constants'
import ToolsContentManager from '../../display/pages/ToolsContentManager'

import { useGlobalState } from './../../utility/globalstate'
import { ToolsController } from '../../classes/ToolsController'

interface IControllerProp {
    controller : ToolsController; // The controller being inserted
}

const ToolsRoute: React.FC<IControllerProp> = (prop) => {

    // Set themes
    const [theme, setTheme] = useGlobalState('theme');

    // If no theme provided, default to light
    if ((theme == "" ) || (theme == null)) {
        setTheme('light');
    }

    // Return result -----------------------------
    return (
        <div className="backgroundBaseColour" data-theme={theme}>
        <Routes>
            <Route path={ROUTES.TOOLS_CONTENT_UPLOAD_ROUTE} element={<ToolsContentManager manager={prop.controller.ContentManager}/>} />
        </Routes>
        </div>
    )
    // -------------------------------------------
}

export default ToolsRoute