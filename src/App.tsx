import React from 'react'
import { AuroraBackground } from './components/ui/aurora-background'
import HeraSection from './components/HeraSection'
import CustomCursor from './components/CustomCursor'
import AboutPage from './pages/AboutPage';
import { Navbar } from './components/Navbar';
import { VelocityScroll } from './components/ui/scroll-based-velocity';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaSass, FaGithub} from "react-icons/fa";
import { SiNextdotjs,  SiTailwindcss, SiFigma } from "react-icons/si";
import { Projects } from './pages/Projects';
import { Connect } from './pages/Connect';



const App: React.FC = () => {

  interface TechStack {
    name: string;
    icon: JSX.Element;
  }


  const techStacks: TechStack[] = [
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "Next.js", icon: <SiNextdotjs color="white" /> },
    { name: "Sass", icon: <FaSass color="#CC6699" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
    {name: "Git", icon :  <FaGithub color='white' />},
    { name: "Node.js", icon: <FaNode color="#68A063" /> },
  ];
  return (
    <main className='relative bg-gradient-to-t from-zinc-50 dark:from-zinc-900 to-zinc-50 dark:to-zinc-950   min-w-full min-h-fit h-[100vh] cursor-none z-10'>
      <CustomCursor />
      <Navbar />
      <AuroraBackground className={"bg-transparent dark:bg-transparent items-start pl-10 md:pl-20"}>
        <HeraSection />
      </AuroraBackground>

      <AboutPage />
      <div className='my-20'>
        <VelocityScroll techStacks={techStacks} default_velocity={1} className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-neutral-950 dark:text-neutral-200 md:text-4xl md:leading-[5rem] " />
      </div>
      <Projects />
      <div id='connect'>
        <Connect />
      </div>
    </main>
  )
}

export default App