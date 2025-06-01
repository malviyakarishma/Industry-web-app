// src/app/page.js
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ServiceSection from '../components/ServiceSection/ServiceSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />     
    </>
  );
}