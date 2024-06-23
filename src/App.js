

import { Profile } from './componets/Profile';
import React from 'react';
import Navbar from './componets/Navbar';
import Hero from './componets/Hero';
import About from './componets/About';
import Testimonials from './componets/Testimonials';
import Demo from './componets/Demo';
import Footer from './componets/Footer';
import MapView from './componets/MapView';
import About2 from './componets/About2';




function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Testimonials/>
      <About/>
      <About2/>
      <Demo/>
      <Footer/>
      <Profile/>     
      <MapView/>
      

    
    </div>
  );
}

export default App;
