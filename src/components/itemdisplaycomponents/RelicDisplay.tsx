import React from 'react'
import { capitalizeTag, getColour } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import {convertStringToContent} from '../../utility/util';

const RelicDisplay = (props: any) => {
    /**
     * Prop format {values:item, tier:NUMBER}
     * tier:    0 = none
     *          1 = Tier 1
     *          2 = Tier 1+2
     *          3 = Tier 1+2+3
     *          4 = Tier 1+2+3+Aspected
     */

    // Declare Summon Variables --------------------
    const relicData = props.data.values;
    const tier = props.data.tier;
    // ---------------------------------------------

    // Return render -------------------------------
    return (
        <div className='relicStructure'>
            <h1 className={'titleShape title'+getColour(relicData.colour)}>{convertStringToContent( relicData.name )}</h1>
            <p><i>{relicData.desc}</i></p>
            {tier >= 1 &&
                <p><b>I.</b>   <span>{convertStringToContent(relicData.tier1)}</span></p>
            }
            {tier >= 2 &&
                <p><b>II.</b>  <span>{convertStringToContent(relicData.tier2)}</span></p>
            }
            {tier >= 3 &&
                <p><b>III.</b> <span>{convertStringToContent(relicData.tier3)}</span></p>
            }
            {tier >= 4 &&
                <p><b>Aspected:</b> <span>{convertStringToContent(relicData.tier4)}</span></p>
            }
            <p><i>Aspect quest: </i> <span>{convertStringToContent(relicData.quest)}</span></p>
        </div>
    )
    // ---------------------------------------------
}

export default RelicDisplay