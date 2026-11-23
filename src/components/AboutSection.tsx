// @ts-nocheck
import React from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2, HeartPulse, Droplets, Leaf } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Company Credibility */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase block">
              TENTANG PT SALWA NUTRISINDO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display leading-tight">
              Pionir Cuka Buah Alami Berkualitas Dari Dataran Tinggi Batu Malang
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              PT Salwa Nutrisindo adalah produsen cuka buah murni dan herbal alami yang berkomitmen menghadirkan produk kesehatan berkualitas tinggi untuk masyarakat Indonesia. Menggunakan buah-buahan segar pilihan dari kebun subur dataran tinggi Batu Malang, setiap tetes cuka diproses melalui metode fermentasi higienis tanpa penambahan bahan kimia pengawet ataupun pewarna sintetis.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Standar Higienis & Legalitas Lengkap</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Memiliki izin edar resmi BPOM RI MD dan sertifikasi Halal ID dari Kementerian Agama RI untuk menjamin keamanan konsumsi harian keluarga Anda.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">The Mother & Probiotik Alami Aktif</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Proses fermentasi alami mempertahankan 'The Mother' dan enzim probiotik berkhasiat tinggi untuk kesehatan pencernaan dan detoks tubuh.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Jembatan Langsung Produsen ke Konsumen</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Melayani transaksi online via Tokopedia, Shopee, TikTok Shop, serta konsultasi gratis dan pesanan grosir langsung melalui WhatsApp Admin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image & Stats Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-700/80">
              <img
                src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=80"
                alt="Kebun Apel Batu Malang Salwa Nutrisindo"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-stone-900/90 backdrop-blur-md p-4 rounded-2xl border border-stone-700/80">
                <div>
                  <p className="text-xs font-bold text-emerald-400">Pusat Produksi & Kebun</p>
                  <p className="text-sm font-bold text-white">Batu & Kota Malang, Jawa Timur</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-stone-400">Legalitas</p>
                  <p className="text-xs font-bold text-amber-300">BPOM RI MD & Halal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
