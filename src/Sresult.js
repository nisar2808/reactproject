import React from 'react';


const Sresult=(props)=>{
     
    const img=`https://source.unsplash.com/user/erondu/1600x900/?${props.name}`;
    return(
        <>
            <div className="img">
                <img src={img} style={{ width:'30%'}} />
            </div>
        </>
    );
}

export default Sresult;