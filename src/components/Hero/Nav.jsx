import gsap from "gsap";
import React, { useRef } from "react";

const Nav = () => {

    const hoverUnderline = function(e) {
        gsap.to(e.target, {
            borderBottom: '1px solid black',
            duration: 0.3,
            ease: 'power2.in',
            delay: 0.1
        })
    }
    const removeUnderline = function(e) {
        gsap.to(e.target, {
            borderBottom: '0px solid black',
            duration: 0.3,
            ease: 'power2.in',
            delay: 0.1
        })
    }

  return (
    <div className="py-1 fixed z-[30] bg-white w-full flex items-center justify-between px-5">
      <div className="flex gap-2">
        <h1 className="text-2xl tracking-tighter font-family uppercase text-black">Family style</h1>
        <svg
          width="12%"
          display="block"
          viewBox="0 0 49 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.230469" width="8" height="8" fill="black"></rect>
          <rect x="16.2305" width="8" height="8" fill="black"></rect>
          <rect x="32.2305" width="8" height="8" fill="black"></rect>
          <rect
            x="16.2305"
            y="16"
            width="8"
            height="8"
            transform="rotate(-180 16.2305 16)"
            fill="black"
          ></rect>
          <rect
            x="32.2305"
            y="16"
            width="8"
            height="8"
            transform="rotate(-180 32.2305 16)"
            fill="black"
          ></rect>
          <rect
            x="48.2305"
            y="16"
            width="8"
            height="8"
            transform="rotate(-180 48.2305 16)"
            fill="black"
          ></rect>
        </svg>
      </div>
      <div>
        <ul className="uppercase flex gap-32">
            <a onMouseEnter={hoverUnderline} onMouseLeave={removeUnderline} className="uppecase origin-center cursor-pointer text-2xl font-family tracking-tighter text-black " >studio</a>
            <a onMouseEnter={hoverUnderline} onMouseLeave={removeUnderline} className="uppecase origin-center cursor-pointer text-2xl font-family tracking-tighter text-black " >work</a>
            <a onMouseEnter={hoverUnderline} onMouseLeave={removeUnderline} className="uppecase origin-center cursor-pointer text-2xl font-family tracking-tighter text-black " >contact</a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
