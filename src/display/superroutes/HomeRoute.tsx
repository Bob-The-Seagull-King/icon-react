import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";

// Classes
import { useGlobalState } from './../../utility/globalstate'

// Resource
import logo from '../../resources/images/iconpendium_logo.png'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faFistRaised, faScrewdriverWrench, faLandmark, faAnkh, faList, faTrophy, faMagic } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'

const HomeRoute: React.FC = () => {

    // States
    const [theme, setTheme] = useGlobalState('theme');

    // Default to the light theme
    if ((theme == "" ) || (theme == null)) {
        setTheme('light');
    }

    // Navigation
    const navigate = useNavigate(); 

    /**
     * Navigate to a page
     * @param dir The page to navigate to
     */
    function NavigateHome(dir: string) {
        navigate('/' + dir);
    }

    // Return result -----------------------------
    return (
        
        <div className="backgroundBaseColour" data-theme={theme}>
        <div>
            <div className="row justify-content-center m-0 p-0">
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className="row">
                        <img src={logo} style={{maxWidth:"100%"}} />
                    </div>
                    <div className='row'><div className='col'><br/></div></div>
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>Tactical Play</h3></div>
                    </div>
                    <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sx-1 row-cols-xs-1 row-cols-1">
                        <div className="col" style={{padding:"0.5em"}}>
                            <div className="pageaccessbox borderstyler subbordericon hovermouse" onClick={() => NavigateHome("compendium/abilities/")}>
                                <FontAwesomeIcon icon={faFistRaised} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    ABILITIES
                                </h1>
                            </div>
                        </div>
                        <div className="col" style={{padding:"0.5em"}}>
                            <div className="pageaccessbox borderstyler subbordericon hovermouse" onClick={() => NavigateHome("compendium/summons/")}>
                                <FontAwesomeIcon icon={faScrewdriverWrench} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    SUMMONS
                                </h1>
                            </div>
                        </div>
                        <div className="col" style={{padding:"0.5em"}}>
                            <div className="pageaccessbox borderstyler subbordericon hovermouse" onClick={() => NavigateHome("compendium/jobs/")}>
                                <FontAwesomeIcon icon={faBriefcase} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    JOBS
                                </h1>
                            </div>
                        </div>
                        <div className="col" style={{padding:"0.5em"}}>
                            <div className="pageaccessbox borderstyler subbordericon hovermouse" onClick={() => NavigateHome("compendium/classes/")}>
                                <FontAwesomeIcon icon={faLandmark} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    CLASSES
                                </h1>
                            </div>
                        </div>
                        <div className="col" style={{padding:"0.5em"}}>
                            <div className="pageaccessbox borderstyler subbordericon hovermouse" onClick={() => NavigateHome("compendium/relics/")}>
                                <FontAwesomeIcon icon={faAnkh} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    RELICS
                                </h1>
                            </div>
                        </div>
                        <div className="col" style={{padding:"0.5em"}}>
                            <div className="pageaccessbox borderstyler subbordericon hovermouse" onClick={() => NavigateHome("compendium/trophies/")}>
                                <FontAwesomeIcon icon={faTrophy} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    TROPHIES
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>Narrative Play</h3></div>
                    </div>
                    <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sx-1 row-cols-xs-1 row-cols-1">
                        <div className="col" style={{padding:"0.5em"}}>
                            <div className="pageaccessbox borderstyler subbordericon hovermouse" onClick={() => NavigateHome("compendium/powers/")}>
                                <FontAwesomeIcon icon={faMagic} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    POWERS
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>General</h3></div>
                    </div>
                    <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sx-1 row-cols-xs-1 row-cols-1">                        
                        <div className="col" style={{padding:"0.5em"}}>
                            <div className="pageaccessbox borderstyler subbordericon hovermouse" onClick={() => NavigateHome("compendium/glossary/")}>
                                <FontAwesomeIcon icon={faList} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    GLOSSARY
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="separator"><h3 style={{fontFamily:"Libre Baskerville"}}>Tools</h3></div>
                    </div>
                    <div className="row row-cols-lg-1 row-cols-md-1 row-cols-sx-1 row-cols-xs-1 row-cols-1">
                        <div className="col" style={{padding:"0.5em"}}>
                            <div className="pageaccessbox borderstyler subbordericon hovermouse" onClick={() => NavigateHome("tools/content/")}>
                                <FontAwesomeIcon icon={faFileLines} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    CONTENT MANAGER
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="separator"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
    // -------------------------------------------
}

export default HomeRoute