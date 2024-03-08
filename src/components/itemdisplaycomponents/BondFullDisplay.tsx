import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import { useNavigate } from "react-router-dom";

import powerdata from '../../resources/data/player/power.json'

import BondDisplay from '../itemdisplaycomponents/BondDisplay'
import PowerDisplay from '../itemdisplaycomponents/PowerDisplay'

const BondFullDisplay = (props: any) => {
    const bonddata = props.data;

    const powerList = getPowers();

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host + '/player/narrative/'  + dir + name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    function getPowers() {
        const powertemp: any[] = [];

        let i = 0;
        for (i = 0; i < powerdata.length; i++) {
            if (powerdata[i].bond.toLowerCase() == bonddata.name.toLowerCase()) {
                powertemp.push(powerdata[i]);
            }
        }

        return powertemp;
    }

    // Return result -------------------------------
    return (
        <div className='bondfullcontainer'>
            <div className='jobitema'>
                <BondDisplay key={bonddata.name + "base"} data={bonddata}/>
            </div>
            <br/>
            <div className='jobitemb'>
                <div className=''>
                    <div className='abilityContainer'>
                    {powerList.map((item: any) => (
                        <div key={item.name + "power"} onClick={() => navClick('power/', item.name)} className='gridItem'>
                            <PowerDisplay   data={item}/>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
    // ------------------------------------------
}

export default BondFullDisplay