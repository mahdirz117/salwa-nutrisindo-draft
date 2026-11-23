import React, { useState } from 'react';
import { COMPANY_INFO, getWhatsAppGeneralUrl } from '../data/companyData';
import { TokopediaLogo, ShopeeLogo, TikTokShopLogo, WhatsAppLogo } from './EcommerceLogos';
import { ShieldCheck, Award, Heart, Leaf, Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setEmailInput('');
    }, 4000);
  };

  return (
    <footer className="bg-[#171412] text-stone-300 border-t border-stone-800">
      {/* Top Footer Section matching screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* E-Commerce column matching screenshot */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-lg font-bold font-display text-white">
              E-Commerce
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Kunjungi toko kami secara online baik di Tokopedia, Shopee, maupun TikTok.
            </p>
            <p className="text-xs text-stone-400 leading-relaxed">
              Atau hubungi CS melalui WhatsApp untuk pembelian berskala besar / grosir / curah.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.tokopediaShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Tokopedia Salwa Nutrisindo"
                className="p-2.5 rounded-xl bg-stone-900 border border-stone-700 hover:border-emerald-500 transition-colors"
              >
                <TokopediaLogo className="w-6 h-6" />
              </a>
              <a
                href={COMPANY_INFO.shopeeShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Shopee Salwa Nutrisindo"
                className="p-2.5 rounded-xl bg-stone-900 border border-stone-700 hover:border-orange-500 transition-colors"
              >
                <ShopeeLogo className="w-6 h-6" />
              </a>
              <a
                href={COMPANY_INFO.tiktokShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok Shop Salwa Nutrisindo"
                className="p-2.5 rounded-xl bg-stone-900 border border-stone-700 hover:border-white transition-colors"
              >
                <TikTokShopLogo className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Kontak column matching screenshot */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-lg font-bold font-display text-white mb-4">
              Kontak
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <p>
                <span className="text-stone-400 block text-xs">Customer Service 1:</span>
                <a
                  href={`https://wa.me/${COMPANY_INFO.cs1Phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-emerald-400 underline decoration-dotted transition-colors"
                >
                  CS 1 : {COMPANY_INFO.cs1Display}
                </a>
              </p>
              <p className="pt-1">
                <span className="text-stone-400 block text-xs">Customer Service 2:</span>
                <a
                  href={`https://wa.me/${COMPANY_INFO.cs2Phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-emerald-400 underline decoration-dotted transition-colors"
                >
                  CS 2 : {COMPANY_INFO.cs2Display}
                </a>
              </p>
              <p className="pt-1">
                <span className="text-stone-400 block text-xs">Email Resmi:</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Email Subscription / Pertanyaan matching screenshot */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-lg font-bold font-display text-white">
              Dapatkan Informasi Terbaru
            </h3>
            <p className="text-xs text-stone-400">
              Masukkan alamat email Anda untuk menerima informasi promo produk atau update kesehatan:
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5 pt-1">
              <input
                type="email"
                required
                placeholder="Masukkan alamat email Anda"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white text-stone-900 placeholder-stone-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold transition-all shadow cursor-pointer flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Terima Kasih, Email Tercatat</span>
                  </>
                ) : (
                  <span>Kirim Pertanyaan Anda</span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 PT Salwa Nutrisindo. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#beranda" className="hover:text-stone-300 transition-colors">Beranda</a>
            <a href="#katalog" className="hover:text-stone-300 transition-colors">Katalog</a>
            <a href="#faq" className="hover:text-stone-300 transition-colors">FAQ</a>
            <a href="#lokasi" className="hover:text-stone-300 transition-colors">Lokasi</a>
            <a href="#kontak" className="hover:text-stone-300 transition-colors">Kontak</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
