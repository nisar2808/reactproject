import React from 'react';


const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/300/300";

function Image(){
    return(

        <div className="img_div">
        <img src={img1} alt="random"/>
        <img src={img2} alt="random"/>
        <img src={img3} alt="random"/>
    </div>
    );
}

export default Image;