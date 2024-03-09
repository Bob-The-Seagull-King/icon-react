import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import '../../styles/iconbuild.scss';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import relicData from '../../resources/data/player/relic.json';
import abilityData from '../../resources/data/player/ability.json';
import classData from '../../resources/data/player/class.json';

const BuildSearch = (props: any) => {

    // Declare Variables ---------------------------
    let _class = "";
    let _job = "";
    let _level = "";
    const relicBase: string[] = [];
    const abilityBase: string[] = [];
    let isValid = true;
    // ----------------------------------------------

    // Setup states --------------------------------
    const [_relics, createRelic] = useState(relicBase);
    const [_abilities, createAbility] = useState(abilityBase);
    // ---------------------------------------------

    const relicnames = getrelicnames();
    const abilitynames = getabilitynames();
    const jobnames = getjobnames();

    // ---------------------------------------------
    function getrelicnames() {
        const temp: string[] = [];

        let i = 0;
        for (i = 0; i < relicData.length; i++) {
            temp.push(relicData[i].name);
        }

        return temp;
    }

    function getabilitynames() {
        const temp: string[] = [];

        let i = 0;
        for (i = 0; i < abilityData.length; i++) {
            temp.push(abilityData[i].name);
        }

        return temp;
    }

    function getjobnames() {
        const temp: string[] = [];

        let i = 0;
        for (i = 0; i < classData.length; i++) {
            let j = 0;
            for (j = 0; j < classData[i].jobs.length; j++) {
                temp.push(classData[i].jobs[j].name);
            }
        }

        return temp;
    }
    // ---------------------------------------------

    /**
     * Checks that the minimum values (job and level) are
     * present and, if so, prompts the url-parse and window
     * open process.
     */
    function validateSearch() {
        _job = ((document.getElementById('searchJob') as HTMLInputElement).value);
        const colour = getColour(_job);

        if (colour == "blue") { _class = "wright"}
        else if (colour == "green") { _class = "mendicant"}
        else if (colour == "red") { _class = "stalwart"}
        else if (colour == "yellow") { _class = "vagabond"} 
        else { runToast("Your JOB was not found"); }

        if (isNumber((document.getElementById('searchLevel') as HTMLInputElement).value)) {
            _level = (document.getElementById('searchLevel') as HTMLInputElement).value
        } else { runToast("Your LV must be a number."); }

        if ((_job != "") && (_class != "") && (_level != "")) {
            isValid = true;
        } else { isValid = false; }

        if (isValid) { gatherURL(); }
    }

    /**
     * Activates a toast error message with
     * a provided message
     * @param text The warning to be displayed
     */
    function runToast(text: string) 
    {
        toast.error(text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    /**
     * Takes the collected values and then creates
     * the url path parameter value for the build page
     * to parse.
     */
    function gatherURL() {
        let urlpath = "";
        let i = 0;

        urlpath += "c=" + _class + ";";
        urlpath += "j=" + _job + ";";
        urlpath += "l=" + _level + ";";

        urlpath += "r=";
        for (i = 0; i < _relics.length; i++) { urlpath += _relics[i] + ":" }
        urlpath += ";";

        urlpath += "a=";
        for (i = 0; i < _abilities.length; i++) { urlpath += _abilities[i] + ":" }
        urlpath += ";";

        navBuild(urlpath)
    }

    /**
     * Opens a new page in the same tab
     * @param urlpath The params of the url
     */
    function navBuild (urlpath : string) {    
        window.open(location.protocol + '//' + location.host +'/' + 'build/tactics'  + '/'+urlpath, '_self', 'noopener,noreferrer');
    }

    /**
     * Checks if a given string is numeric
     * @param value The string being evaluated
     * @returns True if the string is a Number
     */
    function isNumber(value?: string | number): boolean {
        return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
    }

    /**
     * Grabs the relic information, validates if its a real
     * relic with a numeric tier, and if so adds it to the
     * array of selected relics.
     * @returns A string[] object that will be the
     * new state of the _relics array
     */
    function callRelic() {
        const tempRelicList: string[] = [];
        let exists = false;
        let i = 0; 

        for (i = 0; i < _relics.length; i++){ tempRelicList.push(_relics[i]); }

        const tempname = ((document.getElementById('relicName') as HTMLInputElement).value);
        const tempLevel = ((document.getElementById('relicLevel') as HTMLInputElement).value);

        for (i = 0; i < relicData.length; i++) {
            if (relicData[i].name.toLowerCase() == tempname.toLowerCase()) {
            exists = true;
            break;
            }
        }

        if (exists) {
            const temprelic = tempname + "," + tempLevel;
            if ((isNumber(tempLevel))) {
                if (!(_relics.includes(temprelic))) {
                    tempRelicList.push(temprelic);
                } else { runToast("You already selected this relic"); }
            } else { runToast("Your relic level must be a number"); }
        } else { runToast("This relic was not found."); }
        return tempRelicList;
    }

    /**
     * Grabs the ability information, validates if its a real
     * ability with a numeric talent and mastery selection,
     * and if so adds it to the array of selected abilities.
     * @returns A string[] object that will be the
     * new state of the _abilities array
     */
    function callAbility() {
        const tempAbilityList: string[] = [];
        let exists = false;

        let i = 0; 
        for (i = 0; i < _abilities.length; i++){ tempAbilityList.push(_abilities[i]); }

        const tempname = ((document.getElementById('abilityName') as HTMLInputElement).value);
        let temptalent = ((document.getElementById('abilityTalent') as HTMLInputElement).value);
        const tempmaster = ((document.getElementById('abilityMastery') as HTMLInputElement).value);

        if (temptalent == "") { temptalent = "0"; }

        for (i = 0; i < abilityData.length; i++) {
            if (abilityData[i].name.toLowerCase() == tempname.toLowerCase()) {
            exists = true;
            break;
            }
        }

        if (!exists) { runToast("The ability could not be found."); }
        if (!isNumber(temptalent)) {
            runToast("The talent must be a number.");
            exists = false;
        }
        if ((tempmaster.toLowerCase() != "y") && (tempmaster.toLowerCase() != "n")) {
            runToast("Set the mastery to eiher Y or N.");
            exists = false;
        }

        const temprelic = tempname + "," + temptalent + "," + tempmaster;
        if (exists && (!(_abilities.includes(temprelic)))) {
            tempAbilityList.push(temprelic);
        } else { runToast("The ability was already chosen"); }

        return tempAbilityList;
    }

    /**
     * Removes a relic item from the _relics array
     * @param relicval The relic to be removed
     * @returns A string[] object that will be the
     * new state of the _relics array
     */
    function removeRelic(relicval: string) {
        const tempRelicList: string[] = [];

        let i = 0; 
        for (i = 0; i < _relics.length; i++){
            if (_relics[i] != relicval) { tempRelicList.push(_relics[i]); }
        }

        return tempRelicList
    }

    /**
     * Removes an ability item from the _abilities array
     * @param relicval The ability to be removed
     * @returns A string[] object that will be the
     * new state of the _abilities array
     */
    function removeAbility(abilityval: string) {
        const tempAbilityList: string[] = [];

        let i = 0; 
        for (i = 0; i < _abilities.length; i++){
            if (_abilities[i] != abilityval) { tempAbilityList.push(_abilities[i]); }
        }

        return tempAbilityList
    }

    // Return render -------------------------------
    function renderRelic(relicval: string) {
        const splitsrelic = relicval.split(',');
        return (
            <div className='basesearchlightStructure' onClick={() => createRelic(removeRelic(relicval))}>
                <p><b>{splitsrelic[0].toUpperCase()} (Level {splitsrelic[1]})</b></p>
            </div>
        )
    }

    function renderAbility(abilityval: string) {
        const splitsability = abilityval.split(',');
        return (
            <div className='basesearchlightStructure' onClick={() => createRelic(removeAbility(abilityval))}>
                <p><b>{splitsability[0].toUpperCase()} (Talent {splitsability[1]}, Mastery {splitsability[2]})</b></p>
            </div>
        )
    }

    
    const handleKeyDownRelic = (event: any) => {
        if (event.key === 'Enter') {
            createRelic(callRelic())
        }
      };

    const handleKeyDownAbility = (event: any) => {
        if (event.key === 'Enter') {
            createAbility(callAbility())
        }
    };


    return (
        <div className='basesearchStructure'>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            <div className='searchContainer'>
                <div className='searchgriditem'> 
                    <div className='searchSubSetContainer'>
                        <div className='basesearchitemStructure jobgriditem padSmall'>
                            <div className='centerPosition'>
                                <h2 className='paddedSearchTitle'>JOB</h2>
                                <Autocomplete
                                    className='searchinputbox'
                                    disablePortal
                                    id="searchJob"
                                    sx={{ width: 300 }}
                                    options={jobnames.sort((a, b) => -b.localeCompare(a))}
                                    style={{ textDecoration: "none"}}
                                    renderInput={(params) => <TextField {...params} style={{height:"50%",  width: "85%", backgroundColor:"white",paddingLeft:"0.5em", textDecoration:"none"}} id='searchBond' type="text" variant="standard" label="" className='searchinputpower'/>}
                                />
                            </div>
                        </div>
                        <div className='searchsubsubcontainer'>
                            <div className='basesearchitemStructure levelgriditem'>
                            <div className='centerPosition'>
                                <h2 className='paddedSearchLevel'>LV</h2>
                                <input id='searchLevel' type="text" placeholder="Level" className='searchinput'/>
                            </div>
                            </div>
                            <div className='basesearchbuttonStructure searchgridtacticsbutton' onClick={() => validateSearch()}>
                                <h2 className='centerPosition'>&#x1F50E;&#xFE0E;</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='searchgriditem'> 
                    <div className='searchSubContainer'>
                        <div className='basesearchitemStructure searchgriditem'>
                            <div className='centerPosition'>
                                <h2 className='paddedSearchLevel'>RELIC</h2>
                                <Autocomplete
                                    className='searchinputbox'
                                    disablePortal
                                    id="relicName"
                                    sx={{ width: 300 }}
                                    options={relicnames.sort((a, b) => -b.localeCompare(a))}
                                    style={{ textDecoration: "none"}}
                                    renderInput={(params) => <TextField {...params} onKeyDown={handleKeyDownRelic}  style={{height:"50%", backgroundColor:"white", width:"90%", paddingLeft:"0.5em", textDecoration:"none"}} id='searchBond' type="text" variant="standard" label="" className='searchinputpower'/>}
                                />
                                <input id='relicLevel'  onKeyDown={handleKeyDownRelic}  type="text" placeholder="Tier" className='searchinputreliclevel'/>
                                <div className='paddedSearchAdd' onClick={() => createRelic(callRelic())}>
                                    <h2 className='nakedpad'> &#x2795;&#xFE0E;</h2>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className='searchitemscontainer' id='relicList'>
                            {_relics.map((item) => (
                            <div key={item}>
                                {renderRelic(item)}
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='searchgriditem'>  
                    <div className='searchSubContainer'>
                        <div className='basesearchitemStructure searchgriditem'>
                            <div className='centerPosition'>
                                <h2 className='paddedSearchLevel'>ABILITY</h2>
                                
                                <Autocomplete
                                    className='searchinputbox'
                                    disablePortal
                                    id="abilityName"
                                    sx={{ width: 300 }}
                                    options={abilitynames.sort((a, b) => -b.localeCompare(a))}
                                    style={{ textDecoration: "none"}}
                                    renderInput={(params) => <TextField {...params} onKeyDown={handleKeyDownAbility}  style={{height:"50%", backgroundColor:"white", width:"90%", paddingLeft:"0.5em", textDecoration:"none"}} id='searchBond' type="text" variant="standard" label="" className='searchinputpower'/>}
                                />
                                <input id='abilityTalent' type="text"  onKeyDown={handleKeyDownAbility}  placeholder="Talent" className='searchinputreliclevel'/>
                                <input id='abilityMastery' type="text"  onKeyDown={handleKeyDownAbility}  placeholder="Mastery(Y/N)" className='searchinputabilitymastery'/>
                                <div className='paddedSearchAdd' onClick={() => createAbility(callAbility())}>
                                    <h2 className='nakedpad'> &#x2795;&#xFE0E; </h2>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className='searchitemscontainer'>
                            {_abilities.map((item) => (
                                <div key={item}>
                                    {renderAbility(item)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    // ---------------------------------------------
}

export default BuildSearch