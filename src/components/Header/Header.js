'use client'; // This component needs client-side interactivity

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Use Next.js Link for client-side navigation
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null); // Ref for header to get its height

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = headerRef.current ? headerRef.current.offsetHeight : 80;
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          if (isMobileMenuOpen) {
            closeMobileMenu();
          }
        }
      }
    };

    const navLinks = document.querySelectorAll(`.${styles.navLink}, .${styles.mobileNavLink}`);
    navLinks.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, [isMobileMenuOpen]); // Re-run if mobile menu state changes to update links

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoContainer}>
          <Link href="#home" className={styles.logo}>Baneshwari Industries</Link>
        </div>

        {/* UPDATED: Wrapped nav in a div for styling the block */}
        <div className={styles.navWrapper}>
          <nav className={styles.desktopNav}>
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.mobileMenuButtonContainer}>
          <button
            id="mobile-menu-button"
            className={`${styles.mobileMenuButton} menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <div>
              <span className="menu-icon-line line1"></span>
              <span className="menu-icon-line line2"></span>
              <span className="menu-icon-line line3"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileNavLinks}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={styles.mobileNavLink} onClick={closeMobileMenu}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;