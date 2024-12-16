import React, { useEffect } from "react";
import { gsap } from "gsap";

const HeraSection: React.FC = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        ".heading",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0,delay: .4 , duration: 1, ease: "power3.out" }
      )
      .fromTo(
        ".subheading",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.5" // Starts this animation half a second before the previous ends
      )
      .fromTo(
        ".paragraph",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
  }, []);

  return (
    <>
  <h1 className="heading text-4xl md:text-6xl lg:text-7xl lg:py-4 font-bold bg-gradient-to-br
   from-gray-700 via-gray-800  to-gray-900 
   dark:from-gray-700  dark:via-gray-300 dark:to-gray-500 
   bg-clip-text text-transparent leading-tight pt-0">
    Hi! <br /> I am{" "}
    <span className="text-8xl inline-block pb-4 h-fit">Tejveer Singh.</span>
    <br />
  </h1>
  <h2 className="subheading text-2xl md:text-4xl lg:text-6xl text-start font-bold bg-gradient-to-br
   from-gray-700 dark:via-gray-300 via-gray-800 to-gray-900 dark:to-gray-500
    bg-clip-text text-transparent mt-4 min-h-fit pb-3">
    A Frontend Developer
  </h2>
  <p className="paragraph text-base md:text-lg lg:text-xl w-full md:w-[80%] lg:w-[70%] mt-5 text-gray-700 dark:text-gray-300">
    As a frontend developer, I craft responsive, user-friendly websites with a
    focus on clean code and seamless performance. Using modern technologies
    like React, HTML, CSS, and JavaScript, I turn design concepts into
    interactive web experiences.
  </p>
</>

  );
};

export default HeraSection;
