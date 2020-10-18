import React, { useState,useEffect } from 'react';
//import Child from './Child'
//import ChildA from './ChildA'

// const Fname=createContext();
// const Lname=createContext();



const Context=()=>{
    const [num, setNum]= useState(0);

    useEffect(() => {
        document.title=`You clicked ${num}`;
    })

    return(
        <>
            {/* <Fname.Provider value={" Nisar"}>
                <Lname.Provider value={"Shaikh"}>
                <ChildA/>
                </Lname.Provider>
            </Fname.Provider> */}

            <button onClick={()=>{
                setNum(num+1);
            }}>
            Click Me {num}</button>
            
        </>
    );
}

export default Context;
//export {Fname,Lname};