import React from "react";
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import About from './components/About'
import Service from "./components/Service"
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  return (
   <div >
    <Navigation/>
    <Home/>
    <About/>
    <Service/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;
