import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'

import PlayerTacticsAbilities from '../../display/pages/PlayerTacticsAbilities'
import { AllAbilitiesListPage } from '../../classes/viewmodel/pages/AllAbilitiesListPage'

import logo from '../../resources/images/iconpendium_logo.png'

const HomeRoute: React.FC = () => {

    // Initialize Controller //
    const AbilitiesCollectionController = new AllAbilitiesListPage()    

    // Return result -----------------------------
    return (
        <div>
            <div className="row px-3">
                <div className="col"/>
                <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className='row'><div className='col'><br/></div></div>
                    <div className="row">
                        <img src={logo} style={{maxWidth:"100%"}} />
                    </div>
                    <div className='row'><div className='col'><br/></div></div>
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>Compendium</h3></div>
                    </div>
                    <div className="row">
                        <div className="separator"></div>
                    </div>
                </div>
                <div className="col"/>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default HomeRoute