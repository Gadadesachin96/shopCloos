import React from 'react';
import './App.css';
import Carousel from './components/carousel/Carousel';
import Navbar from './components/navbar/Navbar';
import image1 from './assets/imag1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/registerForm/RegisterForm';
import LoginForm from './components/loginForm/LoginForm';

const slides = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
];

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/carousel" element={<Carousel slides={slides} />} />
          <Route path="/" element={<RegisterForm/>} />
          <Route path="/loginform" element={<LoginForm/>} />
        </Routes>
      </Router>




    </div>
  );
}

export default App;
