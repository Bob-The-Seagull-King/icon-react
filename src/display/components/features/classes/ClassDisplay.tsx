import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { Class } from '../../../../classes/feature/class/Class';
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Components
import GenericDisplay from '../../generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import ItemStat from '../../subcomponents/description/ItemStat';
import GenericComponentDisplay from '../../../components/generics/GenericComponent';
import ClassJobDisplay from './ClassJobDisplay';

const ClassDisplay = (props: any) => {
    const ClassObject: Class = props.data


    // Formatted model statistics
    function returnStats() {
        return (
            <div>
                <div className="row row-cols-lg-8 row-cols-md-8 row-cols-sm-4 justify-content-center">
                <ItemStat title={"VIT"} value={ClassObject.Stats.vit}/>
                <ItemStat title={"HP"} value={ClassObject.Stats.hp}/>
                <ItemStat title={"Speed"} value={ClassObject.Stats.speed}/>
                <ItemStat title={"Dash"} value={ClassObject.Stats.dash}/>
                <ItemStat title={"Fray"} value={ClassObject.Stats.fray}/>
                <ItemStat title={"Damage"} value={"D" + ClassObject.Stats.damage}/>
                <ItemStat title={"Defense"} value={ClassObject.Stats.defense}/>
                <ItemStat title={"Basic Attack"} value={"Range " + ClassObject.Stats.basicrange}/>
                </div>
            </div>
        )
    }

    return (
        <div className='abilityInternalStructure'>
            <div>
                <div className="separator">{ClassObject.Subtitle}</div>
            </div> 


            <div className="verticalspacer"/>
            <div>
                {returnDescription(ClassObject, ClassObject.Description)} 
            </div>


            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {returnStats()} 
            </div>
            
            <div className="verticalspacerbig"/>
            <div>
                <div>
                    <span className="boldtextCol">{"Complexity: "}</span><span>{ClassObject.Complexity}</span>
                </div>
                <div>
                    <span className="boldtextCol">{"Strengths: "}</span><span>{ClassObject.Strength}</span>
                </div>
                <div>
                    <span className="boldtextCol">{"Weaknesses: "}</span><span>{ClassObject.Weakness}</span>
                </div>
            </div>


            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <div className="verticalspacer"/> 
                    <div>
                        <div className="separator">Traits</div>
                    </div> 
                    <div className="verticalspacer"/>
                    {ClassObject.Traits.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="traitloop" d_colour={ClassObject.ID} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacerbig"/></div>)}         
                </div>
                <div className="col">
                    <div className="verticalspacer"/> 
                    <div>
                        <div className="separator">Special Mechanic</div>
                    </div> 
                    <div className="verticalspacer"/>
                    <GenericDisplay key="traitloop" d_colour={ClassObject.ID} d_name={ClassObject.SpecialMechanic.Title} d_type={"sub"} d_method={() => <GenericComponentDisplay data={ClassObject.SpecialMechanic}/>}/>
                    <div className="verticalspacerbig"/> 
                    <GenericDisplay key="traitloop" d_colour={ClassObject.ID} d_name={ClassObject.Gambit.Title} d_type={"sub"} d_method={() => <GenericComponentDisplay data={ClassObject.Gambit}/>}/>
                </div>
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">Jobs</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {ClassObject.Jobs.map((item) => <ClassJobDisplay key={"classjob"} data={item}/>)}
            </div>
        </div>
    )
}

export default ClassDisplay;