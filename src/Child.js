import React from 'react'
import { Fname,Lname } from './Context'

const Child=()=>{
    return (
        <>
            <Fname.Consumer>
                {(fname)=>{
                    return(
                        <Lname.Consumer>
                            {(lname)=>{
                                return <h1>{fname} {lname}</h1>;
                            }}
                        </Lname.Consumer>
                    )
                    
                }}
            </Fname.Consumer>
        </>
    )
}

export default Child;