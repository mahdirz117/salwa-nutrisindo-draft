import React from 'react';
import { Product } from '../types';
import { X, ShieldCheck, Award, HeartHandshake, Sparkles, Check, Droplet, Clock, AlertCircle } from 'lucide-react';
import { TokopediaLogo, ShopeeLogo, TikTokShopLogo, WhatsAppLogo } from './EcommerceLogos';
import { COMPANY_INFO, getWhatsAppProductUrl } from '../data/companyData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Visual & Badges */}
          <div className="md:col-span-5 bg-gradient-to-b from-stone-50 to-stone-100 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200">
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-stone-200/80 mb-6 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl"
                />
                {product.isBestSeller && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Best Seller
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Premium Baru
                  </span>
                )}
              </div>

              {/* Legal Badges */}
              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200/60 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="truncate">{product.bpomNumber}</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/60 font-medium">
                  <Award className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="truncate">{product.halalNumber}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 text-[11px] text-stone-500">
              <p>Produksi: PT Salwa Nutrisindo</p>
              <p>Asal: Dataran Tinggi Batu Malang, Jawa Timur</p>
            </div>
          </div>

          {/* Right Column: Details & Order Links */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            {/* Title & Price */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-2.5 py-0.5 rounded-full">
                {product.category} • Netto {product.volume}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 mt-2">
                {product.name}
              </h3>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-2xl font-extrabold text-stone-900">
                  Rp {product.price.toLocaleString('id-ID')},00
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    Rp {product.originalPrice.toLocaleString('id-ID')},00
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                Deskripsi Produk
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {product.fullDesc}
              </p>
            </div>

            {/* Khasiat & Manfaat */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                Khasiat & Manfaat Utama
              </h4>
              <ul className="space-y-1.5">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cara Minum & Penyimpanan */}
            <div className="grid grid-cols-1 gap-3 bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80 text-xs">
              <div>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">
                  <Droplet className="w-3.5 h-3.5 text-emerald-700" />
                  Saran Penyajian / Cara Konsumsi:
                </span>
                <p className="text-stone-600">{product.howToConsume}</p>
              </div>
              <div className="pt-2 border-t border-stone-200">
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  Penyimpanan:
                </span>
                <p className="text-stone-600">{product.storage}</p>
              </div>
            </div>

            {/* Order & Contact Gateway Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Beli Online di E-Commerce Resmi:
                </p>
                <span className="text-[11px] text-stone-500">Pilih platform favorit Anda</span>
              </div>

              {/* 3 Marketplace Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={product.tokopediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#03AC0E] hover:bg-[#02950c] text-white text-xs font-bold shadow-sm hover:shadow transition-transform hover:-translate-y-0.5"
                >
                  <TokopediaLogo className="w-4 h-4" />
                  <span className="hidden sm:inline">Tokopedia</span>
                  <span className="sm:hidden">Toped</span>
                </a>

                <a
                  href={product.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#EE4D2D] hover:bg-[#d43d1f] text-white text-xs font-bold shadow-sm hover:shadow transition-transform hover:-translate-y-0.5"
                >
                  <ShopeeLogo className="w-4 h-4" />
                  <span>Shopee</span>
                </a>

                <a
                  href={product.tiktokShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-bold shadow-sm hover:shadow transition-transform hover:-translate-y-0.5"
                >
                  <TikTokShopLogo className="w-4 h-4" />
                  <span className="hidden sm:inline">TikTok Shop</span>
                  <span className="sm:hidden">TikTok</span>
                </a>
              </div>

              {/* WhatsApp Admin Direct Link */}
              <div className="pt-2">
                <a
                  href={getWhatsAppProductUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <WhatsAppLogo className="w-5 h-5" />
                  <span>Konsultasi / Pesan Langsung ke Admin (WhatsApp)</span>
                </a>
                <p className="text-center text-[11px] text-stone-500 mt-1.5">
                  CS 1 (0818385948) • CS 2 (085948312258) • Melayani Grosir, Reseller & Eceran
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
