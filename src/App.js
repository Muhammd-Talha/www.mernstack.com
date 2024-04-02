import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Product from './Components/Product';
import Content from './Components/Content';
import SystemExpert from './Components/SystemExpert';
import Getintouch from './Components/Getintouch';
import { useState, useEffect } from 'react';
import { RiseLoader } from 'react-spinners';

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }, [])
  return (

    <div>
      {
        loading ?
          <div className='loader-tag'>
            <RiseLoader
              color={"#284D91"}
              loading={loading}
              // cssOverride={override}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/AboutUs' element={<AboutUs />} />
              <Route path='/Product' element={<Product />} />
              <Route path='/Content' element={<Content />} />
              <Route path='/SystemExpert' element={<SystemExpert />} />
              <Route path='/Getintouch' element={<Getintouch />} />
            </Routes>
          </BrowserRouter>
      }
    </div>
  );
}

export default App;
