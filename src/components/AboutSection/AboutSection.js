// src/components/AboutSection/AboutSection.js
import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimized images
import Link from 'next/link'; // Keep Link for the CTA
import styles from './AboutSection.module.css';
// Optional: Import an icon library if you want to add icons to list items or buttons
// import { ChevronRightIcon } from '@heroicons/react/solid'; // Example using Heroicons

const AboutSection = () => {
  const keyStrengths = [
    { id: 1, text: "Unwavering Commitment to Quality", icon: "✔️" }, // Simple emoji icon, replace with SVG or font icon
    { id: 2, text: "Sustainable & Eco-Friendly Practices", icon: "♻️" },
    { id: 3, text: "Dedicated Customer-Centric Approach", icon: "🤝" },
    { id: 4, text: "Leveraging Advanced Manufacturing Technology", icon: "⚙️" },
  ];

  return (
    <section 
      id="about" 
      className={styles.aboutSection}
      aria-labelledby="about-section-title" // For accessibility
    >
      <div className={styles.container}> {/* Assuming this is your global container class for width constraint & centering */}
        <div className={styles.headingContainer}>
          <h2 id="about-section-title" className={styles.sectionTitle}>
            About Baneshwari Industries
          </h2>
          <p className={styles.sectionSubtitle}>
            Your trusted partner in manufacturing excellence and innovative plastic solutions for over two decades.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/aboutus2.jpg" // Ensure this is a high-quality, compelling image
              alt="State-of-the-art manufacturing facility at Baneshwari Industries" // More descriptive alt text
              width={600} 
              height={450} // Adjusted height for a slightly different aspect ratio, match your image
              className={styles.aboutImage}
              priority // Consider adding priority if this image is above the fold
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.paragraph}>
              At Baneshwari Industries, we are dedicated to delivering top-tier plastic products precisely tailored to meet the diverse needs of our valued clients. Our advanced manufacturing facilities and a passionate team of experts ensure every product adheres to the highest standards of quality, durability, and innovation.
            </p>
            <p className={styles.paragraph}>
              We specialize in a comprehensive range of plastic manufacturing processes, including precision injection molding, versatile blow molding, and efficient extrusion. Our unwavering focus on innovation, operational sustainability, and complete customer satisfaction has established us as a recognized leader in the industry.
            </p>
            
            <h3 className={styles.strengthsTitle}>Our Key Strengths:</h3>
            <ul className={styles.strengthsList}>
              {keyStrengths.map((strength) => (
                <li key={strength.id} className={styles.strengthItem}>
                  {/* Example for using an actual icon component:
                  {strength.icon && <strength.icon className={styles.strengthIcon} />} 
                  */}
                  <span className={styles.strengthIcon}>{strength.icon}</span> {/* Simple text/emoji icon */}
                  <span>{strength.text}</span>
                </li>
              ))}
            </ul>
            
            <div className={styles.ctaContainer}>
              <Link href="/contact" className={styles.ctaButton}>
                Partner With Us
                {/* Optional: <ChevronRightIcon className={styles.ctaIcon} /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;