import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { ContentPack } from '../../../../classes/contentpacks/contentpack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
import { makestringpresentable } from '../../../../utility/functions'

const ContentPackDisplay = (props: any) => {
    const PackItem = props.data;
    const parentView = props.parent;
    const updateHost = props.statefunction;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='contentpackcontainer smallbordersubpurple'>
                <span className="packvrbox">
                    <Button style={{padding:"0em"}} variant="" onClick={() => handleShow()}>
                        <FontAwesomeIcon icon={faBookOpen} className="purpleIcon" style={{fontSize:"2em",margin:"0em"}}/>
                    </Button>
                    <div className="vr packvr"></div>
                    <Button style={{padding:"0em"}} variant="" onClick={() => handleClose()}>
                        {PackItem.isactive &&
                            <FontAwesomeIcon icon={faUnlock} className="greenIcon" style={{fontSize:"2em",margin:"0em"}}/>
                        }
                        {!PackItem.isactive &&
                            <FontAwesomeIcon icon={faLock} className="redIcon" style={{fontSize:"2em",margin:"0em"}}/>
                        }
                    </Button>
                    <div className="vr packvr"></div>
                </span>

                <h1 className="packtitle">
                    {PackItem.name}
                </h1>
                <div className="vr packvr"></div>
                <h3 className="packsubtitle">
                    {PackItem.author}
                </h3>

                <span className="packvrbox">
                    <div className="vr packvr"></div>
                    <Button style={{padding:"0em"}} variant="" onClick={() => handleClose()}>
                        <FontAwesomeIcon icon={faTrash} className="redIcon" style={{fontSize:"2em",margin:"0em"}}/>
                    </Button>
                </span>
            </div>
            <Modal size="lg" onEnterKeyDown={() => handleClose()} show={show}  contentClassName="filterboxStructure" dialogClassName="" onHide={handleClose} keyboard={true}  centered>
                
                            <h1 className={'titleShape titlepurple'}>
                                {PackItem.name}
                                <div className="row float-end">
                                    <div className='col-12 float-end'>
                                        <Button style={{padding:"0em"}} variant="" onClick={() => handleClose()}>
                                            <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"2em",color:"white",margin:"0em"}}/>
                                        </Button>
                                    </div>
                                </div>
                            </h1>
                            <Modal.Body >
                                <div className="row overflow-auto flex-grow-1 m-0 p-0">
                                    <div style={{"maxHeight": "calc(70vh"}}>
                                        <div className="separator" style={{marginTop:"0em"}}><h5>By {PackItem.author}</h5></div>
                                        <div className="col-12" style={{fontSize:"0.95em"}}>
                                            {PackItem.description}
                                        </div>
                                        <div className="separator" style={{marginTop:"0em"}}><h5>Content</h5></div>
                                        <div style={{display:"flex",flexWrap:"wrap"}}>
                                            {PackItem.tags.map((item: any) => (
                                                <div className="filterobjectdisplay" key={"packdisplay"}>
                                                    {makestringpresentable(item.name)} - {item.count.toString()}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
            </Modal>
        </>
    )
}

export default ContentPackDisplay;