import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';

const Amazon = () =>{
    return(
        <Cards
            key={Sdata[5].id} 
            imgsrc={Sdata[5].imgsrc} 
            title={Sdata[5].title}
            sname={Sdata[5].sname}
            link={Sdata[5].links}
        />
    );
}

export default Amazon;