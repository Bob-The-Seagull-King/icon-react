import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// Classes
import { returnDescription } from '../../../../utility/util';
import { FoeFactionClass } from '../../../../classes/feature/foes/FoeFactionClass';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Components
import GenericDisplay from '../../generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import FoeJobSetDisplay from './FoeJobSetDisplay';
import AddonDisplay from '../addons/AddonDisplay';
import FoeStatsDisplay from './FoeStats';

const FoeClassFactionDisplay = (props: any) => {
    const FoeClassFactionObject: FoeFactionClass = props.data

    
    const [stats, setStats] = useState(FoeClassFactionObject.Chapters[0].Stats);

    function UpdateStats(key : number) {
        setStats(FoeClassFactionObject.Chapters[key].Stats)
    }

    return (
        <div className='abilityInternalStructure'>
                
            
            <div className="col">
                    {returnDescription(FoeClassFactionObject, FoeClassFactionObject.Description)} 
            </div>
            
            <div className="verticalspacer"/>
            <div>
                    <div className="separator">&#x27E1;</div>
            </div> 
                
            <div className="verticalspacer"/>

        <FoeStatsDisplay data={stats}/>

        <div className="verticalspacerbig"/>
        {FoeClassFactionObject.Chapters.length === 1 &&
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768:  ((FoeClassFactionObject.Chapters[0].Traits.length === 0) || (FoeClassFactionObject.Chapters[0].Actions.length === 0))? 1: 2}} >
            <Masonry gutter="20px">                                
                {FoeClassFactionObject.Chapters[0].Traits.length > 0 &&
                <>
                <div>
                    <div className="separator">Traits</div>
                </div> 
                {FoeClassFactionObject.Chapters[0].Traits.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="traitloop" d_colour={item.Class} d_state={false} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacer"/></div>)}   
                <div className="verticalspacer"/> 
                </>
                } 
                {FoeClassFactionObject.Chapters[0].Actions.length > 0 &&
                <>
                <div>
                    <div className="separator">Actions</div>
                </div> 
                {FoeClassFactionObject.Chapters[0].Actions.map((item) => <div key={"action"+item.ID}><GenericDisplay key="addonloop" d_colour={item.Class} d_name={item.Name} d_state={false} d_type={"sub"} d_method={() => <AddonDisplay data={item} />}/><div className="verticalspacer"/></div>)}
                                
                <div className="verticalspacer"/>  
                </>
                }
            </Masonry>
        </ResponsiveMasonry>
            }

        {FoeClassFactionObject.Chapters.length > 1 &&
            <Tabs
            defaultActiveKey={0}
            id="justify-tab-example"
            className="mb-3"
            justify
            onSelect={(e) => UpdateStats(Number(e))}
            >
                {FoeClassFactionObject.Chapters.map(item => 
                    <Tab key={"tab"+item.Chapter+"model"+FoeClassFactionObject.ID} eventKey={FoeClassFactionObject.Chapters.indexOf(item)} title={"Chapter " + item.Name} >
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768:  ((item.Traits.length === 0) || (item.Actions.length === 0))? 1: 2}} >
                            <Masonry gutter="20px">                                
                                {item.Traits.length > 0 &&
                                <>
                                <div>
                                    <div className="separator">Traits</div>
                                </div> 
                                {item.Traits.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="traitloop" d_colour={item.Class} d_state={false} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacer"/></div>)}   
                                <div className="verticalspacer"/> 
                                </>
                                } 
                                {item.Actions.length > 0 &&
                                <>
                                <div>
                                    <div className="separator">Actions</div>
                                </div> 
                                {item.Actions.map((item) => <div key={"action"+item.ID}><GenericDisplay key="addonloop" d_colour={item.Class} d_name={item.Name} d_state={false} d_type={"sub"} d_method={() => <AddonDisplay data={item} />}/><div className="verticalspacer"/></div>)}
                                                
                                <div className="verticalspacer"/>  
                                </>
                                }
                            </Masonry>
                        </ResponsiveMasonry>

                    </Tab>
                )}
            </Tabs>
            }
           
            <div>
                    <div className="separator">Members</div>
            </div> 
                
            <div className="verticalspacer"/>
           <div className="row row-cols-2">
                     <div className="col-6">
                         <div className="equiptitle">Name</div>
                     </div>
                     <div className="col-6">
                         <div className="equiptitle">Chapter</div>
                     </div>
                 </div>
            {FoeClassFactionObject.Members.map((item) => <FoeJobSetDisplay key={"foejoblegend"+item.ID} data={item}/>)}
        </div>
    )
}

export default FoeClassFactionDisplay;