import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Address from './components/Address';
import Blog from './components/Blog';
import Banner from './components/Banner';
import MyFooter from './components/MyFooter';
import Home from "./components/Home";
import Gallery from './components/Galllery'
import Parners from './components/Parners';
import VideoComponent from './components/VideoComponent';

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <Hero />
      <Services />
      <VideoComponent />
      <About />
      <Address />
      <Gallery />
      <Blog />
      <Parners />
      <Banner />
      <MyFooter />
    </>
  );
}



export default App;
