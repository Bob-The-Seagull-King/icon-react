import 'bootstrap/dist/css/bootstrap.css'
import '../../../../../resources/styles/_icon.scss'
import React, { useEffect, useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Components
import GenericPanel from '../../../../components/generics/GenericPanel';
import ContentPackDisplay from '../../../../components/features/contentpack/ContentPackDisplay'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faDownload, faEye, faFileImport, faPenToSquare, faPersonMilitaryRifle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ContentPack } from '../../../../../classes/contentpacks/contentpack'
import { FightManager } from '../../../../../classes/fightsheets/FightManager';
import { FightSheet } from '../../../../../classes/fightsheets/FightSheet';
import { Button } from 'react-bootstrap';
import GenericEditTextDisplay from '../../../../components/objectedit/GenericEditTextDisplay';
import GenericEditListDisplay from '../../../../components/objectedit/GenericEditListDisplay';

const FightEditDisplay = (prop: any) => {
    const Manager : FightManager = prop.manager;
    const FightItem: FightSheet = prop.data;
    const UpdateFunction = prop.updater;
    
    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(FightItem.ConvertToInterface(), null, 4)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = FightItem.Title + ".json";
    
        link.click();
      };
      

    return (
       <div>
            <div className="row">
                <div className="verticalspacerbig"/>
            </div>
            <div className="row">
                <GenericEditTextDisplay manager={Manager} item={FightItem} statictype={'fighttitle'} updater={UpdateFunction}/> 
            </div>
            <div className="row">
                <div className="verticalspacerbig"/>
                <div className="verticalspacerbig"/>
                <div className="verticalspacerbig"/>
                <div className="verticalspacerbig"/>
            </div>            
            <div className="row justify-content-center" style={{display:"flex"}}>                
                <div style={{display:"flex",alignItems:"center"}}>                    
                    <div  className="medfonttext" style={{width:"fit-content", marginRight:"1rem"}}>
                        <p  style={{width:"fit-content"}}>Chapter</p>
                    </div>
                    <GenericEditListDisplay manager={Manager} item={FightItem} statictype={'fightchapter'} updater={UpdateFunction}/>
                </div>
            </div>
       </div>
    )
    // -------------------------------------------
}

export default FightEditDisplay