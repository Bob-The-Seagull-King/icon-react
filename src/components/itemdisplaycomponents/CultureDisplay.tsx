import React from 'react'
import { capitalizeTag } from '../../utility/functions';
import '../../styles/iconcomponent.scss';


const CultureDisplay = (props: any) => {
    const cultureinfo = props.data;


    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/' + '/player/character/culture/' + dir + name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    // Return result -------------------------------
    return (
        <div className='kinstructure'>
            <h1 className={'titleShape titlePurple'}>{cultureinfo.name}</h1>
            <div><p dangerouslySetInnerHTML={{__html: (cultureinfo.description || '')}}></p></div>
            <div><p dangerouslySetInnerHTML={{__html: (cultureinfo.values || '')}}></p></div><br/>
        </div>
    )
    // ------------------------------------------
}

export default CultureDisplay