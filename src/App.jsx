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
import Parners from './components/Parners';
import VideoComponent from './components/VideoComponent';
import Form from './components/Form';

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <Hero />
      <Services />
      
      <About />
      <Address />

      <VideoComponent />
   
      <Blog />
      <Banner />
      <Form/>
      <Parners />
     
   
     
      <MyFooter />
    </>
  );
}



export default App;
