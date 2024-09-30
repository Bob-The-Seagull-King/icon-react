import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import GenericPanel from '../components/generics/GenericPanel';
import ContentPackDisplay from '../components/features/contentpack/ContentPackDisplay'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport } from '@fortawesome/free-solid-svg-icons'
import { ContentPack } from '../../classes/contentpacks/contentpack'
import { FightManager } from '../../classes/fightsheets/FightManager';
import FightListDisplay from '../components/features/_fightsheet/FightListDisplay';
import { FightSheet } from '../../classes/fightsheets/FightSheet';
import FightViewDisplay from '../components/features/_fightsheet/_fightfull/FightViewDisplay';
import FightEditDisplay from '../components/features/_fightsheet/_fightfull/FightEditDisplay';

const ToolsFightManager = (prop: any) => {
    const Manager : FightManager = prop.manager;
    
    const [_currentFight, returnFight] = useState(grabFightFromURL);
    const [_viewedit, returnViewEdit] = useState(false);
    const [_keyval, returnkey] = useState(1);

    function grabFightFromURL() {
        const param = grabURL();

        const FightCurrent = Manager.GetFightByName(param);
        
        return FightCurrent
    }

    function UpdateFight(_fight : FightSheet, _view? : boolean) {
        _fight.UpdateFactionStuff();
        Manager.SetStorage();
        returnFight(_fight);
        if (_view) {
            returnViewEdit(_view);
        } else {
            returnViewEdit(false);
        }
        returnkey(_keyval + 1);
    }

    function grabURL() {
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');
        let urlBuildParam = "";
        if (urlSplits.length >= 4) {
            urlBuildParam = urlSplits[3];
            if (urlBuildParam.length > 0) {
                return urlBuildParam;
            }
        }
        return urlBuildParam;
    }

    // Return result -----------------------------
    return (
        <div className="container" style={{minWidth:"98%", marginLeft:"0.5rem", marginRight:"0.5rem"}}>
            {_currentFight != null &&
            <>
                {_viewedit === false && 
                    <div>
                        <FightEditDisplay key={_keyval} data={_currentFight} updater={UpdateFight} manager={Manager}/>
                    </div>
                }
                {_viewedit === true && 
                    <div>
                        <FightViewDisplay key={_keyval} data={_currentFight} updater={UpdateFight} manager={Manager}/>
                    </div>
                }
            </>
                
            }
            {_currentFight == null &&
                <FightListDisplay manager={Manager} updater={UpdateFight}/>
            }
        </div>
    )
    // -------------------------------------------
}

export default ToolsFightManager