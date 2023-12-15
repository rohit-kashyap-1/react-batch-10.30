import React from 'react'
import v from '../vue.png' //
import './Services.css'

export default function Services() {
    const style = {
        h1:{color:'white',textDecoration:'under'},
        p:{color:'violet'},
        div:{padding:50,backgroundColor:'#ccc',borderRadius:10}
    }
    return (
        <div>
            <div style={style.div} className='services-section'>
                <h1 style={style.h1}>Services</h1>
                <p style={style.p}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <img src={v} width={200} />
            </div>
        </div>
    )
}

/*
<div style="{color:red; backgroundColor:blue}">
*/