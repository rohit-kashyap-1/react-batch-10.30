import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let  [checked, setCheck] =  useState(true)
  let [heading, abc] = useState()

  let [display,setDisplay] = useState(false)

  // /useState :  function abc(1){heading = 1}

  //Re render : 
 

  function handleCheck(event){
  let val =  event.target.value
  let sendCheck = false
  if(checked){
    setDisplay(false)
    
    setCheck(false)
  }else{
    setCheck(true)
    setDisplay(true)
    
  }
  
//api
  }
  return (
    <div className="App">
      <h1>{heading}</h1>
      <div className='container'>   
        <input type='checkbox' value={"Rohit"} checked={(checked==1)?true:false} onChange={handleCheck}  />
        {(display==false)?'':'hello'}
      </div>
    </div>
  );
}





export default App;
