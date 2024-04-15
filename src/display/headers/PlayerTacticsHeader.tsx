import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const PlayerTacticsHeader = (prop: any) => {

    // Return result -----------------------------
    return (
        <div className='topbarCompendiumBase topbarCompendiumStructure hstack gap-3'>
            <span style={{paddingLeft:"0em"}}/>
            <h1 className='headertext'>ICONPENDIUM</h1>
            <p className='headersubtext'>v1.6.01a</p>
            <div className="vr headertext"></div>
            <Button variant="">Primary</Button>{' '}
            <div className="vr headertext"></div>
            <div className="ms-auto headertext"></div>
        </div>
    )
    // -------------------------------------------
}

export default PlayerTacticsHeader