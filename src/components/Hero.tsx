import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-rich-black flex flex-col justify-center items-center text-center px-4"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m David Kevork
      </motion.h1>
      <motion.p
        className="text-xl text-cool-gray mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Software Engineer | React, Go, Typescript | 3X AWS Certified
      </motion.p>
      <motion.a
        href="#about"
        className="px-6 py-3 border-2 border-azure text-azure rounded-full hover:animate-glow-pulse transition-all"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Learn More
      </motion.a>
    </section>
  );
};

export default Hero;
