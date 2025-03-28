import React, { useEffect, useRef } from 'react';
import Hero from './pages/Hero';
import Video from './pages/Video';
import LocomotiveScroll from 'locomotive-scroll';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import SeeLatest from './pages/SeeLatest';
import Footer from './pages/Footer';



const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])

  return (
    <main className="w-full min-h-screen">
      <Hero id="hero" />
      <div id="vid">
        <Video />
      </div>
      <Team />
      <Testimonial />
      <div className='relative'>
        <SeeLatest />
          <div className='absolute mt-4 z-[-10] top-0 left-0'>
            <Footer />
          </div>
      </div>
    </main>
  );
};

export default App;