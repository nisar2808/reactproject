import React,{useContext} from 'react';
import Child from './Child';
import {Fname,Lname} from './Context';

const ChildA=()=>{

    const fname = useContext(Fname)
    const lname=useContext(Lname);
    return(
        <h1>{fname} {lname}</h1>
    );
}

export default ChildA;