import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const Note=(props)=>{

    const deleteNote=()=>{
        props.delete(props.id);
    }

    return(
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button className="btn">
                    <DeleteIcon className="deleteIcon" onClick={deleteNote}/>
                </button>
            </div>
        </>
    );
}

export default Note;