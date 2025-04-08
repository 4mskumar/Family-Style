import React, { useEffect, useRef } from 'react';
import Vid from '../components/Video/Vid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger


const Video = () => {

  const vidRef = useRef()
  
  useEffect(() => {
    const elem = vidRef.current
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(elem, {opacity: 0, y: 30}, {opacity: 1, y: 0, duration: 1, scrollTrigger: {
      trigger: elem,
      start: 'top 40%',
      end: 'top 0',
    }})
  }, [])

  return (
    <div ref={vidRef} id="vide-cont" className="p-5 w-full h-screen relative rounded-lg">
        <div  className='absolute p-5 top-0 left-0'>
            <Vid />

        </div>
    </div>
  );
};

export default Video;
