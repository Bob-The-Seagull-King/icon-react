import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Components
import GenericPanel from '../../../components/generics/GenericPanel';
import ContentPackDisplay from '../../../components/features/contentpack/ContentPackDisplay'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport, faPersonMilitaryRifle } from '@fortawesome/free-solid-svg-icons'
import { ContentPack } from '../../../../classes/contentpacks/contentpack'
import { FightManager } from '../../../../classes/fightsheets/FightManager';
import { FightSheet } from '../../../../classes/fightsheets/FightSheet';
import FightItemDisplay from './FightItemDisplay';

const FightListDisplay = (prop: any) => {
    const Manager : FightManager = prop.manager;
    const UpdaterMethod = prop.updater;

    let NewFightChapter = 1;
    let NewFightTitle = "";
    const inputRef = useRef<HTMLInputElement>(null);
    let factionRef : any = null;

    const [_allfights, returnstate] = useState(Manager.GetPack());
    const [_key, updateKey] = useState(0);
    // States

    
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

    function NewFight() {
        const Result = Manager.NewFight(NewFightChapter, NewFightTitle);
        if (Result != "") {
            runToast(Result);
        } else {
            UpdaterMethod(Manager.GetFightByName(NewFightTitle))
        }
        ItemRecall();
        if (inputRef.current != null) {
            inputRef.current.value = "";
        }
        if (factionRef != null) {
            factionRef.value = "[No Faction Selected]";
        }
        
    }

    function readFileOnUpload(uploadedFile: File | undefined): void {
        const fileReader = new FileReader();
        fileReader.onloadend = ()=>{
           try{
                const Msg: string = Manager.FileToContentPack((fileReader.result)? fileReader.result.toString() : "");
                if (Msg != "") {
                    runToast("Upload Error: " + Msg);
                }
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
    }

    function updateChapter(value: number) {
        NewFightChapter = value;
    }

    function updateTitle(value: string) {
        NewFightTitle = value;
    }

    return(
        <div className="container" style={{width:"100%"}}>
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
            <input id="pack-upload" style={{display:"none"}} type="file" accept=".json" onChange={(e)=>readFileOnUpload(e.target.files? e.target.files[0] : undefined)} />

            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12">

                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="" style={{paddingTop:"1em"}}>
                                <div className="row justify-content-center" style={{display:"flex"}}>
                                    <div className="col-md-6 col-12">
                                        <InputGroup className="tagboxpad" style={{height:"4em"}}>
                                            <Form.Control ref={inputRef} style={{ height:"100%",textAlign:"center"}} onChange={e => updateTitle(e.target.value)} aria-label="Text input" defaultValue={NewFightTitle} placeholder="Fight Name"/>
                                        </InputGroup>
                                    </div>
                                    <div className="col-md-2 col-12">
                                        <InputGroup className="tagboxpad" style={{height:"4em"}}>
                                            <Form.Select style={{height:"100%",textAlign:"center"}} aria-label="Default select example" onChange={e => { updateChapter(Number(e.target.value)) 
                                                factionRef = e.target;
                                             } } >
                                                    <option key={"factionoption1"}>{1}</option>
                                                    <option key={"factionoption1"}>{2}</option>
                                                    <option key={"factionoption1"}>{3}</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="generalbuttonbox" style={{width:"100%",alignItems:"center",height:"4em"}}>
                                            <div style={{display:"flex",width:"fit-content",alignItems:"flex-end"}} onClick={() => NewFight()} className="hovermouse ">
                                                <FontAwesomeIcon icon={faPersonMilitaryRifle} className="pageaccestext"/>
                                                <h1 className="pageaccestext" style={{whiteSpace:"nowrap"}}>
                                                    Create
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <label htmlFor="pack-upload" className="generalbuttonbox hovermouse">
                                            <FontAwesomeIcon icon={faFileImport} className="pageaccestext"/>
                                            <h1 className="pageaccestext">
                                                Upload
                                            </h1>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <br/>
                        </div>
                    </div>

                    <div style={{padding:"0.5em"}}>
                        <div className='row row-cols-1 smallbordersubpurple'>
                                {_allfights.length < 1 &&
                                    <div className="col p-0" key={"packdisplaynone"}>
                                        <div className='contentpackcontainer smallbordersubpurple' style={{justifyContent:"center",alignItems:"center"}}>
                                            <h1 className="subtletext" style={{paddingTop:"1em", paddingBottom:"1em"}}>No Fights Available</h1>
                                        </div>
                                    </div>
                                }
                                {_allfights.map((item: FightSheet) => (
                                    <div className="col p-0" key={"packdisplay"+item.ID}>
                                        <FightItemDisplay  data={item} parent={Manager} statefunction={ItemRecall} updater={UpdaterMethod}/>
                                    </div>
                                ))}
                        </div>  
                    </div>
                </div>
            </div>

        </div>
    )
    // -------------------------------------------
}

export default FightListDisplay