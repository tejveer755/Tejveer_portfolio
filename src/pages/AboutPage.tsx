import React from "react";
import TextAnimation from "../components/TextAnimation";
import { Timeline } from "../components/ui/timeline";
import swn_1 from '../assets/swn_1.png'
import swn_2 from '../assets/swn_2.png'
import swn_3 from '../assets/swn_3.png'
import swn_4 from '../assets/swn_4.png'
import quiz_1 from '../assets/quiz_1.png'
import quiz_2 from '../assets/quiz_2.png'
import cinfo_1 from '../assets/cinfo_1.png'
import cinfo_2 from '../assets/cinfo_2.png'
import tenzies_1 from '../assets/tenzies.png'
import stw from '../assets/stw.png'
import weather_app from '../assets/weather_app.png'
import cyberpunklp from '../assets/cyberpunk.png'
 
const AboutPage: React.FC = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-6">
            Built and launched a Social Networking Website with NodeJS.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
              src={swn_1}
              alt="startup template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full object-center shadow-lg"
            />
            <img
              src={swn_2}
              alt="startup template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full object-center shadow-lg"
            />
            <img
              src={swn_3}
              alt="startup template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full object-center shadow-lg"
            />
            <img
              src={swn_4}
              alt="startup template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full object-center shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-4">
          Build a interactive quiz game with multiple-choice questions and country Info Website. Built using React.js, JavaScript , API, and CSS.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
              src={quiz_1}
              alt="hero template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={quiz_2}
              alt="feature template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={cinfo_1}
              alt="bento template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={cinfo_2}
              alt="bento template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-4">
            Build These projects that helped me to get better understanding of how things work in web development
          </p>
          <div className="mb-6">
            <ul className="list-disc list-inside text-neutral-300 text-xs sm:text-sm md:text-base">
              <li>Tenzie Game</li>
              <li>Task Management app</li>
              <li>threejs cyberpunk landing page</li>
              <li>Weather App</li>
              <li>Space tourism website</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
              src={tenzies_1}
              alt="hero template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={cyberpunklp}
              alt="feature template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={stw}
              alt="bento template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={weather_app}
              alt="cards template"
              className="rounded-lg object-cover h-20 sm:h-32 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex cursor-none pt-24 sm:pt-32 flex-col items-center justify-center w-full min-h-screen mx-auto text-white overflow-hidden relative">
      {/* Watermark Heading */}
      <h2
        className="absolute -top-7 md:top-60 lg:-left-16  text-center m-0 text-nowrap md:-rotate-90 text-[5rem] sm:text-[7rem] font-bold text-neutral-100 opacity-60 select-none pointer-events-none z-0"
        style={{
          textShadow:
            "rgb(33 30 30 / 50%) -3px 7px 4px, rgb(147 141 141 / 30%) 0px 6px 0px",
        }}
      >
        About Me
      </h2>

      <div className="container px-6 sm:px-12 lg:px-72 relative z-10">
        <div className="max-w-4xl gap-12 items-center relative">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
              Who I Am
            </h3>
            <p className="text-sm sm:text-base lg:text-xl text-gray-200 leading-relaxed">
              <TextAnimation
                text={
                  "An 19-year-old web Developer based in Delhi, India. Currently, I'm pursuing a Bachelor's in Compute Applications from the Institute of Information Technology, where I’m diving deep into the world of technology and software development."
                }
              />
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full mt-16 sm:mt-24">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default AboutPage;
