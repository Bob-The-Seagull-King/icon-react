import 'bootstrap/dist/css/bootstrap.css'
import '../../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

// Classes
import { FilterManager } from '../../../../../classes/viewmodel/collections/filters/FilterManager'
import { useGlobalState } from '../../../../../utility/globalstate'

// Components
import FilterDisplay from '../FilterDisplay'
import AbilityFilterSelectDisplay from './AbilityFilterSelectDisplay'

const BaseFilterSelectDisplay = (prop: any) => {
    const ViewPageController = prop.controller
    const FilterManager: FilterManager = ViewPageController.FilterManager;
    const FilterType : string = prop.filtertype;
    const updatesearch = prop.runfunction;

    // States
    const [_activetextfilters, returnactivetext] = useState(FilterManager.ReturnActiveTextFilters());
    const [_activetagfilters, returnactivetag] = useState(FilterManager.ReturnActiveTagFilters());
    const [_activemiscfilters, returnactivemisc] = useState(FilterManager.ReturnActiveMiscFilters());
    const [_keyval, updatekey] = useState(1);
    const [theme] = useGlobalState('theme');
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        RunUpdate();
    };
    const handleShow = () => setShow(true);

    /**
     * Call the parent's update function and update
     * the filter manager's suite of filters.
     */
    function RunUpdate() {
        updatesearch();
        returnactivetext(FilterManager.ReturnActiveTextFilters())
        returnactivetag(FilterManager.ReturnActiveTagFilters())
        returnactivemisc(FilterManager.ReturnActiveMiscFilters())
        updatekey(_keyval+1)
    }
    
    // Return result -----------------------------
    return (
        <>
            <div onClick={() => handleShow()}className='borderstyler bordericon roundBody hovermouse'>
                {((_activetextfilters.length == 0) && (_activetagfilters.length == 0) && (_activemiscfilters.length == 0) ) &&
                    <div className="">
                            <h1 className="subtletext">No Filters Selected</h1>
                    </div>
                }
                {!((_activetextfilters.length == 0) && (_activetagfilters.length == 0) && (_activemiscfilters.length == 0) ) &&
                    <div className="row">
                        
                        <div style={{paddingLeft: "2em", paddingRight: "2em", paddingTop: "1em", paddingBottom: "0.5em"}}>
                            <div className="separator"><h3>FILTERS</h3></div>
                        </div>
                        <div className="filterbox centerPosition">
                            {_activetextfilters.map((item) => (
                                    <FilterDisplay key={"tag"+item.Val+(_keyval.toString())} state={""} title={"Name"} value={item.Val}/>
                                ))}
                            {_activetagfilters.map((item) => (
                                    <FilterDisplay key={"tag"+item.TagType.Name+(_keyval.toString())} state={item.TagType.DoInclude? "positive" : "negative" } title={item.TagType.Name+" Tag"} value={item.TagVal.Val}/>
                                ))}
                            {_activemiscfilters.map((item) => (
                                    <FilterDisplay key={"tag"+item.Name+(_keyval.toString())} title={item.Group} state={item.DoInclude? "positive" : "negative" } value={item.Name}/>
                                ))}
                        </div>
                        <div className='toppad'></div>
                    </div>
                }
            </div>

            { FilterType == "ability" &&
                <AbilityFilterSelectDisplay useshow={show} controller={ViewPageController} usetheme={theme} closemodal={handleClose} update={RunUpdate}/>
            }
        </>
    )
    // -------------------------------------------
}

export default BaseFilterSelectDisplay