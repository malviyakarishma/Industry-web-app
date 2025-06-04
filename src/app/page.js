// src/app/page.js
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import ProductsSection from '@/components/ProductsSection/ProductsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection/>
      <ServiceSection />     
    </>
  );
}