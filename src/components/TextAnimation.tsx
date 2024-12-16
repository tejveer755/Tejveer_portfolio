import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface TextAnimationProps {
  text: string; // Prop type for the text
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null); // Ref to the paragraph

  useGSAP(() => {
    if (!paragraphRef.current) return; // Ensure the DOM element is available

    const words = paragraphRef.current.querySelectorAll('.word'); // Select all words in the paragraph

    // Create a GSAP timeline for this paragraph
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphRef.current, // Trigger animation when this paragraph enters view
        start: 'top 90%',
        end: 'top 40%',
        scrub: true,
        // markers: true, // Uncomment to debug ScrollTrigger positions
      },
    });

    // Add each word animation to the timeline with staggered delays
    tl.fromTo(
      words,
      { opacity: 0.2, y: 10 }, // Start position: slightly below and faded out
      {
        opacity: 1,
        y: 0, // End position: fully visible at original position
        duration: 0.3,
        stagger: 0.1, // Stagger the animations
        ease: 'power2.out',
      }
    );
  }, []);

  // Split text into individual words wrapped in span elements
  const splitTextIntoWords = (text: string) =>
    text.split(' ').map((word, index) => (
      <span key={index} className="word overflow-hidden inline-block mr-1">
        {word}
      </span>
    ));

  return (
    <p ref={paragraphRef} className="text-xl text-gray-200 leading-relaxed">
      {splitTextIntoWords(text)}
    </p>
  );
};

export default TextAnimation;
