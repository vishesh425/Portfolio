import First from "./Component/Header"
import First_section from "./Component/first_section"
import AboutMe from "./Component/aboutme"
import Projects from "./Component/projects"
import ContactUS from "./Component/contactus"
import Footer from "./Component/foooter"
import Home from "./Component/Home"
import Project_info from "./Component/Project_info"
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >

      <Router>
        <First />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo_2" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Project_info" element={<Project_info />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
