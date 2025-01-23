import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../Components/layout/Layout";
import HeroImg from "../assets/hero-img-2.png";
import { Link } from "react-router-dom";

export default function Index() {
  // Framer Motion animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center">
        {/* Hero Section */}
        <section id="hero" className="w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column */}
              <div className="text-white space-y-6">
                <motion.h1
                  className="text-4xl sm:text-5xl font-extrabold leading-tight"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  Part-Time Job Opportunities
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl text-slate-100"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ delay: 0.2 }}
                >
                  Part-time employment for students, such as gaining valuable
                  work experience, developing time management skills, and
                  earning extra income.
                </motion.p>

                <motion.div
                  className="flex space-x-4"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/login"
                    className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-100 transition"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>

              {/* Right Column */}
              {/* <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, x: -10, y: 10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [10, -10, 10] // Smooth up and down motion
                }}
                transition={{
                  duration: 0,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <motion.img
                  src={HeroImg}
                  className="w-full rounded-2xl max-w-md sm:max-w-lg lg:max-w-xl"
                  alt="Hero"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0 }} // Removes additional animations
                />
              </motion.div> */}
              {/* <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: [0, -20, 0] // Moves up 20px, then back to the initial position
                }}
                transition={{
                  duration: 2, // Duration for one complete cycle
                  ease: "easeInOut", // Easing for a smooth effect
                  repeat: Infinity, // Makes it loop infinitely
                  repeatType: "loop" // Ensures the loop is continuous
                }}
              >
                <motion.img
                  src={HeroImg}
                  className="w-full rounded-2xl max-w-md sm:max-w-lg lg:max-w-xl"
                  alt="Hero"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{
                    scale: 1, // Smoothly scales up
                    opacity: 1 // Fades in
                  }}
                  transition={{
                    duration: 1, // Controls how long the fade-in and scale take
                    ease: "easeOut"
                  }}
                />
              </motion.div> */}
              {/* <motion.div
  className="flex justify-center items-center"
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [0, -20, 0], // Moves up 20px, then back to the initial position
  }}
  transition={{
    duration: 2, // Duration for one full cycle (up and down)
    ease: "easeInOut", // Smooth easing for the motion
    repeat: Infinity, // Infinite loop for continuous animation
  }}
>
  <motion.img
    src={HeroImg}
    className="w-full rounded-2xl max-w-md sm:max-w-lg lg:max-w-xl"
    alt="Hero"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{
      scale: 1, // Smoothly scales up
      opacity: 1, // Fades in
    }}
    transition={{
      duration: 1, // Controls how long the fade-in and scale take
      ease: "easeOut",
    }}
  />
</motion.div> */}
<motion.div
  className="flex justify-center items-center"
  initial={{ opacity: 0, y: 10 }}
  animate={{
    opacity: 1,
    y: [10, -10, 0], // Quick bounce motion: down, up, then settle
  }}
  transition={{
    duration: 1, // Total duration of the motion
    ease: "easeInOut", // Smooth easing for natural motion
  }}
>
  <motion.img
    src={HeroImg}
    className="w-full rounded-2xl max-w-md sm:max-w-lg lg:max-w-xl"
    alt="Hero"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{
      scale: 1, // Smoothly scales up
      opacity: 1, // Fades in
    }}
    transition={{
      duration: 1, // Controls how long the fade-in and scale take
      ease: "easeOut",
    }}
  />
</motion.div>


            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
