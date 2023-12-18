import React, { useState } from 'react'


export default function ProductItem(props) {
    let [cart, setCart] = useState({})
    function addToCart(){
        setCart({name:props.name})
    }
    function displayCart(){
        console.log(cart)
    }
  return (
    <div className='border p-4 rounded mb-4'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <button className='btn btn-warning btn-sm' onClick={addToCart}>Add To Cart</button>
        <button className='btn btn-warning btn-sm' onClick={displayCart}>displayCart</button>
    </div>
  )
}
