import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// Classes
import { returnDescription } from '../../../../utility/util';
import { FoeJob } from '../../../../classes/feature/foes/FoeJob';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Components
import GenericDisplay from '../../generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import AddonDisplay from '../addons/AddonDisplay';
import FoeStatsDisplay from './FoeStats';

const FoeJobDisplay = (props: any) => {
    const FoeJobObject: FoeJob = props.data
    
    const [phase, setPhase] = useState(0);
    const [chapter, setChapter] = useState(0);
    const [stats, setStats] = useState(FoeJobObject.ChapterSets[chapter].phases[phase].Stats);

    function UpdateStats() {
        setStats(FoeJobObject.ChapterSets[chapter].phases[phase].Stats)
    }

    function handleChapterSelect(key : number) {
        setChapter(key);
        UpdateStats()
      }
    function handlePhaseSelect(key : number) {
        console.log(key);
        setPhase(key);
        UpdateStats()
    }

    return (
        <div className='abilityInternalStructure'>
            
            <div className="col">
                    {returnDescription(FoeJobObject, FoeJobObject.Description)} 
            </div>
            
            <div className="verticalspacer"/>
            <div>
                    <div className="separator">&#x27E1;</div>
            </div> 
                
            <div className="verticalspacer"/>

            <FoeStatsDisplay data={stats}/>

            <div className="verticalspacerbig"/>
            
            {FoeJobObject.ChapterSets.length === 1 &&
            <>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 2}} >
                            <Masonry gutter="20px">                                
                                {FoeJobObject.ChapterSets[0].chapter.Traits.length > 0 &&
                                <>
                                <div>
                                    <div className="separator">Traits</div>
                                </div> 
                                {FoeJobObject.ChapterSets[0].chapter.Traits.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="traitloop" d_colour={item.Class} d_state={false} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacer"/></div>)}   
                                <div className="verticalspacer"/> 
                                </>
                                } 
                                {FoeJobObject.ChapterSets[0].chapter.Actions.length > 0 &&
                                <>
                                <div>
                                    <div className="separator">Actions</div>
                                </div> 
                                {FoeJobObject.ChapterSets[0].chapter.Actions.map((item) => <div key={"action"+item.ID}><GenericDisplay key="addonloop" d_colour={item.Class} d_name={item.Name} d_state={false} d_type={"sub"} d_method={() => <AddonDisplay data={item} />}/><div className="verticalspacer"/></div>)}
                                                
                                <div className="verticalspacer"/>  
                                </>
                                }
                            </Masonry>
                        </ResponsiveMasonry>

                        {FoeJobObject.ChapterSets[0].phases.length > 1 &&
                            <>
                            <Tabs
                            defaultActiveKey={phase}
                            id="justify-tab-example"
                            className="mb-3 tabOverride"
                            activeKey={phase}
                            justify
                            onSelect={(e) => handlePhaseSelect(Number(e))}
                            >
                                {FoeJobObject.ChapterSets[0].phases.map(_phase => 
                                    <Tab  tabClassName="tabOverride" key={"tab"+_phase.Name+"model"+FoeJobObject.ID} eventKey={FoeJobObject.ChapterSets[0].phases.indexOf(_phase)} title={_phase.Name} >
                                        {_phase.Description.length > 0 &&
                                            <>
                                        <div className="col">
                                                {returnDescription(_phase, _phase.Description)} 
                                        </div>
                                        
                                        <div className="verticalspacer"/>

                                        <div>
                                                <div className="separator">&#x27E1;</div>
                                        </div> 
                                        </>
                                        }
                                        {_phase.Trigger.length > 0 &&
                                        <>
                                        <div className="verticalspacer"/>
                                        <div className="col">
                                                {returnDescription(_phase, _phase.Trigger)} 
                                        </div>
                                        
                                        <div className="verticalspacer"/>
                                        <div>
                                                <div className="separator">&#x27E1;</div>
                                        </div> 
                                        </>
                                        }
                                        
                                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 2}} >
                                            <Masonry gutter="20px">                                
                                                {_phase.Traits.length > 0 &&
                                                <>
                                                <div>
                                                    <div className="separator">Traits</div>
                                                </div> 
                                                {_phase.Traits.map((phaseitem) => <div key={"trait"+phaseitem.Name}><GenericDisplay key="traitloop" d_colour={phaseitem.Class} d_state={false} d_name={phaseitem.Name} d_type={"sub"} d_method={() => <TraitDisplay data={phaseitem} />}/><div className="verticalspacer"/></div>)}   
                                                <div className="verticalspacer"/> 
                                                </>
                                                } 
                                                {_phase.Actions.length > 0 &&
                                                <>
                                                <div>
                                                    <div className="separator">Actions</div>
                                                </div> 
                                                {_phase.Actions.map((phaseitem) => <div key={"action"+phaseitem.Name}><GenericDisplay key="addonloop" d_colour={phaseitem.Class} d_state={false} d_name={phaseitem.Name} d_type={"sub"} d_method={() => <AddonDisplay data={phaseitem} />}/><div className="verticalspacer"/></div>)}
                                                                
                                                <div className="verticalspacer"/>  
                                                </>
                                                }
                                            </Masonry>
                                        </ResponsiveMasonry>
                                    </Tab>
                                )}
                            </Tabs>
                            </>
                            }


            </>

            }  
            {FoeJobObject.ChapterSets.length > 1 &&
            <Tabs
            defaultActiveKey={0}
            id="justify-tab-example"
            className="mb-3"
            justify
            onSelect={(e) => handleChapterSelect(Number(e))}
            >
                {FoeJobObject.ChapterSets.map(item => 
                    <Tab key={"tab"+item.chapter.Chapter+"model"+FoeJobObject.ID} eventKey={FoeJobObject.ChapterSets.indexOf(item)} title={"Chapter " + item.chapter.Name} >
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 2}} >
                            <Masonry gutter="20px">                                
                                {item.chapter.Traits.length > 0 &&
                                <>
                                <div>
                                    <div className="separator">Traits</div>
                                </div> 
                                {item.chapter.Traits.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="traitloop" d_colour={item.Class} d_state={false} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacer"/></div>)}   
                                <div className="verticalspacer"/> 
                                </>
                                } 
                                {item.chapter.Actions.length > 0 &&
                                <>
                                <div>
                                    <div className="separator">Actions</div>
                                </div> 
                                {item.chapter.Actions.map((item) => <div key={"action"+item.ID}><GenericDisplay key="addonloop" d_colour={item.Class} d_name={item.Name} d_state={false} d_type={"sub"} d_method={() => <AddonDisplay data={item} />}/><div className="verticalspacer"/></div>)}
                                                
                                <div className="verticalspacer"/>  
                                </>
                                }
                            </Masonry>
                        </ResponsiveMasonry>

                        {item.phases.length > 1 &&
                            <>
                            <Tabs
                            defaultActiveKey={phase}
                            id="justify-tab-example"
                            className="mb-3"
                            activeKey={phase}
                            justify
                            onSelect={(e) => handlePhaseSelect(Number(e))}
                            >
                                {item.phases.map(_phase => 
                                    <Tab key={"tab"+_phase.Name+"model"+FoeJobObject.ID} eventKey={item.phases.indexOf(_phase)} title={_phase.Name} >
                                        {_phase.Description.length > 0 &&
                                            <>
                                        <div className="col">
                                                {returnDescription(_phase, _phase.Description)} 
                                        </div>
                                        
                                        <div className="verticalspacer"/>

                                        <div>
                                                <div className="separator">&#x27E1;</div>
                                        </div> 
                                        </>
                                        }
                                        {_phase.Trigger.length > 0 &&
                                        <>
                                        <div className="verticalspacer"/>
                                        <div className="col">
                                                {returnDescription(_phase, _phase.Trigger)} 
                                        </div>
                                        
                                        <div className="verticalspacer"/>
                                        <div>
                                                <div className="separator">&#x27E1;</div>
                                        </div> 
                                        </>
                                        }
                                        
                                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 2}} >
                                            <Masonry gutter="20px">                                
                                                {_phase.Traits.length > 0 &&
                                                <>
                                                <div>
                                                    <div className="separator">Traits</div>
                                                </div> 
                                                {_phase.Traits.map((phaseitem) => <div key={"trait"+phaseitem.Name}><GenericDisplay key="traitloop" d_colour={phaseitem.Class} d_state={false} d_name={phaseitem.Name} d_type={"sub"} d_method={() => <TraitDisplay data={phaseitem} />}/><div className="verticalspacer"/></div>)}   
                                                <div className="verticalspacer"/> 
                                                </>
                                                } 
                                                {_phase.Actions.length > 0 &&
                                                <>
                                                <div>
                                                    <div className="separator">Actions</div>
                                                </div> 
                                                {_phase.Actions.map((phaseitem) => <div key={"action"+phaseitem.Name}><GenericDisplay key="addonloop" d_colour={phaseitem.Class} d_state={false} d_name={phaseitem.Name} d_type={"sub"} d_method={() => <AddonDisplay data={phaseitem} />}/><div className="verticalspacer"/></div>)}
                                                                
                                                <div className="verticalspacer"/>  
                                                </>
                                                }
                                            </Masonry>
                                        </ResponsiveMasonry>
                                    </Tab>
                                )}
                            </Tabs>
                            </>
                            }

                    </Tab>
                )}
            </Tabs>
            }
        </div>
    )
}

export default FoeJobDisplay;