import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import { useNavigate } from "react-router-dom";

const BondFullDisplay = (props: any) => {

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/' + dir + '/player/tactics/'+ name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div className='abilityStructure'>
            Bond_Full_Display
        </div>
    )
    // ------------------------------------------
}

export default BondFullDisplay