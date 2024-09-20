import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { FoeClass } from '../../../../classes/feature/foes/FoeClass';
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Components
import GenericDisplay from '../../generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import ItemStat from '../../subcomponents/description/ItemStat';
import GenericComponentDisplay from '../../../components/generics/GenericComponent';

const FoeClassDisplay = (props: any) => {
    const FoeClassObject: FoeClass = props.data

    return (
        <div className='abilityInternalStructure'>
           
        </div>
    )
}

export default FoeClassDisplay;