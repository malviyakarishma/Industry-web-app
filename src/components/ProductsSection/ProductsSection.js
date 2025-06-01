// src/components/ProductsSection/ProductsSection.js
import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductsSection.module.css';
import productsData from './ProductData'; // ✅ Correct import

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
              link={`/products/${product.id}`} // ✅ Dynamic product detail link
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
