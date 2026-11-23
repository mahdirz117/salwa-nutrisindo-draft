import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { ProductCatalog } from './components/ProductCatalog';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ProductionLocation } from './components/ProductionLocation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const handleSelectCategory = (catSlug: string) => {
    setSelectedCategory(catSlug);
    const catalogEl = document.getElementById('katalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCatalog = () => {
    const catalogEl = document.getElementById('katalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreFAQ = () => {
    const faqEl = document.getElementById('faq');
    if (faqEl) {
      faqEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans">
      {/* Top Header & Navigation */}
      <Header onSelectCategory={handleSelectCategory} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreCatalog={handleExploreCatalog}
          onExploreFAQ={handleExploreFAQ}
        />

        {/* Featured Categories */}
        <FeaturedCategories onSelectCategory={handleSelectCategory} />

        {/* Product Catalog Gateway with E-Commerce & WhatsApp Links */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* About Company & Quality Standards */}
        <AboutSection />

        {/* Comprehensive FAQ Section */}
        <FAQSection />

        {/* Production Location & Factory Map */}
        <ProductionLocation />

        {/* Contact Information & Interactive Consultation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Consultation Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

