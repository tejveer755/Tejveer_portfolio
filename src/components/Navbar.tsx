import React, { useRef, useState, useEffect } from "react";
import { BookUser, CalendarIcon, HomeIcon, MailIcon, MoonIcon, SunIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { buttonVariants } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip";
import { Dock, DockIcon } from "../components/ui/dock";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
    calendar: (props: IconProps) => <CalendarIcon {...props} />,
    email: (props: IconProps) => <MailIcon {...props} />,
    aedin: () => <FaLinkedin />,
    github: () => <FaGithub />,
    moon: () => <MoonIcon />,
    sun: () => <SunIcon />,
};

const DATA = {
    navbar: [
        { href: "#", icon: HomeIcon, label: "Home" },
        { href: "#connect", icon: BookUser, label: "Connect" },
    ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/tejveer755",
                icon: Icons.github,
            },
            Linkedin: {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/tejveer-singh-3133a7323/",
                icon: Icons.aedin,
            },
            "tejveersingh.75575@gmail.com": {
                name: "tejveersingh.75575@gmail.com",
                url: "mailto:tejveersingh.75575@gmail.com",
                icon: Icons.email,
            },
        },
    },
};

export function Navbar() {
    const navbarRef = useRef<HTMLParagraphElement | null>(null);
    useGSAP(() => {
        gsap.fromTo(
            navbarRef.current,
            { y: 70, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: navbarRef.current,
                    scroller: "html",
                    start: "top 85%",
                    end: "top 70%",
                    scrub: true,
                },
            }
        );
    });

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme); // Save theme to localStorage
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <nav
            ref={navbarRef}
            className="fixed z-50 bottom-[5%] left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-transparent"
        >
            <TooltipProvider>
                <Dock direction="middle" className= "bg-white dark:bg-zinc-900 border-zinc-700  md:shadow-xl">
                    {/* Navigation Links */}
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label} magnification={100} distance={220}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={item.href}
                                        aria-label={item.label}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full text-slate-950 dark:text-slate-50"
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}

                    {/* Social Links */}
                    <Separator orientation="vertical" className="h-full dark:text-slate-300 text-black" />
                    {Object.entries(DATA.contact.social).map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={social.url}
                                        aria-label={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full text-slate-950 dark:text-slate-50"
                                        )}
                                    >
                                        <social.icon className="size-4" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}

                    {/* Theme Toggle */}
                    <Separator orientation="vertical" className="h-full dark:text-slate-300 text-black" />
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={toggleTheme}
                                    aria-label="Toggle Theme"
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full text-slate-950 dark:text-slate-50"
                                    )}
                                >
                                    {theme === "dark" ? (
                                        <Icons.sun />
                                    ) : (
                                        <Icons.moon />
                                    )}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Switch to {theme === "dark" ? "Light" : "Dark"} Mode</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </nav>
    );
}
