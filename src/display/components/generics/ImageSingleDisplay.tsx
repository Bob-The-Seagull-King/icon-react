import 'bootstrap/dist/css/bootstrap.css'
import '../../../resources/styles/_icon.scss'
import React, { useState} from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
// Classes
import { getColour } from '../../../utility/functions';
import { ObjectImage } from '../../../classes/ObjectImage';

const ImageSingleDisplay = (props: any) => {
    const ObjectImages : ObjectImage = props.data

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <div key={ObjectImages.Src+ObjectImages.Caption} style={{padding:"1rem"}} className="hovermouse" onClick={handleShow}>
          <Image src={ObjectImages.Src} fluid thumbnail />
        </div>
        <Modal show={show} onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
       
        
        centered >
          <div style={{borderWidth:"2px", borderRadius:"0.5rem"}} className='bordericon borderstyler'>
          <Image src={ObjectImages.Src} thumbnail fluid  onClick={handleShow}/>
          
          {ObjectImages.Caption.length > 0 &&
            <div style={{padding:"1rem", justifyContent:"center",paddingBottom:"0rem"}}>
            <p style={{justifyContent:"center",textAlign:"center"}}>{ObjectImages.Caption}</p>
          </div>}
          </div>
        </Modal>
      </>
    )
}

export default ImageSingleDisplay;