import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import logo from '../../resources/images/iconpendium_logo.png'

const ToolsContentManager = (prop: any) => {

    // Return result -----------------------------
    return (
        <div className="container">
            <div className="row justify-content-center m-0 p-0">
                <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className='row'><div className='col'><br/></div></div>
                    <div className="row">
                        <img src={logo} style={{maxWidth:"100%"}} />
                    </div>
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default ToolsContentManager