import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour } from '../utility/functions';
import '../styles/iconcomponent.scss';
import '../styles/iconbuild.scss';
import { useNavigate } from "react-router-dom";

const BuildSearch = (props: any) => {

    // Declare Variables ---------------------------
    let _class = "";
    let _job = "";
    let _level = "";
    const relicBase: string[] = [];
    const abilityBase: string[] = [];

    const [_relics, createRelic] = useState(relicBase);
    const [_abilities, createAbility] = useState(abilityBase);

    let isValid = true;
    let errormsg = "";

    // ---------------------------------------------
    function validateSearch() {
        _job = ((document.getElementById('searchJob') as HTMLInputElement).value);

        const colour = getColour(_job);
        if (colour == "blue") { _class = "wright"}
        if (colour == "green") { _class = "mendicant"}
        if (colour == "red") { _class = "stalwart"}
        if (colour == "yellow") { _class = "vagabond"}

        if (isNumber((document.getElementById('searchLevel') as HTMLInputElement).value)) {
            _level = (document.getElementById('searchLevel') as HTMLInputElement).value
        }

        if ((_job != "") && (_class != "") && (_level != "")) {
            isValid = true;
            errormsg = "";
        } else {
            isValid = false;
            errormsg = "Please provide a valid job and numeric level.";
        }

        if (isValid) {
            gatherURL();
        }
    }

    function gatherURL() {
        let urlpath = "";

        urlpath += "c=" + _class + ";";
        urlpath += "j=" + _job + ";";
        urlpath += "l=" + _level + ";";

        let i = 0;

        urlpath += "r=";
        for (i = 0; i < _relics.length; i++) {
            urlpath += _relics[i] + ":"
        }

        urlpath += ";";

        urlpath += "a=";
        for (i = 0; i < _abilities.length; i++) {
            urlpath += _abilities[i] + ":"
        }

        urlpath += ";";

        navBuild(urlpath)
    }

    function navBuild (urlpath : string) {    
        window.open(location.protocol + '//' + location.host +'/' + 'build'  + '/'+urlpath, '', 'noopener,noreferrer');
    }

    function isNumber(value?: string | number): boolean
    {
    return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
    }

    function callRelic() {
        const tempRelicList: string[] = [];

        let i = 0; 
        for (i = 0; i < _relics.length; i++){
            tempRelicList.push(_relics[i]);
        }

        const tempname = ((document.getElementById('relicName') as HTMLInputElement).value);
        const tempLevel = ((document.getElementById('relicLevel') as HTMLInputElement).value);

        const temprelic = tempname + "," + tempLevel;
        if ((isNumber(tempLevel)) && (!(_relics.includes(temprelic)))) {
            tempRelicList.push(temprelic);
        }

        return tempRelicList;
    }

    function callAbility() {
        const tempAbilityList: string[] = [];

        let i = 0; 
        for (i = 0; i < _abilities.length; i++){
            tempAbilityList.push(_abilities[i]);
        }

        const tempname = ((document.getElementById('abilityName') as HTMLInputElement).value);
        const temptalent = ((document.getElementById('abilityTalent') as HTMLInputElement).value);
        const tempmaster = ((document.getElementById('abilityMastery') as HTMLInputElement).value);

        const temprelic = tempname + "," + temptalent + "," + tempmaster;
        if (isNumber(temptalent) && (!(_abilities.includes(temprelic)))) {
            tempAbilityList.push(temprelic);
        }

        return tempAbilityList;
    }

    function removeRelic(relicval: string) {
        const tempRelicList: string[] = [];

        let i = 0; 
        for (i = 0; i < _relics.length; i++){
            if (_relics[i] != relicval) {
                tempRelicList.push(_relics[i]);
            }
        }

        return tempRelicList
    }

    function removeAbility(abilityval: string) {
        const tempAbilityList: string[] = [];

        let i = 0; 
        for (i = 0; i < _abilities.length; i++){
            if (_abilities[i] != abilityval) {
                tempAbilityList.push(_abilities[i]);
            }
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


    return (
        <div className='basesearchStructure'>
            <div className='searchContainer'>
                <div className='searchgriditem'> 
                    <div className='searchSubContainer'>
                        <div className='basesearchitemStructure jobgriditem'>
                            <div className='centerPosition'>
                                <h2 className='paddedSearchTitle'>JOB</h2>
                                <input id='searchJob' className='searchinput'/>
                            </div>
                        </div>
                        <br/>
                        <div className='searchsubsubcontainer'>
                            <div className='basesearchitemStructure levelgriditem'>
                            <div className='centerPosition'>
                                <h2 className='paddedSearchLevel'>LV</h2>
                                <input id='searchLevel' className='searchinput'/>
                            </div>
                            </div>
                            <div className='basesearchitemStructure searchgridbutton' onClick={() => validateSearch()}>
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
                                <input id='relicName' className='searchinputrelic'/>
                                <input id='relicLevel' className='searchinputreliclevel'/>
                                <div className='paddedSearchAdd' onClick={() => createRelic(callRelic())}>
                                    <h2 className='nakedpad'>ADD</h2>
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
                                <input id='abilityName' className='searchinputrelic'/>
                                <input id='abilityTalent' className='searchinputreliclevel'/>
                                <input id='abilityMastery' className='searchinputabilitymastery'/>
                                <div className='paddedSearchAdd' onClick={() => createAbility(callAbility())}>
                                    <h2 className='nakedpad'>ADD</h2>
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