'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50 mt-16 gap-12" id="contact">
            {/* Background Icons */}
            <motion.div
                className="absolute top-10 right-10 w-10 h-10 bg-orange-300 rounded-full opacity-20"
                variants={{
                    floating: { scale: [1, 1.2, 1], opacity: [0.1, 0.5, 0.1], transition: { duration: 3, repeat: Infinity } }
                }}
                animate="floating"
            />

            {/* Spoon Icon as background */}
            <motion.div
                className="absolute top-20 right-10 w-16 h-16 bg-[url('/icons/spoon.png')] bg-cover bg-center opacity-20"
                variants={{
                    floating: { scale: [1, 1.1, 1], opacity: [0.1, 0.6, 0.1], transition: { duration: 3, repeat: Infinity } }
                }}
                animate="floating"
            />

            {/* Spatula Icon as background */}
            <motion.div
                className="absolute top-40 right-20 w-16 h-16 bg-[url('/icons/spatula.png')] bg-cover bg-center opacity-20"
                variants={{
                    floating: { scale: [1, 1.1, 1], opacity: [0.1, 0.6, 0.1], transition: { duration: 3, repeat: Infinity } }
                }}
                animate="floating"
            />

            {/* Barbecue Icon as background */}
            <motion.div
                className="absolute top-60 right-20 w-16 h-16 bg-[url('/icons/barbecue.png')] bg-cover bg-center opacity-20"
                variants={{
                    floating: { scale: [1, 1.1, 1], opacity: [0.1, 0.6, 0.1], transition: { duration: 3, repeat: Infinity } }
                }}
                animate="floating"
            />

            {/* BBQ Icon as background */}
            <motion.div
                className="absolute bottom-20 right-10 w-16 h-16 bg-[url('/icons/bbq.png')] bg-cover bg-center opacity-20"
                variants={{
                    floating: { scale: [1, 1.1, 1], opacity: [0.1, 0.6, 0.1], transition: { duration: 3, repeat: Infinity } }
                }}
                animate="floating"
            />

            {/* Food Service Icon as background */}
            <motion.div
                className="absolute bottom-40 right-20 w-16 h-16 bg-[url('/icons/food-service.png')] bg-cover bg-center opacity-20"
                variants={{
                    floating: { scale: [1, 1.1, 1], opacity: [0.1, 0.6, 0.1], transition: { duration: 3, repeat: Infinity } }
                }}
                animate="floating"
            />

            {/* Cake Icon as background */}
            <motion.div
                className="absolute bottom-60 right-30 w-16 h-16 bg-[url('/icons/cake.png')] bg-cover bg-center opacity-20"
                variants={{
                    floating: { scale: [1, 1.1, 1], opacity: [0.1, 0.6, 0.1], transition: { duration: 3, repeat: Infinity } }
                }}
                animate="floating"
            />

            {/* Satay Icon as background */}
            <motion.div
                className="absolute bottom-80 right-40 w-16 h-16 bg-[url('/icons/satay.png')] bg-cover bg-center opacity-20"
                variants={{
                    floating: { scale: [1, 1.1, 1], opacity: [0.1, 0.6, 0.1], transition: { duration: 3, repeat: Infinity } }
                }}
                animate="floating"
            />

            {/* Biryani Icon as background */}
            <motion.div
                className="absolute bottom-100 right-50 w-16 h-16 bg-[url('/icons/biryani.png')] bg-cover bg-center opacity-20"
                variants={{
                    floating: { scale: [1, 1.1, 1], opacity: [0.1, 0.6, 0.1], transition: { duration: 3, repeat: Infinity } }
                }}
                animate="floating"
            />

            {/* Chicken Wings Icon as background */}
            <motion.div
                className="absolute top-80 right-40 w-16 h-16 bg-[url('/icons/chicken-wings.png')] bg-cover bg-center opacity-20"
                variants={{
                    floating: { scale: [1, 1.1, 1], opacity: [0.1, 0.6, 0.1], transition: { duration: 3, repeat: Infinity } }
                }}
                animate="floating"
            />



            {/* Left side: Map */}
            <div className="md:w-1/2 mb-8 md:mb-0">
                <iframe
                    className="w-full h-80 rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=..."
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Right side: Contact Info */}
            <div className="md:w-1/2 text-center md:text-left mt-12 md:mt-0"> 
                <h2 className="text-4xl font-oleo text-gray-900 mb-8">Let’s Talk. We’d Love to Hear From You!</h2>

                {/* Contact Info */}
                <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-6">
                        <FaPhoneAlt className="text-orange-500" />
                        <p className="text-lg">+1 (234) 567-8901</p>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                        <FaEnvelope className="text-orange-500" />
                        <p className="text-lg">info@dteez.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-orange-500" />
                        <p className="text-lg">123 Dteez Street, City, Country</p>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center md:justify-start gap-6 mt-8">
                    <a href="https://www.instagram.com/dteez" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl text-orange-500 hover:text-orange-600 transition-colors" />
                    </a>
                    <a href="https://www.facebook.com/dteez" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl text-orange-500 hover:text-orange-600 transition-colors" />
                    </a>
                    <a href="https://www.twitter.com/dteez" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl text-orange-500 hover:text-orange-600 transition-colors" />
                    </a>
                </div>
            </div>
        </section>
    );
}
