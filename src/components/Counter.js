import React from 'react'
import { useState } from 'react' //useState react function, Hooks

//useState =  arra
export default function Counter() {
   let [counter, setCounter] = useState(0) //returns a array
   let [student,setData] = useState({}) //student = {}

   let [name,setName] = useState('')

   




    //how to call a function in react component

    
    function increment(){
        console.log('increment is running')
        setCounter(counter+1)
    }
    function decrement(){
        console.log('decrement is running')
        setCounter(counter-1)
    }
   
  return (
    <div>
        <h1>{counter}</h1>
        <h2>{student.name}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Increment</button>
        <hr />



    </div>
  )
}

//Life Cycle
//1. Mounting: componentDidMount() : when the component loads
//2.  Update: componentDidUpdate(): when component update: whenever the state change
//3. Unmount: componentWillUnmount(): whne compoent unload or deleted 