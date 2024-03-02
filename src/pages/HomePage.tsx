import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'
import '../styles/iconcomponent.scss';
import '../styles/iconbuild.scss';
import '../styles/iconhome.scss';
import testData from '../resources/data/ability.json';

const HomePage: React.FC = () => {
    console.log(testData);
    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '-4em'}}>
            <h1><span className='hometitle'>ICON</span><span className='homesubtitle'>PENDIUM</span></h1>

            <div className='homeParagraphStructure'>
                <p>
                    Welcome to ICONpendium, the free browser-reference tool for the ICON ttrpg (currently tracking version 1.5). 
                    As we continue to update the data available here, you can access the full rpg playbook by clicking <a className='homelink' href='https://massif-press.itch.io/icon' rel="noreferrer" target='_blank'>HERE</a>.
                </p>
                <p>
                    This project is open source, and you can access the github page by clicking <a className='homelink' href='https://github.com/Bob-The-Seagull-King/icon-react' rel="noreferrer" target='_blank'>HERE</a>
                    , or contact me on my twitter <a className='homelink' href='https://twitter.com/KingOfSeagulls' rel="noreferrer" target='_blank'>@KingOfSeagulls</a> or Discord <a className='homelink' href='discord.com/users/194184689169203200' rel="noreferrer" target='_blank'>bobtheseagullking</a>.
                    If you want to view the development, or join the project as a contributor, you can join us over on the <a className='homelink' href='https://discord.gg/lancer' rel="noreferrer" target='_blank'>Official Discord</a>.
                </p>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default HomePage
