import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import logo from '../../resources/images/iconpendium_logo.png'

import { ContentPackManager } from '../../classes/contentpacks/contentmanager'
import Button from 'react-bootstrap/esm/Button'
import ContentPackInformation from '../../display/components/subcomponents/informationpanel/ContentPackInformation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport } from '@fortawesome/free-solid-svg-icons'

const ToolsContentManager = (prop: any) => {
    const Manager = prop.manager;

    function readFileOnUpload(uploadedFile: File | undefined): void {
        const fileReader = new FileReader();
        fileReader.onloadend = ()=>{
           try{
                Manager.FileToContentPack(fileReader.result);
           }catch(e){
                console.log("**Not valid JSON file!**");
            }
        }
        if( uploadedFile!== undefined)
           fileReader.readAsText(uploadedFile);
    }

    // Return result -----------------------------
    return (
        <div className="container" style={{width:"100%"}}>
            
            <input id="pack-upload" style={{display:"none"}} type="file" accept=".json" onChange={(e)=>readFileOnUpload(e.target.files? e.target.files[0] : undefined)} />
                       
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className='row'><div className='col'><br/><br/></div></div>
                    <div className="row">
                        <div className="col-12 justify-content-center" style={{display:"flex"}}>
                            <label htmlFor="pack-upload" className="generalbuttonbox bordersubpurple hovermouse">
                                <FontAwesomeIcon icon={faFileImport} className="pageaccestext"/>
                                <h1 className="pageaccestext">
                                    UPLOAD CONTENT PACK
                                </h1>
                            </label>
                            <div className="navpad"/>
                            <ContentPackInformation/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Button onClick={() => {console.log(Manager.PackList)}}>CLICK</Button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default ToolsContentManager