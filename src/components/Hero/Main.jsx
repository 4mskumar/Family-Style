import gsap from "gsap";
import React, { useEffect } from "react";
import Arrow from "../../assets/Arrow";

const Main = () => {
  useEffect(() => {
    const t1 = gsap.timeline();

    t1.fromTo(
      "#img",
      {
        scale: 0.95,
        duration: 0.3,
        opacity: 0,
        ease: "power2.in",
      },
      {
        scale: 1,
        duration: 0.7,
        opacity: 1,
        ease: "power2.in",
      },
      "-=0.2"
    )

      .fromTo(
        "#a",
        { y: 100, opacity: 0 }, // Initial state
        { y: 0, opacity: 1, duration: 0.3 }, // Final state
        "-=0.1"
      )
      .fromTo(
        "#b",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "-=0.1"
      )
      .fromTo(
        "#c",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "-=0.1"
      )
      .fromTo(
        "#d",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "-=0.1"
      )
      .fromTo(
        "#e",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "-=0.1"
      )
      .fromTo(
        "#f",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "-=0.1"
      )
      .fromTo(
        "#g",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "-=0.1"
      )
      .fromTo(
        "#h",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "-=0.1"
      )
      .fromTo(
        "#i",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "-=0.0"
      )
      .fromTo(
        "#j",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "-=0.0"
      )
      .fromTo(
        "#arrow",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },  
        "-=0.0"
      )
      .to(
        "#arrow",
        { y: 10, duration: 1, yoyo: true, repeat: -1},        
        "-=0.0"
      )

  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <div className="relative w-full min-h-screen flex justify-center">
      <div className=" w-1/2 flex justify-center">
        <img
          id="img"
          className="w-full h-full obje"
          src="https://cdn.prod.website-files.com/6796c16d788f8bb34c7f0884/67a3ee02de97426f6c313f1a_Rose_higherquality-p-1080.webp"
          alt=""
        />
      </div>
      <div className="absolute flex flex-col top-[9rem] left-1/4 items-center justify-center leading-[9.5rem] text-[11rem] tracking-tighter font-family font-bold">
        <div id="line1" className="flex gap-3">
          <h1 id="a">We</h1>
          <h1 id="b">create</h1>
        </div>
        <div className="flex gap-3">
          <h1 id="c">&</h1>
          <h1 id="d">grow</h1>
        </div>
        <div className="flex gap-3">
          <h1 id="e">brands</h1>
          <h1 id="f">made</h1>
        </div>
        <div className="flex gap-3 ml-10 relative">
          <div  className="0 -left-40 top-1/4 flex flex-col items-center w-32 h-32 gap-5 absolute">
            <div  id="arrow" className="w-7">
              <Arrow color={'black'}/>
            </div>
            <div id="j" className="border-[2px] text-xl font-family text-center tracking-tighter border-black rounded-sm uppercase px-2">
              <p>Scroll</p>
            </div>
          </div>
          <h1 id="g">to</h1>
          <h1 id="h">share.</h1>
        </div>
        <div id="i" className="flex flex-col justify-center items-center">
          <p id="" className="font-family text-6xl mt-6 tracking-tighter z-10">
            Become dinner conversations.
          </p>
          <div id="" className="flex">
            {[...Array(30)].map((_, i) => (
              <div
                className={`${
                  i % 2 === 0 ? "bg-[#E9D5FF]" : "bg-[#1400FE]"
                } w-6 h-1 mt-2`}
                key={i}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
