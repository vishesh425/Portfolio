import First from "./Component/Header"
import First_section from "./Component/first_section"
import AboutMe from "./Component/aboutme"
import Projects from "./Component/projects"
import ContactUS from "./Component/contactus"
import Footer from "./Component/foooter"
import Home from "./Component/Home"
import Project_info from "./Component/Project_info"
import Project_view from "./Component/Project_view"
import ScrollToTop from "./Component/ScrollToTop"
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div >

      <Router>
      <ScrollToTop />
        <First />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo_2" element={<Home />} />
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Project_info" element={<Project_info />} />
          <Route path="/Project_view" element={<Project_view />} />
          {/* <Route path="/Project_info" element={<ContactUS/>} /> */}
        </Routes>

      </Router>

    </div>
  );
}

export default App;
