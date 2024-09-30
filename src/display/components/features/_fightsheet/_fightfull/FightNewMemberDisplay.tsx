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
import { faClone, faDownload, faEye, faFileImport, faPenToSquare, faPersonMilitaryRifle, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ContentPack } from '../../../../../classes/contentpacks/contentpack'
import { FightManager } from '../../../../../classes/fightsheets/FightManager';
import { FightSheet } from '../../../../../classes/fightsheets/FightSheet';
import { Button } from 'react-bootstrap';
import GenericEditTextDisplay from '../../../../components/objectedit/GenericEditTextDisplay';
import GenericEditListDisplay from '../../../../components/objectedit/GenericEditListDisplay';
import NotesEditDisplay from '../../notes/NotesEditDisplay';
import { INote } from '../../../../../classes/Note';
import { IFoeJob } from '../../../../../classes/feature/foes/FoeJob';

const FightNewMemberDisplay = (prop: any) => {
    const Manager : FightManager = prop.manager;
    const FightItem: FightSheet = prop.data;
    const UpdateFunction = prop.updater;  

    const [filterCategory, returnCategory] = useState("");
    const [filterClass, returnClass] = useState("");
    const [filterFaction, returnFaction] = useState("");
    const [_jobval, returnJobVal] = useState("");
    const [_classval, returnClassVal] = useState("");

    const [_listkey, returnkey] = useState(0);
    const [_alljobs, returnalljobs] = useState(FilterListOfJobs(Manager.JobList));

    const listRef = useRef<HTMLSelectElement>(null);

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
            <div className={"col-5"} >
            <InputGroup className={"tagboxpad"}  style={{height:"100%"}}>
                <Form.Select className="bordericon borderstyler" defaultValue={""} key={_listkey} style={{height:"100%",textAlign:"center"}} aria-label="Default select example" onChange={e => { 
                        returnJobVal(e.target.value.split(',')[0]); 
                        if (listRef.current) {
                            listRef.current.value = e.target.value.split(',')[1];
                            returnClassVal(e.target.value.split(',')[1]);
                        }
                    } } >
                        <option key={"factionoptionnone"} value={""}>-</option>
                        {FilterListOfJobs(Manager.JobList).map(_item =>                             
                            <option key={"factionoption"+_alljobs.indexOf(_item)+_listkey} value={[_item.id,_item.faction_id]}>{_item.name}</option>
                        )
                        }
                </Form.Select>
            </InputGroup>
        </div>
        )
    }

    function returnFactionSelect() {
        return (
            <div className={"col-5"} >
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

    

    function NewMember() {
        if (_jobval === "") {
            runToast("Please Select a Job");
        } else {
            if (_classval === "") {                
                runToast("Please Select a Faction");
            } else {
                Manager.NewMember(FightItem, _jobval, _classval);
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
                        {returnButton()}
                    </div>
                </div>
            </div>
            <div className="row">
            </div>
       </div>
    )
    // -------------------------------------------
}

export default FightNewMemberDisplay