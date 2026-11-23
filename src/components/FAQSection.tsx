import React, { useState, useMemo } from 'react';
import { FAQS, getWhatsAppGeneralUrl } from '../data/companyData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { WhatsAppLogo } from './EcommerceLogos';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="faq" className="py-20 bg-stone-50 border-t border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching the screenshot title styling */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase block mb-2">
            PANDUAN LENGKAP KONSUMEN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
            FAQ
          </h2>
          <p className="text-lg font-medium text-stone-600 mt-1">
            Frequently Asked Questions
          </p>
          <p className="mt-3 text-sm text-stone-500">
            Pertanyaan seputar khasiat, aturan minum, keamanan, dan tips penyimpanan cuka buah alami Salwa Nutrisindo
          </p>
        </div>

        {/* Filter and Search */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Semua Pertanyaan
            </button>
            <button
              onClick={() => setActiveCategory('khasiat')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'khasiat'
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Khasiat & Kulit
            </button>
            <button
              onClick={() => setActiveCategory('aturan')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'aturan'
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Aturan Minum & Waktu
            </button>
            <button
              onClick={() => setActiveCategory('penyimpanan')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'penyimpanan'
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Penyimpanan & Wadah
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari topik FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* 2-Column Responsive Layout matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredFaqs.map((faq) => {
            const isOpen = openItems[faq.id] ?? false;
            return (
              <div
                key={faq.id}
                id={`faq-card-${faq.id}`}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/40 shadow-sm ring-1 ring-emerald-500/20'
                    : 'border-stone-200/80 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <h3 className="text-base font-bold text-stone-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="p-1 rounded-lg bg-stone-100 text-stone-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for WhatsApp Admin Support */}
        <div className="mt-14 max-w-3xl mx-auto bg-emerald-900 text-white rounded-3xl p-8 text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-bold font-display">
              Punya Pertanyaan Khusus Terkait Kondisi Kesehatan Anda?
            </h3>
            <p className="text-stone-300 text-sm max-w-xl mx-auto">
              Tim admin & customer service Salwa Nutrisindo siap membantu konsultasi dosis yang sesuai dengan kebutuhan Anda.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppGeneralUrl('Halo Admin Salwa Nutrisindo, saya ingin konsultasi mengenai cara konsumsi dan rekomendasi cuka buah yang cocok untuk saya.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppLogo className="w-5 h-5" />
                <span>Konsultasi Gratis via WhatsApp Admin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
