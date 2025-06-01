// src/components/ServicesSection/ServicesSection.js
import React from 'react';
import ServiceItem from './ServiceItems';
import { DesignIcon, QualityIcon, DeliveryIcon } from '../SVGIcons'; // Import SVGs
import styles from './ServiceSection.module.css';

const servicesData = [
  {
    Icon: (props) => <DesignIcon {...props} />, // Pass props to SVG
    title: "Product Design",
    description: "Collaborative design and prototyping services to bring your ideas to life."
  },
  {
    Icon: (props) => <QualityIcon {...props} />,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control at every stage of production."
  },
  {
    Icon: (props) => <DeliveryIcon {...props} />,
    title: "Logistics & Delivery",
    description: "Efficient supply chain management for timely delivery worldwide."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <div className={styles.headingContainer}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive services from design to delivery.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              IconComponent={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;