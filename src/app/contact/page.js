// src/app/contact/page.js
import React from 'react';
import ContactSection from '../../components/ContactSection/ContactSection'; // Adjust path if your components folder is elsewhere
// Optional: You can create specific styles for this page if needed
// import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <div> {/* You can add a wrapper div with custom styling if needed */}
      {/* You could add a page-specific title or introductory text here */}
      {/* <h1 className={styles.pageTitle}>Contact Us</h1> */}
      <ContactSection />
    </div>
  );
}