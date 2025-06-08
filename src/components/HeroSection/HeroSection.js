"use client";

import React from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  const title = "Baneshwari Industries";

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="home" className={styles.heroSection}>
      <video className={styles.heroVideo} autoPlay muted loop playsInline>
        <source src="/videos/3987526-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className={styles.heroOverlay}>
        <div className={`container ${styles.heroContainer}`}>
          <motion.h1
            className={styles.heroTitle}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                className={styles.shinyLetter}
                style={{
                  display: "inline-block",
                  fontWeight: "700",
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <p className={styles.heroSubtitle}>
            Discover our wide range of high-quality products.
          </p>

          {/* New structure with a container and gear images */}
          <div className={styles.buttonContainer}>
            <Link href="/products" className={styles.heroButton}>
              Explore our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
