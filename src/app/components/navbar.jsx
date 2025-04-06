'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeIn, slideInFromTop, slideInFromRight, staggerChildren } from '../utils/animations';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Use router for navigation

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Food Gallery', link: '/food-gallery' },
    { name: 'Cake Gallery', link: '/cake-gallery' },
    { name: 'Grills & Chops', link: '/grills-gallery' },
    { name: 'Contact', link: '/contact' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  // Handle mobile navigation properly
  const handleMobileNav = (link) => {
    setIsOpen(false); // Close menu
    router.push(link); // Navigate to the link
  };

  return (
    <motion.nav
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full bg-babyPink shadow-lg p-4 flex justify-between items-center z-50"
    >
      {/* Logo */}
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold font-chakra text-blue-500"
      >
        Dteez
      </motion.h1>

      {/* Desktop Navigation */}
      <motion.ul
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="hidden md:flex gap-8"
      >
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            variants={fadeIn}
            className="transition duration-300"
          >
            <Link href={link.link} passHref>
              <a className="text-black hover:text-orange-500 hover:font-chakra">
                {link.name}
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Mobile Menu Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden z-50"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={isOpen ? "/menu-close.png" : "/menu-open.png"}
          alt={isOpen ? "Close menu" : "Open menu"}
          width={32}
          height={32}
          priority
        />
      </motion.button>

      {/* Dark Overlay 
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}

      {/* Mobile Menu */}
      <motion.div
        variants={slideInFromRight}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform md:hidden transition-all duration-500 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col items-center gap-8 mt-20 text-lg">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              variants={fadeIn}
              className="cursor-pointer transition duration-300"
            >
              <button
                onClick={() => handleMobileNav(link.link)}
                className="text-black text-lg hover:text-orange-500 hover:font-chakra"
              >
                {link.name}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </motion.nav>
  );
}
