// src/components/ProductsSection/ProductCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductsSection.module.css'; // Reuse the same CSS module

const ProductCard = ({ imgSrc, altText, title, description, link }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.cardImageContainer}>
        <Image 
            src={imgSrc} 
            alt={altText} 
            width={400} 
            height={300} 
            className={styles.cardImage} 
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <Link href={link} className={styles.cardLink}>
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;