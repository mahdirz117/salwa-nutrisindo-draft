import React from 'react';
import { CATEGORIES } from '../data/companyData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedCategoriesProps {
  onSelectCategory: (categorySlug: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="kategori" className="py-20 bg-stone-50 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching the screenshot styling */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase block mb-2">
            PRODUK UNGGULAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
            Kategori Produk
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Pilihan varian cuka buah alami dengan formulasi murni untuk berbagai kebutuhan kesehatan keluarga
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-end p-6 border border-stone-200/50"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-transparent" />

              {/* Content Box */}
              <div className="relative z-10 space-y-3">
                <span className="inline-block text-[11px] font-semibold text-emerald-300 bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  {cat.itemCount} Varian Produk
                </span>

                <h3 className="text-2xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                  {cat.name}
                </h3>

                <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed">
                  {cat.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectCategory(cat.slug)}
                    className="w-full py-2.5 px-4 rounded-full bg-white/95 hover:bg-white text-stone-900 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 group-hover:bg-emerald-400 group-hover:text-stone-950 cursor-pointer"
                  >
                    <span>Lihat Produk {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
