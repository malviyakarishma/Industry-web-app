// src/app/contact/page.js
import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
// Optional: You can create specific styles for this page if needed
// import styles from './ContactPage.module.css';

export default function Aboutpage() {
  return (
    <div> {/* You can add a wrapper div with custom styling if needed */}
      {/* You could add a page-specific title or introductory text here */}
      {/* <h1 className={styles.pageTitle}>Contact Us</h1> */}
      <AboutSection />
    </div>
  );
}