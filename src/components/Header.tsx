import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Phone, ShoppingBag, ExternalLink, Leaf } from 'lucide-react';
import { TokopediaLogo, ShopeeLogo, TikTokShopLogo, WhatsAppLogo } from './EcommerceLogos';
import { COMPANY_INFO, getWhatsAppGeneralUrl } from '../data/companyData';

interface HeaderProps {
  onSelectCategory?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Kategori', href: '#kategori' },
    { name: 'Katalog Produk', href: '#katalog' },
    { name: 'FAQ & Khasiat', href: '#faq' },
    { name: 'Lokasi Produksi', href: '#lokasi' },
    { name: 'Kontak Admin', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Certification Bar matching the original design */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 text-center font-medium tracking-wider flex items-center justify-center gap-2 border-b border-stone-800">
        <ShieldCheck className="w-4 h-4 text-emerald-400 inline-block" />
        <span>TERSERTIFIKASI HALAL & BPOM RI</span>
        <span className="hidden sm:inline-block text-stone-500">•</span>
        <span className="hidden sm:inline-block text-stone-300">100% Fermentasi Alami Buah Pilihan Malang</span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
            : 'bg-white border-b border-stone-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#beranda"
            id="brand-logo"
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-amber-700 flex items-center justify-center text-white shadow-sm shadow-emerald-900/10 group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <span className="block text-xl font-bold font-display tracking-tight text-stone-900 group-hover:text-emerald-700 transition-colors">
                Salwa Nutrisindo
              </span>
              <span className="block text-[11px] text-stone-500 font-medium tracking-tight">
                Cuka Buah Alami Nusantara
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-stone-700 hover:text-emerald-700 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick Channels: Tokopedia, Shopee, TikTok Shop, WhatsApp */}
          <div className="hidden sm:flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 pr-2 border-r border-stone-200">
              <a
                href={COMPANY_INFO.tokopediaShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Toko Resmi Tokopedia"
                className="p-1.5 rounded-lg hover:bg-stone-100 transition-colors hover:scale-110"
              >
                <TokopediaLogo className="w-6 h-6" />
              </a>
              <a
                href={COMPANY_INFO.shopeeShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Toko Resmi Shopee"
                className="p-1.5 rounded-lg hover:bg-stone-100 transition-colors hover:scale-110"
              >
                <ShopeeLogo className="w-6 h-6" />
              </a>
              <a
                href={COMPANY_INFO.tiktokShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Toko Resmi TikTok Shop"
                className="p-1.5 rounded-lg hover:bg-stone-100 transition-colors hover:scale-110"
              >
                <TikTokShopLogo className="w-6 h-6" />
              </a>
            </div>

            {/* Direct Admin WhatsApp CTA */}
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="header-wa-cta"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm hover:shadow transition-all"
            >
              <WhatsAppLogo className="w-4 h-4" />
              <span>Hubungi Admin</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              title="Hubungi Admin WhatsApp"
            >
              <WhatsAppLogo className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-100 bg-white px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-emerald-700 hover:bg-stone-50"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <p className="text-xs font-semibold uppercase text-stone-500 tracking-wider px-3">
                Kanal E-Commerce Resmi
              </p>
              <div className="grid grid-cols-3 gap-2 px-1">
                <a
                  href={COMPANY_INFO.tokopediaShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-50"
                >
                  <TokopediaLogo className="w-4 h-4" />
                  <span>Tokopedia</span>
                </a>
                <a
                  href={COMPANY_INFO.shopeeShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-50"
                >
                  <ShopeeLogo className="w-4 h-4" />
                  <span>Shopee</span>
                </a>
                <a
                  href={COMPANY_INFO.tiktokShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-50"
                >
                  <TikTokShopLogo className="w-4 h-4" />
                  <span>TikTok</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <WhatsAppLogo className="w-5 h-5" />
                  <span>Konsultasi / Hubungi Admin</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
