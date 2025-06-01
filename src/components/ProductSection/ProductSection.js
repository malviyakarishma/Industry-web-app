// src/components/ProductsSection/ProductsSection.js
import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductsSection.module.css';

const productsData = [
  {
    imgSrc: "https://placehold.co/400x300/93C5FD/FFFFFF?text=Product+1",
    altText: "Product 1",
    title: "Industrial Containers",
    description: "Durable and reliable containers for various industrial uses. Available in multiple sizes.",
    link: "#"
  },
  {
    imgSrc: "https://placehold.co/400x300/6EE7B7/FFFFFF?text=Product+2",
    altText: "Product 2",
    title: "Custom Molded Parts",
    description: "Precision-engineered custom parts to meet your specific design requirements.",
    link: "#"
  },
  {
    imgSrc: "https://placehold.co/400x300/FBBF24/FFFFFF?text=Product+3",
    altText: "Product 3",
    title: "Packaging Solutions",
    description: "Innovative and sustainable packaging options for consumer and industrial goods.",
    link: "#"
  },
  {
    imgSrc: "https://placehold.co/400x300/F87171/FFFFFF?text=Product+4",
    altText: "Product 4",
    title: "Automotive Components",
    description: "High-performance plastic components for the automotive industry.",
    link: "#"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className={styles.productsSection}>
      <div className="container">
        <div className={styles.headingContainer}>
          <h2 className={styles.sectionTitle}>Our Products</h2>
          <p className={styles.sectionSubtitle}>
            Discover our wide range of high-quality plastic products designed for various applications.
          </p>
        </div>
        <div className={styles.productsGrid}>
          {productsData.map((product, index) => (
            <ProductCard
              key={index}
              imgSrc={product.imgSrc}
              altText={product.altText}
              title={product.title}
              description={product.description}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;