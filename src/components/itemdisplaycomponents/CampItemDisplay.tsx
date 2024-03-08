import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag, getTagValue } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import { useNavigate } from "react-router-dom";

const CampItemDisplay = (props: any) => {
    const campdata = props.data;

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/' + dir + '/general/camp/'+ name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    function returnUpgrade(upgradedata: any) {
        return (
            <div className='campupgradeStructure'>
                <h2 className={'titleShape subtitlePurple'}>{upgradedata.name}</h2>
                {upgradedata.costspecial != null &&
                    <div>
                        <p><b>Upgrade Cost: </b>{upgradedata.costspecial}</p>
                    </div>
                }
                <div><p dangerouslySetInnerHTML={{__html: (upgradedata.description || '')}}></p></div>
                {upgradedata.upgrades.map((item: any) => (
                <div className='gridItem' key={item.name + "upgrade"}  >
                    {returnUpgrade(item)}
                </div>
                ))}
            </div>
        )
    }

    // Return result -------------------------------
    return (
        <div className='campStructure'>
            <h1 className={'titleShape titlePurple'}>{campdata.name}</h1>
            <br/>
            <div>
                <span className='boldtextPurple '>PURCHASE COST:</span>
                <span className='boldtextPurple'> {campdata.purchasecost}</span>
            </div>
            <div>
                <span className='boldtextPurple '>UPGRADE COST:</span>
                <span className='boldtextPurple'> {campdata.upgradecost}</span>
            </div>
            <div><p dangerouslySetInnerHTML={{__html: (campdata.description || '')}}></p></div>
            {campdata.upgrades.map((item: any) => (
                <div className='gridItem' onClick={() => navClick('item', item.name)} key={item.name + "upgrade"}  >
                    {returnUpgrade(item)}
                </div>
                ))}
            <br/>
        </div>
    )
    // ------------------------------------------
}

export default CampItemDisplay