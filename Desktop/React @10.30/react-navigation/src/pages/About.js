import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'


export default function About() {
    const [form,setForm] = useState('')

    const handleClick = ()=>{
        setForm(<Form/>)
    }
    
  return (
    <div>
        <div className='container'>
            <h1 className='display-4 fw-bold'>About US</h1>
            <hr />
            <Link to={"/contact"}>Send Query</Link>
            <button onClick={handleClick}>Send Feedback</button>
            <div>
                {form}
            </div>
            <p className='h3 fw-light'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</p>
            <br />
            <p className='h3 fw-light'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</p>

            <br />
            <p className='h3 fw-light'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</p>

            <br />
            <p className='h3 fw-light'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</p>
            <br />
            <p className='h3 fw-light'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</p>
        </div>
    </div>
  )
}
