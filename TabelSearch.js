import React,{useEffect,useState} from 'react';
import axios from 'axios';

export default function Todo(){
    const [todos,setTodos] =useState([]);
    const[todosInitial,setTodosInitial]=useState([]);
    const[todosearch,setTodoSearch]=useState("");
    useEffect(()=>{
        axios({
            url:"https://jsonplaceholder.typicode.com/todos"
        }).then(response =>{
            setTodos(response.data);
            setTodosInitial(response.data);
        })
    },[]);
    function handelTodoChange(e){
        e.preventDefault();
        setTodoSearch(e.target.value);
        setTodos(todosInitial.filter(todo =>todo.title.includes(todosearch)));
    }
    return(
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
            <hr />
            <label> Search</label>
            <input type='text' value={todosearch} name='todosearch'
            onChange={handelTodoChange}/>
            <hr/>
            <tabel>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                    {todos.map(todo =>{
                        <tr>
                            <td>{todo.title}</td>
                            <td>{todo.completed.toString()}</td>
                        </tr>
                    })}
                    </tbody></tabel></div>
    )
}