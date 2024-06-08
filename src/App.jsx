import React from 'react';
import'./App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import Experience from "./pages/experience/Experience";
import AboutMe from "./pages/aboutMe/AboutMe";
import Projects from "./pages/projects/Projects";
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';

function App() {
  return (
    <div>
      <Router>
        <div className='nav'><Navbar/></div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutMe" element={<AboutMe/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element ={<Projects/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
};

export default App;
