import 'bootstrap/dist/css/bootstrap.css'
import '../../../../../resources/styles/_icon.scss'
import React from 'react'
import Modal from 'react-bootstrap/Modal';

// Classes
import { AllAbilitiesListPage } from '../../../../../classes/viewmodel/pages/AllAbilitiesListPage'
import { AbilitiesFilterManager } from '../../../../../classes/viewmodel/collections/filters/AbilitiesFilterManager'

// Components
import FilterItemItem from '../FilterItemItem'
import FilterTagItem from '../FilterTagItem'
import FilterTextItem from '../FilterTextItem'

const AbilityFilterSelectDisplay = (prop: any) => {
    const ViewPageController: AllAbilitiesListPage = prop.controller
    const FilterManager: AbilitiesFilterManager = ViewPageController.FilterManager;
    const theme = prop.usetheme
    const handleClose = prop.closemodal;
    const RunUpdate = prop.update;
    const show = prop.useshow;
    
    // Return result -----------------------------
    return (
        <>

            <Modal data-theme={theme} onEnterKeyDown={() => handleClose()} show={show} contentClassName="filterboxStructure" dialogClassName="" size="xl" onHide={handleClose} keyboard={true}  centered>
                
                            <h1 className={'titleShape titlebody backgroundicon'}>Select Filters</h1>
                            <Modal.Body className="filterSelectorBack">
                            <div className="row p-3 overflow-auto flex-grow-1">
                                <div style={{"maxHeight": "calc(70vh"}}>
                                    <div className="col-12">
                                <div className="separator"><h3>NAME</h3></div>
                                <div className="row">
                                    {FilterManager.ReturnTextFilters().map((item) => (
                                        <FilterTextItem data={item} key="name"/>
                                    ))}
                                </div>
                                <div className="separator"><h3>TAGS</h3></div>
                                <div className="subltenotetext">{"You can specify tag's value in the text box. Leave blank to find all of that tag."}
                                </div>
                                <div className='toppad'></div>
                                <div className="row">
                                    <div className="filterbox centerPosition">
                                        {FilterManager.ReturnTagFilters().map((item) => (
                                            <FilterTagItem key={"tag"+item.TagType.Name} data={item}/>
                                        ))}
                                    </div>
                                </div>
                                <div className="separator"><h3>CHAPTERS</h3></div>
                                <div className="row">
                                    <div className='filterbox centerPosition'>
                                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "chapter")).map((item) => (
                                            <FilterItemItem key={"miscchapter"+item.Name} data={item} updatefunction={RunUpdate}/>
                                        ))}
                                    </div>
                                </div>
                                <div className="separator"><h3>SOURCES</h3></div>
                                <div className="row">
                                    <div className='filterbox centerPosition'>
                                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                            <FilterItemItem key={"miscsource"+item.Name} data={item} />
                                        ))}
                                    </div>
                                </div>
                                <div className="separator"><h3>CLASSES</h3></div>
                                <div className="row">
                                    <div className='filterbox centerPosition'>
                                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "class_id")).map((item) => (
                                            <FilterItemItem key={"misclass"+item.Name} data={item} />
                                        ))}
                                    </div>
                                </div>
                                <div className="separator"><h3>JOBS</h3></div>
                                <div className="row">
                                    <div className='filterbox centerPosition'>
                                        {FilterManager.ReturnMiscFilters().filter((value) => (value.Group == "job_id")).map((item) => (
                                            <FilterItemItem key={"miscjob"+item.Name} data={item} />
                                        ))}
                                    </div>
                                </div>
                                
                                <div className='separator toppad'></div>
                                <div className="row float-end">
                                    <div className='col-12 float-end'>
                                        <div className='hovermouse filterclosebutton' onClick={() => {handleClose()}}>CONFIRM</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                
                </Modal.Body>
            </Modal>
        </>
    )
    // -------------------------------------------
}

export default AbilityFilterSelectDisplay