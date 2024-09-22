import 'bootstrap/dist/css/bootstrap.css'
import '../../../resources/styles/_icon.scss'
import React, { useState} from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'react-bootstrap/Image';
// Classes
import { getColour } from '../../../utility/functions';
import { ObjectImage } from '../../../classes/ObjectImage';
import ImageSingleDisplay from './ImageSingleDisplay';

const ImageSetDisplay = (props: any) => {
    const ObjectImages : ObjectImage[] = props.data

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div style={{justifyContent:"center"}}>
            <Carousel responsive={responsive} centerMode={true} className="imagecarouseldisplay" swipeable={true} infinite={true}>
                {ObjectImages.map(item => 
                    <ImageSingleDisplay key={item.Src+item.Caption} data={item}/>
                )}
            </Carousel>
        </div>
    )
}

export default ImageSetDisplay;