import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import Todos from './components/Todos';

function App() {
// const[count1,setcount1] = useState(0);
// const[count2,setcount2] = useState(0);
// useEffect(()=>{
//   console.log("Inside 1",count);
// });
// const [showComponent,setShowComponent] = useState(false)

// let A = ()=><div>component A</div>
// let B = ()=><div>component B</div>
// fetch("http://localhost:8080/todos")
// .then((r)=>r.json())
// .then((d)=>{
//   console.log(d);
// })
  return (
    <div className='App'>
      <Todos/>
    </div>
    // <div className="App"
    // onClick = {()=>
    //   setShowComponent(!showComponent)}>
    //   Hello
    //   {showComponent ? <A/>:<B/>}
    // </div>
  );
}

export default App;
