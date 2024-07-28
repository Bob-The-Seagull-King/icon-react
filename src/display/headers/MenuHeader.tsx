import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'

import PalleteSwap from './components/PalleteSwap';

const MenuHeader = (prop: any) => {


    // Return result -----------------------------
    return (
        <>
        <div className={"floatingButton backgroundicon"}>
            <PalleteSwap/>
        </div>
        </>

    )
    // -------------------------------------------
}

export default MenuHeader