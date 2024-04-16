import 'bootstrap/dist/css/bootstrap.css'
import '../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import logo from '../../resources/images/iconpendium_logo.png'

import { ContentPackManager } from '../../classes/contentpacks/contentmanager'

const ToolsContentManager = (prop: any) => {
    const Manager = prop.manager;

    function readFileOnUpload(uploadedFile: File | undefined): void {
        const fileReader = new FileReader();
        fileReader.onloadend = ()=>{
           try{
                console.log(fileReader.result);
           }catch(e){
                console.log("**Not valid JSON file!**");
            }
        }
        if( uploadedFile!== undefined)
           fileReader.readAsText(uploadedFile);
    }

    // Return result -----------------------------
    return (
        <div className="container">
            <div className="row justify-content-center m-0 p-0">
                <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className='row'><div className='col'><br/><br/><br/></div></div>
                    <div className="row">
                        <input type="file" accept=".json" onChange={(e)=>readFileOnUpload(e.target.files? e.target.files[0] : undefined)} />
                    </div>  
                </div>
            </div>
        </div>
    )
    // -------------------------------------------
}

export default ToolsContentManager