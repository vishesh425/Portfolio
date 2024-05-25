import First from "./Header"
import First_section from "./first_section"
import AboutMe from "./aboutme"
import Projects from "./projects"
import ContactUS from "./contactus"
import Footer from "./foooter"
import React, { useState } from 'react';


function App() {
  return (
    <div >
     <First/>
     <First_section/>
     <AboutMe/>
     <Projects/>
     <ContactUS/>
     <Footer/>
    </div>
  );
}

export default App;
