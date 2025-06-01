// src/components/AboutSection/AboutSection.js
import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimized images
import Link from 'next/link';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.headingContainer}>
          <h2 className={styles.sectionTitle}>About Baneshwari Industries.</h2>
          <p className={styles.sectionSubtitle}>
            Your trusted partner in manufacturing excellence and innovative plastic solutions for over two decades.
          </p>
        </div>
        <div className={styles.contentGrid}>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/aboutus2.jpg" 
              alt="Our Factory" 
              width={600} 
              height={400} 
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.paragraph}>
              At Baneshwari Industries., we are committed to providing top-tier plastic products tailored to meet the specific needs of our clients. Our state-of-the-art manufacturing facilities and a dedicated team of experts ensure that every product meets the highest standards of quality and durability.
            </p>
            <p className={styles.paragraph}>
              We specialize in a wide range of plastic manufacturing processes, including injection molding, blow molding, and extrusion. Our focus on innovation, sustainability, and customer satisfaction has made us a leader in the industry.
            </p>
            <ul className={styles.list}>
              <li>Commitment to Quality</li>
              <li>Sustainable Practices</li>
              <li>Customer-Centric Approach</li>
              <li>Advanced Technology</li>
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;