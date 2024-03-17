import React from 'react'
import '../../styles/iconcomponent.scss';
import '../../styles/iconbuild.scss';
import '../../styles/iconnav.scss';
import 'react-toastify/dist/ReactToastify.css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import '../../styles/styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../resources/routes-constants'


const SiteNav = (props: any) => {
    
    /**
     * Opens a page based on the parameters
     * @param name The end-params for the route
    */
    function navClick ( name: string) {    
        window.open(location.protocol + '//' + location.host +'/'+name, '_self', 'noopener,noreferrer');
    }
    
    /**
     * Opens a page based on the parameters
     * @param name The end-params for the route
    */
    function navSearch () {  
        const searchval = ((document.getElementById('navSearchSearch') as HTMLInputElement).value);   
        window.open(location.protocol + '//' + location.host +''+ RemoveLastDirectoryPartOf(location.pathname) + '/' + searchval, '_self', 'noopener,noreferrer');
    }

    /**
     * Cleans the path of the final section
     * if no search param exists, no change it made.
     * @param the_url the original url
     * @returns the url stripped of the search param
     */
    function RemoveLastDirectoryPartOf(the_url: string)
    {
        const the_arr = the_url.split('/');
        if (the_arr.length > 4) { the_arr.pop(); }
        return( the_arr.join('/') );
    }

    /**
     * Performs a search of the enter key is pressed
     * @param event 
     */
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') { navSearch() }
    };

    function returnSearchBar() {
        return (
            <div>
                <div className='navpad'/>
                <div className='basenavitemStructure searchpad'>
                    <div className='centerPosition'>
                        <input id='navSearchSearch'  onKeyDown={handleKeyDown} type="text" placeholder="Search" className='searchinputnav navitemh2'/>
                        <div className='' >
                            <h2 className='navitemh2' onClick={() => navSearch()}>&#x1F50E;&#xFE0E;</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
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

            <DropdownMenu.Root>
                <div className=''>
                <DropdownMenu.Trigger className='basenavitemStructure' asChild>
                    <button className="" aria-label="Customise options">
                        <h2 className='navitemh2'>Build</h2>
                    </button>
                </DropdownMenu.Trigger>
                </div>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                        <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('buildcharacter/')}>
                            New Character
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
            

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

                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                                Narrative 
                                <div className="RightSlot">
                                    &#x25B6;
                                </div>
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.SubContent className="DropdownMenuSubContent" sideOffset={2} alignOffset={-5} >
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('player/narrative/bond/')}>
                                        Bonds
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('player/narrative/power/')}>
                                        Powers
                                    </DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Sub>

                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                                Character 
                                <div className="RightSlot">
                                    &#x25B6;
                                </div>
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.SubContent className="DropdownMenuSubContent" sideOffset={2} alignOffset={-5} >
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('player/character/kin/')}>
                                        Kin
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('player/character/culture/')}>
                                        Cultures
                                    </DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Sub>

                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
            
            <div className='navpad'/>
            <DropdownMenu.Root>
                <div className=''>
                <DropdownMenu.Trigger className='basenavitemStructure' asChild>
                    <button className="" aria-label="Customise options">
                        <h2 className='navitemh2'>General Info</h2>
                    </button>
                </DropdownMenu.Trigger>
                </div>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                                Camp 
                                <div className="RightSlot">
                                    &#x25B6;
                                </div>
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.SubContent className="DropdownMenuSubContent" sideOffset={2} alignOffset={-5} >
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('general/camp/rules/')}>
                                        Rules
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('general/camp/item/')}>
                                        Items
                                    </DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Sub>

                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                                Tactical 
                                <div className="RightSlot">
                                    &#x25B6;
                                </div>
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.SubContent className="DropdownMenuSubContent" sideOffset={2} alignOffset={-5} >
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('general/tactics/glossary/')}>
                                        Glossary
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('general/tactics/trophy/')}>
                                        Trophies
                                    </DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Sub>

                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                                Narrative 
                                <div className="RightSlot">
                                    &#x25B6;
                                </div>
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.SubContent className="DropdownMenuSubContent" sideOffset={2} alignOffset={-5} >
                                    <DropdownMenu.Item className="DropdownMenuItem"  onClick={() => navClick('general/narrative/action/')}>
                                        Actions
                                    </DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Sub>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <div>
            <Routes>
                <Route path={
                                ROUTES.TACTICS_PLAYERS_ROUTE
                            } element={ returnSearchBar() } />
                <Route path={
                                ROUTES.NARRATIVE_PLAYERS_ROUTE 
                            } element={ returnSearchBar() } />
                <Route path={
                                ROUTES.TACTICS_GENERAL_ROUTE
                            } element={ returnSearchBar() } />
                <Route path={ROUTES.CAMP_GENERAL_ROUTE
                            } element={ returnSearchBar()} />
                <Route path={ROUTES.NARRATIVE_GENERAL_ROUTE
                            } element={ returnSearchBar()} />
            </Routes>
            </div>
        </div>
    </div>
    </div>
    );
      // ---------------------------------------------
}

export default SiteNav