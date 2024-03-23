import React from 'react'
import { capitalizeTag } from '../../utility/functions';
import '../../styles/iconcomponent.scss';

const PowerDisplay = (props: any) => {
    const powerinfo = props.data;
    const bannedPowerTags: any[] = [];
    const usesTags: any[] = ["session", "scene"];

    const tagsArray = tagReturn(); 

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/' + '/player/narrative/' + dir + name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Evaluation functions ------------------------
    /**
         * Returns a string to display ability tag information
         * @returns String with all valid tags, their values
         * and formatting if required
         */
    function tagReturn() {
        const _tagArray: string[] = [];
        let _tagExport = "";
        let i = 0

        
        for (i = 0; i < powerinfo.tags.length; i++) {
            if ((!bannedPowerTags.includes( powerinfo.tags[i].tag_name ))) {
                let tagName = capitalizeTag(powerinfo.tags[i].tag_name);
                if (powerinfo.tags[i].val != undefined) {
                    tagName+= " " + powerinfo.tags[i].val;
                }
                if (usesTags.includes(powerinfo.tags[i].tag_name)) {
                    tagName = powerinfo.tags[i].val + " per " + capitalizeTag(powerinfo.tags[i].tag_name);
                }
                _tagArray.push(tagName);
            }
        }

        for (i = 0; i < _tagArray.length; i++) {
            _tagExport += _tagArray[i];
            if (i < _tagArray.length - 1) {
                _tagExport += ", ";
            }
        }

        return _tagExport;
    }
    // ---------------------------------------------


    // Return result -------------------------------
    return (
        <div className='powerStructure'>
            <h1 className={'titleShape titlePurple'}>{powerinfo.name}</h1>
            <p>{convertStringToContent(tagsArray)}</p>
            <div><p dangerouslySetInnerHTML={{__html: (powerinfo.desc || '')}}></p></div>
            <br/>
        </div>
    )
    // ------------------------------------------
}

export default PowerDisplay