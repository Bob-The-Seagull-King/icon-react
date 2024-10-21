import { FilterManager } from "../../classes/viewmodel/collections/filters/FilterManager"
import {FilterTagItem, FilterTextItem, FilterMiscItem} from "../components/subcomponents/filters/FilterItems"
import AbilityDisplay from "../components/features/abilities/AbilityDisplay"
import GenericDisplay from "../components/generics/GenericDisplay"
import React from 'react'
import SummonDisplay from "../components/features/summons/SummonDisplay"
import JobDisplay from "../components/features/jobs/JobDisplay"
import ClassDisplay from "../components/features/classes/ClassDisplay"
import RelicDisplay from "../components/features/relics/RelicDisplay"
import GlossaryDisplay from "../components/features/glossary/GlossaryDisplay"
import TrophyDisplay from "../components/features/trophies/TrophyDisplay"
import PowerDisplay from "../components/features/powers/PowerDisplay"
import ActionDisplay from "../components/features/actions/ActionDisplay"
import BondDisplay from "../components/features/bonds/BondDisplay"
import KinDisplay from "../components/features/character/KinDisplay"
import CultureDisplay from "../components/features/character/CultureDisplay"
import CampItemDisplay from "../components/features/camp/CampItemDisplay"
import RulesetDisplay from "../components/features/rules/RulesetDisplay"
import FoeJobDisplay from "../components/features/foes/FoeJobDisplay"
import FoeFactionDisplay from "../components/features/foes/FoeFactionDisplay"
import FoeClassDisplay from "../components/features/foes/FoeClassDisplay"

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
    relics: {
        searchId: 'relics',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.Colour} d_name={item.Name} d_type={""} d_method={() => <RelicDisplay data={item} />}/>
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
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "colour")).map((item) => (
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
    },
    classes: {
        searchId: 'classes',
        width: 9,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <ClassDisplay data={item} />}/>
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
    glossary: {
        searchId: 'glossary',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <GlossaryDisplay data={item} />}/>
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
    trophies: {
        searchId: 'trophies',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <TrophyDisplay data={item} />}/>
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
                        <div className="separator"><h3>CATEGORY</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "category")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>USES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "uses")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>USE TYPE</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "usetype")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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
    powers: {
        searchId: 'powers',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <PowerDisplay data={item} />}/>
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
                        <div className="separator"><h3>BOND</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "bondid")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>USES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => ((value.Group == "uses"))).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>USE TYPE</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "usetype")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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
    actions: {
        searchId: 'actions',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <ActionDisplay data={item} />}/>
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
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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
    bonds: {
        searchId: 'bonds',
        width: 9,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <BondDisplay data={item} />}/>
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
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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
    kins: {
        searchId: 'kins',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <KinDisplay data={item} />}/>
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
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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
    cultures: {
        searchId: 'cultures',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <CultureDisplay data={item} />}/>
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
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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
    campitems: {
        searchId: 'campitems',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <CampItemDisplay data={item} />}/>
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
                        <div className="separator"><h3>PURCHASE PRICE</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "purchase")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>UPGRADE PRICE</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "upgrade")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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
    rules: {
        searchId: 'rules',
        width: 9,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <RulesetDisplay data={item} />}/>
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
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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
    foeclass: {
        searchId: 'foeclass',
        width: 7,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.Class} d_name={item.Name} d_type={""} d_method={() => <FoeClassDisplay data={item} />}/>
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
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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
    foefaction: {
        searchId: 'foefaction',
        width: 9,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <FoeFactionDisplay data={item} />}/>
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
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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
    foejobs: {
        searchId: 'foejobs',
        width: 9,
        returnDisplay(item: any) {
            return (
                <GenericDisplay  d_colour={item.Class} d_name={item.Name} d_type={""} d_method={() => <FoeJobDisplay data={item} />}/>
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
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "class_id")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                            
                        <div className="separator"><h3>FACTION</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "faction_id")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                            
                            <div className="separator"><h3>CATEGORY</h3></div>
                            <div className="row">
                                <div className='filterbox centerPosition'>
                                    {manager.ReturnMiscFilters().filter((value) => (value.Group == "category")).map((item) => (
                                        <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                    ))}
                                </div>
                            </div>
                            
                            <div className="separator"><h3>CHAPTER</h3></div>
                            <div className="row">
                                <div className='filterbox centerPosition'>
                                    {manager.ReturnMiscFilters().filter((value) => (value.Group == "chapter")).map((item) => (
                                        <FilterMiscItem key={"miscsource"+item.Name} data={item} />
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