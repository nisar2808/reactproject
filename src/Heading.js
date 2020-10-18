import React from 'react';


const fname="Nisar";
const lname="Shaikh";

const heading={
    color:"#fa9191",
    textAlign: "center",
    fontWeight: "bold",
    textShadow: "0px 2px 4px #ffe9c5",
    margin: "50px 0px",
    fontFamily: '"Poppins", sans-serif'
}

function Heading(){
    return (
    <h1 style={heading}>My Name is Nisar</h1>);
}

export default Heading;
