import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { Trophy } from '../../../../classes/feature/trophy/Trophy';
import { makestringpresentable } from '../../../../utility/functions';

import ItemStat from '../../subcomponents/description/ItemStat';

const TrophyDisplay = (props: any) => {
    const TrophyObject: Trophy = props.data
    const bannedAbilityTags = ["inflict"]

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnTags( TrophyObject.Tags, bannedAbilityTags)}
            </div>
            <div>                
                <div className="row row-cols-lg-8 row-cols-md-8 row-cols-sm-4 justify-content-center">
                    <ItemStat title={"Category"} value={makestringpresentable( TrophyObject.Category )}/>
                    <ItemStat title={"Uses"} value={(TrophyObject.Uses === 0)? "Unlimited" : TrophyObject.Uses}/>
                    <ItemStat title={"Use Type"} value={makestringpresentable( TrophyObject.UseType + ((TrophyObject.UseType.length > 0)? ((TrophyObject.Uses > 1)? "s" : "") : "" ))}/>
                </div>
            </div>
            <div className="verticalspacer"/>
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {returnDescription(TrophyObject, TrophyObject.Description)}
            </div>
        </div>
    )
}

export default TrophyDisplay;