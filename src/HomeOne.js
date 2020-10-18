import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/product-launch-rocket-man.svg';
import Common from './Common'

const HomeOne = () =>{
    return(
        <>
              <Common name='Grow your business with' imgsrc={web} visit='/service' btnname='Get Started'/>
        </>
    );
  }

  export default HomeOne;