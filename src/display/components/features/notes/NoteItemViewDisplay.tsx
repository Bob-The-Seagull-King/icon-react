import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { Job } from '../../../../classes/feature/jobs/Job';
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';
import { INote } from '../../../../classes/Note';

import { Button, Collapse } from "react-bootstrap";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport, faTrash, faPersonMilitaryRifle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import GenericEditTextDisplay from '../../../components/objectedit/GenericEditTextDisplay';

const NoteItemEditDisplay = (props: any) => {
    const Note: INote = props.data
    
    const [open, setOpen]   = useState(false);

    return (
        <div style={{padding:"0.5rem"}}>
        <div className={'abilityStructure borderstyler bordericon'} style={{padding:"0rem"}}>
        <div onClick={() => {setOpen(!open)}} className={'titleShape hovermouse titlebody backgroundicon'}>{Note.title || ""}</div>
            <Collapse in={open}>
            <div>                
                <div className='abilityInternalStructure'>
                    <p>
                        {Note.text}
                    </p>
                </div>
            </div>
            </Collapse>
        </div>
        </div>
    )
}

export default NoteItemEditDisplay;