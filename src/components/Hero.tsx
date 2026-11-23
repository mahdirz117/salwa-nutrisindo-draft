import React from 'react';
import { ArrowDown, ShieldCheck, Sparkles, CheckCircle2, PhoneCall, Award, Leaf } from 'lucide-react';
import { TokopediaLogo, ShopeeLogo, TikTokShopLogo, WhatsAppLogo } from './EcommerceLogos';
import { COMPANY_INFO, getWhatsAppGeneralUrl } from '../data/companyData';

interface HeroProps {
  onExploreCatalog: () => void;
  onExploreFAQ: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onExploreFAQ }) => {
  return (
    <section id="beranda" className="relative w-full overflow-hidden bg-stone-900 text-white">
      {/* Background with Rich Texture and Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=2000&q=85"
          alt="Cuka Buah Alami Salwa Nutrisindo"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform duration-1000 ease-out hover:scale-100"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/70 to-stone-900/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 flex flex-col items-center text-center">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase text-emerald-300 mb-6 shadow-inner animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>PT. SALWA NUTRISINDO</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white max-w-3xl leading-[1.1] mb-6 drop-shadow-sm">
          Cuka Buah <span className="text-emerald-400">Alami</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-stone-200 max-w-2xl font-light leading-relaxed mb-10 drop-shadow">
          Nikmati dan Rasakan Khasiat Beragam Cuka Buah Fermentasi Alami Khas Pegunungan Malang untuk Daya Tahan & Kebugaran Optimal
        </p>

        {/* Dual Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onExploreCatalog}
            id="hero-btn-catalog"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-stone-900 font-bold text-base hover:bg-stone-100 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer"
          >
            Katalog Produk
          </button>
          <a
            href={getWhatsAppGeneralUrl('Halo Admin Salwa Nutrisindo, saya ingin konsultasi mengenai manfaat dan pemesanan produk cuka buah alami.')}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-btn-wa"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-base backdrop-blur-md border border-emerald-500/40 transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2.5"
          >
            <WhatsAppLogo className="w-5 h-5" />
            <span>Konsultasi Admin</span>
          </a>
          <button
            onClick={onExploreFAQ}
            id="hero-btn-info"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-stone-800/80 hover:bg-stone-700/90 text-stone-200 font-medium text-base backdrop-blur-md border border-stone-700/60 transition-all cursor-pointer"
          >
            Info & FAQ
          </button>
        </div>

        {/* E-Commerce & Marketplace Gateway Banner */}
        <div className="w-full max-w-3xl bg-stone-900/80 backdrop-blur-md rounded-2xl border border-stone-700/50 p-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left text-sm">
              <span className="text-xs uppercase tracking-wider text-stone-400 block font-semibold">
                Kanal Belanja Online Resmi
              </span>
              <p className="text-stone-200 font-medium text-xs sm:text-sm">
                Tersedia di Tokopedia, Shopee, & TikTok Shop resmi kami
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.tokopediaShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-xs font-semibold text-white transition-all hover:scale-105"
              >
                <TokopediaLogo className="w-4 h-4" />
                <span>Tokopedia</span>
              </a>
              <a
                href={COMPANY_INFO.shopeeShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-xs font-semibold text-white transition-all hover:scale-105"
              >
                <ShopeeLogo className="w-4 h-4" />
                <span>Shopee</span>
              </a>
              <a
                href={COMPANY_INFO.tiktokShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-xs font-semibold text-white transition-all hover:scale-105"
              >
                <TikTokShopLogo className="w-4 h-4" />
                <span>TikTok Shop</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 w-full text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">BPOM RI MD</p>
              <p className="text-[11px] text-stone-400">Resmi Terdaftar</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <Award className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Halal Indonesia</p>
              <p className="text-[11px] text-stone-400">ID35110005166480623</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <Leaf className="w-6 h-6 text-lime-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">100% Buah Alami</p>
              <p className="text-[11px] text-stone-400">Fermentasi Higienis</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <CheckCircle2 className="w-6 h-6 text-sky-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Asli Batu Malang</p>
              <p className="text-[11px] text-stone-400">Kebun Pegunungan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
