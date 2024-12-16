import React, { useRef } from "react";
import { BookUser, CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react";
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
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin,} from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);
export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
    calendar: (props: IconProps) => <CalendarIcon {...props} />,
    email: (props: IconProps) => <MailIcon {...props} />,
    aedin: (props: IconProps) => (
       <FaLinkedin/>
    ),
    github: () => (
        <FaGithub />
    ),
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
            "tejveersingh.75575@gmail.com" : {
                name: "tejveersingh.75575@gmail.com",
                url: "",
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
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: navbarRef.current,
                    scroller: 'html',
                    start: "top 85%",
                    end: "top 70%",
                    scrub: true,
                },
            }
        );
    });

    return (
        <nav ref={navbarRef} className="fixed z-50 bottom-[5%] left-1/2  transform -translate-x-1/2 translate-y-1/2  bg-background md:shadow-xl">
            <TooltipProvider>
                <Dock direction="middle" className="bg-zinc-900" >
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label} magnification={100} distance={220}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={item.href}
                                        aria-label={item.label}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full text-slate-50",
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
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.contact.social).map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={social.url}
                                        aria-label={social.name}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full text-slate-50",
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
                </Dock>
            </TooltipProvider>
        </nav>
    );
}
