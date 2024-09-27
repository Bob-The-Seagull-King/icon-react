import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags } from '../../../../utility/util';
import { makestringpresentable } from '../../../../utility/functions';
import { Trophy } from '../../../../classes/feature/trophy/Trophy';

// Components
import GenericPopup from '../../../components/generics/GenericPopup';
import TrophyDisplay from '../trophies/TrophyDisplay';

const FoeTrophyDisplay = (props: any) => {
    const TrophyObject: Trophy = props.data
    const bannedAbilityTags = ["inflict"]
    
    return (
        <div className="row row-cols-3">
            <div className="col-4">
                <div className="equipbody">
                    <GenericPopup titlename={TrophyObject.Name} d_colour={'icon'} d_name={TrophyObject.Name} d_type={""} d_method={() => <TrophyDisplay data={TrophyObject}/>}/>
                </div>
            </div>
            <div className="col-1">
                <div className="equipbody">
                    {(TrophyObject.Uses <= 0) ? "Unlimited" : makestringpresentable(TrophyObject.Uses.toString())}
                </div>
            </div>
            <div className="col-1">
                <div className="equipbody">
                {makestringpresentable(TrophyObject.UseType)}
                </div>
            </div>
            <div className="col-6">
                <div className="equipbody">
                    {returnTags(TrophyObject.Tags, bannedAbilityTags)}
                </div>
            </div>
        </div>
    )
}

export default FoeTrophyDisplay;