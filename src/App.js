
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import HeroSection from "./components/HeroSection";
import BoxRow from "./components/BoxRow";
import React from "react";

export default function App() {
  return (
   
    <BrowserRouter>
     <Navbar />
  
      <div className="container main"> 
        
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}