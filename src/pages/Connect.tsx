import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Connect() {
    return (
        <div className="max-w-7xl py-28 mx-auto px-6">
            <h2 className="text-6xl font-extrabold text-neutral-300 mb-6">
                Get in Touch!
            </h2>
            <p className="text-neutral-400 text-lg mb-12">
                Feel free to reach out via any of the platforms below or use the form to send a direct message.
            </p>

            <div className="flex w-full items-center gap-10  md:flex-row flex-col ">
                <form
                    action="https://formsubmit.co/tejveersingh.75575@gmail.com" // Replace with your email or service endpoint
                    method="POST"
                    className="bg-zinc-800 p-6 rounded-lg shadow-md w-9/12"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-neutral-300 text-sm font-bold mb-2"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            className="w-full  p-3 border border-neutral-600 rounded-md bg-neutral-900 text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-neutral-300 text-sm font-bold mb-2"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="xzy@example.com"
                            required
                            className="w-full p-3 border border-neutral-600 rounded-md bg-neutral-900 text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-neutral-300 text-sm font-bold mb-2"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Write your message here..."
                            required
                            className="w-full p-3 border border-neutral-600 rounded-md bg-neutral-900 text-white"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-slate-200 text-black px-6 py-3 rounded-md font-bold "
                    >
                        Send Message
                    </button>
                </form>

                <div>
                   
                    <HoverEffect
                        items={socials}
                        className="flex md:flex-col justify-center max-w-3xl mx-auto gap-6"
                    />
                </div>

            </div>
        </div>
    );
}

export const socials = [
    {
        title: "Github",
        logo: <FaGithub size={48} color="white" />,
        link: "https://github.com/tejveer755",
    },
    {
        title: "LinkedIn",
        logo: <FaLinkedin size={48} color="white" />,
        link: "https://www.linkedin.com/in/tejveer-singh-3133a7323/",
    },
    {
        title: "Instagram",
        logo: <FaInstagram size={48} color="white" />,
        link: "tejveersingh.75575email@example.com",
    },
];
