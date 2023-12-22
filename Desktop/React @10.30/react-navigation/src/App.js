import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Page from './pages/Page';
import User from './pages/User'
import Userx from './pages/Userx';


//navigation:
//map 
function App() {

  
  return (
    <div className="App">
      <Router>
        <header>
          <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className='nav-link' > Home </Link>

                    </li>
                    <li className="nav-item">
                      <Link to="/about" className='nav-link' > About Us </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/services" className='nav-link'>Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className='nav-link'>Contact Us</Link>
                    </li>
                    <li className='nav-item'>
                      <div className='dropdown-x'>
                        <Link to={"/#"} className='nav-link'>Dropdown Menu</Link>
                        <div className='dropdown-x-menu'>
                          <Link to={"/"} className='nav-link'>Home</Link>
                          <Link to={"/about"} className='nav-link'>About Us</Link>
                          <Link to={"/services"} className='nav-link'>Services</Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <Routes>
          <Route  path='/' element={<Home />} ></Route>
          <Route path='/#' element={<Contact />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/about/:page' element={<Page />} ></Route>
          <Route path='/services' element={<Service />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/users/:username' element={<User />} ></Route>
          <Route path='/usersx/:id/:username' element={<Userx />} ></Route>
          <Route path='*' element={<NotFound />} ></Route>
        </Routes>
      </Router>
      {/* react router */}
    </div>
   
  );
}

export default App;
