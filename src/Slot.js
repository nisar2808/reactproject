import React from 'react';
import SlotBoddy from './SlotBoddy';
import Slotnot from './Slotnot';

const Slot = (props) =>{

    let { x, y, z}=props;

    //console.log(props);


    if( (x==y) && (y==z) ){
        return(
            <>
                
                <div className="inner_body">
                  <h1> {x} {y} {z} </h1>
                  <h1 style={{fontSize:'18px', fontWeight: 500}}>This is matching</h1>
                  <hr className="hr"/>
                </div>
            </>
          );
    }
    else{
        return(
            <>
                <div className="inner_body">
                  <h1> {x} {y} {z} </h1>
                  <h1 style={{fontSize:'18px', fontWeight: 500}}>This is not matching</h1>
                  <hr className="hr"/>
                </div>
            </>
          );
    }
  }

export default Slot;