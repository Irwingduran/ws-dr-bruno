import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Address from './components/Address';
import Blog from './components/Blog';
import Banner from './components/Banner';
import MyFooter from './components/MyFooter';
import Parners from './components/Parners';
import VideoComponent from './components/VideoComponent';
import Home from './components/Home';
import Opinions from './components/Opinions';

function App() {
  return (
    <>
      <Navbar />
      
    <Home/>
      <Hero />
      
      
      <Services />
      <Opinions/>
      <About />
      <Address />
     
      <Blog />
      <VideoComponent />
      <Banner />
      <Parners />
      <MyFooter />
    </>
  );
}



export default App;
