import React from 'react';


const SlotBoddy = (props) =>{

    let { x, y, z}=props;
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

export default SlotBoddy;