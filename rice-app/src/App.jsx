import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home";
import Shop from "./Component/Shop";
import Service from "./Component/Services";
import Contact from "./Component/Contact";
import About from "./Component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
