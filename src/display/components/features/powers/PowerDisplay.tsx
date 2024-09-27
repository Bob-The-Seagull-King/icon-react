import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { Power } from '../../../../classes/feature/powers/Power';
import { makestringpresentable } from '../../../../utility/functions';

import ItemStat from '../../subcomponents/description/ItemStat';

const PowerDisplay = (props: any) => {
    const PowerObject: Power = props.data
    const bannedAbilityTags = ["inflict"]

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnTags( PowerObject.Tags, bannedAbilityTags)}
            </div>
            <div>                
                <div className="row row-cols-lg-8 row-cols-md-8 row-cols-sm-4 justify-content-center">
                    {PowerObject.Restriction !== null &&
                        <ItemStat title={"Restrictions"} value={makestringpresentable( PowerObject.Restriction )}/>                    
                    }
                    {PowerObject.UseType !== null &&
                        <ItemStat title={"UseType"} value={makestringpresentable( PowerObject.UseType )}/>                    
                    }
                    {PowerObject.Uses !== null &&
                        <ItemStat title={"Uses"} value={makestringpresentable( PowerObject.Uses.toString() )}/>                    
                    }
                </div>
            </div>
            <div className="verticalspacer"/>
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {returnDescription(PowerObject, PowerObject.Description)}
            </div>
        </div>
    )
}

export default PowerDisplay;