import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { Power } from "../../../../classes/feature/powers/Power";
import { CampUpgrade } from '../../../../classes/feature/camp/CampUpgrade';
import { returnDescription } from '../../../../utility/util';

// Components
import GenericPopup from '../../../components/generics/GenericPopup';
import PowerDisplay from '../powers/PowerDisplay';
import ItemStat from '../../../components/subcomponents/description/ItemStat';
import GenericDisplay from '../../../components/generics/GenericDisplay';

const CampUpgradeDisplay = (props: any) => {
    const CampObject: CampUpgrade = props.data

    function returnStats() {

        return (
            <div>
                <div className="row row-cols-lg-8 row-cols-md-8 row-cols-sm-4 justify-content-center">
                    <ItemStat title={"Purchase Cost"} value={CampObject.Cost}/>
                </div>
            </div>
        )
    }

    return (
        <div className='abilityInternalStructure'>
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
                        {CampObject.UpgradeList.map((item) => 
                        <div key={"campupgrade"+item.Name} >
                            <GenericDisplay d_state={false} d_colour={'icon'} d_name={item.Name} d_type={"sub"} d_method={() => <CampUpgradeDisplay key={"bondpower"+item.Name} data={item}/>}/>
                            <br/>
                        </div>
                        
                        )}
                    </div>
                </>
            }

        </div>
    )
}

export default CampUpgradeDisplay;