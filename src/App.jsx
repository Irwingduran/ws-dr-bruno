
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import About from './components/About'
import Address from './components/Address'
import Blog from './components/Blog'
import Banner from './components/Banner'
import MyFooter from './components/MyFooter'
import Home from "./components/Home"

function App() {


  return (
    <>
    <Home/>
      <Navbar />
      <Hero/>
      <Services />
      <About />
      <Address />
      <Blog />
      <Banner />
      <MyFooter />
      
    </>
  )
}

export default App
