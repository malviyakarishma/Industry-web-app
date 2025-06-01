// src/components/Footer/Footer.js
'use client'; // For useEffect to get current year
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FacebookIcon, TwitterIcon, InstagramIcon } from '../SVGIcons';
import styles from './Footer.module.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          <div>
            <h3 className={styles.footerTitle}>IndusPlast Co.</h3>
            <p className={styles.footerText}>
              Leading the way in innovative plastic manufacturing and solutions.
            </p>
            <p className={`${styles.footerText} ${styles.address}`}>123 Industrial Park, Cityville, ST 54321</p>
          </div>
          <div>
            <h4 className={styles.linkTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="#about" className={styles.footerLink}>About Us</Link></li>
              <li><Link href="#products" className={styles.footerLink}>Products</Link></li>
              <li><Link href="#services" className={styles.footerLink}>Services</Link></li>
              <li><Link href="#contact" className={styles.footerLink}>Contact Us</Link></li>
              <li><Link href="#" className={styles.footerLink}>Privacy Policy</Link></li> {/* Assuming a placeholder link */}
            </ul>
          </div>
          <div>
            <h4 className={styles.linkTitle}>Connect With Us</h4>
            <div className={styles.socialIcons}>
              <Link href="#" className={styles.socialIconLink} aria-label="Facebook">
                <FacebookIcon className={styles.icon} />
              </Link>
              <Link href="#" className={styles.socialIconLink} aria-label="Twitter">
                <TwitterIcon className={styles.icon} />
              </Link>
              <Link href="#" className={styles.socialIconLink} aria-label="Instagram">
                <InstagramIcon className={styles.icon} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} IndusPlast Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;