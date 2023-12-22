import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  const users = ["Rohit","Pawan","Amit","Neha","Visha"];
  const userss = [{name:"Rohit",id:1},{name:"Amit",id:2},{name:"Vishal",id:3}]
  const list = users.map((item)=><li><Link to={"users/"+item} >{item} </Link></li>)
  const list2 = userss.map((item)=><li><Link to={"usersx/"+item.id+"/"+item.name}>{item.name}</Link></li>)
  return (

    <div>
        <div className='container'>
            <h1 className='display-4 fw-bold'>Home Page</h1>
            <ul>
              {list}
            </ul>
            <hr />
            <ul>
              {list2}
            </ul>
        </div>
    </div>
  )
}
