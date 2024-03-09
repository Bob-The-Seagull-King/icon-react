import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../utility/functions';
import '../styles/iconcomponent.scss';
import '../styles/iconbuild.scss';
import { useNavigate } from "react-router-dom";

import BuildNarrativeSearch from '../components/pagecomponents/BuildNarrativeSearch';

import bondData from '../resources/data/player/bond.json';
import powerData from '../resources/data/player/power.json';

import BondDisplay from '../components/itemdisplaycomponents/BondDisplay';
import PowerDisplay from '../components/itemdisplaycomponents/PowerDisplay';

const BuildNarrativePage: React.FC = () => {
    /**
     * URL FORMAT
     * 
     * b=[Bond Name];l=[Level];p=[Powers]
     */
    
    const bannedUltimateTags: string[] = [];

    // JSON data used in this build -------------------------
    const characterdata: any[] = [];
    const powersdata: any[] = [];
    // ------------------------------------------------------

    // Reads URL and gathers appropriate data ---------------
    parseURL();
    const isValid = validateURL();
    console.log(characterdata);
    console.log(powersdata)
    // ------------------------------------------------------

    // Parse URL into Data --------------------------

    /**
     * Takes the URL, splits it into the needed components,
     * and sends the right value into the relavent parsing
     * methods.
     */
    function parseURL() {
        // Grab Splits ------------------------------
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');
        
        let urlBuildParam = "";
        if (urlSplits.length >= 4) {
            urlBuildParam = urlSplits[3];
        }
        const buildSplits = urlBuildParam.split(';');
        // ------------------------------------------


        // Store Values For Params ------------------
        
        let bondval = '';
        let levelVal = '';
        let powerVal = '';
        // ------------------------------------------
        

        let i = 0;
        for (i = 0; i < buildSplits.length; i++) {
            const tempSplit = buildSplits[i].split('=');

            if (tempSplit[0] == 'b') { bondval = tempSplit[1]; }
            if (tempSplit[0] == 'l') { levelVal = tempSplit[1]; }
            if (tempSplit[0] == 'p') { powerVal = tempSplit[1]; }
        }

        parseBond(bondval, levelVal);
        parsePowers(powerVal);

    }

    function parseBond(bond: string, level: string) {
        bond = bond.replaceAll('%20', ' ');
        level = level.replaceAll('%20', ' ');

        
        let i = 0;
        for (i=0; i < bondData.length; i++) {
            if (bondData[i].name.toLowerCase() == bond.toLowerCase()) {
                characterdata[0] = bondData[i];

            }
        }
        characterdata[1] = level;

    }

    function parsePowers(powers: string) {
        powers = powers.replaceAll('%20', ' ');

        const powersplit = powers.split(':');
        
        let i = 0;
        for (i = 0; i < powersplit.length; i++) {
            const powertemp = powersplit[i].split(',');
            powertemp[0] = powertemp[0].replaceAll('%20', ' ');
            const newpower: any[] = [];

            let j = 0;
            for (j = 0; j < powerData.length; j++) {
                if (powerData[j].name.toLowerCase() == powertemp[0].toLowerCase()) {
                    newpower[0] = powerData[j];
                }
            }
            if (newpower.length > 0) { powersdata.push(newpower[0]); }
        }

    }

    function levelToChapter(level: string) {

        if (parseInt(level) < 5) {
            return 1;
        }
        if (parseInt(level) > 8) {
            return 3;
        }
        return 2;
    }

    /**
     * Makes sure all required data is present
     * @returns True if the player class, job,
     * and level exists
     */
    function validateURL() {
        if ((characterdata[0] != undefined)
        && (characterdata[1] != "")
        ) {
            return true;
        }
        return false;
    }

    // Navigation ----------------------------------
    /**
     * Opens a page based on the parameters
     * @param page The initial /page/ of the route
     * @param name The end-params for the route
    */
    function navClick (page: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/player/narrative/' + page + '/'+name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return result -----------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{width: '100%', padding: '1.5em'}}>
                <BuildNarrativeSearch/>
            </div>
            {isValid && 
                
                <div className='bondfullcontainer'>
                    <div className='jobitema'>
                        <h1 className={'titleShape titlePurple'}>CHAPTER: {levelToChapter(characterdata[1])}</h1>
                        <br/>
                        <BondDisplay key={characterdata[0].name + "base"} data={characterdata[0]}/>
                    </div>
                    <br/>
                    <div className='jobitemb'>
                        <div className=''>
                            <div className='abilityContainer'>
                            {powersdata.map((item: any) => (
                                <div key={item.name + "power"} onClick={() => navClick('power/', item.name)} className='gridItem'>
                                    <PowerDisplay   data={item}/>
                                </div>))}
                            </div>
                        </div>
                    </div>
                </div>}
            
            {!isValid &&
                <div>
                    <br/>
                    <div className='baseStructure'>
                        <h1 className='centerPosition' style={{paddingLeft: '2em', paddingRight: '2em'}}>Enter your character details above and<br/>press search to view your build.</h1>
                        <br/>
                    </div>
                </div>
            }
        </div>
    )
    // -------------------------------------------
}

export default BuildNarrativePage
