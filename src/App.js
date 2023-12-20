import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';


function App() {

  function handleClick(){
    console.log('Button Click 1')
  }
  function handleClick2(){
    console.log('REgister')
  }
  return (
    <div className="App">
      <Button title={"Read More"} action={handleClick} />
      <Button title={"REgister"} action={handleClick2} />
      <Button title={"Empty button"} />
    </div>
  );
}





export default App;
