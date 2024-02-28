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
                    <div className='basesearchitemStructure'>
                        <h2 className='centerPosition'>TEST</h2>
                    </div>
                </div>
                <div className='searchgriditem'> 
                    <div className='basesearchitemStructure'>
                        <h2 className='centerPosition'>TEST</h2>
                    </div>
                </div>
                <div className='searchgriditem'> 
                    <div className='basesearchitemStructure'>
                        <h2 className='centerPosition'>TEST</h2>
                    </div>
                </div>
            </div>
        </div>
    )
    // ---------------------------------------------
}

export default BuildSearch