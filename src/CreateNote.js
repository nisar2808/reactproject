import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


const CreateNote=(props)=>{

    const [expand,setExpand]=useState(false);

    const [note, setNote]= useState({
        title:"",
        content:""
    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setNote((preData)=>{
            return {
                ...preData,
                [name]:value,
            }
        });
    }

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:""
        });
    }

    const ExpandIt=()=>{
        setExpand(true);
    }

    const BtoNormal=()=>{
        setExpand(false);
    }

    return(
        <>
            <div className="main_note" onDoubleClick={BtoNormal}>
                <form>
                    {expand ? 
                    <input 
                        type="text" 
                        name="title" 
                        value={note.title} 
                        onChange={InputEvent} 
                        placeholder="Title" required
                    />: null}
                    <textarea rows="" column=""
                        name="content" 
                        value={note.content} 
                        onChange={InputEvent} 
                        placeholder="Wirte a note..." required
                        onClick={ExpandIt}
                     /> 
                   { expand ? <Button className="newBtn" onClick={addEvent}><AddIcon/></Button>: null}
                </form>
            </div>
        </>
    );
}

export default CreateNote;