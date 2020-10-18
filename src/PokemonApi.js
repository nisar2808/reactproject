import Axios from 'axios';
import React,{useState,useEffect} from 'react';

const PokemonApi=()=>{

    const [num, setNum]=useState();
    const [name,setName]=useState();
    const [moves, setMoves]=useState();

    useEffect(() => {
        async function getData(){
            const res= await Axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            //console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }

        getData();
    })

    return(
        <>
            <h1>You select {num}</h1>
            <h1>Pokemon Name is {name}</h1>
            <h1>Pokemon Moves is {moves}</h1>
            <select value={num} onChange={(event)=>{
                setNum(event.target.value);
            }} style={{width:'20%',height:'40px'}}>
                <option>Select</option>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
            </select>
        </>
    );
}

export default PokemonApi;