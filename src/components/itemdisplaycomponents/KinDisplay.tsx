import React from 'react'
import { capitalizeTag } from '../../utility/functions';
import '../../styles/iconcomponent.scss';


const KinDisplay = (props: any) => {
    const kininfo = props.data;


    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/' + '/player/character/kin/' + dir + name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    // Return result -------------------------------
    return (
        <div className='kinstructure'>
            <div style={{width:"100%"}} className='centerPosition'>
            <h1 className={'titleShape titlePurple'}>{kininfo.name}</h1>
            </div>
            <br/><br/>
            <img src={require('../../resources/images/player/'+kininfo.image)} style={{width:"100%"}} alt="Logo" />
            <div><p dangerouslySetInnerHTML={{__html: (kininfo.description || '')}}></p></div><br/>
        </div>
    )
    // ------------------------------------------
}

export default KinDisplay