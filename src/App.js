import logo from './logo.svg';
import './App.css';

import About from './About'
import Contact from './Contact';
import Services from './components/Services';
import Page from './components/Page';

import aboutImg from './assets/images/about.webp'
import contactImg from './assets/images/contact.jpg'
import servicesImg from './assets/images/services.jpg'



function App() {

  return (
    <div className="App">
      <div className='container'>
       {/* <About />
       <Contact />
       <Services /> */}
       <Page title="About us" content="aboout us page content" img={aboutImg}  />
       <Page title="Contact us" content="contactd us page content" img={contactImg}  />
       <Page title="Services" content="SErvices us page content"  img={servicesImg} />
      </div>
    </div>
  );
}





export default App;
