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

const JobAbilityDisplay = (props: any) => {
    const AbilityObject: PlayerAbility = props.data
    const bannedAbilityTags = ["inflict", "type"]
    
    return (
        <div className="row row-cols-3">
            <div className="col-2">
                <div className="equipbody">
                    <GenericPopup titlename={AbilityObject.Name} d_colour={AbilityObject.Class} d_name={AbilityObject.Name} d_type={""} d_method={() => <AbilityDisplay data={AbilityObject}/>}/>
                </div>
            </div>
            <div className="col-2">
                <div className="equipbody">
                    Ch.{AbilityObject.Chapter}
                </div>
            </div>
            <div className="col-8">
                <div className="equipbody">
                    {returnTags(AbilityObject.Tags, bannedAbilityTags)}
                </div>
            </div>
        </div>
    )
}

export default JobAbilityDisplay;