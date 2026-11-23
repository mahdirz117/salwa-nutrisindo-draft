export interface Product {
  id: string;
  name: string;
  category: 'Cuka Apel' | 'Cuka Nanas' | 'Cuka Lemon' | 'Cuka Herbal' | 'Semua';
  volume: string;
  price: number;
  originalPrice?: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  bpomNumber: string;
  halalNumber: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  howToConsume: string;
  ingredients: string;
  storage: string;
  image: string;
  themeColor: string;
  tokopediaUrl: string;
  shopeeUrl: string;
  tiktokShopUrl: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  headline: string;
  description: string;
  image: string;
  color: string;
  itemCount: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'khasiat' | 'aturan' | 'keamanan' | 'penyimpanan';
}

export interface CompanyContact {
  cs1Phone: string;
  cs1Display: string;
  cs2Phone: string;
  cs2Display: string;
  email: string;
  address: string;
  subAddress: string;
  village: string;
  city: string;
  province: string;
  postalCode: string;
  operatingHours: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionUrl: string;
  tokopediaShopUrl: string;
  shopeeShopUrl: string;
  tiktokShopUrl: string;
  instagramUrl: string;
}
