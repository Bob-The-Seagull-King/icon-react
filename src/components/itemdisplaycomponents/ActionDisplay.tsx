import React from 'react'
import { capitalizeTag } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

const ActionDisplay = (props: any) => {
    const actioninfo = props.data;


    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/' + '/general/narrative/action/' + dir + name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    // Return result -------------------------------
    return (
        <div className='powerStructure'>
            <h1 className={'titleShape titlePurple'}>{actioninfo.name}</h1>
            <div><p dangerouslySetInnerHTML={{__html: (actioninfo.desc_short || '')}}></p></div>
            <div>For example, you could <span dangerouslySetInnerHTML={{__html: (actioninfo.example_short || '')}}></span></div>
            <div><p dangerouslySetInnerHTML={{__html: (actioninfo.desc_long_start || '')}}></p></div>
            <div><p>Here are the rough capabilities of a character&apos;s actions, depending on chapter:</p></div>
            <ul>{
            actioninfo.chapter_desc.map((item: any) => (
                <li key={item.name}><b>{item.name}</b>: {item.val.join(" ")}
                </li>
            ))
            }
            </ul>
            <div><p dangerouslySetInnerHTML={{__html: (actioninfo.desc_long_end || '')}}></p></div>
            <br/>
        </div>
    )
    // ------------------------------------------
}

export default ActionDisplay