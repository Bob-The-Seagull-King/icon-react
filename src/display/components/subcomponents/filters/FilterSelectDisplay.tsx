import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import { ViewAbilitiesCollection } from '../../../../classes/viewmodel/collections/ViewAbilitiesCollections'
import { AllAbilitiesListPage } from '../../../../classes/viewmodel/pages/AllAbilitiesListPage'
import { AbilitiesFilterManager } from '../../../../classes/viewmodel/collections/filters/AbilitiesFilterManager'

import FilterItemItem from './FilterItemItem'
import FilterTagItem from './FilterTagItem'
import FilterTextItem from './FilterTextItem'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FilterSelectDisplay = (prop: any) => {
    const ViewPageController: AllAbilitiesListPage = prop.controller
    const FilterManager: AbilitiesFilterManager = ViewPageController.FilterManager;
    const updatesearch = prop.runfunction;

    const [_activetextfilters, returnactivetext] = useState(FilterManager.ReturnActiveTextFilters());
    const [_activetagfilters, returnactivetag] = useState(FilterManager.ReturnActiveTagFilters());
    const [_activemiscfilters, returnactivemisc] = useState(FilterManager.ReturnActiveMiscFilters());

    function SwitchState() {
        return !show;
    }

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        RunUpdate();
    };
    const handleShow = () => setShow(true);

    function RunUpdate() {
        updatesearch();
    }
    // Return result -----------------------------
    return (
        <>
            <div onClick={() => setShow(SwitchState())}className='bordermainpurple roundBody hovermouse'>
                {((_activetextfilters.length == 0) && (_activetagfilters.length == 0) && (_activemiscfilters.length == 0) ) &&
                    <div className="">
                            <h1 className="subtletext">No Filters Selected</h1>
                    </div>
                }
            </div>

            <Modal show={show} backdrop='static' contentClassName="filterboxStructure" dialogClassName="modal-90w" onHide={handleClose} keyboard={false}  centered>
                <h1 className={'titleShape titlepurple'}>Select Filters</h1>
                <Modal.Body >
                    <div className="separator"><h3>NAME</h3></div>
                    <div className="row">
                        {FilterManager.ReturnTextFilters().map((item) => (
                            <FilterTextItem data={item} key="name"/>
                        ))}
                    </div>
                    <div className="separator"><h3>TAGS</h3></div>
                    <div className="row">
                        {FilterManager.ReturnTagFilters().map((item) => (
                            <FilterTagItem key={"tag"+item.TagType.Name} data={item}/>
                        ))}
                    </div>
                    <div className="separator"><h3>CHAPTERS</h3></div>
                    <div className="row">
                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "chapter")).map((item) => (
                            <FilterItemItem key={"miscchapter"+item.Name} data={item} updatefunction={RunUpdate}/>
                        ))}
                    </div>
                    <div className="separator"><h3>SOURCES</h3></div>
                    <div className="row">
                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                            <FilterItemItem key={"miscsource"+item.Name} data={item} />
                        ))}
                    </div>
                    <div className="separator"><h3>CLASSES</h3></div>
                    <div className="row">
                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "class_id")).map((item) => (
                            <FilterItemItem key={"misclass"+item.Name} data={item} />
                        ))}
                    </div>
                    <div className="separator"><h3>JOBS</h3></div>
                    <div className="row">
                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "job_id")).map((item) => (
                            <FilterItemItem key={"miscjob"+item.Name} data={item} />
                        ))}
                    </div>
                    
                    <div className='separator toppad'></div>
                    <div className="row">
                        <div className='col-12'>
                            <div className='hovermouse filterclosebutton' onClick={() => handleClose()}>RETURN</div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
    // -------------------------------------------
}

export default FilterSelectDisplay