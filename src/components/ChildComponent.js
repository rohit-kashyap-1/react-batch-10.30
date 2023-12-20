import React from 'react'

//props, conditional rendering
export default function ChildComponent({title,parap}) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{parap}</p>
    </div>
  )
}
