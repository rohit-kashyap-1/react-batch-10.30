import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Item from './components/Item';
function App() {
  let [data,setData] = useState({})
  let [name,setName] =  useState('')
  let [email,setEmail] = useState('')



  function handleClick(){
    setData('helllo')
  }

  function handleName(event){
    setName(event.target.value)
  }
  function handleEmail(event){
    setEmail(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()

    console.log(name)
    console.log(email)
   // setData([name,email])

   setData({name:name,email:email})


   // axios.post('',{name:name,email:email})

  }
  return (
    <div className="App">
      <Item data={data} />
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleName} placeholder='Enter Name' />
        <input type='email' value={email} onChange={handleEmail} placeholder='Enter email' />
        <button>Submit</button>
      </form>
    </div>
  );
}





export default App;
