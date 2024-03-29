import React, {  useState } from 'react'
import '../../styles/iconcomponent.scss';
import '../../styles/iconbuild.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Cookies from 'js-cookie'

import bonddata from '../../resources/data/player/bond.json';
import powerdata from '../../resources/data/player/power.json';

const BuildNarrativeSearch = (props: any) => {

    // Declare Variables ---------------------------
    let _bond = "";
    let _level = "";
    const relicBase: string[] = [];
    const abilityBase: string[] = [];
    let isValid = true;
    
    const urlString = grabURL();
    let bondName = "";
    let levelName = "";
    let powersName = "";
    // ----------------------------------------------

    setSearchFromParam();
    // Setup states --------------------------------
    const [_powers, createAbility] = useState(parseBasePowers());
    const powernames = getpowernames();
    const bondnames = getbondnames();
    // ---------------------------------------------

    /**
     * Grabs the URL and if it contains params, converts
     * that into build-readable-format. If none can be 
     * found, it instead uses the cookie if possible.
     */    
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

        urlBuildParam = Cookies.get('narrativebuildparam') ?? "";
        return urlBuildParam;
    }

    /**
     * Takes the urlstring and assigns the build
     * params the appropriate value based on it.
     */
    function setSearchFromParam() {
        const buildSplits = urlString.split(';');
        // ------------------------------------------

        let i = 0;
        for (i = 0; i < buildSplits.length; i++) {
            const tempSplit = buildSplits[i].split('=');
            if (tempSplit[0] == "b") {
                bondName = tempSplit[1];
                bondName = bondName.replaceAll('%20', ' ');
            }
            if (tempSplit[0] == "l") {
                levelName = tempSplit[1];
            }
            if (tempSplit[0] == "p") {
                powersName = tempSplit[1];
                powersName = powersName.replaceAll('%20', ' ');
            }
        }
    }

    /**
     * Takes the power buildsplit and creates
     * the power objects for the power array
     * @returns 
     */
    function parseBasePowers() {
        const buildSplits = powersName.split(':');
        const temp: string[] = [];
        let i = 0;
        for (i = 0; i < buildSplits.length; i++) {
            if (buildSplits[i].length > 0) {
                temp.push(buildSplits[i]);
            }
        }
        return temp;
    }

    // ---------------------------------------------
    /**
     * Get the names of all bonds stored
     * in the data resource
     * @returns 
     */
    function getbondnames() {
        const temp: string[] = [];

        let i = 0;
        for (i = 0; i < bonddata.length; i++) {
            temp.push(bonddata[i].name);
        }

        return temp;
    }

    /**
     * Get the names of all powers stored
     * in the data resource
     * @returns 
     */
    function getpowernames() {
        const temp: string[] = [];

        let i = 0;
        for (i = 0; i < powerdata.length; i++) {
            temp.push(powerdata[i].name);
        }

        return temp;
    }

    /**
     * 
     * Checks that the minimum values (job and level) are
     * present and, if so, prompts the url-parse and window
     * open process.
     */
    function validateSearch() {

        isValid = false;

        _bond = (document.getElementById('searchBond') as HTMLInputElement).value;
        let i = 0;
        for (i = 0; i < bonddata.length; i++) 
         { 
            if (bonddata[i].name.toLowerCase() == _bond.toLowerCase()) {
                isValid = true;
            }
        }

        if (!isValid) {
            runToast("Your BOND was not found."); 
        }


        if (isNumber((document.getElementById('searchLevel') as HTMLInputElement).value)) {
            _level = (document.getElementById('searchLevel') as HTMLInputElement).value
        } else { runToast("Your LV must be a number."); }

        if ((_bond != "") && (_level != "")) {
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

        urlpath += "b=" + _bond + ";";
        urlpath += "l=" + _level + ";";

        urlpath += "p=";
        for (i = 0; i < _powers.length; i++) { urlpath += _powers[i] + ":" }
        urlpath += ";";

        navBuild(urlpath)
    }

    /**
     * Opens a new page in the same tab
     * @param urlpath The params of the url
     */
    function navBuild (urlpath : string) {    
        window.open(location.protocol + '//' + location.host +'/' + 'build/narrative'  + '/'+urlpath, '_self', 'noopener,noreferrer');
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
     * Grabs the ability information, validates if its a real
     * ability with a numeric talent and mastery selection,
     * and if so adds it to the array of selected abilities.
     * @returns A string[] object that will be the
     * new state of the _powers array
     */
    function callAbility() {
        const tempAbilityList: string[] = [];
        let exists = false;

        let i = 0; 
        for (i = 0; i < _powers.length; i++){ tempAbilityList.push(_powers[i]); }

        const tempname = ((document.getElementById('powerName') as HTMLInputElement).value);

        for (i = 0; i < powerdata.length; i++) {
            if (powerdata[i].name.toLowerCase() == tempname.toLowerCase()) {
            exists = true;
            break;
            }
        }

        if (!exists) { runToast("The power could not be found."); }

        const temprelic = tempname;
        if (exists) {
            if ((!(_powers.includes(temprelic)))) {
                tempAbilityList.push(temprelic);
            } else { runToast("The power was already chosen"); }
        }

        return tempAbilityList;
    }


    /**
     * Removes an ability item from the _powers array
     * @param relicval The ability to be removed
     * @returns A string[] object that will be the
     * new state of the _powers array
     */
    function removeAbility(abilityval: string) {
        const tempAbilityList: string[] = [];

        let i = 0; 
        for (i = 0; i < _powers.length; i++){
            if (_powers[i] != abilityval) { tempAbilityList.push(_powers[i]); }
        }

        return tempAbilityList
    }

    // Return render -------------------------------

    function renderAbility(abilityval: string) {
        const splitsability = abilityval.split(',');
        return (
            <div className='basesearchlightStructure' onClick={() => createAbility(removeAbility(abilityval))}>
                <p><b>{splitsability[0].toUpperCase()}</b></p>
            </div>
        )
    }

    
    const handleKeyDownAbility = (event: any) => {
        if (event.key === 'Enter') {
            createAbility(callAbility())
        }
    };


    return (
        <div className='centerPosition'>
        <div className='basenarrativesearchStructure'>
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
            <div className='narrativesearchContainer'>
                <div className='searchgriditem'> 
                    <div className='basesearchitemStructure'>
                        <div className='centerPosition'>
                            <h2 className='paddedSearchNarTitle'>BOND</h2>
                                <Autocomplete
                                    className='searchinputbox'
                                    disablePortal
                                    id="searchBond"
                                    sx={{ width: 300 }}
                                    options={bondnames.sort((a, b) => -b.localeCompare(a))}
                                    defaultValue={bondName}
                                    style={{ textDecoration: "none"}}
                                    renderInput={(params) => <TextField {...params} style={{height:"50%",  width: "85%", backgroundColor:"white",paddingLeft:"0.5em", textDecoration:"none"}} id='searchBond' type="text" variant="standard" label="" className='searchinputpower'/>}
                                />
                        </div>
                    </div>
                </div>
 
                <div className='searchgriditem'> 
                    <div className='basesearchitemStructure'>
                        <div className='centerPosition'>
                            <h2 className='paddedSearchLevel'>LV</h2>
                            <input id='searchLevel' type="text" defaultValue={levelName} placeholder="Level" className='searchinput'/>
                        </div>
                    </div>
                    
                </div>
                
                <div className='midgriditem'>  
                        <div className='basesearchitemStructure'>
                            <div className='centerPosition'>
                                <h2 className='paddedSearchLevel'>POWER</h2>
                                <Autocomplete
                                    className='searchinputbox'
                                    disablePortal
                                    id="powerName"
                                    sx={{ width: 300 }}
                                    options={powernames.sort((a, b) => -b.localeCompare(a))}
                                    style={{ textDecoration: "none"}}
                                    renderInput={(params) => <TextField {...params} style={{height:"50%", backgroundColor:"white",paddingLeft:"0.5em", textDecoration:"none"}} id='powerName' type="text" onKeyDown={handleKeyDownAbility} variant="standard" label="" className='searchinputpower'/>}
                                />
                                <div className='paddedSearchAdd' onClick={() => createAbility(callAbility())}>
                                    <h2 className='nakedpad'> &#x2795;&#xFE0E; </h2>
                                </div>
                            </div>
                        </div>
                </div>
                
                <div className='searchgriditem'> 
                    <div className='' onClick={() => validateSearch()}>
                        <div className='basesearchitemStructure'>
                        <div className='centerPosition'>
                        
                                <h2 className='centerPosition'>&#x1F50E;&#xFE0E;</h2>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            
            {_powers.length > 0 &&
            <div className='lowpad'>
                <div className='searchitemscontainer'>
                    {_powers.map((item) => (
                        <div key={item}>
                            {renderAbility(item)}
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
        </div>
    )
    // ---------------------------------------------
}

export default BuildNarrativeSearch