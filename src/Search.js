import React,{useState} from 'react';
import Sresult from './Sresult';


const Search=()=>{

    const [img, setImg] = useState('');

    const InputEvent = (event)=>{
        setImg(event.target.value);
    }

    return(
        <>
            <input type="text" placeholder="Serach Here..." 
            style={{padding: '10px',margin: '10px',float: 'right'}}
            onChange={InputEvent} value={img}    
            />
            { img === "" ? null : <Sresult name={img}/>}
        </>
    );
}

export default Search;