import 'bootstrap/dist/css/bootstrap.css'
import '../../../../../resources/styles/_icon.scss'
import React, { useEffect, useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Modal from 'react-bootstrap/Modal';
// Components
import GenericPanel from '../../../../components/generics/GenericPanel';
import ContentPackDisplay from '../../../../components/features/contentpack/ContentPackDisplay'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faClone, faDownload, faEye, faFileImport, faPenToSquare, faPersonMilitaryRifle, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ContentPack } from '../../../../../classes/contentpacks/contentpack'
import { FightManager } from '../../../../../classes/fightsheets/FightManager';
import { FightSheet } from '../../../../../classes/fightsheets/FightSheet';
import { Button } from 'react-bootstrap';
import GenericEditTextDisplay from '../../../../components/objectedit/GenericEditTextDisplay';
import GenericEditListDisplay from '../../../../components/objectedit/GenericEditListDisplay';
import NotesEditDisplay from '../../notes/NotesEditDisplay';
import { INote } from '../../../../../classes/Note';
import { IFoeJob } from '../../../../../classes/feature/foes/FoeJob';
import { FightMember } from '../../../../../classes/fightsheets/FightMember';
import { useGlobalState } from '../../../../../utility/globalstate'
import { getColour } from '../../../../../utility/functions';
import FoeJobDisplay from '../../foes/FoeJobDisplay';

const FightNewMemberDisplay = (prop: any) => {
    const Manager : FightManager = prop.manager;
    const FightItem: FightSheet = prop.data;
    const UpdateFunction = prop.updater;  

    const [filterCategory, returnCategory] = useState("");
    const [filterClass, returnClass] = useState("");
    const [filterFaction, returnFaction] = useState("");
    const [_jobval, returnJobVal] = useState("");
    const [_classval, returnClassVal] = useState("");
    const [_eliteval, returnEliteVal] = useState(false);
    const [_elitedisabled, returnEliteDisabled] = useState(false);

    const [_listkey, returnkey] = useState(0);
    const [_alljobs, returnalljobs] = useState(FilterListOfJobs(Manager.JobList));

    const listRef = useRef<HTMLSelectElement>(null);
    const eliteRef = useRef<HTMLInputElement>(null);
    
    function removeContentPack(_member : FightMember) {
        Manager.DeleteMember(FightItem, _member);
        UpdateFunction(FightItem)
    }

    function copyContentPack(_member : FightMember) {        
        Manager.NewMember(FightItem, _member.Base, _member.Faction, _member.Elite);
        UpdateFunction(FightItem)
    }

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

    function FilterListOfJobs(_jobs : IFoeJob[]) {
        const listofjobs : IFoeJob[] = []

        for (let i = 0; i < _jobs.length; i++) {
            let isvalid = true

            if (filterCategory != "") {
                if (_jobs[i].category != filterCategory) {
                    isvalid = false;
                }
            }
            if (filterClass != "") {
                if (_jobs[i].class_id != filterClass) {
                    isvalid = false;
                }
            }
            if (filterFaction != "") {
                if (_jobs[i].faction_id != filterFaction) {
                    isvalid = false;
                }
            }

            if (isvalid === true) {
                listofjobs.push(_jobs[i])
            }
        }

        return listofjobs;
    }

    function returnFactionFilter() {
        return (
            <div className={"col-4"} >
            <InputGroup className={"tagboxpad"}  style={{height:"100%"}}>
                <Form.Select className="bordericon borderstyler" defaultValue={""} style={{height:"100%",textAlign:"center"}} aria-label="Default select example" onChange={e => { returnFaction(e.target.value); returnalljobs(FilterListOfJobs(Manager.JobList)); returnkey(_listkey + 1)} } >
                        <option key={"factionoptionnone"} value={""}>Any Faction</option>
                        {Manager.FactionList.map(_item =>                             
                            <option key={"factionoption"+Manager.FactionList.indexOf(_item)} value={_item.id}>{_item.name}</option>
                        )
                        }
                </Form.Select>
            </InputGroup>
        </div>
        )
    }

    function returnClassFilter() {
        return (
            <div className={"col-4"} >
            <InputGroup className={"tagboxpad"}  style={{height:"100%"}}>
                <Form.Select className="bordericon borderstyler" defaultValue={""} style={{height:"100%",textAlign:"center"}} aria-label="Default select example" onChange={e => { returnClass(e.target.value); returnalljobs(FilterListOfJobs(Manager.JobList)); returnkey(_listkey + 1)} } >
                        <option key={"factionoptionnone"} value={""}>Any Class</option>
                        {Manager.ClassList.map(_item =>                             
                            <option key={"factionoption"+Manager.ClassList.indexOf(_item)} value={_item.id}>{_item.name}</option>
                        )
                        }
                </Form.Select>
            </InputGroup>
        </div>
        )
    }

    function returnCategoryFilter() {
        return (
            <div className={"col-4"} >
            <InputGroup className={"tagboxpad"}  style={{height:"100%"}}>
                <Form.Select className="bordericon borderstyler" defaultValue={""} style={{height:"100%",textAlign:"center"}} aria-label="Default select example" onChange={e => { returnCategory(e.target.value); returnalljobs(FilterListOfJobs(Manager.JobList)); returnkey(_listkey + 1)} } >
                        <option key={"factionoptionnone"} value={""}>Any Category</option>
                        <option key={"factionoptionjob"} value={"job"}>Job</option>
                        <option key={"factionoptionelite"} value={"elite"}>Elite</option>
                        <option key={"factionoptionunique"} value={"unique"}>Unique</option>
                        <option key={"factionoptionlegend"} value={"legend"}>Legend</option>
                </Form.Select>
            </InputGroup>
        </div>
        )
    }

    function returnJobSelect() {
        return (
            <div className={"col-4"} >
            <InputGroup className={"tagboxpad"}  style={{height:"100%"}}>
                <Form.Select className="bordericon borderstyler" defaultValue={""} key={_listkey} style={{height:"100%",textAlign:"center"}} aria-label="Default select example" onChange={e => { 
                        returnJobVal(e.target.value.split(',')[0]); 
                        if (listRef.current) {
                            listRef.current.value = e.target.value.split(',')[1];
                            returnClassVal(e.target.value.split(',')[1]);
                        }
                        if (eliteRef.current) {
                            eliteRef.current.checked = (e.target.value.split(',')[2] === 'elite');
                            returnEliteVal((e.target.value.split(',')[2] === 'elite'));
                            returnEliteDisabled(((e.target.value.split(',')[2] === 'elite') || (e.target.value.split(',')[2] === 'legend')));
                        }
                    } } >
                        <option key={"factionoptionnone"} value={""}>-</option>
                        {FilterListOfJobs(Manager.JobList).map(_item =>                             
                            <option key={"factionoption"+_alljobs.indexOf(_item)+_listkey} value={[_item.id,_item.faction_id,_item.category]}>{_item.name}</option>
                        )
                        }
                </Form.Select>
            </InputGroup>
        </div>
        )
    }

    function returnFactionSelect() {
        return (
            <div className={"col-4"} >
            <InputGroup className={"tagboxpad"}  style={{height:"100%"}}>
                <Form.Select className="bordericon borderstyler" defaultValue={""} ref={listRef} key={_listkey} style={{height:"100%",textAlign:"center"}} aria-label="Default select example" onChange={e => { returnClassVal(e.target.value); } } >
                <option key={"factionoptionnone"} value={""}>-</option>
                        {(Manager.FactionList).map(_item =>                             
                            <option key={"factionoption"+Manager.FactionList.indexOf(_item)+_listkey} value={_item.id}>{_item.name}</option>
                        )
                        }
                </Form.Select>
            </InputGroup>
        </div>
        )
    }

    function returnEliteSelect() {
        return (
            <div className={"col-2"} >
                <InputGroup className={"tagboxpad"}  style={{height:"100%"}}>
                    <div className="backgroundWhite bordericon borderstyler" style={{height:"100%",textAlign:"center",verticalAlign:"middle",display:"table-cell",alignItems:"center",width:"100%",borderRadius:"0.5rem",padding:"0.5rem"}}>
                        <Form.Check type="switch" disabled={_elitedisabled} label={"Elite"} ref={eliteRef} key={_listkey} aria-label="Default select example" onChange={e => { returnEliteVal(e.target.checked); } } />
                    </div>
                </InputGroup>
            </div>
        )
    }

    

    function NewMember() {
        if (_jobval === "") {
            runToast("Please Select a Job");
        } else {
            if (_classval === "") {                
                runToast("Please Select a Faction");
            } else {
                Manager.NewMember(FightItem, _jobval, _classval, _eliteval);
                UpdateFunction(FightItem)
            }
        }        
    }

    function returnButton() {
        return (
            <div className={"col-2"} >                
                <div className="hiddenbuttonbox" style={{width:"100%",alignItems:"center"}}>
                    <div style={{display:"flex",width:"fit-content",alignItems:"flex-end",fontSize:"4rem"}} onClick={() => NewMember()} className="hovermouse ">
                        <FontAwesomeIcon icon={faPlusSquare} className="pageaccestext"/>
                    </div>
                </div>
            </div>
        )
    }

    function returnMember(_member : FightMember) {

        const [show, setShow] = useState(false);
        const [theme] = useGlobalState('theme');

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                            <div className="contentpackcontainer borderstyler bordericon" style={{marginBottom:"0.5rem"}} >
                        <span className="contentsubnamecontainer">
                            <span/>
                            <h1 className="packtitle hovermouse" onClick={() => handleShow()}>
                                {((_member.Job.FactionData)? "(" + _member.Job.FactionData.name + ") ": "") + _member.Job.Name + ((_member.Elite)? " (ELITE)": "")}
                            </h1>
                            <span/>
                        </span>
                        <span className="packvrbox">                            
                            <div className="vr packvr"></div>
                            <Button style={{padding:"0em"}} variant="" onClick={() => copyContentPack(_member)}>
                                <FontAwesomeIcon icon={faClone} className="" style={{fontSize:"2em",margin:"0em"}}/>
                            </Button>
                            <div className="vr packvr"></div>
                            <Button style={{padding:"0em"}} variant="" onClick={() => removeContentPack(_member)}>
                                <FontAwesomeIcon icon={faTrash} className="redIcon" style={{fontSize:"2em",margin:"0em"}}/>
                            </Button>
                        </span>
                    </div>
                    
                    <Modal data-theme={theme} show={show} size="lg" contentClassName="overcomeBackground" dialogClassName=""  onHide={handleClose} keyboard={true}  centered>
                        <Modal.Body > 
                            
                            <div className={'abilityStructure borderstyler border'+getColour(_member.Job.Class)}>
                                <h1 className={'titleShape titlebody background'+getColour(_member.Job.Class)}>
                                    {_member.Job.Name}
                                    
                                    <div className="row float-end">
                                        <div className='col-12 float-end'>
                                            <Button style={{padding:"0em"}} variant="" onClick={() => handleClose()}>
                                                <FontAwesomeIcon icon={faCircleXmark} className="setWhite" style={{fontSize:"2em",margin:"0em"}}/>
                                            </Button>
                                        </div>
                                    </div>
                                </h1>
                                <FoeJobDisplay data={_member.Job} />
                            </div>
                        </Modal.Body>
                    </Modal>
                </>
        )
    }

    return (
       <div>
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
            <div className="row">
                <div className="abilityStructure borderstyler bordericon">
                    <div style={{display:"flex",padding:"1rem",paddingBottom:"0.5rem"}} className="row">
                        {returnFactionFilter()}
                        {returnCategoryFilter()}
                        {returnClassFilter()}
                    </div>
                    <div style={{display:"flex",padding:"1rem",paddingTop:"0.5rem"}} className="row">
                        {returnJobSelect()}
                        {returnFactionSelect()}
                        {returnEliteSelect()}
                        {returnButton()}
                    </div>
                </div>
            </div>
            <div className="row">                
                <br/>
            </div>
            <div className="row">
                <div style={{padding:"0rem",paddingTop:"0.5rem"}}>      
                        {FightItem.Members.map(_item => 
                            <div key={FightItem.Members.indexOf(_item)+_listkey}>
                                {returnMember(_item)}
                            </div>
                        )}
                    </div>
            </div>
       </div>
    )
    // -------------------------------------------
}

export default FightNewMemberDisplay