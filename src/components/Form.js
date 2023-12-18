import React, { useState } from 'react'

export default function Form(props) {
    document.title = 'Form'
    let [name,setName] = useState('Pawan kumar')
    let [email,setEmail] = useState('')

    function handleName(event){
        setName(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function displayInput(){
        console.log(name,email)
    }
  return (
    <div className='mt-4 border rounded p-4 w-25 '> 
        <h6>{props.title}</h6>
        <input type='text' className='form-control rounded-0 mb-3' placeholder='Enter Your Name' value={name} onChange={handleName} />
        <input type='email' className='form-control rounded-0 mb-3' placeholder='Enter Email ' value={email} onChange={handleEmail} />
        <button onClick={displayInput}>Display In Console</button>
    </div>
  )
}
