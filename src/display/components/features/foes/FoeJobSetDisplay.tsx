import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import {PlayerAbility } from "../../../../classes/feature/abilities/Ability";
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import AbilityDisplay from '../abilities/AbilityDisplay';
import GenericPopup from '../../../components/generics/GenericPopup';
import { Trophy } from '../../../../classes/feature/trophy/Trophy';
import TrophyDisplay from '../trophies/TrophyDisplay';
import { makestringpresentable } from '../../../../utility/functions';
import { FoeJob } from '../../../../classes/feature/foes/FoeJob';
import FoeJobDisplay from './FoeJobDisplay';

const FoeJobSetDisplay = (props: any) => {
    const JobObject: FoeJob = props.data
    
    return (
        <div className="row row-cols-3">
            <div className="col-6">
                <div className="equipbody">
                    <GenericPopup titlename={JobObject.Name} d_colour={JobObject.Class} d_name={JobObject.Name} d_type={""} d_method={() => <FoeJobDisplay data={JobObject}/>}/>
                </div>
            </div>
            <div className="col-6">
                <div className="equipbody">
                    {JobObject.Chapter}
                </div>
            </div>
        </div>
    )
}

export default FoeJobSetDisplay;