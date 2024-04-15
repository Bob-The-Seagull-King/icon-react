import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


const PlayerTacticsHeader = (prop: any) => {

    function NavigateHome() {
        window.open(location.protocol + '//' + location.host +'/', '_self', 'noopener,noreferrer');
    }

    // Return result -----------------------------
    return (
        <div className='topbarCompendiumBase topbarCompendiumStructure hstack gap-3'>
            <span style={{paddingLeft:"0em"}}/>
            <h1 className='headertext'>ICONPENDIUM</h1>
            <p className='headersubtext'>v1.6.01a</p>
            <div className="vr headertext"></div>
            <Button style={{padding:"0em"}} variant="" onClick={() => NavigateHome()}>
                <FontAwesomeIcon icon={faHouse} style={{fontSize:"2em",color:"white",margin:"0em"}}/>
            </Button>
            <div className="vr headertext"></div>
            <div className="ms-auto headertext"></div>
        </div>
    )
    // -------------------------------------------
}

export default PlayerTacticsHeader