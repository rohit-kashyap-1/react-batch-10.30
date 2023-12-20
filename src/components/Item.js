import React from 'react'

export default function Item({data}) {
  return (
    <div>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
    </div>
  )
}
