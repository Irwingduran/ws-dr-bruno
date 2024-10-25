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
      <div>
        <h2 className='lg:text-2xl text-center text-neutral-800 font-semibold mb-6 lg:leading-snug'>
        A case that we documented
        </h2>
       
      <VideoComponent />
      </div>
      <Blog />
      <Banner />
      <Form/>
      <Parners />
     
   
     
      <MyFooter />
    </>
  );
}



export default App;
