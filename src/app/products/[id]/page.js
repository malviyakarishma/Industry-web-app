// src/app/products/[id]/page.js
import React from 'react';
import productsData from '@/components/ProductsSection/ProductData';
import styles from './ProductDetail.module.css'; // You'll create this CSS file

export async function generateStaticParams() {
  return productsData.map(product => ({
    id: product.id,
  }));
}

const ProductDetailPage = ({ params }) => {
  const product = productsData.find(p => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Optionally dynamic details
  const productSpecs = product.details || {
    capacity: '250 tons',
    automation: 'Semi-Auto',
    material: 'Mild Steel',
    returnForce: '50 kN',
    usage: 'Industrial',
    bedSize: '900 x 900'
  };

  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.imgSrc} alt={product.altText} className={styles.image} />
      </div>
      <div className={styles.detailsBox}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.description}>{product.description}</p>
        <h3>Product Details</h3>
        <ul className={styles.detailsList}>
          <li><strong>Capacity:</strong> {productSpecs.capacity}</li>
          <li><strong>Automation Grade:</strong> {productSpecs.automation}</li>
          <li><strong>Material:</strong> {productSpecs.material}</li>
          <li><strong>Return Force:</strong> {productSpecs.returnForce}</li>
          <li><strong>Usage/Application:</strong> {productSpecs.usage}</li>
          <li><strong>Bed Size:</strong> {productSpecs.bedSize}</li>
        </ul>
      </div>
    </main>
  );
};

export default ProductDetailPage;
