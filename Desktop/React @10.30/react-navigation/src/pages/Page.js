import React from 'react'
import { useParams } from 'react-router-dom'

export default function Page() {
   const {page} = useParams()
   if(page=="our-mission"){
    return(<div>
        <h1>Our Mission</h1>
        <p>PAge content</p>
    </div>)
   }else{
    return (
        <div>
            <h1>{page}</h1>
        </div>
      )
   }
 
}
