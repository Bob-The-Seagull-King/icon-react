import 'bootstrap/dist/css/bootstrap.css'
import '../../../resources/styles/_icon.scss'
import React, { useRef, useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useGlobalState } from '../../../utility/globalstate'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { EditListType, EditListDataDex } from './static/StaticEditList';

const GenericEditListDisplay = (props: any) => {
    const Manager = props.manager;
    const Item = props.item;
    const SubItem = props.subitem;
    const EditStaticType : EditListType = EditListDataDex[props.statictype]
    const UpdateFunction = props.updater;

    const refValue = EditStaticType.returnBaseValue(Item, SubItem);
    const [theme] = useGlobalState('theme');

    function updateModel() {
        UpdateFunction(Item)
    }

    return (
        <div className={"col-md-" + EditStaticType.smallwidth + " col-" + EditStaticType.widewidth} >
            <InputGroup className={"tagboxpad"}  style={{height:"100%"}}>
                <Form.Select className="bordericon borderstyler" defaultValue={EditStaticType.baseValue(Manager, Item)} style={{height:"100%",textAlign:"center"}} aria-label="Default select example" onChange={e => { EditStaticType.updateValue(Manager, Item, e.target.value, updateModel, SubItem)} } >
                        {
                            EditStaticType.returnOptions(Manager, Item, SubItem)
                        }
                </Form.Select>
            </InputGroup>
        </div>
    )
}

export default GenericEditListDisplay;