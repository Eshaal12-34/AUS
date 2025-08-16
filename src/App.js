import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "./all.min.css";
import "./main.css";
import Home from "./pages/Home"
import About from "./pages/About-us";
import Contact from "./pages/Contact";
import VisionMission from "./pages/VM";
import Faculty from "./pages/Faculty/Faculty";
import History from "./pages/History";
import Preschool from "./pages/Faculty/Preschool";
import High from "./pages/Faculty/High";
import Primary from "./pages/Faculty/Primary";
import Secondary from "./pages/Faculty/Secondary";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  });
}, []);
   return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/vision-mission" element={<VisionMission/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/faculty" element={<Faculty/>} />
           <Route path="/pre-school" element={<Preschool/>} />
          <Route path="/high-school" element={<High/>} />
          <Route path="/primary-school" element={<Primary/>} />
          <Route path="/secondary-school" element={<Secondary/>} />
          {/* Add additional routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
