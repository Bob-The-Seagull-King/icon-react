import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour } from '../utility/functions';
import '../styles/iconcomponent.scss';
import '../styles/iconbuild.scss';

const BuildSearch = (props: any) => {

    // Declare Summon Variables --------------------
    // ---------------------------------------------

    // Return render -------------------------------
    return (
        <div className='basesearchStructure'>
            <div className='searchContainer'>
                <div className='searchgriditem'> 
                    <div className='searchSubContainer'>
                        <div className='basesearchitemStructure jobgriditem'>
                            <div className='centerPosition'>
                                <h2 className='paddedSearchTitle'>JOB</h2>
                                <input className='searchinput'/>
                            </div>
                        </div>
                        <br/>
                        <div className='searchsubsubcontainer'>
                            <div className='basesearchitemStructure levelgriditem'>
                            <div className='centerPosition'>
                                <h2 className='paddedSearchLevel'>LV</h2>
                                <input className='searchinput'/>
                            </div>
                            </div>
                            <div className='basesearchitemStructure searchgridbutton'>
                                <h2 className='centerPosition'>&#x1F50E;&#xFE0E;</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='searchgriditem'> 
                    <div className='searchSubContainer'>
                        <div className='basesearchitemStructure searchgriditem'>
                            <div className='centerPosition'>
                                <h2 className='paddedSearchLevel'>RELIC</h2>
                                <input className='searchinputrelic'/>
                                <input className='searchinputreliclevel'/>
                                <div className='paddedSearchAdd'>
                                    <h2 className='nakedpad'>ADD</h2>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className='searchitemscontainer'>
                        </div>
                    </div>
                </div>
                <div className='searchgriditem'>  
                    <div className='searchSubContainer'>
                        <div className='basesearchitemStructure searchgriditem'>
                        <div className='centerPosition'>
                                <h2 className='paddedSearchLevel'>ABILITY</h2>
                                <input className='searchinputrelic'/>
                                <input className='searchinputreliclevel'/>
                                <input className='searchinputabilitymastery'/>
                                <div className='paddedSearchAdd'>
                                    <h2 className='nakedpad'>ADD</h2>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className='searchitemscontainer'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    // ---------------------------------------------
}

export default BuildSearch