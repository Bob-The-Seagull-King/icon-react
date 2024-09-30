import 'bootstrap/dist/css/bootstrap.css'
import '../../../../../resources/styles/_icon.scss'
import React, { useEffect, useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

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
import NoteItemViewDisplay from '../../notes/NoteItemViewDisplay';
import GenericDisplay from '../../../../components/generics/GenericDisplay';
import TraitDisplay from '../../trait/TraitDisplay';
import AddonDisplay from '../../addons/AddonDisplay';
import JobDisplay from '../../jobs/JobDisplay';
import FoeJobDisplay from '../../foes/FoeJobDisplay';

const FightViewDisplay = (prop: any) => {
    const Manager : FightManager = prop.manager;
    const FightItem: FightSheet = prop.data;
    const UpdateFunction = prop.updater;
    
    const ref = useRef<HTMLDivElement>(null);


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
                <div className="verticalspacerbig"/>
            </div>

            <div className="row">
                <div className="largefonttext" style={{display:"flex",alignItems:"center"}}>
                        <div style={{width:"fit-content"}}>
                            {FightItem.Title} 
                        </div>
                    </div>
            </div>

            <div className="row">
                <div className="verticalspacerbig"/>
                <div className="verticalspacerbig"/>
            </div>
                      
            <div className="row justify-content-center" style={{display:"flex"}}>                
                <div style={{display:"flex",alignItems:"center"}}>                    
                    <div  className="medfonttext" style={{width:"fit-content", marginRight:"1rem"}}>
                        <p  style={{width:"fit-content"}}>{"Chapter " + ((FightItem.Chapter === 1)? "I" : (FightItem.Chapter === 2)? "II" : (FightItem.Chapter === 3)? "III" : "???")}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="verticalspacerbig"/>
                <div className="verticalspacerbig"/>
            </div> 
            <div className="row">
                {FightItem.Notes.length > 0 &&
                <div className="col-md-4 col-12">                     
                    {FightItem.Notes.map(_item => 
                        <NoteItemViewDisplay key={FightItem.Notes.indexOf(_item)+"ViewNote"} data={_item} />
                    )}
                    
                        <div className="verticalspacerbig"/>
                        <div className="verticalspacerbig"/>
                </div>
                }
                <div className={"col-md-"+((FightItem.Notes.length > 0)? "8" : "12") + " col-12"}>
                    
                <div className="row">
                {((FightItem.Traits.length > 0) || (FightItem.Abilities.length > 0)) &&
                        <>                    
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 1}} >
                        <Masonry gutter="20px">
                            
                            {FightItem.Traits.map(_item => 
                                <div key={"trait"+_item.ID}><GenericDisplay key="addonloop" d_colour={"icon"} d_name={_item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={_item} />}/><div className="verticalspacer"/></div>
                            )}
                            {FightItem.Abilities.map(_item => 
                                <div key={"action"+_item.ID}><GenericDisplay key="addonloop" d_colour={'icon'} d_name={_item.Name} d_type={"sub"} d_method={() => <AddonDisplay data={_item} />}/><div className="verticalspacer"/></div>
                            )}
                        </Masonry>
                    </ResponsiveMasonry>
                        
                        </>
                    }
                </div>
                <div className="row">
                {((FightItem.Members.length > 0)) &&
                        <>                    
                        <div>
                            <div className="separator">Foes</div>
                            <div className="verticalspacerbig"/>
                        </div> 
                        
                            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: (FightItem.Members.length > 1)? 2 : 1}} >
                                <Masonry gutter="20px">
                                    
                                    {FightItem.Members.map(_item =>
                                        <GenericDisplay d_state={false} key={FightItem.Members.indexOf(_item) + "FightJob"} d_colour={_item.Job.Class} d_name={((_item.Job.FactionData)? "(" + _item.Job.FactionData.name + ") ": "") + _item.Job.Name} d_type={""} d_method={() => <FoeJobDisplay data={_item.Job} />}/>
                                    )

                                    }
                                </Masonry>
                            </ResponsiveMasonry>
                        
                        </>
                    }
                </div>
                    
                </div>
            </div> 
        </div>
    )
    // -------------------------------------------
}

export default FightViewDisplay