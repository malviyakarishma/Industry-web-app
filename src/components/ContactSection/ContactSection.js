// src/components/ContactSection/ContactSection.js
'use client';
import React from 'react';
import styles from './ContactSection.module.css';
// If you prefer using an icon library like react-icons:
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  // This handleSubmit is currently not active because the form uses an 'action' attribute
  // for Formspree. If you want to use this for AJAX submission or client-side validation
  // before Formspree, you would preventDefault and then handle the submission.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Example: Perform client-side validation
    // If valid, you could then manually submit or let Formspree handle via AJAX if configured
    alert('Form submitted via JS (not really, this is a demo and Formspree action is active)!');
    event.target.reset();
  };

  return (
    <section
      id="contact"
      className={styles.contactSection}
      aria-labelledby="contact-section-title"
    >
      <div className={styles.container}> {/* Assumed global container class */}
        <div className={styles.headingContainer}>
          <h2 id="contact-section-title" className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSubtitle}>
            Have a project in mind, need a quote, or want to learn more about our services? We're here to help.
          </p>
        </div>

        <div className={styles.contactContentWrapper}>
          {/* Contact Information Block */}
          <div className={styles.contactInfoContainer}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoText}>
              Fill out the form, or if you prefer, reach out to us directly through one of the channels below.
            </p>
            <ul className={styles.infoList}>
              <li>
                {/* <FaMapMarkerAlt className={styles.infoIcon} /> */}
                <span className={styles.infoIcon}>📍</span> {/* Placeholder Icon */}
                <span>123 Industrial Way, Manufacturing City, ST 54321</span>
              </li>
              <li>
                {/* <FaPhone className={styles.infoIcon} /> */}
                <span className={styles.infoIcon}>📞</span> {/* Placeholder Icon */}
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                {/* <FaEnvelope className={styles.infoIcon} /> */}
                <span className={styles.infoIcon}>✉️</span> {/* Placeholder Icon */}
                <a href="mailto:info@baneshwariindustries.com">info@baneshwariindustries.com</a>
              </li>
            </ul>
            {/* You can add operating hours or a small map here if desired */}
          </div>

          {/* Contact Form Block */}
          <div className={styles.formOuterContainer}>
            <form
              action='https://formspree.io/f/mnnvakjw' // Replace with your Formspree endpoint!
              method='POST'
              // onSubmit={handleSubmit} // Uncomment if you want to handle submission with JS instead of Formspree action
              className={styles.contactForm}
            >
              <div className={styles.formGrid}>
                <div>
                  <label htmlFor="name" className={styles.label}>
                    Full Name <span className={styles.requiredIndicator}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className={styles.inputField}
                    placeholder="e.g., John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={styles.label}>
                    Email Address <span className={styles.requiredIndicator}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className={styles.inputField}
                    placeholder="e.g., john.doe@example.com"
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className={styles.inputField}
                  placeholder="e.g., +1 (555) 123-4567"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className={styles.inputField}
                  placeholder="e.g., Inquiry about Product X"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message <span className={styles.requiredIndicator}>*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className={styles.textareaField}
                  placeholder="Please describe your inquiry in detail..."
                ></textarea>
              </div>
              <div className={styles.submitButtonContainer}>
                <button type="submit" className={styles.submitButton}>
                  <span>Send Message</span>
                  <svg
                    className={styles.buttonIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true" // Decorative icon
                  >
                    <path d="M3.105 3.105a.5.5 0 01.707-.02L19.5 9.435a.5.5 0 010 .848L3.812 16.926a.5.5 0 01-.707-.726L18.293 10 3.105 3.832a.5.5 0 01-.02-.727z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;