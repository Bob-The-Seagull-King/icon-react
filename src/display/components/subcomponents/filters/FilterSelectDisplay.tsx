import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import { ViewAbilitiesCollection } from '../../../../classes/viewmodel/collections/ViewAbilitiesCollections'
import { AllAbilitiesListPage } from '../../../../classes/viewmodel/pages/AllAbilitiesListPage'
import { AbilitiesFilterManager } from '../../../../classes/viewmodel/collections/filters/AbilitiesFilterManager'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FilterSelectDisplay = (prop: any) => {
    const ViewPageController: AllAbilitiesListPage = prop.controller
    const FilterManager: AbilitiesFilterManager = ViewPageController.FilterManager;


    const [_activetextfilters, returnactivetext] = useState(FilterManager.ReturnActiveTextFilters());
    const [_activetagfilters, returnactivetag] = useState(FilterManager.ReturnActiveTagFilters());
    const [_activemiscfilters, returnactivemisc] = useState(FilterManager.ReturnActiveMiscFilters());

    function SwitchState() {
        return !show;
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Return result -----------------------------
    return (
        <>
            <div onClick={() => setShow(SwitchState())}className='bordermainpurple roundBody hovermouse'>
                {((_activetextfilters.length == 0) && (_activetagfilters.length == 0) && (_activemiscfilters.length == 0) ) &&
                    <div className="">
                            <h1 className="subtletext">No Filters Selected</h1>
                    </div>
                }

                <Modal show={show} contentClassName="filterboxStructure" dialogClassName="modal-90w" onHide={handleClose} backdrop="static" keyboard={false}  centered>
                    <h1 className={'titleShape titlepurple'}>Select Filters</h1>
                    <Modal.Body >
                        <h3>NAME</h3>
                        {FilterManager.ReturnTextFilters().map((item) => (
                            <p key="name">{item.Val}</p>
                        ))}
                        <h3>TAGS</h3>
                        {FilterManager.ReturnTagFilters().map((item) => (
                            <p key={"tag"+item.TagType.Name}>{item.TagType.Name}</p>
                        ))}
                        <h3>CHAPTERS</h3>
                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "chapter")).map((item) => (
                            <p key={"miscchapter"+item.Name}>{item.Name}</p>
                        ))}
                        <h3>SOURCES</h3>
                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                            <p key={"miscsource"+item.Name}>{item.Name}</p>
                        ))}
                        <h3>CLASSES</h3>
                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "class_id")).map((item) => (
                            <p key={"miscclass"+item.Name}>{item.Name}</p>
                        ))}
                        <h3>JOBS</h3>
                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "job_id")).map((item) => (
                            <p key={"miscjob"+item.Name}>{item.Name}</p>
                        ))}
                    </Modal.Body>
                </Modal>
                    
            </div>
        </>
    )
    // -------------------------------------------
}

export default FilterSelectDisplay