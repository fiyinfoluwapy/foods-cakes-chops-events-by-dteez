'use client'; 

import { motion } from "framer-motion";
import Image from 'next/image'; 
import { useEffect, useState } from "react";
import { textStagger, fadeIn, floatingButton } from "../utils/animations";  

export default function Header() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY * 0.3);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headingText = "From Custom Cakes to Mouthwatering Meals – We Serve Delight in Every Bite!".split("");
    const subText = "From delicious cakes to sizzling grills, Dteez brings you a taste of excellence.".split("");

    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50 mt-16"> {/* Increased mt-16 for more space */}
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
                    onClick={() => document.getElementById("meet-our-brands")?.scrollIntoView({ behavior: "smooth" })}
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
                    src="/header-image.jpg"  // Ensure the image is in the public folder
                    alt="Header"
                    width={384}  // Adjust the size based on your image's dimensions
                    height={384}
                    className="rounded-lg shadow-lg object-cover"
                />
            </motion.div>
        </section>
    );
}
