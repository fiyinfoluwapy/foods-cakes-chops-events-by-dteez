"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cakeData from "../data/cakes.json";
import { fadeInZoomIn, staggerChildren, fullSizeImage, overlayFade } from "../utils/animations";
import Image from "next/image";
import { usePathname } from "next/navigation";

const categories = ["All", "Birthday Cakes", "Wedding Cakes", "Custom Cakes"];

export default function CakeGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const pathname = usePathname(); //  Get current route

  //  Only show this gallery on /pages/cake-page (Next.js routes it as /pages/cake-page)
  if (pathname !== "/pages/cake-page") return null;

  const filteredCakes =
    selectedCategory === "All"
      ? cakeData
      : cakeData.filter((cake) => cake.category === selectedCategory);

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto mt-16">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full transition-all font-chakra text-xs sm:text-sm md:text-base ${
              selectedCategory === category
                ? "bg-orange-500 text-white font-oleo"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cake Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        {filteredCakes.map((cake) => (
          <motion.div
            key={cake.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            variants={fadeInZoomIn}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(cake.image)}
          >
            <div className="relative w-full h-56">
              <Image
                src={cake.image}
                alt={cake.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{cake.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Full-Size Image Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            variants={overlayFade}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-[90%] h-[90%] max-w-4xl max-h-[90vh]"
              variants={fullSizeImage}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Image
                src={selectedImage}
                alt="Full Size"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
