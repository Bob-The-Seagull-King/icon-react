import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { Job } from '../../../../classes/feature/jobs/Job';
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import LimitBreakDisplay from '../abilities/LimitBreakDisplay';
import AddonDisplay from '../addons/AddonDisplay';
import SummonDisplay from '../summons/SummonDisplay';
import JobAbilityDisplay from './JobAbilityDisplay';
import { Bond } from '../../../../classes/feature/bonds/Bond';
import ItemStat from '../../subcomponents/description/ItemStat';

const BondDisplay = (props: any) => {
    const BondObject: Bond = props.data

    
    // Formatted model statistics
    function returnStats() {
        let Actions = ""
        for (let i = 0; i < BondObject.Actions.length; i ++) {
            if (i != 0) {
                Actions += ", "
            }
            Actions += BondObject.Actions[i].Name;
        }

        return (
            <div>
                <div className="row row-cols-lg-8 row-cols-md-8 row-cols-sm-4 justify-content-center">
                <ItemStat title={"Effort"} value={BondObject.Effort}/>
                <ItemStat title={"Strain"} value={BondObject.Strain}/>
                <ItemStat title={"Actions"} value={Actions}/>
                </div>
            </div>
        )
    }

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnStats()} 
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <div className="verticalspacer"/>
                    {returnDescription(BondObject, BondObject.Blurb)}     
                </div>               
                <div className="col">
                    <div className="verticalspacer"/>
                    <h1 className={'titleShape titlebody subbackgroundicon'}>{"Ideals"}</h1>
                    
                    {BondObject.Ideals.map(item => <div className={"tablerowbody tablerow" + (BondObject.Ideals.indexOf(item) % 2)} key={"idealslist"+item}>{item}</div>)}
                    
                </div>
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <div className="verticalspacer"/>
                    {BondObject.SpecialAbility.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="traitloop" d_colour={'icon'} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacerbig"/></div>)}        
                </div>
                <div className="col">
                    <div className="verticalspacer"/>
                    {BondObject.SecondWind.map((item) => <div key={"trait"+item.ID}><GenericDisplay key="traitloop" d_colour={'icon'} d_name={item.Name} d_type={"sub"} d_method={() => <TraitDisplay data={item} />}/><div className="verticalspacerbig"/></div>)}       
                </div> 
            </div>
        </div>
    )
}

export default BondDisplay;