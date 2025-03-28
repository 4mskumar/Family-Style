import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Arrow from "../../assets/Arrow";

const Index = () => {
  const army = useRef(null);
  const humble = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elem = army.current; // First div
    const elem2 = humble.current; // Second div

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        start: "top 20%",
        markers: true,
      },
    });

    tl.fromTo(
      elem,
      { opacity: 0, y: 80, rotate: -10 },
      { opacity: 1, y: 0, rotate: 0, duration: 1, ease: "power2.inOut" }
    );

    tl.fromTo(
      elem2,
      { opacity: 0, y: 80, rotate: -10 },
      { opacity: 1, y: 0, rotate: 0, duration: 1, ease: "power2.inOut" },
      "-=0.5" // Overlap the animations by 0.5 seconds
    );
  }, []);

  return (
    <div className="w-full min-h-screen px-10">
      <div data-scroll data-scroll-speed="0.1" className="origin-top-right">
        {/* First Div */}
        <div ref={army} className="leading-[14rem] mt-[19rem]">
          <h1 className="font-family text-[17rem] text-center tracking-tighter uppercase font-semibold text-black">
            we're not
          </h1>
          <h1 className="font-family text-[17rem] tracking-tighter uppercase font-semibold text-black">
            an army
          </h1>
        </div>

        {/* Second Div */}
        <div
          ref={humble}
          className="w-[37%] translate-x-[70%] flex flex-col mt-5 h-1/2"
        >
          <p className="font-family tracking-tighter text-6xl text-black text-right">
            Just two humble
          </p>
          <p className="font-family tracking-tighter text-justify text-6xl text-black">
            assassins who like to slay in small spaces.{" "}
            <span className="text-[#FE5100]">Like our 150 sq ft. studio</span>
          </p>
        </div>
      </div>
      <div className=" -mt-20 gap-[18rem] flex justify-end items-end w-full">
        <div className="w-[35%] aspect-square">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/6796c16d788f8bb34c7f0884/679bec898c48ec74ac9d7944_deec812083c788e50718903ef0dee601_Team%20Portrait-p-800.webp"
          />
          <div
            data-scroll
            data-scroll-speed="0.07"
            className="bg-white -mt-10 w-full h-[20%]"
          ></div>
        </div>
        <div className="w-[22%]  aspect-square">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/6796c16d788f8bb34c7f0884/679bec891e84eb2dd900dff3_55b0cce20760a46cd655a6e8d6bc8f66_Roses-p-500.webp"
            alt=""
          />
          <div className=" font-family text-justify text-[1.8rem] tracking-tighter leading-7 mt-5 w-full">
            <p className="text-right">We create family style to do</p>
            <p>
              what we love most. Connecting people and products in diffrennt
              ways. Stratergies, identities and to bring cool ideas to life.
            </p>
            <div className="flex justify-end items-center gap-3 mt-5">
              <div className="-rotate-90 w-6">
                <Arrow color={"#1500FF"} />
              </div>
              <p className="text-[#1500FF] text-3xl font-familt tracking-tighter underline">
                Meet the team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
