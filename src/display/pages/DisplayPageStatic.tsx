import { FilterManager } from "../../classes/viewmodel/collections/filters/FilterManager"
import {FilterTagItem, FilterTextItem, FilterMiscItem} from "../components/subcomponents/filters/FilterItems"
import AbilityDisplay from "../components/features/abilities/AbilityDisplay"
import GenericDisplay from "../components/generics/GenericDisplay"
import React from 'react'
import SummonDisplay from "../components/features/summons/SummonDisplay"
import JobDisplay from "../components/features/jobs/JobDisplay"

export interface DisplayCollectionType {
    searchId      : string,
    width         : number,
    returnDisplay: (item: any) => JSX.Element
    returnFilterSelect: (manager : FilterManager, update : NoneToNoneFunction, close : NoneToNoneFunction) => JSX.Element
}

export interface DisplayCollectionDataTable {[moveid: Lowercase<string>]: DisplayCollectionType}

type NoneToNoneFunction = () => void;

export const DisplayCollectionDataDex : DisplayCollectionDataTable = {
    abilities: {
        searchId: 'abilities',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.Class} d_name={item.Name} d_type={""} d_method={() => <AbilityDisplay data={item} />}/>
            )
        },
        returnFilterSelect(manager : FilterManager, update : NoneToNoneFunction, close : NoneToNoneFunction) {
            return (
                <>
                    <div className="col-12">
                        <div className="separator"><h3>NAME</h3></div>
                        <div className="row">
                            {manager.ReturnTextFilters().map((item) => (
                                <FilterTextItem data={item} key="name"/>
                            ))}
                        </div>
                        <div className="separator"><h3>TAGS</h3></div>
                        <div className="subltenotetext">{"You can specify tag's value in the text box. Leave blank to find all of that tag."}
                        </div>
                        <div className='toppad'></div>
                        <div className="row">
                            <div className="filterbox centerPosition">
                                {manager.ReturnTagFilters().map((item) => (
                                    <FilterTagItem key={"tag"+item.TagType.Name} data={item}/>
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>CHAPTERS</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "chapter")).map((item) => (
                                    <FilterMiscItem key={"miscchapter"+item.Name} data={item} updatefunction={update}/>
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>CLASSES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "class_id")).map((item) => (
                                    <FilterMiscItem key={"misclass"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>JOBS</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "job_id")).map((item) => (
                                    <FilterMiscItem key={"miscjob"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                            
                        <div className='separator toppad'></div>
                        <div className="row float-end">
                            <div className='col-12 float-end'>
                                <div className='hovermouse filterclosebutton' onClick={() => {close()}}>CONFIRM</div>
                            </div>
                        </div>
                    </div>
               </>
            )
        }
    },
    summons: {
        searchId: 'summons',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.Colour} d_name={item.Name} d_type={""} d_method={() => <SummonDisplay data={item} />}/>
            )
        },
        returnFilterSelect(manager : FilterManager, update : NoneToNoneFunction, close : NoneToNoneFunction) {
            return (
                <>
                    <div className="col-12">
                        <div className="separator"><h3>NAME</h3></div>
                        <div className="row">
                            {manager.ReturnTextFilters().map((item) => (
                                <FilterTextItem data={item} key="name"/>
                            ))}
                        </div>
                        <div className="separator"><h3>TAGS</h3></div>
                        <div className="subltenotetext">{"You can specify tag's value in the text box. Leave blank to find all of that tag."}
                        </div>
                        <div className='toppad'></div>
                        <div className="row">
                            <div className="filterbox centerPosition">
                                {manager.ReturnTagFilters().map((item) => (
                                    <FilterTagItem key={"tag"+item.TagType.Name} data={item}/>
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>CLASS</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "colour")).map((item) => (
                                    <FilterMiscItem key={"misclass"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>LIMIT</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "limit")).map((item) => (
                                    <FilterMiscItem key={"misclass"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                            
                        <div className='separator toppad'></div>
                        <div className="row float-end">
                            <div className='col-12 float-end'>
                                <div className='hovermouse filterclosebutton' onClick={() => {close()}}>CONFIRM</div>
                            </div>
                        </div>
                    </div>
               </>
            )
        }
    },
    jobs: {
        searchId: 'jobs',
        width: 9,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.Class} d_name={item.Name} d_type={""} d_method={() => <JobDisplay data={item} />}/>
            )
        },
        returnFilterSelect(manager : FilterManager, update : NoneToNoneFunction, close : NoneToNoneFunction) {
            return (
                <>
                    <div className="col-12">
                        <div className="separator"><h3>NAME</h3></div>
                        <div className="row">
                            {manager.ReturnTextFilters().map((item) => (
                                <FilterTextItem data={item} key="name"/>
                            ))}
                        </div>
                        <div className="separator"><h3>TAGS</h3></div>
                        <div className="subltenotetext">{"You can specify tag's value in the text box. Leave blank to find all of that tag."}
                        </div>
                        <div className='toppad'></div>
                        <div className="row">
                            <div className="filterbox centerPosition">
                                {manager.ReturnTagFilters().map((item) => (
                                    <FilterTagItem key={"tag"+item.TagType.Name} data={item}/>
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>CLASSES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "class_id")).map((item) => (
                                    <FilterMiscItem key={"misclass"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                            
                        <div className='separator toppad'></div>
                        <div className="row float-end">
                            <div className='col-12 float-end'>
                                <div className='hovermouse filterclosebutton' onClick={() => {close()}}>CONFIRM</div>
                            </div>
                        </div>
                    </div>
               </>
            )
        }
    }
}