import React from 'react'

//share state
export default function ConditionalComponent1({ condition }) {

    //if
    return ((condition == true) ? <div>
        <h1>Condition 1</h1>
    </div> : <div> Condition 2</div>)
}
