import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { Power } from "../../../../classes/feature/powers/Power";

// Components
import GenericPopup from '../../../components/generics/GenericPopup';
import PowerDisplay from '../powers/PowerDisplay';

const BondPowerDisplay = (props: any) => {
    const PowerObject: Power = props.data    
    
    return (
        <div className="row row-cols-3">
            <div className="col-4">
                <div className="equipbody">
                    <GenericPopup titlename={PowerObject.Name} d_colour={'icon'} d_name={PowerObject.Name} d_type={""} d_method={() => <PowerDisplay data={PowerObject}/>}/>
                </div>
            </div>
            <div className="col-4">
                <div className="equipbody">
                    {(PowerObject.Restriction !== "")? PowerObject.Restriction : "-"}
                </div>
            </div>
            <div className="col-2">
                <div className="equipbody">
                    {(PowerObject.Uses !== "")? PowerObject.Uses : "-"}
                </div>
            </div>
            <div className="col-2">
                <div className="equipbody">
                    {(PowerObject.UseType !== "")? PowerObject.UseType : "-"}
                </div>
            </div>
        </div>
    )
}

export default BondPowerDisplay;