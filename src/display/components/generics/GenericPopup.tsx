import 'bootstrap/dist/css/bootstrap.css'
import '../../../resources/styles/_icon.scss'
import React, { useState } from 'react'

// Imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

// Classes
import { getColour } from '../../../utility/functions';
import { useGlobalState } from '../../../utility/globalstate'

const GenericPopup = (props: any) => {
    const DisplayColour : string = props.d_colour;
    const DisplayName : string = props.d_name;
    const DisplayType : string = props.d_type;
    const displayMethod = props.d_method

    const ruleName = props.titlename

    // States
    const [show, setShow] = useState(false);
    const [theme] = useGlobalState('theme');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
          <span>
            <span className='glossaryPurple hovermouse' onClick={() => handleShow()}>{ruleName}</span>                
          </span>

          <Modal data-theme={theme} show={show} size="lg" contentClassName="overcomeBackground" dialogClassName=""  onHide={handleClose} keyboard={true}  centered>
              <Modal.Body > 
                
                <div className={'abilityStructure borderstyler ' + DisplayType + 'border'+getColour(DisplayColour)}>
                    <h1 className={'titleShape titlebody ' + DisplayType + 'background'+getColour(DisplayColour)}>
                        {DisplayName || ""}
                        
                        <div className="row float-end">
                            <div className='col-12 float-end'>
                                <Button style={{padding:"0em"}} variant="" onClick={() => handleClose()}>
                                    <FontAwesomeIcon icon={faCircleXmark} className="setWhite" style={{fontSize:"2em",margin:"0em"}}/>
                                </Button>
                            </div>
                        </div>
                    </h1>
                    {displayMethod()}
                </div>
              </Modal.Body>
          </Modal>
      </>
    )
}

export default GenericPopup;