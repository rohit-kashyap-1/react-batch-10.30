import React from 'react'

export default function Button({title,action}) {
    const style={backgroundColor:'#4caf50',color:'white',padding:'10px 20px', borderRadius:'5px',margin:10}
    console.log(action)
    function DefaultAction(){
        console.log('hello')
    }
  return (
    <>
    <button onClick={(action==undefined)?DefaultAction:action}  style={style}>{title}</button>
    </>
  )
}
