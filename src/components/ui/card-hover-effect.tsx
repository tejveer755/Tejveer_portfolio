import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    logo: React.ReactNode;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-zinc-200 dark:bg-neutral-400/[0.8]  block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-4 relative z-50 bg-zinc-100 dark:bg-zinc-800 rounded-3xl transition"
          >
            <div className="text-4xl mb-2 dark:text-white text-black">{item.logo}</div>
            <span className="text-neutral-900 dark:text-neutral-300 font-semibold">{item.title}</span>
          </div>
        </a>
      ))}
    </div>
  );
};
