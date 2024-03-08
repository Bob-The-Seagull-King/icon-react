import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour, containsTag } from '../utility/functions';
import '../styles/iconcomponent.scss';
import '../styles/iconbuild.scss';
import { useNavigate } from "react-router-dom";


const BuildNarrativePage: React.FC = () => {
    /**
     * URL FORMAT
     * 
     * b=[Bond Name];l=[Level];p=[Powers]
     */
    
    const bannedUltimateTags: string[] = [];

    // JSON data used in this build -------------------------
    const characterdata: any[] = [];
    // ------------------------------------------------------

    // Reads URL and gathers appropriate data ---------------
    parseURL();
    const isValid = validateURL();
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
        let classVal = '';
        let jobVal = '';
        let levelVal = '';
        // ------------------------------------------

        let i = 0;
        for (i = 0; i < buildSplits.length; i++) {
            const tempSplit = buildSplits[i].split('=');

            if (tempSplit[0] == 'b') { classVal = tempSplit[1]; }
            if (tempSplit[0] == 'l') { jobVal = tempSplit[1]; }
            if (tempSplit[0] == 'p') { levelVal = tempSplit[1]; }
        }

    }


    /**
     * Makes sure all required data is present
     * @returns True if the player class, job,
     * and level exists
     */
    function validateURL() {
        if ((characterdata[0] != undefined)
        && (characterdata[1] != undefined)
        && (characterdata[2] != "")
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
            Build_Narrative_Page
        </div>
    )
    // -------------------------------------------
}

export default BuildNarrativePage
