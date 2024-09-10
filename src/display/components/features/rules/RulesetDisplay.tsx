import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Classes
import { returnDescription, returnTags } from '../../../../utility/util';

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import RuleDisplay from './RuleDisplay';
import { Ruleset } from '../../../../classes/feature/rule/Ruleset';

const RulesetDisplay = (props: any) => {
    const RulesetObject: Ruleset = props.data


    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnTags(RulesetObject.Tags, [])}
            </div>
            <div className="verticalspacer"/>
            
            <div>
                {returnDescription(RulesetObject, RulesetObject.Description)}     
            </div>  

            <div className="verticalspacer"/> 
            {RulesetObject.Rules.length > 0 &&
                <>
                    <div>
                        <div className="separator">&#x27E1;</div>
                    </div>
                    <br/>
                    <div>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 2}} >
                        <Masonry gutter="20px">
                            {RulesetObject.Rules.map((item) => <div key={"rule"+item.Title} ><GenericDisplay d_colour={'icon'}  d_state={false} d_name={item.Title} d_type={"sub"} d_method={() => <RuleDisplay key={"bondpower"+item.Title} data={item}/>}/><div className="verticalspacer"/></div>
                            )}
                        </Masonry>
                    </ResponsiveMasonry>
                    </div>
                </>
            }

        </div>
    )
}

export default RulesetDisplay;