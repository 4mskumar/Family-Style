import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import Arrow from "../assets/Arrow";

const SeeLatest = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered image index
  const page = useRef();
  const latest = useRef();
  const modal = useRef();
  const textRefs = useRef([]); // Array of refs for text elements

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scale animation for the page
    const t1 = gsap.timeline({
        scrollTrigger:{
            start: "top 40%",
            trigger: latest.current,
        }
    })

    t1.fromTo(latest.current, {y: 40, opacity: 0}, {opacity: 1, duration: 1, y: 0})
    .fromTo(modal.current, {y: 40, opacity: 0}, {opacity: 1, duration: 1, y: 0}, "-=0.5")


    gsap.fromTo(
      page.current,
      { scale: 1 },
      {
        scale: 0.98,
        duration: 1,
        scrollTrigger: {
          markers: true,
          trigger: page.current,
          start: "top 5%",
          end: "top -10%",
          scrub: true,
        },
      }
    );
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the hovered index

    // GSAP animation for the text and background
    gsap.fromTo(
      textRefs.current[index],
      { y: 40, opacity: 0 }, // Start position (hidden below)
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" } // End position (visible)
    );

    gsap.to(`#image-container-${index}`, {
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent black
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null); // Reset the hovered index

    // GSAP animation to hide the text and reset the background
    gsap.to(textRefs.current[index], {
      y: 40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(`#image-container-${index}`, {
      backgroundColor: "rgba(0, 0, 0, 0)", // Reset background
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const getHoverText = (index) => {
    switch (index) {
      case 0:
        return "Everyone says 'embrace the season.' We say, override it. Winter is running low on serotonin. So we're engineering our own. Art + design that wakes us up Books we get lost in working... so far 😝 Sounds pulling us into early summer It's What's keeping you going?";
      case 1:
        return "🚀 Our new website is live! We've given our comer of the internet feel A new New case studies And a sharper focus. As former in-housers, we've lived the brand problems that torment startups. 🔵 It's tough to get clear on why customers will choose you again and again.🔵 And how this translates into every";
      case 2:
        return "What do Walmart and Nirvana have in common? Well, 😐 One used it to make you shop, the other used it to make you mosh. As brand practitioners, we hope to be sophisticated, elusive and complex. But the truth is, we're all playing the world's most jacked up game of telephone. And in telephone, simple is smart";
      default:
        return "";
    }
  };

  return (
    <div ref={page} className="w-full px-5 h-screen mt-[20rem] bg-white rounded-2xl">
      <div ref={latest} className="flex gap-10 ">
        <p className="text-6xl font-bold font-family text-zinc-800 tracking-tighter">
          See the latest
        </p>
        <div className="w-7 -rotate-90">
          <Arrow color={"black"} />
        </div>
      </div>

      <div ref={modal} className="w-full  gap-5 flex h-[65%] mt-5">
        {[
          "https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Fscontent-muc2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2F483279235_17868483072324848_4809214346039644622_n.jpg%3Fstp%3Ddst-jpg_e15_p360x360_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTI1eDIwMDAuc2RyLmY3NTc2MS5kZWZhdWx0X2NvdmVyX2ZyYW1lIn0%26_nc_ht%3Dscontent-muc2-1.cdninstagram.com%26_nc_cat%3D108%26_nc_oc%3DQ6cZ2AHX0QFH3XdhKSMMZk-LFq4NK_o2--T7JGO229iIAmH5d-kYe-cXR3okXVHUsqUl-I4%26_nc_ohc%3DAJi00fvFClAQ7kNvgGRQZaY%26_nc_gid%3D932c671194d443e79bdb9cabebe20b50%26edm%3DABmJApABAAAA%26ccb%3D7-5%26ig_cache_key%3DMzU4MzI2NzY2MDI2MzMzNjkyNw%253D%253D.3-ccb7-5%26oh%3D00_AYELmJsntWkb08opo0uP3KgYAAv56wmSBiWEFWKD2kmrqw%26oe%3D67D136E2%26_nc_sid%3Db41fef",
          "https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Fscontent-muc2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2F478472422_17865432885324848_6752899465950455878_n.jpg%3Fstp%3Ddst-jpg_e15_p360x360_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDE5MjAuc2RyLmY3NTc2MS5kZWZhdWx0X2NvdmVyX2ZyYW1lIn0%26_nc_ht%3Dscontent-muc2-1.cdninstagram.com%26_nc_cat%3D108%26_nc_oc%3DQ6cZ2AHX0QFH3XdhKSMMZk-LFq4NK_o2--T7JGO229iIAmH5d-kYe-cXR3okXVHUsqUl-I4%26_nc_ohc%3DiYl59MJUnTUQ7kNvgGz1nig%26_nc_gid%3D932c671194d443e79bdb9cabebe20b50%26edm%3DABmJApABAAAA%26ccb%3D7-5%26ig_cache_key%3DMzU2NzM1NzQyNjMwNTMyNDk2Ng%253D%253D.3-ccb7-5%26oh%3D00_AYEoQeCA6WFUjfkdHiz_ia6UU9dIIMbfPdYyJiprMsWwKw%26oe%3D67D14805%26_nc_sid%3Db41fef",
          "https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Fscontent-muc2-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F474001296_933279828980761_1585889236956848242_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0%26_nc_ht%3Dscontent-muc2-1.cdninstagram.com%26_nc_cat%3D101%26_nc_oc%3DQ6cZ2AHX0QFH3XdhKSMMZk-LFq4NK_o2--T7JGO229iIAmH5d-kYe-cXR3okXVHUsqUl-I4%26_nc_ohc%3D1hMwHT406LwQ7kNvgGgmfDl%26_nc_gid%3D932c671194d443e79bdb9cabebe20b50%26edm%3DABmJApABAAAA%26ccb%3D7-5%26ig_cache_key%3DMzU0NzA0ODIyNDg5OTE4ODY4NQ%253D%253D.3-ccb7-5%26oh%3D00_AYE6UGO-VpVo-7e2E34JUdpC75E65KAM_ZcsLgxXhsAB7g%26oe%3D67D137BB%26_nc_sid%3Db41fef",
        ].map((val, ind) => (
          <div
            key={ind}
            onMouseEnter={() => handleMouseEnter(ind)}
            onMouseLeave={() => handleMouseLeave(ind)}
            className={`cursor-pointer relative overflow-hidden `}
          >
            <img
              src={val}
              alt="img"
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div id={`image-container-${ind}`} className="w-full  h-full absolute top-0 left-0 z-10">
                </div>
              <p
                ref={(el) => (textRefs.current[ind] = el)} // Store ref for each text element
                className="text-[1rem] w-2/3 text-center font-bold font-family text-white/80 z-20 tracking-tighter opacity-0"
              >
                {getHoverText(ind)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeeLatest;
