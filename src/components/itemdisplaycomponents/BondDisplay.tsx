import React from 'react'
import { capitalizeTag} from '../../utility/functions';
import '../../styles/iconcomponent.scss';

const BondDisplay = (props: any) => {
    const bondinfo = props.data;
    const isSearched = (value: any) => (value.default == true );
    const isSearchedFalse = (value: any) => (value.default == false );

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host +'/' + '/player/narrative/' + dir + name, '_self', 'noopener,noreferrer');
    }
    // ---------------------------------------------

    // Return renders ------------------------------

    function returnIdeals() {
        return (
            <div>
                <h2 className={'titleShape subtitlePurple'}>IDEALS</h2>
                <ul>
                    {bondinfo.ideals.map((item: string) => (
                    <li key={item} className='listitemsmallgap'>    
                        <p dangerouslySetInnerHTML={{__html: (item || '')}}></p>
                    </li>
                    ))}
                </ul>
            </div>
        )
    }

    function returnGearSet(gear: any) {
        let i = 0;

        let itemVal = "";

        for (i = 0; i < gear.items.length; i++) {
            itemVal += gear.items[i];
            if (i < gear.items.length - 1) {
                itemVal += ", ";
            } else {
                itemVal += ".";
            }
        }

        return (
            <div>
                <span>
                    <b>{gear.name}:</b> {itemVal}
                </span>
            </div>
        )

    }

    function returnGear() {
        return (
            <div>
                <h2 className={'titleShape subtitlePurple'}>GEAR</h2>
                {bondinfo.gear.filter(isSearched).map((item: any) => (
                    <div key={item.name}>
                        {returnGearSet(item)}
                    </div>
                    ))}
                <ul className='listulsmallgap'>
                    {bondinfo.gear.filter(isSearchedFalse).map((item: any) => (
                        <li key={item.name} className=''>  
                            {returnGearSet(item)}
                        </li>
                        ))}
                </ul>
            </div>
        )
    }

    function returnBonus() {
        let tagName = "+2 to "

        let i = 0;
        for (i = 0; i < bondinfo.bonus.length; i++) {
            tagName += capitalizeTag(bondinfo.bonus[i]);
            if (i < bondinfo.bonus.length-1) {
                tagName += " or "
            }
        }

        return (
            <div>
                <b>{tagName}</b>
            </div>
        )
    }
    // ---------------------------------------------

    // Return result -------------------------------
    return (
        <div className='bondStructure'>
            <div className='centerPosition '>
                <h1 className={'megatitleShape titlePurple'}>{bondinfo.name}</h1>
            </div>
            <div><p dangerouslySetInnerHTML={{__html: (bondinfo.description || '')}}></p></div>
            <div>{returnIdeals()}</div>
            <br/>
            <div>   
                <h2 className={'titleShape subtitlePurple'}>TRAITS</h2>
                {returnBonus()}
                <br/>
                <div>
                    <span className='boldtextPurple '>EFFORT:</span>
                    <span className='boldtextPurple'> {bondinfo.effort}</span>
                </div>
                <div>
                    <span className='boldtextPurple '>STRAIN:</span>
                    <span className='boldtextPurple'> {bondinfo.strain}</span>
                </div>
                <br/>
                <div>
                    <span className='boldtextPurple '>Second Wind: </span>
                    <span className='' dangerouslySetInnerHTML={{__html: (bondinfo.secondwind || '')}}></span>
                </div>
                <div>
                    <span className='boldtextPurple '>Special Ability: </span>
                    <span className='' dangerouslySetInnerHTML={{__html: (bondinfo.specialability || '')}}></span>
                </div>
            </div>
            <br/>
            <div>{returnGear()}</div>
            <br/>
        </div>
    )
    // ------------------------------------------
}

export default BondDisplay