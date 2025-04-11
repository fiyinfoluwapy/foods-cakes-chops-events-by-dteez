'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { textStagger, fadeIn, floatingButton, floatingAccents } from "../utils/animations";

export default function Header() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Scroll into view if hash is #home-page
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#home-page') {
      const el = document.getElementById('home-page');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // wait a bit to ensure render complete
      }
    }
  }, []);

  const headingText = "From Custom Cakes to Mouthwatering Meals – We Serve Delight in Every Bite!".split("");
  const subText = "From delicious cakes to sizzling grills, Dteez brings you a taste of excellence.".split("");

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50 mt-16"
      id="home-page"
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-oleo text-gray-900 tracking-normal leading-tight">
          {headingText.map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={textStagger}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 font-chakra mt-4 font-light">
          {subText.map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={textStagger}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </p>

        <motion.button
          variants={floatingButton}
          animate="floating"
          className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold font-oleo rounded-full shadow-lg hover:bg-orange-600 transition-all"
          onClick={() =>
            document.getElementById("meet-our-brands")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Now
        </motion.button>
      </div>

      {/* Image Section */}
      <motion.div
        style={{ transform: `translateY(${offsetY}px)` }}
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
      >
        <Image
          src="/header-image.jpg" // Make sure the image exists in public/
          alt="Header"
          width={384}
          height={384}
          className="rounded-lg shadow-lg object-cover"
        />
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-10 h-10 bg-orange-400 rounded-full opacity-30"
        variants={floatingAccents}
        animate="floating"
      />
      <motion.div
        className="absolute bottom-10 right-10 w-14 h-14 bg-yellow-500 rounded-full opacity-30"
        variants={floatingAccents}
        animate="floating"
      />
    </section>
  );
}
