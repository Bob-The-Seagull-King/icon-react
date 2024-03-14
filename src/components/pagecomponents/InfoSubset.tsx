import React, { useState } from 'react'
import '../../styles/iconcomponent.scss';
import '../../styles/iconbuild.scss';
import '../../styles/iconnav.scss';
import 'react-toastify/dist/ReactToastify.css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import '../../styles/styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'
import { capitalizeTag, containsTag} from '../../utility/functions';


import GlossaryRuleDisplay from '../itemdisplaycomponents/GlossaryRuleDisplay';
import TrophyDisplay from '../itemdisplaycomponents/TrophyDisplay';

const InfoSubset = (props: any) => {
    /**
     * PROPS Format
     * 
     * {"name": [string], "items": [array], "type": [string], "visible": [bool]} 
     * 
    */
    const propname = props.data.name;
    const propitems = props.data.items;
    const proptype = props.data.type; 
    const [propvisible, changeVisible] = useState(props.data.visible);

    console.log(propitems);

    /**
     * Opens a page based on the parameters
     * @param name The end-params for the route
    */
    function navClick ( name: string) {    
        window.open(location.protocol + '//' + location.host +'/'+name, '_self', 'noopener,noreferrer');
    }
  
    function returnTagCat() {
        return (
            <div style={{width:"100%"}}>
            <div className='centerPosition'>
                {propvisible &&
                <div className='widthPT centerPosition topPosition'>
                    {propitems.map((item: any) => (
                        <div key={item.name+proptype}>
                            {proptype == 'glossary' &&
                            returnglossary(item)
                            }
                            {proptype == 'trophy' &&
                            returnTrophy(item)
                            }
                        </div>
                        ))}
                </div> }
            </div>
            </div>
        )
    }

    function returnglossary(item: any) {
        return (
            <div className='gridItemRule' onClick={() => navClick('general/tactics/glossary/'+ item.name)} key={item.name + "rule"}  >
                <GlossaryRuleDisplay data={item}/>
            </div>
        )
    }

    function returnTrophy(item: any) {
        return (
            <div className='gridItemRule' onClick={() => navClick('general/tactics/trophy/'+ item.name)} key={item.name + "rule"}  >
                <TrophyDisplay data={{val:item, faction: propname}}/>
            </div>
        )
    }

    function switchVisibility() {
        if (propvisible) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <div>   
            <div  onClick={() => changeVisible(switchVisibility())} className='centerPosition'>
                <h1 className={'megatitleShape titlePurple'}>{capitalizeTag(propname)} 
                {propvisible == true && <span>&#x2B9F;&#xFE0E;</span>}
                {propvisible == false && <span>&#x2B9D;&#xFE0E;</span>}
                </h1>
            </div>
            <div style={{width:"100%"}}>
            <div className='centerPosition'>
                {returnTagCat()}
            </div>
            <br/>
            </div>
        </div>
    );
      // ---------------------------------------------
}

export default InfoSubset