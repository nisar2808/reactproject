import React,{useState} from 'react'
import Footer from './Footer';
import ButtonAppBar from './header';
import CreateNote from './CreateNote';
import Note from './Note';

const Keep=()=>{
const [addItem, setAddItem]=useState([]);

    const addNote=(note)=>{
        setAddItem((prevData)=>{
            return [...prevData,note]
        });

    };

    const onDelete=(id)=>{
        setAddItem((olddata)=>
            olddata.filter((currdata,index)=>{
                return index !==id;
            })
        )
    }

    return(
        <>
            <ButtonAppBar/>
            <CreateNote passNote={addNote}/>
            
            {
                addItem.map((val,index)=>{
                    return <Note key={index} id={index} title={val.title} content={val.content} delete={onDelete}/>
                })
            }
            <Footer/>
        </>
    );
}

export default Keep;