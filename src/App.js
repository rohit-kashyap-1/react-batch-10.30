import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import ChildComponent from './components/ChildComponent';
import DefaultForm from './components/DefaultForm';

function App() {
  let [registerd, setRegister] = useState(true)

  function handleRegister(){
    if(registerd==true){
      setRegister(false)
    }else{
      setRegister(true)
    }

    console.log(registerd)
  }

  return (
    <div className="App">
      {/* <ChildComponent title={"Login Form"} parap={"hello world"} /> */}
      <div className='container'>

        <div className='w-25'>
          <DefaultForm  registerd={registerd} />
        </div>
        <button onClick={handleRegister} className='btn btn-dark'>Login</button>
        <button onClick={handleRegister} className='btn btn-dark'>Register</button>
      </div>
    </div>
  );
}





export default App;
