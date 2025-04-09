'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  fadeIn,
  slideInFromTop,
  slideInFromRight,
  staggerChildren,
} from '../utils/animations';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Cake Gallery', link: '/pages/cake-page' },
    { name: 'Food Gallery', link: '/pages/food-page' },
    { name: 'Grills & Chops', link: '/pages/grills-page' },
    { name: 'Contact', link: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const handleMobileNav = (link) => {
    setIsOpen(false);
    router.push(link);
  };

  return (
    <motion.nav
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolling ? 'bg-black text-white shadow-lg' : 'bg-white text-black shadow-md'
      }`}
    >
      {/* Logo */}
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold font-oleo"
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
          <motion.li key={index} variants={fadeIn}>
            <Link
              href={link.link}
              className="transition-all duration-300 transform hover:scale-105 hover:text-orange-500 hover:font-oleo"
            >
              {link.name}
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
          src={isOpen ? '/menu-close.png' : '/menu-open.png'}
          alt={isOpen ? 'Close menu' : 'Open menu'}
          width={32}
          height={32}
          priority
        />
      </motion.button>

      {/* Dark Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <motion.div
        variants={slideInFromRight}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform md:hidden transition-all duration-500 z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-8 mt-20 text-lg">
          {navLinks.map((link, index) => (
            <motion.li key={index} variants={fadeIn}>
              <button
                onClick={() => handleMobileNav(link.link)}
                className="text-black text-lg transition-all duration-300 transform hover:scale-105 hover:text-orange-500 hover:font-oleo"
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
