import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { FoeClass } from '../../../../classes/feature/foes/FoeClass';
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Components
import GenericDisplay from '../../generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import ItemStat from '../../subcomponents/description/ItemStat';
import GenericComponentDisplay from '../../../components/generics/GenericComponent';
import AddonDisplay from '../addons/AddonDisplay';
import FoeStatsDisplay from './FoeStats';

const FoeClassDisplay = (props: any) => {
    const FoeClassObject: FoeClass = props.data 

    return (
        <div className='abilityInternalStructure'>
            <FoeStatsDisplay data={FoeClassObject.Stats}/>
            <div className="verticalspacerbig"/>  
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: ((FoeClassObject.Traits.length === 0) || (FoeClassObject.Actions.length === 0))? 1: 2}} >
                <Masonry gutter="20px">
                    {FoeClassObject.Traits.length > 0 &&
                    <>
                    <div>
                        <div className="separator">Traits</div>
                    </div> 
                    {FoeClassObject.Traits.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="traitloop" d_colour={FoeClassObject.Class} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacer"/></div>)}   
                    <div className="verticalspacer"/> 
                    </>
                    } 
                    {FoeClassObject.Actions.length > 0 &&
                    <>
                    <div>
                        <div className="separator">Actions</div>
                    </div> 
                    {FoeClassObject.Actions.map((item) => <div key={"action"+item.ID}><GenericDisplay key="addonloop" d_colour={FoeClassObject.Class} d_name={item.Name} d_type={"sub"} d_method={() => <AddonDisplay data={item} />}/><div className="verticalspacer"/></div>)}
                                    
                    <div className="verticalspacer"/>  
                    </>
                    }
                </Masonry>
            </ResponsiveMasonry>
                    
        </div>
    )
}

export default FoeClassDisplay;