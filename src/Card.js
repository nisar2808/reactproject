import React from 'react';


let greeting='';
const msg={};
let currenttime= new Date();
currenttime=currenttime.getHours();
    if(currenttime >=1 && currenttime <=12)
    {
        greeting="Goog Morning";
        msg.color='green';
    }else if (currenttime >=12 && currenttime <=19){
        greeting="Good Afternoon";
        msg.color='orange';
    }else{
        greeting="Good Night";
        msg.color='red';
    }

function Card(){

    return(

        <div className="card">
        <div className="boxcard">
            <h2>Hello Sir,<span style={msg}>{greeting}</span></h2>
        </div>
    </div>
    );
}

export default Card;