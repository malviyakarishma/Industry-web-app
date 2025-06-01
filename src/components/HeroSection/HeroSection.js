// src/components/HeroSection/HeroSection.js
import React from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroOverlay}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.heroTitle}>
            Innovative Plastic Solutions
          </h1>
          <p className={styles.heroSubtitle}>
            Delivering high-quality, durable plastic components for various industries.
          </p>
          <div>
            <Link href="#products" className={styles.heroButton}>
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;