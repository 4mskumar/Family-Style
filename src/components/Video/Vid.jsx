import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Vid = () => {
  const cursor = useRef(null);
  const containerRef = useRef(null); 
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(cursor.current, {
        x: x - cursor.current.offsetWidth / 2,
        y: y - cursor.current.offsetHeight / 2,
        duration: 0.8,
        ease: "back.out",
      });
    };

   
    container.addEventListener("mousemove", handleMouseMove);

   
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showCursor]); 

  return (
    <div
      ref={containerRef} 
      onMouseEnter={() => setShowCursor(true)} 
      onMouseLeave={() => setShowCursor(false)} 
      className="w-full relative rounded-xl h-screen bg-zinc-800 overflow-hidden"
    >
      {showCursor && (

          <div
          ref={cursor}
          className="absolute z-30 pointer-events-none" // Default opacity is 0
          >
        <p className="uppercase font-family bg-[#FE5100] text-black tracking-tighter text-2xl w-fit rounded-md px-2 py-1">
          See our work
        </p>
      </div>
    )}

      <video
        className="w-full hover:opacity-75 duration-300 ease-in-out scale-125 h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Vid;