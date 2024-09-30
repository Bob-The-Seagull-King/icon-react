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
    const Manager = props.manager;
    const Note: INote = props.data
    const UpdateFunction = props.updater;
    const DeleteFunction = props.deleter;
    
    function UpdateText(_text : string) {
        Note.text = _text;
        Manager.SetStorage();
    }

    return (
        <div style={{padding:"0.5rem"}}>
        <div className={'abilityStructure borderstyler bordericon'} style={{padding:"0rem"}}>
            <div className={'titleShape hovermouse titlebody backgroundicon'}>
                <div style={{display:"flex"}} className="notecontainer">
                <div>
                    <GenericEditTextDisplay manager={Manager} item={Note} statictype={'notetitle'} updater={UpdateFunction}/>
                </div>
                <div>
                    <span className="packvrbox">
                        <div className="vr packvr"></div>
                        <Button  variant="" onClick={() => DeleteFunction(Note)}>
                            <FontAwesomeIcon className="titleIcon" icon={faTrash}/>
                        </Button>
                    </span>
                </div>
                </div>
            </div>
            <div>
                <div className='abilityInternalStructure'>
                    <div>
                        <InputGroup>
                            <Form.Control as="textarea" aria-label="With textarea" defaultValue={Note.text} placeholder={Note.text} onChange={e => UpdateText(e.target.value)}/>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default NoteItemEditDisplay;