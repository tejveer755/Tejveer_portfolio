"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import swn_1 from '../assets/swn_1.png'
import swn_2 from '../assets/swn_2.png'
import swn_3 from '../assets/swn_3.png'
import swn_4 from '../assets/swn_4.png'
import quiz_1 from '../assets/quiz_1.png'
import quiz_2 from '../assets/quiz_2.png'
import cinfo_1 from '../assets/cinfo_1.png'
import cinfo_2 from '../assets/cinfo_2.png'
import tenzies_1 from '../assets/tenzies.png'
import tmp from '../assets/tmp.png'
import stw from '../assets/stw.png'
import weather_app from '../assets/weather_app.png'
import cyberpunklp from '../assets/cyberpunk.png'

export function Projects() {
  return <HeroParallax products={products}  />;
}
export const products = [
  {
    title: "Social Netwirking Website",
    link: "https://social-networking-website-1.onrender.com/",
    thumbnail: swn_2,
  },

  {
    title: "Social Netwirking Website",
    link: "https://social-networking-website-1.onrender.com/",
    thumbnail: swn_1,
  },
  {
    title: "Social Netwirking Website",
    link: "https://social-networking-website-1.onrender.com/",
    thumbnail: swn_3,
  },
  {
    title: "Social Netwirking Website",
    link: "https://social-networking-website-1.onrender.com/",
    thumbnail: swn_4,
  },
  {
    title: "Quiz App",
    link: "https://tejveer755.github.io/Quiz-app/",
    thumbnail: quiz_1,
  },
  {
    title: "Quiz App",
    link: "https://tejveer755.github.io/Quiz-app/",
    thumbnail: quiz_2,
  },
  {
    title: "Country Info Website",
    link: "https://tejveer755.github.io/countries-info-website/",
    thumbnail: cinfo_2,
  },
  {
    title: "Country Info Website",
    link: "https://tejveer755.github.io/countries-info-website/",
    thumbnail: cinfo_1,
  },
  {
    title: "Quiz App",
    link: "https://tejveer755.github.io/Quiz-app/",
    thumbnail: quiz_1,
  },
  {
    title: "Quiz App",
    link: "https://tejveer755.github.io/Quiz-app/",
    thumbnail: quiz_2,
  },
  {
    title: "Task Management app",
    link: "https://tejveer755.github.io/task-management-app/",
    thumbnail: tmp,
  },
  {
    title: "Tenzies Game",
    link: "https://tejveer755.github.io/tenzies-game/",
    thumbnail: tenzies_1 ,
  },
  {
    title: "Space tousrism Website",
    link: "https://tejveer755.github.io/space-tour-programe/",
    thumbnail: stw ,
  },
  {
    title: "Weather App",
    link: "https://tejveer755.github.io/Weather-app/",
    thumbnail: weather_app ,
  },
  {
    title: "Three Js cyberpunk Landind Page",
    link: "https://threejs-cyberpunk-landing-page.vercel.app/",
    thumbnail: cyberpunklp ,
  },
];
