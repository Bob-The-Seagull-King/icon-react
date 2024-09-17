import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// Classes
import { returnDescription, returnTags } from '../../../../utility/util';
import { ITable } from '../../../../classes/feature/table/tablebody';
import { ITableItem } from '../../../../classes/feature/table/tableitem';
import { TableFactory } from '../../../../factories/features/TableFactory';
import { capitalizeString } from '../../../../utility/functions';
import { Bond, GearOption } from '../../../../classes/feature/bonds/Bond';
import { CampItem } from '../../../../classes/feature/camp/CampItem';

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import CampUpgradeDisplay from './CampUpgradeDisplay';
import ItemStat from '../../subcomponents/description/ItemStat';
import TableDisplay from '../table/TableDisplay';

const CampItemDisplay = (props: any) => {
    const CampObject: CampItem = props.data

    function returnStats() {

        return (
            <div>
                <div className="row row-cols-lg-8 row-cols-md-8 row-cols-sm-4 justify-content-center">
                <ItemStat title={"Purhcase Cost"} value={CampObject.Purchase}/>
                <ItemStat title={"Base Upgrade Cost"} value={CampObject.Upgrade}/>
                </div>
            </div>
        )
    }

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnTags(CampObject.Tags, [])}
            </div>
            <div className="verticalspacer"/>
            <div>
                {returnStats()} 
            </div>
            <div className="verticalspacer"/>
            
            <div>
                {returnDescription(CampObject, CampObject.Description)}     
            </div>  

            <div className="verticalspacer"/> 
            {CampObject.UpgradeList.length > 0 &&
                <>
                    <div>
                        <div className="separator">Upgrades</div>
                    </div>
                    <br/>
                    <div>
                        {CampObject.UpgradeList.map((item) => <div key={"campupgrade"+item.Name} ><GenericDisplay d_colour={'icon'}  d_state={false} d_name={item.Name} d_type={"sub"} d_method={() => <CampUpgradeDisplay key={"bondpower"+item.Name} data={item}/>}/><br/></div>
                        )}
                    </div>
                </>
            }

        </div>
    )
}

export default CampItemDisplay;