import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS, getWhatsAppProductUrl } from '../data/companyData';
import { TokopediaLogo, ShopeeLogo, TikTokShopLogo, WhatsAppLogo } from './EcommerceLogos';
import { ProductDetailModal } from './ProductDetailModal';
import { Search, SlidersHorizontal, Eye, ShieldCheck, Award, Sparkles, Filter } from 'lucide-react';

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name-asc' | 'best-seller'>('default');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['Semua', 'Cuka Apel', 'Cuka Nanas', 'Cuka Lemon', 'Cuka Herbal'];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Category filter
    if (selectedCategory !== 'Semua') {
      list = list.filter((item) => item.category === selectedCategory);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q)
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'best-seller':
        list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      default:
        // default order matching the authentic screenshot
        break;
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="katalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase block mb-2">
              KATALOG RESMI SALWA NUTRISINDO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
              Pilihan Cuka Buah Alami
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-xl">
              Setiap produk terdaftar resmi BPOM RI MD & Sertifikasi Halal. Hubungi admin untuk konsultasi atau beli langsung lewat e-commerce resmi.
            </p>
          </div>

          {/* Sort Selector matching the screenshot ("Urutkan dari: Default") */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-xs font-semibold text-stone-500 whitespace-nowrap">
              Urutkan dari:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              id="product-sort-select"
              className="text-xs font-medium bg-stone-50 border border-stone-300 text-stone-800 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="best-seller">Terpopuler (Best Seller)</option>
              <option value="price-asc">Harga Termurah</option>
              <option value="price-desc">Harga Tertinggi</option>
              <option value="name-asc">Nama Produk (A - Z)</option>
            </select>
          </div>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10 items-stretch lg:items-center justify-between bg-stone-50/80 p-3.5 rounded-2xl border border-stone-200/80">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                id={`category-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari varian cuka..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="catalog-search-input"
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-stone-200 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Product Cards Grid - Visual style inspired directly by the authentic screenshot */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-3xl border border-dashed border-stone-300">
            <Filter className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <p className="text-base font-bold text-stone-800">Tidak ada produk yang cocok</p>
            <p className="text-xs text-stone-500 mt-1">Coba gunakan kata kunci lain atau pilih kategori Semua.</p>
            <button
              onClick={() => {
                onSelectCategory('Semua');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-stone-200/80 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Top Poster Image Area */}
                <div className="relative aspect-square overflow-hidden bg-stone-100 p-4">
                  {/* Poster Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Best Seller or Tag Badge */}
                  {product.isBestSeller && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm tracking-wider uppercase">
                      BESTSELLER
                    </span>
                  )}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm tracking-wider uppercase">
                      PREMIUM
                    </span>
                  )}

                  {/* Quick view button */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-stone-900 shadow-md transition-transform hover:scale-110 opacity-90 group-hover:opacity-100 cursor-pointer"
                    title="Lihat Detail & Khasiat"
                    aria-label="Lihat Detail Produk"
                  >
                    <Eye className="w-4 h-4 text-stone-800" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    {/* Category & Volume */}
                    <div className="flex items-center justify-between text-[11px] text-stone-700 font-medium mb-1">
                      <span>{product.category}</span>
                      <span className="font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                        {product.volume}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="text-base font-bold font-display text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-2 cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>

                    {/* Price in Indonesian Rupiah */}
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-lg font-extrabold text-stone-900">
                        Rp{product.price.toLocaleString('id-ID')}.00
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-stone-400 line-through">
                          Rp{product.originalPrice.toLocaleString('id-ID')}
                        </span>
                      )}
                    </div>

                    {/* Legalitas Mini Status */}
                    <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-emerald-800 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">BPOM RI MD & Halal</span>
                    </div>
                  </div>

                  {/* E-Commerce Channel Badges & WhatsApp Action */}
                  <div className="pt-3 border-t border-stone-100 space-y-2.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      Beli / Order Melalui:
                    </p>

                    {/* 3 E-Commerce Logos */}
                    <div className="grid grid-cols-3 gap-1.5">
                      <a
                        href={product.tokopediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-[#03AC0E]/10 hover:bg-[#03AC0E] text-[#03AC0E] hover:text-white border border-[#03AC0E]/20 text-[11px] font-bold transition-all hover:scale-105"
                        title="Beli di Tokopedia"
                      >
                        <TokopediaLogo className="w-3.5 h-3.5" />
                        <span>Toped</span>
                      </a>
                      <a
                        href={product.shopeeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-[#EE4D2D]/10 hover:bg-[#EE4D2D] text-[#EE4D2D] hover:text-white border border-[#EE4D2D]/20 text-[11px] font-bold transition-all hover:scale-105"
                        title="Beli di Shopee"
                      >
                        <ShopeeLogo className="w-3.5 h-3.5" />
                        <span>Shopee</span>
                      </a>
                      <a
                        href={product.tiktokShopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-stone-900/10 hover:bg-stone-900 text-stone-900 hover:text-white border border-stone-900/20 text-[11px] font-bold transition-all hover:scale-105"
                        title="Beli di TikTok Shop"
                      >
                        <TikTokShopLogo className="w-3.5 h-3.5" />
                        <span>TikTok</span>
                      </a>
                    </div>

                    {/* Direct WhatsApp Consultation / Direct Order Button */}
                    <a
                      href={getWhatsAppProductUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-sm hover:shadow"
                      title="Hubungi Admin WhatsApp untuk produk ini"
                    >
                      <WhatsAppLogo className="w-4 h-4" />
                      <span>WhatsApp Admin</span>
                    </a>

                    {/* Quick Detail Link */}
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full text-center text-[11px] text-stone-500 hover:text-emerald-700 font-semibold transition-colors cursor-pointer py-0.5"
                    >
                      Lihat Khasiat & Takaran Saji &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
