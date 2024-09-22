import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


// Classes
import {  returnDescription } from '../../../../utility/util';
import { FoeFaction } from '../../../../classes/feature/foes/FoeFaction';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Components
import GenericDisplay from '../../generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import AddonDisplay from '../addons/AddonDisplay';
import FoeTrophyDisplay from './FoeTrophyDisplay';
import FoeJobSetDisplay from './FoeJobSetDisplay';
import FoeClassFactionDisplay from './FoeClassFactionDisplay';
import ImageSetDisplay from '../../../components/generics/ImageSetDisplay';

const FoeFactionDisplay = (props: any) => {
    const FoeFactionObject: FoeFaction = props.data

    return (
        <div className='abilityInternalStructure'>
           <div className="col">
                    {returnDescription(FoeFactionObject, FoeFactionObject.Description)} 
            </div>
            
            
            {FoeFactionObject.Images.length > 0 &&
                <>
                <div className="verticalspacer"/> 
                <div>
                    <div className="separator">Gallery</div>
                </div> 
                <div className="verticalspacer"/>
                <div>
                    <ImageSetDisplay data={FoeFactionObject.Images}/>
                </div>
                </>
            }
                
            <div className="verticalspacer"/>

            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: ((FoeFactionObject.Traits.length === 0) && (FoeFactionObject.Actions.length === 0))? 1: 2}} >
                <Masonry gutter="20px">
                    
                    <div className="col">
                        <div>
                            <div className="separator">Template</div>
                        </div> 
                            {returnDescription(FoeFactionObject, FoeFactionObject.Template)} 
                    </div> 
                    <div>
                        {FoeFactionObject.Traits.length > 0 &&
                        <>
                        <div>
                            <div className="separator">Traits</div>
                        </div> 
                        {FoeFactionObject.Traits.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="addonloop" d_colour={FoeFactionObject.Class} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacer"/></div>)}
                                        
                        <div className="verticalspacer"/>  
                        </>
                        }
                        {FoeFactionObject.Actions.length > 0 &&
                        <>
                        <div>
                            <div className="separator">Actions</div>
                        </div> 
                        {FoeFactionObject.Actions.map((item) => <div key={"action"+item.ID}><GenericDisplay key="addonloop" d_colour={FoeFactionObject.Class} d_name={item.Name} d_type={"sub"} d_method={() => <AddonDisplay data={item} />}/><div className="verticalspacer"/></div>)}
                                        
                        </>
                        }
                    </div>
                    
                </Masonry>
            </ResponsiveMasonry>

            <div className="verticalspacer"/> 
            <div>
                <div className="separator">Trophies</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                
                <div className="row row-cols-4">
                    <div className="col-4">
                        <div className="equiptitle">Name</div>
                    </div>
                    <div className="col-2">
                        <div className="equiptitle">Uses</div>
                    </div>
                    <div className="col-2">
                        <div className="equiptitle">Use Type</div>
                    </div>
                    <div className="col-4">
                        <div className="equiptitle">Tags</div>
                    </div>
                </div>
                {FoeFactionObject.Trophies.map((item) => <FoeTrophyDisplay key={"foetrophy"} data={item}/>)}
            </div>

            <div className="verticalspacer"/> 
            <div>
                <div className="separator">Members</div>
            </div> 
            <div className="verticalspacer"/>

            <Tabs
            defaultActiveKey={0}
            id="justify-tab-example"
            justify
            className="mb-3 colorred"
            >
                

            {FoeFactionObject.Classes.map(_class => 
                <Tab key={"tab"+"class"+_class.ID} className="colorred" eventKey={"class"+_class.ID} title={""+_class.Name?.toUpperCase()} >                   
                    <FoeClassFactionDisplay data={_class}/>
                </Tab>
            )
             
            }
            {FoeFactionObject.Unique.length > 0 && 
             <Tab key={"tab"+"uniques"} eventKey={"unique"} title={"UNIQUE"} >                   
             
                 <div className="row row-cols-2">
                     <div className="col-6">
                         <div className="equiptitle">Name</div>
                     </div>
                     <div className="col-6">
                         <div className="equiptitle">Chapter</div>
                     </div>
                 </div>
                 {FoeFactionObject.Unique.map((item) => <FoeJobSetDisplay key={"foejobunique"+item.ID} data={item}/>)}
             </Tab>
            }
            {FoeFactionObject.Elites.length > 0 && 
             <Tab key={"tab"+"elites"} eventKey={"elite"} title={"ELITE"} >                   
             
                 <div className="row row-cols-2">
                     <div className="col-6">
                         <div className="equiptitle">Name</div>
                     </div>
                     <div className="col-6">
                         <div className="equiptitle">Chapter</div>
                     </div>
                 </div>
                 {FoeFactionObject.Elites.map((item) => <FoeJobSetDisplay key={"foejobelite"+item.ID} data={item}/>)}
             </Tab>
            }
            {FoeFactionObject.Legends.length > 0 && 
             <Tab key={"tab"+"legends"} eventKey={"legend"} title={"LEGENDS"} >                   
             
                 <div className="row row-cols-2">
                     <div className="col-6">
                         <div className="equiptitle">Name</div>
                     </div>
                     <div className="col-6">
                         <div className="equiptitle">Chapter</div>
                     </div>
                 </div>
                 {FoeFactionObject.Legends.map((item) => <FoeJobSetDisplay key={"foejoblegend"+item.ID} data={item}/>)}
             </Tab>
            }
            </Tabs>

            
                        
        </div>
    )
}

export default FoeFactionDisplay;