import React, { useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor: React.FC = () => {
  useEffect(() => {
    // Reference to the custom cursor
    const cursor = document.querySelector("#cursor") as HTMLElement;
    if (!cursor) return;

    let lastX = 0;
    let lastY = 0;

    // Handler for mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const dx = clientX - lastX;
      const dy = clientY - lastY;

      // Scale the cursor based on movement direction
      const scaleX = Math.min(1 + Math.abs(dx) / 100, 1.5);
      const scaleY = Math.min(1 + Math.abs(dy) / 100, 1.5);

      // Animate the cursor movement and scaling
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        scaleX: dx > 0 ? scaleX : 1,
        scaleY: dy > 0 ? scaleY : 1,
        duration: 0.1,
        ease: "power2.out",
      });

      // Reset scaling after the movement
      gsap.to(cursor, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.2,
        ease: "elastic.out(1, 0.3)",
        delay: 0.1,
      });

      lastX = clientX;
      lastY = clientY;
    };

    // Make the cursor visible on initialization
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: "back.out(1.7)",
    });

    // Add mousemove listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup mousemove listener
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="fixed mix-blend-exclusion w-4 h-4 rounded-full bg-white opacity-0 pointer-events-none select-none z-50"
      style={{ transform: "translate(-50%, -50%)" }}
    ></div>
  );
};

export default CustomCursor;