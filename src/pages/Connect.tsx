import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Connect() {
  return (
    <div className="max-w-7xl py-16 px-6 mx-auto">
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-neutral-300 mb-6 ">
        Get in Touch!
      </h2>
      <p className="text-lg text-gray-600 dark:text-neutral-400 mb-12  max-w-2xl">
        Feel free to reach out via any of the platforms below or use the form to send a direct message.
      </p>

      <div className="flex flex-wrap items-start justify-between gap-6">
        {/* Form Section */}
        <form
          action="https://formsubmit.co/tejveersingh.75575@gmail.com"
          method="POST"
          className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-lg shadow-md w-[95%] md:w-[80%] "
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-800 dark:text-neutral-300 text-sm font-bold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 text-gray-900 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 dark:text-neutral-300 text-sm font-bold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="xyz@example.com"
              required
              className="w-full p-3 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 text-gray-900 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-800 dark:text-neutral-300 text-sm font-bold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              required
              className="w-full p-3 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 text-gray-900 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-fit bg-gray-800 dark:bg-slate-200 text-white dark:text-black px-6 py-3 rounded-md font-bold hover:bg-gray-700 dark:hover:bg-gray-300 transition"
          >
            Send Message
          </button>
        </form>

        {/* Socials Section */}
        <div className="flex flex-col gap-6 w-full md:w-[15%]">
          <HoverEffect
            items={socials}
            className="flex flex-row md:flex-col gap-6 justify-center mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export const socials = [
  {
    title: "Github",
    logo: <FaGithub size={48} className="text-gray-800 dark:text-white" />,
    link: "https://github.com/tejveer755",
  },
  {
    title: "LinkedIn",
    logo: <FaLinkedin size={48} className="text-gray-800 dark:text-white" />,
    link: "https://www.linkedin.com/in/tejveer-singh-3133a7323/",
  },
  {
    title: "Instagram",
    logo: <FaInstagram size={48} className="text-gray-800 dark:text-white" />,
    link: "https://www.instagram.com",
  },
];
