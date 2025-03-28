import React, { useEffect, useRef } from "react";
import Smiley from "../assets/Smiley";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonial = () => {
  const word = useRef();
  const para = useRef();
  const picture = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: word.current,
        start: "top 70%",
        markers: true,
      },
    });

    t1.fromTo(
      word.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }
    )
      .fromTo(
        para.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" },
        "-=0.5"
      )
      .fromTo(
        picture.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" },
        "-=0.5"
      );
  }, []);

  return (
    <div className="w-full px-56 min-h-screen">
      <div ref={word} data-scroll data-scroll-speed="0.07" className="leading-[10rem]">
        <h1 className="text-[12rem] font-family tracking-tighter">Some</h1>
        <h1 className="text-[12rem] font-family tracking-tighter">kindwords</h1>
      </div>
      <div ref={picture} className="flex items-center gap-10">
        <div className="w-[30%] mt-32 h-[70%] aspect-square">
          <div className="grid grid-cols-2">
            <div>
              <Smiley />
            </div>
            <div className="rotate-180">
              <Smiley />
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/6796c16d788f8bb34c7f0884/679bec888dd51f8acca656d6_eace61e547867acc2f42f4de42c5860d_Jack%20Portrait-p-500.webp"
            alt=""
            className="w-full mt-7 h-full object-cover"
          />
          <div className="text-3xl leading-7 mt-7 font-family tracking-tighter">
            <p>Jack Wink</p>
            <p>/Co-Founder,</p>
            <p>Lunchbox Entertainment</p>
          </div>
        </div>
        <div ref={para} data-scroll data-scroll-speed="0.05" className="text-6xl text-justify w-[60%] font-family tracking-tighter text-black">
          <p className="text-right">"Working with Hannah & </p>
          <p>
            Jess was truly a pivotal moment for our company. They took time to
            understand our industry, translating our vision into a strong North
            Star and concrete brand identity. Our decision-making became more
            streamlined and more focused.
          </p>
          <p className="text-[#1500FF] mt-20">Easily some of the brightest and most productive people we've had the pleasure to work with."</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;