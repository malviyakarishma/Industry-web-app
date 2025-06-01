// src/components/ServicesSection/ServiceItem.js
import React from 'react';
import styles from './ServiceSection.module.css';

const ServiceItem = ({ IconComponent, title, description }) => {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.iconContainer}>
        <IconComponent className={styles.serviceIcon} />
      </div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  );
};

export default ServiceItem;