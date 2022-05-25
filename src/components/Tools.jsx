import React from 'react'
import styles from '../components/todo.module.css';
const Tools = ({todo,onDelete}) => {
    const [status,setStatus] = React.useState(todo.isCompleted);
  return (
    <React.Fragment>
    <input className={styles.checkbox} type="checkbox" onChange={(e)=>(setStatus(e.target.checked))} />
        <p className={status ? styles.striked : styles.textStriked}>{todo.text}</p>
        <button className={styles.deletebtn} onClick={()=>{onDelete(todo.id)}}>X</button>
    </React.Fragment>
  )
}

export default Tools