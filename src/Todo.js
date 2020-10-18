import React,{useState} from 'react';
import ToDoLists from './ToDoLists';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const Todo=()=>{

    const [todo, setTodo]=useState();
    const [Items ,setItems]=useState([]);
    const Inputvalue=(event)=>{
        setTodo(event.target.value);
    }

    const Submit=(e)=>{
        e.preventDefault();
        setItems((oldItem)=>{
            return [...oldItem,todo];
        });
        setTodo('');
    }

    const DeleteItem=(id)=>{
        console.log("click");

        setItems((oldItem)=>{
            return oldItem.filter((arryElem,index)=>{
                return index !==id;
            });
        });
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                <form onSubmit={Submit}>
                    <h1>ToDo List</h1>
                    <input type="text" placeholder="Add a Item" value={todo} onChange={Inputvalue}/>
                    <Button type="submit" className="newBtn"><AddIcon/></Button>

                    <ol>
                        {
                            Items.map((itemval,index)=>{
                                return <ToDoLists text={itemval} id={index} key={index} onSelect={DeleteItem}/>
                            })
                        }
                    </ol>
                </form>
                </div>
            </div>
        </>
    );
}

export default Todo;