import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'
import '../styles/iconcomponent.scss';
import '../styles/iconbuild.scss';
import '../styles/iconhome.scss';

const HomePage: React.FC = () => {

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 className='hometitle'>ICON-pendium</h1>
        </div>
    )
    // -------------------------------------------
}

export default HomePage
