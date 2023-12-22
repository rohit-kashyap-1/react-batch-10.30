import React from 'react'
import { useParams } from 'react-router-dom'

export default function Userx() {
    const {id,username} =  useParams()
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{username}</h4>
                        <h4>ID: {id}</h4>
                        <p className="card-text">Some example text. Some example text.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}
