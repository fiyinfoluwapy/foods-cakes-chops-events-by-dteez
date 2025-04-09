"use client";
import { motion } from "framer-motion";
import { fadeInZoomIn, slideInFromBottom, staggerChildren } from "../utils/animations";
import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Dteez Cakes",
    image: "/dteez-cakes.jpg",
    description: "Custom cakes for every occasion.",
    link: "/pages/cake-page"
  },
  {
    name: "Dteez Foods",
    image: "/dteez-food.jpg",
    description: "Delicious home-cooked meals, made fresh daily.",
    link: "/pages/food-page"
  },
  {
    name: "Dteez Chops & Grills",
    image: "/dteez-grills.jpg",
    description: "Tasty grilled delicacies and small chops for your events.",
    link: "/pages/grills-page"
  }
];

export default function MeetOurBrands({ onButtonClick }) {
  return (
    <section id="meet-our-brands" className="py-16 bg-white text-center">
      <motion.h2
        className="text-4xl font-oleo text-gray-900 mb-8"
        variants={slideInFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Meet Our Brands
      </motion.h2>

      <motion.div
        className="grid gap-8 px-4 md:grid-cols-3"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden group bg-white p-4 relative"
            variants={fadeInZoomIn}
            whileHover={{ scale: 1.05 }}
          >
            <Link href={brand.link} className="block">
              <div className="cursor-pointer">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-oleo text-gray-900">{brand.name}</h3>
                  <p className="text-gray-700 text-lg font-medium font-cormorant mt-2">
                    {brand.description}
                  </p>
                </div>
                <div className="relative w-full h-64">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Add a button to trigger onButtonClick */}
                  {/* {brand.name === "Dteez Cakes" && ( */}
                    <button
                      className="bg-white text-black px-4 py-2 rounded-lg font-semibold font-oleo shadow-md"
                      onClick={onButtonClick}
                    >
                      Explore {brand.name}
                    </button>
                  {/* )} */}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
