import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Clock, ExternalLink, Navigation, CheckCircle2, ShieldCheck, Factory, Sparkles } from 'lucide-react';

export const ProductionLocation: React.FC = () => {
  return (
    <section id="lokasi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase block mb-2">
            PABRIK & OUTLET
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
            Lokasi Produksi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Kunjungi lokasi produksi dan pusat distribusi kami di dataran tinggi Batu Malang untuk mendapatkan produk cuka buah segar berkualitas langsung dari produsen.
          </p>
        </div>

        {/* 2-Column Info & Maps Layout matching the screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card (Left Column) */}
          <div className="lg:col-span-5 bg-stone-50 rounded-3xl p-8 border border-stone-200/80 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              {/* Address Details matching the screenshot */}
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  Alamat Resmi
                </span>
                <h3 className="text-xl font-bold font-display text-stone-900 leading-snug">
                  PT Salwa Nutrisindo
                </h3>
                <p className="text-stone-700 font-medium text-sm mt-2 leading-relaxed">
                  {COMPANY_INFO.address}
                  <span className="block text-stone-500 font-normal mt-0.5">
                    ({COMPANY_INFO.subAddress})
                  </span>
                </p>
                <p className="text-stone-600 text-xs mt-1">
                  {COMPANY_INFO.village}, {COMPANY_INFO.city}, {COMPANY_INFO.province} {COMPANY_INFO.postalCode}
                </p>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-stone-200">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100/70 px-3 py-1 rounded-full mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  Jam Operasional
                </span>
                <p className="text-base font-bold text-stone-900">
                  09:00 – 17:00 WIB
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  Melayani pembelian eceran, grosir, curah, hingga konsultasi maklon/kemitraan
                </p>
              </div>

              {/* Facility Highlights */}
              <div className="pt-4 border-t border-stone-200 space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fasilitas fermentasi higienis berstandar BPOM RI MD</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bahan baku apel segar langsung dari kebun dataran tinggi Batu</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Proses fermentasi alami tanpa pewarna atau pemanis sintetis</span>
                </div>
              </div>
            </div>

            {/* Directions Action Button */}
            <div className="pt-6 mt-6 border-t border-stone-200">
              <a
                href={COMPANY_INFO.googleMapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-google-maps-directions"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>Petunjuk Arah Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Frame (Right Column) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-200 shadow-md min-h-[380px] relative bg-stone-100">
            <iframe
              title="Peta Lokasi Produksi PT Salwa Nutrisindo Batu Malang"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15807.693433555214!2d112.518!3d-7.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788730b1b11111%3A0x1111111111111111!2sNgaglik%2C%20Kec.%20Batu%2C%20Kota%20Batu%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Location Tag Overlay */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-stone-200/80 max-w-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-xs font-bold text-stone-900">Pusat Produksi Batu Malang</p>
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                Jln. Terusan Simpang Karate Atas, Ngaglik, Batu, Jawa Timur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
