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

const FoeTrophyDisplay = (props: any) => {
    const TrophyObject: Trophy = props.data
    const bannedAbilityTags = ["inflict", "type"]
    
    return (
        <div className="row row-cols-3">
            <div className="col-4">
                <div className="equipbody">
                    <GenericPopup titlename={TrophyObject.Name} d_colour={'icon'} d_name={TrophyObject.Name} d_type={""} d_method={() => <TrophyDisplay data={TrophyObject}/>}/>
                </div>
            </div>
            <div className="col-2">
                <div className="equipbody">
                    {(TrophyObject.Uses <= 0) ? "Unlimited" : makestringpresentable(TrophyObject.Uses.toString())}
                </div>
            </div>
            <div className="col-2">
                <div className="equipbody">
                {makestringpresentable(TrophyObject.UseType)}
                </div>
            </div>
            <div className="col-4">
                <div className="equipbody">
                    {returnTags(TrophyObject.Tags, bannedAbilityTags)}
                </div>
            </div>
        </div>
    )
}

export default FoeTrophyDisplay;