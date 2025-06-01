// src/components/ContactSection/ContactSection.js
'use client'; // For form handling if client-side logic is added
import React from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Form submitted (not really, this is a demo)!');
    event.target.reset();
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.headingContainer}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSubtitle}>
            Have a project in mind or need more information? Contact us today!
          </p>
        </div>
        <div className={styles.formContainer}>
          <form action='https://formspree.io/f/mnnvakjw'
                method='POST'>
            <div className={styles.formGrid}>
              <div>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" name="name" id="name" required className={styles.inputField} />
              </div>
              <div>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" name="email" id="email" required className={styles.inputField} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input type="text" name="subject" id="subject" className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea name="message" id="message" rows="4" required className={styles.textareaField}></textarea>
            </div>
            <div className={styles.submitButtonContainer}>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;