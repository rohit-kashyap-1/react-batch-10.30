import React, { useState } from 'react'

export default function DefaultForm({  registerd }) {
  //let [registerex, setRegister] =useState(registerd)
    //if else
    //ternary operator
    

    if (registerd == true) {
        return (
            <div className='form'>
                <h2>Login</h2>
                <div className='mb-3'>
                    <label className='form-label'>Username</label>
                    <input type='text' className='form-control' placeholder="Enter username" />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type='text' className='form-control' placeholder="Enter password" />
                </div>
                <button className='btn btn-success'>Login</button>
            </div>
        )
    } else {
        return (
            <div>


                <div className='form'>
                    <h2>Register</h2>
                    <div className='mb-3'>
                        <label className='form-label'>Username</label>
                        <input type='text' className='form-control' placeholder="Enter username" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <input type='text' className='form-control' placeholder="Enter password" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Confirm Password</label>
                        <input type='text' className='form-control' placeholder="Repeat password" />
                    </div>
                    <button className='btn btn-primary'>Register</button>
                </div>
            </div>
        )
    }

}
