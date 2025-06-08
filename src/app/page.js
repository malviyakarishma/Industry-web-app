// src/app/page.js
"use client";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
import YouTubeGallerySection from "@/components/YoutubeGallery/YoutubeGallery";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <YouTubeGallerySection />
      <ServiceSection />
    </>
  );
}
