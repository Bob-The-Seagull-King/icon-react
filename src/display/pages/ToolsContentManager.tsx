import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import logo from '../../resources/images/iconpendium_logo.png'

import { ContentPackManager } from '../../classes/contentpacks/contentmanager'
import Button from 'react-bootstrap/esm/Button'
import ContentPackInformation from '../../display/components/subcomponents/informationpanel/ContentPackInformation'
import ContentPackDisplay from '../../display/components/features/contentpack/ContentPackDisplay'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport } from '@fortawesome/free-solid-svg-icons'
import { ContentPack } from '../../classes/contentpacks/contentpack'

const ToolsContentManager = (prop: any) => {
    const Manager = prop.manager;

    const [_allcontentpacks, returnstate] = useState(Manager.GetPack());
    const [_key, updateKey] = useState(0);

    function readFileOnUpload(uploadedFile: File | undefined): void {
        const fileReader = new FileReader();
        fileReader.onloadend = ()=>{
           try{
                Manager.FileToContentPack(fileReader.result);
                ItemRecall();
           }catch(e){
                console.log("**Not valid JSON file!**");
            }
        }
        if( uploadedFile!== undefined)
           fileReader.readAsText(uploadedFile);
    }

    function ItemRecall() {
        returnstate(Manager.GetPack())
        updateKey(_key+1)
        console.log(_allcontentpacks)
    }

    // Return result -----------------------------
    return (
        <div className="container" style={{width:"100%"}}>
            
            <input id="pack-upload" style={{display:"none"}} type="file" accept=".json" onChange={(e)=>readFileOnUpload(e.target.files? e.target.files[0] : undefined)} />
                       
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className="row">
                        <div className="col-12 justify-content-center" style={{display:"flex"}}>
                            <label htmlFor="pack-upload" className="generalbuttonbox bordersubpurple hovermouse">
                                <FontAwesomeIcon icon={faFileImport} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    UPLOAD CONTENT PACK
                                </h1>
                            </label>
                            <div className="navpad"/>
                            <div style={{width:"fit-content"}}>
                                <ContentPackInformation/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <br/>
                        </div>
                    </div>
                    <div className='row row-cols-1'>
                            {_allcontentpacks.map((item: ContentPack) => (
                                <div className="col" key={"packdisplay"+item.ID}>
                                    <ContentPackDisplay data={item} parent={Manager} statefunction={ItemRecall}/>
                                </div>
                            ))}
                    </div>  
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default ToolsContentManager