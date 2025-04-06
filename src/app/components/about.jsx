'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInZoomIn,
  slideInFromLeft,
  staggerChildren,
  textStagger,
  floatingAccents
} from "../utils/animations";

export default function AboutSection() {
  const aboutText = [
    "Crafting exquisite flavors,",
    "one dish at a time,",
    "with passion & precision."
  ];

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50">
      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        variants={fadeInZoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src="/ceo-image.jpg" // direct path from /public
          alt="CEO"
          className="rounded-lg shadow-lg object-cover"
          width={384}
          height={384}
          priority
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {aboutText.map((line, index) => (
          <motion.h2
            key={index}
            className="text-3xl md:text-4xl font-bold text-gray-900 font-oleo leading-tight"
            variants={textStagger}
            custom={index}
          >
            {line}
          </motion.h2>
        ))}
        <motion.p
          className="text-lg text-gray-700 font-chakra mt-4"
          variants={slideInFromLeft}
        >
          At Dtees, we bring together passion, creativity, and the finest ingredients to craft unforgettable culinary experiences.
        </motion.p>
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
