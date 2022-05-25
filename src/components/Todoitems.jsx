import React from 'react'
import styles from '../components/todo.module.css';
import Tools from './Tools';

const Todoitems = ({todos,setTodos}) => {

const onDelete = (id)=>{

    let newtodos = todos.filter((todo)=>todo.id!=id)
    setTodos(newtodos);
}
  return (
    <div className={styles.maindiv}>
    {todos.map((todo)=>{
        if(todo.text.length>0){
         return <div key={todo.id} className = {styles.todolistbox}>
         <Tools todo={todo} onDelete = {onDelete}/>
        </div>
        }
        
    })}
    </div>
  )
}

export default Todoitems;