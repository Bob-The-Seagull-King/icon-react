import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { Job } from '../../../../classes/feature/jobs/Job';
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';
import { INote } from '../../../../classes/Note';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport, faPersonMilitaryRifle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import NoteItemEditDisplay from './NoteItemEditDisplay';

const NotesEditDisplay = (props: any) => {
    const Manager = props.manager;
    const NotesSource = props.data
    const UpdateFunction = props.updater;
    const CreateFunction = props.creater;
    const DeleteFunction = props.deleter;

    const [_allnotes, returnnotes] = useState(NotesSource.Notes as INote[]);

    function UpdateNote(_note : INote) {
        returnnotes(NotesSource.Notes)
        UpdateFunction(NotesSource)
    }

    return (
        <div className={'abilityStructure borderstyler bordericon'}>
            <div className='abilityInternalStructure'>
                <div className="row">
                    <div className="col-12">
                        <div className="generalbuttonbox hovermouse" style={{width:"100%",alignItems:"center",height:"3rem"}}  onClick={() => CreateFunction()}>
                            <div style={{display:"flex",width:"fit-content",alignItems:"flex-end"}} >
                                <FontAwesomeIcon icon={faPlusSquare} className="pageaccestext"/>
                                <h1 className="pageaccestext" style={{whiteSpace:"nowrap"}}>
                                    Create New Note
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{paddingTop:"0.5rem"}}>
                    {_allnotes != undefined && <>{_allnotes.map(_item => 
                        <NoteItemEditDisplay key={_allnotes.indexOf(_item) + "NoteKey"} manager={Manager} data={_item} deleter={DeleteFunction} updater={UpdateNote}/>
                    )}</>}
                </div>
            </div>
        </div>
    )
}

export default NotesEditDisplay;