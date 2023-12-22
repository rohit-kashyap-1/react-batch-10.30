import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Contact() {

  const [inputs,setInputs] = useState({})
  //{name}

  const handleInput = (event)=>{
    //name and value
    const name = event.target.name
    const value = event.target.value
    //{name:'name',value:'Rohit'}
    //{name:'email', value:'rohit@gmail.com'}
    //{...inputs,['email']:'rohit@gmail.com'}
    //['email']
    setInputs({...inputs,[name]:value}) //setInputs({...inputs,['email']:value})
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log('submit ')
    console.log(inputs)
  }

  return (
    <div>
      <div className='container'>
        <h1 className='display-4 fw-bold'>Contact US</h1>
        <hr />
        <div className='row'>
          <div className='col-md-4'>
            <form  onSubmit={handleSubmit}>
              <div className='mb-3'>
                <input type='text' name='name' placeholder='Enter Name' onChange={handleInput} value={inputs.name} className='form-control' />
              </div>
              <div className='mb-3'>
                <input type='text' name='email' placeholder='Enter Email' onChange={handleInput} value={inputs.email} className='form-control' />
              </div>
              <div className='mb-3'>
                <input type='text' name='phone' placeholder='Enter phone' onChange={handleInput} value={inputs.phone} className='form-control' />
              </div>
              
              <button className='btn btn-dark'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
// obj = {}
//obj['email'] = 'Rohit'
//obj.email = 

  )
}
