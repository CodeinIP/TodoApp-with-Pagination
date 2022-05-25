import React,{useState,useEffect} from 'react'
import styles from '../components/todo.module.css'
import Todoitems from './Todoitems';

const Todos = () => {
const [todos,setTodos] = useState([]);
const [newTodo,setnewTodo] = useState("");
const [page, setpage] = useState(1);
useEffect(()=>{
    fetch(`http://localhost:8080/todos?_page=${page}&_limit=5`)
    .then((r)=>r.json())
    .then((d)=>{
        setTodos(d);
        console.log(d);
    })
},[page])

const saveInfo = ()=>{
    fetch("http://localhost:8080/todos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            text:newTodo,
            isCompleted:false,
        }),
    })
    .then((r)=>r.json())
    .then((d)=>{
        setTodos([...todos,d]);
        setnewTodo("");
    })
}

  return (

    <div>Todos
    <div>
        <button disabled={page<=1} onClick={()=>setpage(page-1)}>{`<`}</button>
        <input placeholder='Enter todo here...' className={styles.inputbox} onChange={(e)=>setnewTodo(e.target.value)}/>
        <button className={styles.addbtn} onClick={saveInfo}>Save</button>
        <button disabled={page>2} onClick={()=>setpage(page+1)}>{`>`}</button>
        <Todoitems todos={todos} setTodos = {setTodos}/>
    </div>
    </div>
  )
}

export default Todos;