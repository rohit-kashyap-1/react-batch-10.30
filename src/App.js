import logo from './logo.svg';
import './App.css';

import aboutImg from './assets/images/about.webp'
import contactImg from './assets/images/contact.jpg'
import servicesImg from './assets/images/services.jpg'

import Header from './components/Header';
import Counter from './components/Counter';
import Form from './components/Form';
import Products from './components/Products';

// components: Class based, Function Based

function App() {

  return (
    <div className="App">
      <div className='container'>
       {/* <About />
       <Contact />
       <Services /> */}
      {/* props*/ } 
       <Header data_class="active"  />
       <Counter />
       <Form title="Simple Single Input Form" />
       <Products />
      
      </div>
    </div>
  );
}





export default App;
