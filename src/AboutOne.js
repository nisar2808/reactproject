import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/aboutus.png';
import Common from './Common'

const AboutOne = () =>{
    return(
        <>
            <Common name='Welcom to About page' imgsrc={web} visit='/contact' btnname='Contact Now'/>
        </>
    );
  }

  export default AboutOne;