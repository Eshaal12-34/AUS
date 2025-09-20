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
import Funfair from "./pages/Funfair";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Trips from "./pages/Trips"; 
import Annual from "./pages/Annual"; 
import Engage from "./pages/Engage";
import Gala from "./pages/Gala";
import Early from "./pages/Early";
import Primary from "./pages/Primary";
import AdminForm from "./pages/adminPanel";
import FacultyList from "./pages/facultyList";
import CvDetails from "./pages/CV";
import Message from "./pages/Message"
import Lowersec from "./pages/Lowersec";
import Policy from "./pages/policy";
import Examination from "./pages/Examinations";
import PTM from "./pages/PTM";
import Higher from "./pages/Highsec";
import Fee from "./pages/Fees";
import Scholarship from "./pages/ScholarshipTemp";
import  Scrolltop from "./components/Scrolltop"
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
         <Scrolltop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/vision-mission" element={<VisionMission/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/funfair" element={<Funfair/>} />
          <Route path="/trips" element={<Trips/>} /> 
          <Route path="/annual-day" element={<Annual/>} /> 
          <Route path="/student-engagement" element={<Engage/>} /> 
          <Route path="/sports-gala" element={<Gala/>} /> 
          <Route path="/early-years" element={<Early/>} />
          <Route path="/admin-form" element={<AdminForm/>}/>
          <Route path="/faculty/:section" element={<FacultyList />} />
          <Route path="/cv/:id" element={<CvDetails />} />
          <Route path="message" element={<Message />} />
          <Route path="primary-year" element={<Primary />} />
          <Route path="lower-secondary-year" element={<Lowersec />}/>
          <Route path="admission-policy" element={<Policy />}/>
          <Route path="examination-system" element={<Examination />}/>
          <Route path="parent-teacher-interaction" element={<PTM />}/>
          <Route path="higher-secondary-year" element={<Higher />}/>
          <Route path="fee-structure" element={<Fee />}/>
          <Route path="scholarships" element={<Scholarship />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
