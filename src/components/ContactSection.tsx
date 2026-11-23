import React, { useState } from 'react';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData';
import { TokopediaLogo, ShopeeLogo, TikTokShopLogo, WhatsAppLogo } from './EcommerceLogos';
import { Phone, Mail, Send, CheckCircle2, MessageCircle, HelpCircle, PackageCheck, UserCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('Semua Produk / Konsultasi Umum');
  const [selectedCS, setSelectedCS] = useState<'cs1' | 'cs2'>('cs1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const targetPhone = selectedCS === 'cs1' ? COMPANY_INFO.cs1Phone : COMPANY_INFO.cs2Phone;
    const formattedText = `Halo Admin Salwa Nutrisindo (${selectedCS === 'cs1' ? 'CS 1' : 'CS 2'}),\n\nNama: ${senderName || 'Calon Pelanggan'}\nNomor Kontak: ${senderPhone || '-'}\nTopik / Produk: ${selectedProduct}\nPesan / Pertanyaan:\n${message}\n\nMohon dibantu informasinya. Terima kasih!`;

    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(formattedText)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase block mb-2">
            HUBUNGI KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Informasi Kontak & Konsultasi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            Jembatan penghubung langsung antara calon pembeli dengan tim admin kami untuk konsultasi produk, order eceran, reseller, maupun grosir/curah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Channel Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp CS 1 & CS 2 Card */}
            <div className="bg-stone-800/80 rounded-3xl p-6 border border-stone-700/60 shadow-md space-y-5">
              <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                <WhatsAppLogo className="w-5 h-5" />
                Customer Service (WhatsApp)
              </h3>

              {/* CS 1 */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-900/90 border border-stone-700/50 hover:border-emerald-500/50 transition-colors">
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 block uppercase">
                    Customer Service 1
                  </span>
                  <p className="text-lg font-bold text-white mt-0.5">
                    {COMPANY_INFO.cs1Display}
                  </p>
                  <p className="text-xs text-stone-400">Konsultasi Produk & Pesanan Eceran</p>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.cs1Phone}?text=${encodeURIComponent('Halo Admin Salwa Nutrisindo (CS 1), saya ingin bertanya mengenai produk cuka buah alami.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white transition-transform hover:scale-105"
                  title="Chat CS 1 via WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>

              {/* CS 2 */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-900/90 border border-stone-700/50 hover:border-emerald-500/50 transition-colors">
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 block uppercase">
                    Customer Service 2
                  </span>
                  <p className="text-lg font-bold text-white mt-0.5">
                    {COMPANY_INFO.cs2Display}
                  </p>
                  <p className="text-xs text-stone-400">Grosir, Reseller, Maklon & Mitra</p>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.cs2Phone}?text=${encodeURIComponent('Halo Admin Salwa Nutrisindo (CS 2), saya ingin bertanya mengenai pemesanan grosir/reseller.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white transition-transform hover:scale-105"
                  title="Chat CS 2 via WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900/50 border border-stone-700/30 text-stone-300 text-xs">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-semibold">Email Perusahaan</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-emerald-400 font-medium transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* E-Commerce Official Shop Box */}
            <div className="bg-stone-800/80 rounded-3xl p-6 border border-stone-700/60 shadow-md">
              <h3 className="text-base font-bold font-display text-white mb-2">
                Toko Online E-Commerce
              </h3>
              <p className="text-xs text-stone-400 mb-4">
                Kunjungi toko kami secara online baik di Tokopedia, Shopee, maupun TikTok Shop untuk transaksi praktis dengan berbagai promo ongkir.
              </p>

              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={COMPANY_INFO.tokopediaShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-stone-900 hover:bg-[#03AC0E]/20 border border-stone-700 hover:border-[#03AC0E] transition-all group"
                >
                  <TokopediaLogo className="w-6 h-6 mb-1.5" />
                  <span className="text-xs font-semibold text-stone-300 group-hover:text-white">
                    Tokopedia
                  </span>
                </a>

                <a
                  href={COMPANY_INFO.shopeeShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-stone-900 hover:bg-[#EE4D2D]/20 border border-stone-700 hover:border-[#EE4D2D] transition-all group"
                >
                  <ShopeeLogo className="w-6 h-6 mb-1.5" />
                  <span className="text-xs font-semibold text-stone-300 group-hover:text-white">
                    Shopee
                  </span>
                </a>

                <a
                  href={COMPANY_INFO.tiktokShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-stone-900 hover:bg-stone-700 border border-stone-700 hover:border-stone-500 transition-all group"
                >
                  <TikTokShopLogo className="w-6 h-6 mb-1.5" />
                  <span className="text-xs font-semibold text-stone-300 group-hover:text-white">
                    TikTok
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Consultation Form to Admin WhatsApp */}
          <div className="lg:col-span-7 bg-stone-800/90 rounded-3xl p-8 border border-stone-700/80 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold font-display text-white">
                Kirim Pertanyaan / Pesan ke Admin
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Isi form di bawah untuk langsung terhubung ke WhatsApp Admin kami dengan pesan terstruktur otomatis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Nomor WhatsApp / HP
                  </label>
                  <input
                    type="tel"
                    placeholder="Contoh: 08123456789"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Pilih Produk / Topik
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  >
                    <option value="Konsultasi Umum Produk">Konsultasi Umum Produk</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.volume})
                      </option>
                    ))}
                    <option value="Pemesanan Grosir / Curah / Maklon">Pemesanan Grosir / Curah / Maklon</option>
                    <option value="Kemitraan Reseller / Distributor">Kemitraan Reseller / Distributor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                    Pilih Jalur Admin (CS)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCS('cs1')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        selectedCS === 'cs1'
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : 'bg-stone-900 text-stone-300 border-stone-700 hover:bg-stone-800'
                      }`}
                    >
                      CS 1 (Eceran)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCS('cs2')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        selectedCS === 'cs2'
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : 'bg-stone-900 text-stone-300 border-stone-700 hover:bg-stone-800'
                      }`}
                    >
                      CS 2 (Grosir/Mitra)
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                  Pertanyaan atau Pesan Anda *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tuliskan pertanyaan atau kebutuhan konsultasi Anda di sini..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <WhatsAppLogo className="w-5 h-5" />
                <span>Kirim Pertanyaan via WhatsApp Admin</span>
              </button>

              {submitted && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs mt-3 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Membuka WhatsApp untuk menghubungkan Anda dengan admin...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
