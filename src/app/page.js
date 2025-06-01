// src/app/page.js
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import ContactSection from '../components/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServiceSection />
      <ContactSection />
    </>
  );
}