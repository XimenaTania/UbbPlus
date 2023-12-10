

import { Profile } from './componets/Profile';
import React from 'react';
import Navbar from './componets/Navbar';
import Hero from './componets/Hero';
import About from './componets/About';
import Testimonials from './componets/Testimonials';
import Demo from './componets/Demo';
import Footer from './componets/Footer';
import MapView from './componets/MapView';




function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Testimonials/>
      <Demo/>
      <Footer/>
      <Profile/>     
      <MapView/>
    
    </div>
  );
}

export default App;
