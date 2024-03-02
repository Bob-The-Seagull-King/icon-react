import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import '../../styles/iconbuild.scss';
import '../../styles/iconnav.scss';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import '../../styles/styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'


const SiteNav = (props: any) => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    
    /**
     * Opens a page based on the parameters
     * @param name The end-params for the route
    */
    function navClick ( name: string) {    
        window.open(location.protocol + '//' + location.host +'/'+name, '_blank', 'noopener,noreferrer');
    }
    
    /**
     * Opens a page based on the parameters
     * @param name The end-params for the route
    */
    function navSearch () { 
        
        const searchval = ((document.getElementById('navSearchSearch') as HTMLInputElement).value);   
        window.open(location.protocol + '//' + location.host +''+ RemoveLastDirectoryPartOf(location.pathname) + '/' + searchval, '_self', 'noopener,noreferrer');
    }

    function RemoveLastDirectoryPartOf(the_url: string)
    {
        const the_arr = the_url.split('/');
        if (the_arr.length > 4) {
            the_arr.pop();
        }
        return( the_arr.join('/') );
    }
  
    return (
    <div style={{width: '100%', padding: '1.5em'}}>
        <div className='centerPosition'>
        <div className='basenavStructure'>
            <div className=''>
                    <div className='basenavitemStructure' onClick={() => navClick('')}>
                        <button className="" aria-label="Customise options">
                            <h2 className='navitemh2'>Home</h2>
                        </button>
                    </div>
            </div>
            <div className='navpad'/>
            <div className=''>
                    <div className='basenavitemStructure' onClick={() => navClick('build/')}>
                        <button className="" aria-label="Customise options">
                            <h2 className='navitemh2'>Build</h2>
                        </button>
                    </div>
            </div>
            <div className='navpad'/>
            <DropdownMenu.Root>
                <div className=''>
                <DropdownMenu.Trigger className='basenavitemStructure' asChild>
                    <button className="" aria-label="Customise options">
                        <h2 className='navitemh2'>Player Info</h2>
                    </button>
                </DropdownMenu.Trigger>
                </div>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                                Tactical 
                                <div className="RightSlot">
                                    &#x25B6;
                                </div>
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.SubContent className="DropdownMenuSubContent" sideOffset={2} alignOffset={-5} >
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('player/tactics/class/')}>
                                        Classes
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('player/tactics/job/')}>
                                        Jobs
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="DropdownMenuItem" onClick={() => navClick('player/tactics/relic/')}>
                                        Relics
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="DropdownMenuItem" onClick={() => navClick('player/tactics/ability/')}>
                                        Abilities
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="DropdownMenuItem" onClick={() => navClick('player/tactics/summon/')}>
                                        Summons
                                    </DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Sub>

                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <div>
            <Routes>
                <Route path={ROUTES.TACTICS_PLAYERS_ROUTE} element={
                    <div>
                        <div className='navpad'/>
                    
                        <div className='basenavitemStructure searchpad'>
                            <div className='centerPosition'>
                                <input id='navSearchSearch' type="text" placeholder="Search" className='searchinputnav navitemh2'/>
                                <div className='' >
                                    <h2 className='navitemh2' onClick={() => navSearch()}>&#x1F50E;&#xFE0E;</h2>
                                </div>
                            </div>
                        </div>
                        </div>
                } />
            </Routes>
            </div>
        </div>
    </div>
    </div>
    );
      // ---------------------------------------------
}

export default SiteNav