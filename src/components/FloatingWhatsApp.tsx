import React, { useState } from 'react';
import { COMPANY_INFO, getWhatsAppGeneralUrl } from '../data/companyData';
import { WhatsAppLogo } from './EcommerceLogos';
import { X, MessageCircle, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden animate-fadeIn text-stone-800">
          {/* Header of popup */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <WhatsAppLogo className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Admin Salwa Nutrisindo</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Online • Jam Kerja 09:00 - 17:00</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Tutup popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body of popup */}
          <div className="p-4 space-y-3 bg-stone-50/50">
            <p className="text-xs text-stone-600 bg-white p-3 rounded-2xl border border-stone-200/60 shadow-2xs">
              👋 Halo! Selamat datang di Salwa Nutrisindo. Ada yang bisa kami bantu terkait produk cuka buah alami atau konsultasi kesehatan?
            </p>

            <div className="space-y-2 pt-1">
              {/* CS 1 Button */}
              <a
                href={`https://wa.me/${COMPANY_INFO.cs1Phone}?text=${encodeURIComponent('Halo Admin CS 1, saya ingin konsultasi seputar produk cuka apel / cuka buah Salwa Nutrisindo.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-white border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <WhatsAppLogo className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-stone-900 group-hover:text-emerald-800">
                      Customer Service 1 ({COMPANY_INFO.cs1Display})
                    </p>
                    <p className="text-[10px] text-stone-500">Konsultasi Khasiat & Eceran</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* CS 2 Button */}
              <a
                href={`https://wa.me/${COMPANY_INFO.cs2Phone}?text=${encodeURIComponent('Halo Admin CS 2, saya ingin info pemesanan grosir, reseller, atau maklon.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-white border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <WhatsAppLogo className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-stone-900 group-hover:text-emerald-800">
                      Customer Service 2 ({COMPANY_INFO.cs2Display})
                    </p>
                    <p className="text-[10px] text-stone-500">Grosir, Reseller & Curah</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer font-bold text-xs sm:text-sm"
        aria-label="Hubungi Admin WhatsApp"
      >
        <WhatsAppLogo className="w-6 h-6" />
        <span className="hidden sm:inline font-semibold">Tanya Admin WhatsApp</span>
      </button>
    </div>
  );
};
