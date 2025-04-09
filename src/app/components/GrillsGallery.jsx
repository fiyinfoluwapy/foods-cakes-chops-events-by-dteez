"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GrillsData from "../data/grills.json";
import { fadeIn, staggerChildren, fadeInZoomIn, slideInFromBottom, fullSizeImage, overlayFade } from "../utils/animations";

const categories = ["All", "Grills", "Chops",];

export default function GrillsGallery() {
    console.log("GrillsGallery component is loaded!");

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null); // Fix: Changed "Null" to null

    // Corrected filtering logic
    const filteredGrills = selectedCategory === "All"
        ? GrillsData
        : GrillsData.filter(Grills => Grills.category === selectedCategory); // Fix: Corrected category spelling

    return (
        <section className="py-12 px-6 max-w-7xl mx-auto" id="Grills-gallery">
            {/* Category filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full transition-all font-chakra text-xs sm:text-sm md:text-base ${selectedCategory === category
                                ? 'bg-orange-500 text-white font-oleo'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grills Gallery Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
            >
                {filteredGrills.map((Grills) => (
                    <motion.div
                        key={Grills.id}
                        className="bg-white shadow-lg rounded overflow-hidden cursor-pointer"
                        variants={fadeInZoomIn}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImage(Grills.image)} // Open full image size
                    >
                        <img src={Grills.image} alt={Grills.name} className="w-full h-56 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{Grills.name}</h3>
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
                        onClick={() => setSelectedImage(null)} // Close on click
                    >
                        <motion.img
                            src={selectedImage} // Fix: Removed the string quotes
                            alt="Full Size"
                            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                            variants={fullSizeImage}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
