import { Product, ProductCategory, FAQItem, CompanyContact } from '../types';

export const COMPANY_INFO: CompanyContact = {
  cs1Phone: '62818385948',
  cs1Display: '0818385948',
  cs2Phone: '6285948312258',
  cs2Display: '085948312258',
  email: 'info@salwanutrisindo.com',
  address: 'Jln. Terusan Simpang Karate Atas',
  subAddress: 'Sebelah Astana Kaluhuran Soekomiharjo',
  village: 'RT.7 / RW.11, Ngaglik',
  city: 'Kec. Batu, Kota Batu',
  province: 'Jawa Timur',
  postalCode: '65311',
  operatingHours: 'Senin - Sabtu: 09:00 - 17:00 WIB',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Jln.+Terusan+Simpang+Karate+Atas+Ngaglik+Batu+East+Java&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionUrl: 'https://maps.google.com/?q=Jln.+Terusan+Simpang+Karate+Atas,+Ngaglik,+Batu,+Jawa+Timur',
  tokopediaShopUrl: 'https://www.tokopedia.com/salwanutrisindo',
  shopeeShopUrl: 'https://shopee.co.id/salwanutrisindo',
  tiktokShopUrl: 'https://www.tiktok.com/@salwanutrisindo',
  instagramUrl: 'https://www.instagram.com/salwanutrisindo'
};

export const CATEGORIES: ProductCategory[] = [
  {
    id: 'cuka-apel',
    name: 'Cuka Apel',
    slug: 'Cuka Apel',
    headline: 'Manfaat Alami Buah Apel Malang',
    description: 'Nikmati manfaat kesehatan dari cuka apel alami fermentasi murni khas apel pegunungan Batu Malang.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
    color: 'from-amber-700/80 to-amber-950/90',
    itemCount: 3
  },
  {
    id: 'cuka-nanas',
    name: 'Cuka Nanas',
    slug: 'Cuka Nanas',
    headline: 'Kesegaran Tropis & Enzim Bromelain',
    description: 'Rasakan kesegaran cuka nanas yang menyegarkan dengan enzim bromelain tinggi untuk meredakan nyeri sendi.',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
    color: 'from-yellow-700/80 to-yellow-950/90',
    itemCount: 2
  },
  {
    id: 'cuka-lemon',
    name: 'Cuka Lemon',
    slug: 'Cuka Lemon',
    headline: 'Booster Vitamin C & Metabolisme',
    description: 'Cuka lemon segar untuk menambah cita rasa masakan dan membantu pembakaran lemak serta metabolisme tubuh.',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80',
    color: 'from-lime-700/80 to-emerald-950/90',
    itemCount: 2
  },
  {
    id: 'cuka-herbal',
    name: 'Cuka Herbal & Khusus',
    slug: 'Cuka Herbal',
    headline: 'Varian Khasiat Tradisional',
    description: 'Varian fungsional seperti Cuka Mengkudu untuk hipertensi dan Cuka Wortel untuk kesehatan mata & kulit.',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-700/80 to-stone-950/90',
    itemCount: 2
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'cuka-apel-malang-tahestian-250',
    name: 'Cuka Apel Malang Tahestian 250ml',
    category: 'Cuka Apel',
    volume: '250ml',
    price: 12000,
    originalPrice: 15000,
    isBestSeller: true,
    bpomNumber: 'BPOM RI MD 023771000301445',
    halalNumber: 'HALAL ID 35110005166480623',
    shortDesc: 'Cuka apel alami fermentasi dari apel segar pegunungan Malang, membantu pencernaan & kontrol kolesterol.',
    fullDesc: 'Cuka Apel Malang Tahestian 250ml diproduksi melalui proses fermentasi alami buah apel segar pilihan dari perkebunan dataran tinggi Malang. Mengandung "The Mother", enzim alami, asam asetat berkualitas tinggi, serta antioksidan kuat tanpa pemanis atau bahan kimia sintetis. Sangat cocok dikonsumsi rutin untuk menjaga kebugaran tubuh, mendetoks racun, dan menyeimbangkan asam lambung.',
    benefits: [
      'Membantu menurunkan kadar kolesterol jahat (LDL) dan meningkatkan HDL',
      'Membantu menstabilkan kadar glukosa / gula darah',
      'Meredakan masalah asam lambung / GERD jika dikonsumsi sesuai aturan',
      'Membantu menurunkan berat badan dan meluruhkan lemak tubuh',
      'Dapat digunakan sebagai toner alami untuk mengobati jerawat dan mencerahkan kulit'
    ],
    howToConsume: 'Campurkan 1-2 sendok makan (15-30 ml) ke dalam segelas air putih hangat/dingin (250 ml). Dapat ditambahkan madu murni. Minum 1-2 kali sehari pada pagi hari atau sebelum/sesudah makan.',
    ingredients: '100% Fermentasi Sari Buah Apel Segar Malang, Air.',
    storage: 'Simpan di tempat kering dan sejuk, hindarkan dari sinar matahari langsung. Wadah tertutup rapat.',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=700&q=80',
    themeColor: '#b91c1c',
    tokopediaUrl: 'https://www.tokopedia.com/salwanutrisindo',
    shopeeUrl: 'https://shopee.co.id/salwanutrisindo',
    tiktokShopUrl: 'https://www.tiktok.com/@salwanutrisindo'
  },
  {
    id: 'cuka-nanas-malang-tahestian-250',
    name: 'Cuka Nanas Malang Tahestian 250ml',
    category: 'Cuka Nanas',
    volume: '250ml',
    price: 12000,
    originalPrice: 15000,
    bpomNumber: 'BPOM RI MD 023771000101445',
    halalNumber: 'HALAL ID 35110005166480623',
    shortDesc: 'Kaya enzim bromelain untuk meredakan nyeri sendi, asam urat, dan melancarkan sirkulasi darah.',
    fullDesc: 'Cuka Nanas Malang Tahestian 250ml diekstraksi dari sari nanas madu murni berkualitas super. Mengandung enzim bromelain berkonsentrasi tinggi yang dikenal secara ilmiah mampu meredakan peradangan sendi, melancarkan aliran darah, mengurangi kristal asam urat, serta melancarkan sistem pencernaan.',
    benefits: [
      'Meredakan gejala asam urat dan nyeri sendi',
      'Enzim bromelain tinggi sebagai anti-inflamasi alami',
      'Membantu melancarkan buang air besar dan detoks usus',
      'Membantu melancarkan sirkulasi peredaran darah',
      'Menghadirkan kesegaran alami untuk minuman kesehatan'
    ],
    howToConsume: 'Campurkan 1-2 sdm cuka nanas ke dalam 200-250 ml air putih. Minum setelah makan untuk hasil optimal.',
    ingredients: '100% Fermentasi Sari Buah Nanas Segar, Air.',
    storage: 'Simpan di suhu ruang yang sejuk dan terlindung dari sinar matahari langsung.',
    image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&w=700&q=80',
    themeColor: '#a16207',
    tokopediaUrl: 'https://www.tokopedia.com/salwanutrisindo',
    shopeeUrl: 'https://shopee.co.id/salwanutrisindo',
    tiktokShopUrl: 'https://www.tiktok.com/@salwanutrisindo'
  },
  {
    id: 'cuka-lemon-malang-tahestian-500',
    name: 'Cuka Lemon Malang Tahestian 500ml',
    category: 'Cuka Lemon',
    volume: '500ml',
    price: 22000,
    originalPrice: 28000,
    isBestSeller: true,
    bpomNumber: 'BPOM RI MD 023771000201445',
    halalNumber: 'HALAL ID 35110005166480623',
    shortDesc: 'Kemasan hemat 500ml booster vitamin C alami untuk pembakar lemak, imunitas, dan detoks liver.',
    fullDesc: 'Cuka Lemon Malang Tahestian 500ml menghadirkan kebaikan sari lemon segar pilihan dalam volume ekonomis 500ml. Kaya akan vitamin C bioaktif, bioflavonoid, dan mineral penting untuk mempercepat metabolisme, membakar kalori lebih efektif, serta membersihkan racun dari hati dan ginjal.',
    benefits: [
      'Meningkatkan daya tahan tubuh dan menangkal radikal bebas',
      'Mempercepat metabolisme basal tubuh dan membakar timbunan lemak',
      'Membantu mencerahkan kulit kusam dari dalam',
      'Menjaga keseimbangan pH tubuh dan alkali alami',
      'Dapat digunakan sebagai dressing salad sehat atau marinasi daging'
    ],
    howToConsume: 'Larutkan 1-2 sendok makan ke dalam 250 ml air putih hangat pada pagi hari saat bangun tidur.',
    ingredients: '100% Fermentasi Perasan Buah Lemon Segar Alami, Air.',
    storage: 'Simpan di tempat yang sejuk dan kering dalam wadah tertutup rapat.',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=700&q=80',
    themeColor: '#15803d',
    tokopediaUrl: 'https://www.tokopedia.com/salwanutrisindo',
    shopeeUrl: 'https://shopee.co.id/salwanutrisindo',
    tiktokShopUrl: 'https://www.tiktok.com/@salwanutrisindo'
  },
  {
    id: 'cuka-apel-premium-salwa',
    name: 'Cuka Apel Premium Salwa 500ml',
    category: 'Cuka Apel',
    volume: '500ml',
    price: 23000,
    originalPrice: 30000,
    isNew: true,
    bpomNumber: 'BPOM RI MD 023771000301445',
    halalNumber: 'HALAL ID 35110005166480623',
    shortDesc: 'Apple cider vinegar premium dengan sari "Mother" alami berkualitas tinggi untuk kesehatan menyeluruh.',
    fullDesc: 'Cuka Apel Premium Salwa merupakan varian signature hasil seleksi fermentasi bertahap sari apel terbaik tanpa proses pemanasan pasteurisasi berlebih, sehingga koloni mikroorganisme baik (Mother) tetap aktif dan berkhasiat maksimal.',
    benefits: [
      'Kandungan Mother alami tertinggi untuk mikroflora usus',
      'Meningkatkan sensitivitas insulin dan menstabilkan gula darah',
      'Membantu mengatasi inflamasi lambung dan bau mulut',
      'Aroma lebih lembut dan rasa asam segar yang seimbang',
      'Mendukung program diet sehat jangka panjang'
    ],
    howToConsume: 'Kocok botol terlebih dahulu agar Mother tercampur rata. Tuang 2 sendok makan ke segelas air, minum 1-2x sehari.',
    ingredients: 'Sari Fermentasi Apel Malang Murni dengan The Mother.',
    storage: 'Simpan pada suhu ruangan atau dalam lemari es setelah dibuka.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80',
    themeColor: '#991b1b',
    tokopediaUrl: 'https://www.tokopedia.com/salwanutrisindo',
    shopeeUrl: 'https://shopee.co.id/salwanutrisindo',
    tiktokShopUrl: 'https://www.tiktok.com/@salwanutrisindo'
  },
  {
    id: 'cuka-mengkudu-malang',
    name: 'Cuka Mengkudu Malang (Pace Sehat)',
    category: 'Cuka Herbal',
    volume: '500ml',
    price: 50000,
    originalPrice: 65000,
    bpomNumber: 'BPOM RI MD Terdaftar',
    halalNumber: 'HALAL ID 35110005166480623',
    shortDesc: 'Herbal fermentasi buah pace mengkudu pilihan untuk kestabilan tensi darah & elastisitas pembuluh.',
    fullDesc: 'Cuka Mengkudu diproses secara higienis menggunakan teknologi fermentasi modern sehingga mengurangi aroma tajam khas mengkudu tanpa menghilangkan khasiat skopoletin dan proxeronine yang sangat mujarab untuk menurunkan tekanan darah tinggi.',
    benefits: [
      'Membantu menstabilkan tekanan darah (hipertensi)',
      'Memperbaiki elastisitas dan elastisitas pembuluh darah jantung',
      'Meningkatkan daya tahan tubuh dan imunitas seluler',
      'Antioksidan kuat untuk menekan radikal bebas',
      'Membantu memperbaiki pola tidur'
    ],
    howToConsume: '1 sendok makan dicampur 200 ml air hangat, minum 1-2 kali sehari setelah makan.',
    ingredients: '100% Fermentasi Buah Mengkudu / Morinda Citrifolia Pilihan.',
    storage: 'Simpan di tempat kering dan sejuk.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=700&q=80',
    themeColor: '#0f766e',
    tokopediaUrl: 'https://www.tokopedia.com/salwanutrisindo',
    shopeeUrl: 'https://shopee.co.id/salwanutrisindo',
    tiktokShopUrl: 'https://www.tiktok.com/@salwanutrisindo'
  },
  {
    id: 'cuka-apel-malang-tahestian-500',
    name: 'Cuka Apel Malang Tahestian 500ml',
    category: 'Cuka Apel',
    volume: '500ml',
    price: 22000,
    originalPrice: 28000,
    isBestSeller: true,
    bpomNumber: 'BPOM RI MD 023771000301445',
    halalNumber: 'HALAL ID 35110005166480623',
    shortDesc: 'Kemasan 500ml favorit keluarga untuk konsumsi rutin harian, hemat & kaya khasiat kesehatan.',
    fullDesc: 'Cuka Apel Malang Tahestian 500ml adalah varian paling diminati keluarga Indonesia. Dibuat murni dari apel Malang berkualitas dengan proses fermentasi higienis berstandar BPOM RI MD.',
    benefits: [
      'Menurunkan kolesterol jahat & melancarkan sirkulasi',
      'Mengontrol glukosa darah dan menurunkan lonjakan gula',
      'Membantu diet sehat alami dan detoks tubuh',
      'Ekonomis untuk persediaan konsumsi keluarga harian'
    ],
    howToConsume: '1-2 sdm dalam 250 ml air putih hangat atau dingin. Diminum pagi & malam.',
    ingredients: '100% Fermentasi Sari Buah Apel Segar Malang, Air.',
    storage: 'Simpan di tempat sejuk terlindung dari sinar matahari langsung.',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=700&q=80',
    themeColor: '#b91c1c',
    tokopediaUrl: 'https://www.tokopedia.com/salwanutrisindo',
    shopeeUrl: 'https://shopee.co.id/salwanutrisindo',
    tiktokShopUrl: 'https://www.tiktok.com/@salwanutrisindo'
  },
  {
    id: 'cuka-lemon-malang-tahestian-250',
    name: 'Cuka Lemon Malang Tahestian 250ml',
    category: 'Cuka Lemon',
    volume: '250ml',
    price: 12000,
    originalPrice: 15000,
    bpomNumber: 'BPOM RI MD 023771000201445',
    halalNumber: 'HALAL ID 35110005166480623',
    shortDesc: 'Kemasan praktis 250ml sari cuka lemon murni, kaya vitamin C & antioksidan alami.',
    fullDesc: 'Cuka Lemon Malang Tahestian 250ml menyajikan kesegaran sari lemon alami yang difermentasi dengan cermat untuk menghasilkan rasa asam yang nikmat, menyehatkan, dan mudah dibawa ke mana saja.',
    benefits: [
      'Menambah asupan vitamin C harian',
      'Membantu pembakaran lemak tubuh secara alami',
      'Membantu detoksifikasi racun saluran cerna',
      'Kemasan praktis mudah disimpan'
    ],
    howToConsume: 'Campurkan 1 sendok makan ke dalam 200 ml air hangat.',
    ingredients: 'Sari Fermentasi Buah Lemon Alami, Air.',
    storage: 'Simpan di tempat sejuk dan terhindar dari panas terik.',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=700&q=80',
    themeColor: '#15803d',
    tokopediaUrl: 'https://www.tokopedia.com/salwanutrisindo',
    shopeeUrl: 'https://shopee.co.id/salwanutrisindo',
    tiktokShopUrl: 'https://www.tiktok.com/@salwanutrisindo'
  },
  {
    id: 'cuka-nanas-malang-tahestian-500',
    name: 'Cuka Nanas Malang Tahestian 500ml',
    category: 'Cuka Nanas',
    volume: '500ml',
    price: 22000,
    originalPrice: 28000,
    bpomNumber: 'BPOM RI MD 023771000101445',
    halalNumber: 'HALAL ID 35110005166480623',
    shortDesc: 'Cuka nanas kemasan 500ml untuk terapi asam urat, sendi pegal, dan penunjang metabolisme.',
    fullDesc: 'Cuka Nanas Malang Tahestian 500ml menyediakan stok cukup untuk terapi rutin penurunan kadar asam urat dan peredaan radang persendian dengan rasa tropis yang segar.',
    benefits: [
      'Mengurangi tumpukan kristal asam urat pada sendi',
      'Kaya enzim bromelain pereda nyeri sendi',
      'Membantu regenerasi sel dan imunitas',
      'Kemasan 500ml lebih hemat'
    ],
    howToConsume: '1-2 sendok makan dalam 250 ml air putih setelah sarapan atau makan siang.',
    ingredients: 'Fermentasi Buah Nanas Madu Malang Murni, Air.',
    storage: 'Simpan di tempat sejuk atau kulkas.',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=700&q=80',
    themeColor: '#a16207',
    tokopediaUrl: 'https://www.tokopedia.com/salwanutrisindo',
    shopeeUrl: 'https://shopee.co.id/salwanutrisindo',
    tiktokShopUrl: 'https://www.tiktok.com/@salwanutrisindo'
  },
  {
    id: 'cuka-wortel-alami',
    name: 'Cuka Wortel Segar Alami',
    category: 'Cuka Herbal',
    volume: '500ml',
    price: 35000,
    originalPrice: 45000,
    bpomNumber: 'BPOM RI MD Terdaftar',
    halalNumber: 'HALAL ID 35110005166480623',
    shortDesc: 'Cuka fermentasi wortel kaya beta-karoten & vitamin A untuk kesehatan mata dan nutrisi kulit.',
    fullDesc: 'Cuka Wortel Alami diproses dari wortel segar pegunungan Malang. Mengandung konsentrasi karotenoid, lutein, dan vitamin A tinggi yang penting untuk menjaga kesehatan mata, mencegah degenerasi makula, serta menjaga kelembapan kulit.',
    benefits: [
      'Mendukung kesehatan mata dan penglihatan',
      'Tinggi antioksidan beta-karoten untuk peremajaan kulit',
      'Menjaga kekebalan tubuh dari infeksi',
      'Membantu menjaga fungsi organ hati'
    ],
    howToConsume: '1 sendok makan dicampur 200 ml air putih atau jus buah, diminum 1 kali sehari.',
    ingredients: '100% Fermentasi Sari Wortel Segar Pilihan.',
    storage: 'Simpan di tempat sejuk dan terhindar dari paparan matahari langsung.',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=700&q=80',
    themeColor: '#c2410c',
    tokopediaUrl: 'https://www.tokopedia.com/salwanutrisindo',
    shopeeUrl: 'https://shopee.co.id/salwanutrisindo',
    tiktokShopUrl: 'https://www.tiktok.com/@salwanutrisindo'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'khasiat',
    question: 'Cuka apel bisa menyembuhkan penyakit apa saja ?',
    answer: 'Asupan cuka apel dapat membantu menurunkan kadar glukosa darah, meningkatkan kadar kolesterol baik (HDL-C), dan menurunkan kadar kolesterol jahat (LDL-C). Hal ini dibuktikan oleh penelitian Hadi, dkk. (2021) dalam BMC Complementary Medicine and Therapies. Selain itu, cuka apel terbukti dapat membantu meredakan jerawat, menyamarkan jaringan parut kulit, melancarkan pencernaan, dan menekan nafsu makan berlebih.'
  },
  {
    id: 'faq-2',
    category: 'aturan',
    question: 'Bagaimana cara minum cuka apel yang benar ?',
    answer: 'Mulailah dengan dosis kecil: dimulai dengan 1-2 sendok teh (sdt) cuka apel yang dicampurkan ke dalam 250 ml air putih dan diminum 1-2 kali sehari. Bila tidak mengalami efek samping / tubuh sudah terbiasa, dosis dapat ditingkatkan secara bertahap sampai maksimal 6 sendok makan (sdm) per hari. Setelah mengonsumsi, disarankan segera berkumur dengan air putih untuk membersihkan sisa asam di rongga mulut dan melindungi enamel gigi.'
  },
  {
    id: 'faq-3',
    category: 'aturan',
    question: 'Kapan waktu terbaik minum cuka apel ?',
    answer: 'Bila tidak ada permasalahan di lambung (seperti maag akut atau asam lambung tinggi/GERD), sebaiknya diminum sebelum makan atau pada kondisi perut kosong di pagi hari. Namun, bila ada riwayat masalah lambung, sebaiknya dikonsumsi setelah makan. Waktu konsumsi ideal adalah pada pagi hari dan malam hari sebelum tidur.'
  },
  {
    id: 'faq-4',
    category: 'keamanan',
    question: 'Apakah cuka apel aman dikonsumsi jangka panjang ?',
    answer: 'Cuka apel aman digunakan sebagai pelengkap pola makan atau terapi alami dalam jangka pendek hingga menengah. Namun tidak aman bila dikonsumsi dalam jumlah berlebihan / dosis tinggi dalam jangka panjang tanpa jeda, karena dapat menurunkan kadar kalium dalam tubuh dan mempengaruhi kepadatan tulang. Konsumsi secara bijak sesuai takaran yang disarankan.'
  },
  {
    id: 'faq-5',
    category: 'keamanan',
    question: 'Apakah efek samping dari konsumsi cuka apel dalam jumlah besar atau dosis tinggi ?',
    answer: 'Konsumsi berlebihan dapat memicu perut terasa mual, muntah, asam lambung naik, diare, serta erosi enamel gigi. Bila dikonsumsi dosis tinggi dalam jangka waktu lama akan menurunkan kadar kalium dalam tubuh (dapat menimbulkan kelelahan hebat, kram otot, sering buang air kecil, kelumpuhan, hingga detak jantung berdebar-debar). Sebaiknya konsumsi cuka selama 7 hari lalu jeda (tidak mengonsumsi) selama 3 hari untuk menghindari efek samping tersebut.'
  },
  {
    id: 'faq-6',
    category: 'penyimpanan',
    question: 'Berapa lama masa kedaluwarsa (expired) cuka apel ?',
    answer: 'Sebetulnya cuka apel tidak memiliki masa kedaluwarsa yang kaku. Semakin lama disimpan, cuka apel alami justru semakin bagus kualitas fermentasinya asal tidak terkontaminasi oleh kotoran dari luar. Hal ini ditandai dengan perubahan warna menjadi semakin gelap, rasa dan bau tidak enak. Normalnya, semakin lama disimpan maka rasanya akan semakin pekat, aromanya lebih berkarakter, dan rasa semakin asam seperti tape.'
  },
  {
    id: 'faq-7',
    category: 'penyimpanan',
    question: 'Berapa lama cuka apel bertahan setelah tutupnya dibuka ?',
    answer: 'Sebaiknya cuka apel dikonsumsi maksimal dalam waktu 3 bulan setelah tutup botol dibuka. Anda juga dapat menyimpannya lebih lama apabila ditaruh di dalam lemari pendingin / kulkas. Asalkan tidak ada tanda-tanda kontaminasi jamur liar atau aroma busuk yang tajam, cuka tetap aman dikonsumsi.'
  },
  {
    id: 'faq-8',
    category: 'penyimpanan',
    question: 'Bagaimana cara menyimpan cuka apel ?',
    answer: 'Karena cuka apel secara alami sangat asam (pH 3 – 4), penyimpanan cukup di tempat sejuk, tidak terkena sinar matahari langsung, dan dijauhkan dari benda-benda berbau tajam atau bahan kimia.'
  },
  {
    id: 'faq-9',
    category: 'khasiat',
    question: 'Apakah cuka apel bermanfaat untuk kecantikan / kesehatan kulit ?',
    answer: 'Campuran air bersih dan cuka apel (rasio 1:3 atau 1:4) bisa digunakan untuk membersihkan kulit wajah / double cleansing atau toner jerawat. Manfaat cuka apel untuk kulit wanita dan pria ini berasal dari kandungan asam asetat alami serta alfa hidroksi asam (AHA) yang efektif mengangkat debu, mengikis sel kulit mati, dan mengontrol minyak berlebih.'
  },
  {
    id: 'faq-10',
    category: 'penyimpanan',
    question: 'Wadah apa yang bisa dipakai untuk menyimpan cuka apel ?',
    answer: 'Wadah untuk menyimpan atau mengonsumsi cuka apel sebaiknya terbuat dari kaca, botol plastik food grade (HDPE/PET), kayu, atau enamel / keramik (tanpa retakan) atau baja tahan karat (stainless steel food grade). JANGAN gunakan wadah logam biasa atau aluminium, karena asam cuka akan merusak dan melarutkan logam yang berbahaya bagi kesehatan.'
  }
];

export const getWhatsAppProductUrl = (product: Product, csNumber: string = COMPANY_INFO.cs1Phone): string => {
  const text = `Halo Admin Salwa Nutrisindo,\n\nSaya tertarik dengan produk:\n*${product.name}*\nHarga: Rp ${product.price.toLocaleString('id-ID')}\nUkuran: ${product.volume}\n\nSaya ingin konsultasi / order produk ini. Mohon informasinya. Terima kasih!`;
  return `https://wa.me/${csNumber}?text=${encodeURIComponent(text)}`;
};

export const getWhatsAppGeneralUrl = (customMessage?: string, csNumber: string = COMPANY_INFO.cs1Phone): string => {
  const text = customMessage || `Halo Admin Salwa Nutrisindo,\n\nSaya ingin konsultasi mengenai produk cuka buah alami dan informasi pemesanan/kerjasama. Terima kasih!`;
  return `https://wa.me/${csNumber}?text=${encodeURIComponent(text)}`;
};
