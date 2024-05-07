import React from "react";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Service from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="container">
      <Router>
        <HeaderTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
