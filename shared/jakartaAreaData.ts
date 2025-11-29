export interface JakartaAreaData {
  name: string;
  slug: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBullets: string[];
  ctaText: string;
  ctaWhatsAppMessage: string;
  localPositioning: {
    areaType: string;
    paragraphs: string[];
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  howItWorks: {
    title: string;
    steps: Array<{
      step: string;
      description: string;
    }>;
  };
  menuExamples: {
    title: string;
    packages: Array<{
      name: string;
      description: string;
      highlights: string[];
    }>;
  };
  testimonials: {
    title: string;
    reviews: Array<{
      name: string;
      event: string;
      quote: string;
    }>;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  closingCta: {
    title: string;
    paragraph: string;
  };
  structuredData: object;
}

export const JAKARTA_AREA_DATA: Record<string, JakartaAreaData> = {
  'menteng': {
    name: 'Menteng',
    slug: 'menteng',
    region: 'Jakarta Pusat',
    metaTitle: 'Private Chef Menteng | Layanan Koki Pribadi Eksklusif',
    metaDescription: 'Nikmati layanan private chef profesional di Menteng. Hidangan berkualitas restoran bintang lima langsung di rumah Anda. Hubungi kami sekarang!',
    heroTitle: 'Private Chef Menteng',
    heroSubtitle: 'Hadirkan pengalaman kuliner eksklusif di kawasan elit Menteng. Chef profesional kami siap menciptakan hidangan istimewa langsung di rumah Anda.',
    heroBullets: [
      'Chef berpengalaman dengan standar restoran bintang lima',
      'Menu disesuaikan dengan selera dan kebutuhan diet Anda',
      'Layanan lengkap: belanja, masak, penyajian, dan beres-beres'
    ],
    ctaText: 'Pesan Private Chef Sekarang',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya tertarik dengan layanan private chef di Menteng.',
    localPositioning: {
      areaType: 'Kawasan elit bersejarah dengan rumah-rumah mewah klasik',
      paragraphs: [
        'Menteng adalah salah satu kawasan paling prestisius di Jakarta Pusat, terkenal dengan rumah-rumah kolonial megah dan lingkungan yang tenang. Sebagai area hunian para pejabat, diplomat, dan keluarga terpandang, Menteng membutuhkan layanan kuliner yang setara dengan standar kehidupan penghuninya.',
        'Layanan private chef kami sangat cocok untuk berbagai acara di Menteng: dinner keluarga intim di rumah heritage, jamuan makan malam untuk kolega bisnis, perayaan ulang tahun eksklusif, hingga arisan ibu-ibu yang ingin tampil beda. Kami memahami kebutuhan privasi dan kualitas yang diharapkan warga Menteng.'
      ]
    },
    benefits: {
      title: 'Kenapa Memilih Private Chef di Menteng?',
      items: [
        { title: 'Privasi Terjaga', description: 'Nikmati hidangan lezat tanpa perlu keluar rumah. Acara Anda tetap privat dan nyaman.' },
        { title: 'Hemat Waktu', description: 'Tidak perlu reservasi restoran, macet di jalan, atau menunggu pesanan. Chef datang ke rumah Anda.' },
        { title: 'Menu Custom', description: 'Sesuaikan menu dengan preferensi keluarga: halal, vegetarian, bebas gluten, atau diet khusus lainnya.' },
        { title: 'Kualitas Restoran', description: 'Rasakan hidangan dengan standar fine dining, disajikan langsung di meja makan Anda.' }
      ]
    },
    howItWorks: {
      title: 'Cara Kerja Layanan Kami',
      steps: [
        { step: 'Hubungi Kami', description: 'Kirim pesan via WhatsApp dengan tanggal acara, jumlah tamu, dan preferensi menu.' },
        { step: 'Konsultasi Menu', description: 'Tim kami akan membantu merancang menu sesuai selera dan kebutuhan Anda.' },
        { step: 'Chef Datang', description: 'Chef profesional tiba di rumah Anda di Menteng, lengkap dengan bahan-bahan segar pilihan.' },
        { step: 'Masak & Sajikan', description: 'Semua hidangan dimasak fresh di dapur Anda dengan presentasi restoran bintang lima.' },
        { step: 'Beres-beres', description: 'Setelah acara selesai, chef membereskan dapur hingga bersih. Anda tinggal menikmati.' }
      ]
    },
    menuExamples: {
      title: 'Contoh Menu & Paket',
      packages: [
        {
          name: 'Paket Indonesian Heritage',
          description: 'Hidangan Indonesia autentik dengan sentuhan modern, sempurna untuk jamuan keluarga.',
          highlights: ['Soto betawi dengan emping', 'Rendang daging sapi premium', 'Nasi liwet komplit', 'Es cendol durian']
        },
        {
          name: 'Paket Western Fine Dining',
          description: 'Menu ala restoran fine dining untuk acara spesial yang elegan.',
          highlights: ['Beef carpaccio', 'Mushroom risotto truffle', 'Grilled wagyu steak', 'Chocolate lava cake']
        },
        {
          name: 'Paket Asian Fusion',
          description: 'Perpaduan cita rasa Asia yang kreatif dan menggugah selera.',
          highlights: ['Dim sum premium', 'Thai tom yum seafood', 'Japanese teriyaki salmon', 'Mango sticky rice']
        }
      ]
    },
    testimonials: {
      title: 'Ulasan Pelanggan di Menteng',
      reviews: [
        {
          name: 'Ibu Ratna',
          event: 'Dinner keluarga di rumah heritage Menteng',
          quote: 'Chef-nya sangat profesional! Masakan Indonesia-nya autentik tapi dengan presentasi yang cantik. Keluarga besar kami sangat puas.'
        },
        {
          name: 'Pak Hendro',
          event: 'Business dinner untuk klien',
          quote: 'Layanan sempurna untuk menjamu klien penting. Menu western-nya setara restoran hotel bintang lima. Sangat impressed!'
        },
        {
          name: 'Dina',
          event: 'Arisan bulanan di Menteng',
          quote: 'Ibu-ibu arisan sangat terkesan dengan hidangannya. Prosesnya mudah dan chef-nya ramah. Pasti akan pakai lagi!'
        }
      ]
    },
    faq: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Berapa minimum tamu untuk layanan private chef?',
          answer: 'Layanan kami tersedia mulai dari 2 orang untuk dinner romantis hingga 50+ tamu untuk acara besar. Kami menyesuaikan dengan kebutuhan Anda.'
        },
        {
          question: 'Apakah bahan makanan disediakan oleh chef?',
          answer: 'Ya, chef kami akan berbelanja bahan-bahan segar berkualitas premium di hari H. Biaya bahan terpisah dan transparan.'
        },
        {
          question: 'Bisa custom menu untuk diet khusus?',
          answer: 'Tentu! Kami melayani berbagai kebutuhan diet: halal, vegetarian, vegan, bebas gluten, rendah garam, dan lainnya.'
        },
        {
          question: 'Area mana saja di Menteng yang dilayani?',
          answer: 'Kami melayani seluruh kawasan Menteng: Menteng Dalam, Menteng Atas, Menteng Tenggara, Gondangdia, Pegangsaan, dan sekitarnya.'
        },
        {
          question: 'Berapa lama durasi layanan?',
          answer: 'Rata-rata 4-5 jam, termasuk persiapan, memasak, penyajian, dan beres-beres. Untuk acara besar, bisa lebih lama sesuai kebutuhan.'
        },
        {
          question: 'Bagaimana sistem pembayarannya?',
          answer: 'DP 50% saat konfirmasi booking, pelunasan sebelum hari H. Kami menerima transfer bank dan kartu kredit.'
        }
      ]
    },
    closingCta: {
      title: 'Siap Menikmati Private Chef di Menteng?',
      paragraph: 'Jangan biarkan acara spesial Anda biasa-biasa saja. Hubungi kami sekarang untuk konsultasi menu gratis dan cek ketersediaan tanggal. Tim kami siap membantu menciptakan pengalaman kuliner tak terlupakan di rumah Anda di Menteng.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-menteng",
      "name": "Private Chef Menteng",
      "description": "Layanan private chef profesional di Menteng, Jakarta Pusat. Chef berpengalaman untuk dinner keluarga, acara bisnis, dan perayaan spesial.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Menteng", "Jakarta Pusat", "Jakarta"]
    }
  },

  'kebayoran-baru': {
    name: 'Kebayoran Baru',
    slug: 'kebayoran-baru',
    region: 'Jakarta Selatan',
    metaTitle: 'Private Chef Kebayoran Baru | Koki Pribadi Profesional',
    metaDescription: 'Layanan private chef eksklusif di Kebayoran Baru. Hidangan fine dining di rumah Anda. Chef profesional, menu custom. Booking sekarang!',
    heroTitle: 'Private Chef Kebayoran Baru',
    heroSubtitle: 'Wujudkan pengalaman makan mewah di kawasan prestisius Kebayoran Baru. Chef profesional kami siap memanjakan lidah Anda dan tamu istimewa.',
    heroBullets: [
      'Chef tersertifikasi dengan pengalaman di restoran top Jakarta',
      'Fleksibel untuk berbagai acara: intimate dinner hingga party besar',
      'Semua kebutuhan ditangani: menu, belanja, masak, hingga bersih-bersih'
    ],
    ctaText: 'Hubungi Kami via WhatsApp',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya ingin booking private chef di Kebayoran Baru.',
    localPositioning: {
      areaType: 'Kawasan residensial premium dengan rumah-rumah mewah',
      paragraphs: [
        'Kebayoran Baru adalah salah satu kawasan hunian paling bergengsi di Jakarta Selatan. Dengan deretan rumah-rumah besar bergaya modern dan klasik, serta akses mudah ke pusat bisnis, area ini menjadi pilihan keluarga mapan dan profesional sukses.',
        'Layanan private chef kami ideal untuk gaya hidup warga Kebayoran Baru yang menghargai kualitas dan kenyamanan. Cocok untuk dinner romantis anniversary, perayaan ulang tahun anak, gathering keluarga besar saat lebaran, atau menjamu rekan bisnis dalam suasana yang lebih personal dibanding restoran.'
      ]
    },
    benefits: {
      title: 'Keunggulan Private Chef di Kebayoran Baru',
      items: [
        { title: 'Privasi Maksimal', description: 'Nikmati acara eksklusif tanpa gangguan pengunjung restoran lain.' },
        { title: 'Efisiensi Waktu', description: 'Tidak perlu repot keluar rumah. Chef yang datang ke tempat Anda.' },
        { title: 'Menu Fleksibel', description: 'Dari masakan Indonesia tradisional hingga Western fine dining, sesuai keinginan.' },
        { title: 'Pengalaman Premium', description: 'Kualitas hidangan dan pelayanan setara restoran bintang lima.' }
      ]
    },
    howItWorks: {
      title: 'Langkah-langkah Booking',
      steps: [
        { step: 'Kontak Kami', description: 'Hubungi via WhatsApp dengan detail tanggal, jumlah tamu, dan jenis acara.' },
        { step: 'Diskusi Menu', description: 'Konsultasikan preferensi menu dan kebutuhan diet khusus dengan tim kami.' },
        { step: 'Konfirmasi Booking', description: 'Setujui proposal menu dan lakukan pembayaran DP untuk mengamankan tanggal.' },
        { step: 'Chef Beraksi', description: 'Chef tiba di rumah Anda di Kebayoran Baru, siap menghadirkan pengalaman kuliner istimewa.' },
        { step: 'Santai & Nikmati', description: 'Anda fokus menikmati acara, chef menangani segalanya termasuk bersih-bersih.' }
      ]
    },
    menuExamples: {
      title: 'Pilihan Menu Populer',
      packages: [
        {
          name: 'Rijsttafel Indonesia',
          description: 'Hidangan Indonesia lengkap dengan berbagai lauk pauk autentik dari Sabang sampai Merauke.',
          highlights: ['Ayam betutu Bali', 'Gulai kambing Padang', 'Ikan bakar bumbu Manado', 'Klepon dan kue lapis']
        },
        {
          name: 'Mediterranean Feast',
          description: 'Cita rasa Mediterania yang segar dan sehat untuk suasana yang lebih kasual.',
          highlights: ['Mezze platter lengkap', 'Grilled lamb chops', 'Seafood paella', 'Tiramisu homemade']
        },
        {
          name: 'Japanese Omakase',
          description: 'Pengalaman omakase autentik dengan bahan-bahan premium pilihan chef.',
          highlights: ['Sashimi platter premium', 'Chawanmushi', 'Wagyu teppanyaki', 'Matcha dessert']
        }
      ]
    },
    testimonials: {
      title: 'Testimoni dari Kebayoran Baru',
      reviews: [
        {
          name: 'Keluarga Wijaya',
          event: 'Perayaan ulang tahun pernikahan',
          quote: 'Suami sangat terkesan! Menu 5-course dinner-nya luar biasa. Seperti fine dining tapi di rumah sendiri. Terima kasih myCHEF!'
        },
        {
          name: 'Bu Sandra',
          event: 'Gathering arisan di rumah',
          quote: 'Ibu-ibu arisan pada heboh karena makanannya enak banget. Pelayanannya juga profesional. Recommended!'
        },
        {
          name: 'Pak Dharma',
          event: 'Dinner dengan investor asing',
          quote: 'Klien dari Singapura sangat impressed dengan kualitas makanan dan presentasinya. Deal bisnis jadi lebih lancar!'
        }
      ]
    },
    faq: {
      title: 'FAQ Layanan di Kebayoran Baru',
      items: [
        {
          question: 'Minimal berapa orang untuk booking?',
          answer: 'Mulai dari 2 orang untuk intimate dinner. Untuk acara besar, kami bisa handle hingga 100 tamu dengan tim chef tambahan.'
        },
        {
          question: 'Apakah chef membawa peralatan sendiri?',
          answer: 'Chef menggunakan peralatan dapur Anda. Jika perlu peralatan khusus seperti grill atau peralatan BBQ, bisa kami sediakan dengan biaya tambahan.'
        },
        {
          question: 'Bisa request menu tertentu yang tidak ada di list?',
          answer: 'Tentu! Kami sangat fleksibel. Sampaikan permintaan Anda dan chef kami akan berusaha mengakomodasi.'
        },
        {
          question: 'Area Kebayoran Baru mana saja yang dijangkau?',
          answer: 'Seluruh Kebayoran Baru: Senopati, Gunawarman, Prapanca, Wijaya, Cipete, Gandaria, dan sekitarnya.'
        },
        {
          question: 'Apakah ada biaya transportasi tambahan?',
          answer: 'Untuk area Kebayoran Baru dan Jakarta Selatan, tidak ada biaya transportasi tambahan.'
        },
        {
          question: 'Berapa lama waktu yang dibutuhkan untuk persiapan?',
          answer: 'Idealnya booking dilakukan 3-7 hari sebelumnya. Untuk acara besar, 2 minggu lebih baik. Last minute juga bisa diusahakan tergantung ketersediaan.'
        }
      ]
    },
    closingCta: {
      title: 'Jadikan Acara Anda Istimewa',
      paragraph: 'Warga Kebayoran Baru layak mendapat yang terbaik. Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran spesial. Tim myCHEF siap mewujudkan pengalaman kuliner impian Anda.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-kebayoran-baru",
      "name": "Private Chef Kebayoran Baru",
      "description": "Layanan private chef profesional di Kebayoran Baru, Jakarta Selatan. Hidangan fine dining untuk dinner keluarga dan acara spesial.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Kebayoran Baru", "Jakarta Selatan", "Jakarta"]
    }
  },

  'pondok-indah': {
    name: 'Pondok Indah',
    slug: 'pondok-indah',
    region: 'Jakarta Selatan',
    metaTitle: 'Private Chef Pondok Indah | Layanan Koki Eksklusif',
    metaDescription: 'Private chef profesional di Pondok Indah. Nikmati hidangan mewah di rumah Anda. Menu custom, chef berpengalaman. Pesan sekarang!',
    heroTitle: 'Private Chef Pondok Indah',
    heroSubtitle: 'Hadirkan kemewahan kuliner di "Beverly Hills-nya Jakarta". Chef profesional kami siap menciptakan pengalaman fine dining eksklusif di kediaman Anda.',
    heroBullets: [
      'Chef berpengalaman di hotel dan restoran bintang lima',
      'Menu custom sesuai selera: Indonesia, Western, Asian, Fusion',
      'Full service dari belanja hingga bersih-bersih'
    ],
    ctaText: 'Booking Private Chef',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya mau booking private chef di Pondok Indah.',
    localPositioning: {
      areaType: 'Kawasan premium "Beverly Hills Jakarta" dengan rumah-rumah mewah',
      paragraphs: [
        'Pondok Indah dikenal sebagai "Beverly Hills-nya Jakarta" – kawasan elit dengan rumah-rumah mewah, fasilitas premium, dan gaya hidup kelas atas. Penghuni Pondok Indah terbiasa dengan standar tinggi dalam segala hal, termasuk pengalaman kuliner.',
        'Layanan private chef kami dirancang khusus untuk memenuhi ekspektasi tinggi warga Pondok Indah. Sempurna untuk poolside dinner party, perayaan anniversary romantis, birthday bash untuk anak-anak, garden party elegan, atau intimate gathering dengan sahabat terdekat.'
      ]
    },
    benefits: {
      title: 'Mengapa Private Chef di Pondok Indah?',
      items: [
        { title: 'Eksklusivitas Total', description: 'Acara Anda 100% privat. Tidak ada mata-mata atau gangguan dari luar.' },
        { title: 'Kenyamanan Premium', description: 'Nikmati hidangan lezat tanpa keluar dari zona nyaman rumah Anda.' },
        { title: 'Personalisasi Penuh', description: 'Setiap detail menu disesuaikan dengan preferensi dan kebutuhan keluarga.' },
        { title: 'Standar Hotel Bintang 5', description: 'Kualitas makanan dan pelayanan setara restoran hotel mewah.' }
      ]
    },
    howItWorks: {
      title: 'Proses Booking Mudah',
      steps: [
        { step: 'Kirim Inquiry', description: 'WhatsApp kami dengan tanggal, jumlah tamu, dan gambaran acara Anda.' },
        { step: 'Konsultasi Menu', description: 'Diskusikan preferensi menu, diet khusus, dan budget dengan tim kami.' },
        { step: 'Terima Proposal', description: 'Kami kirimkan proposal lengkap dengan menu dan harga transparan.' },
        { step: 'Konfirmasi & DP', description: 'Setujui proposal dan bayar DP 50% untuk lock tanggal.' },
        { step: 'Hari H Magic', description: 'Chef tiba, masak hidangan spektakuler, dan bersihkan semua setelahnya.' }
      ]
    },
    menuExamples: {
      title: 'Menu Signature Kami',
      packages: [
        {
          name: 'Nusantara Luxury',
          description: 'Masakan Indonesia premium dengan bahan-bahan terbaik dan presentasi modern.',
          highlights: ['Oxtail soup premium', 'Bebek betutu daun pisang', 'Gurame terbang saus asam manis', 'Es teler premium']
        },
        {
          name: 'International Gourmet',
          description: 'Perjalanan kuliner internasional dengan sentuhan fine dining.',
          highlights: ['Foie gras torchon', 'Lobster thermidor', 'Wagyu beef tenderloin', 'Crème brûlée']
        },
        {
          name: 'Healthy Gourmet',
          description: 'Menu sehat tanpa kompromi rasa untuk yang menjaga pola makan.',
          highlights: ['Quinoa superfood salad', 'Grilled salmon omega-3', 'Steamed vegetables', 'Fresh fruit pavlova']
        }
      ]
    },
    testimonials: {
      title: 'Review dari Pondok Indah',
      reviews: [
        {
          name: 'Mrs. Tania',
          event: 'Garden party 30 orang',
          quote: 'Acara garden party kami jadi sangat memorable! Makanannya luar biasa dan service-nya impeccable. Tamu-tamu sampai minta kontak chef-nya!'
        },
        {
          name: 'Keluarga Hartono',
          event: 'Family dinner Tahun Baru',
          quote: 'Tahun Baru di rumah jadi lebih spesial dengan private chef. Anak-anak happy, orang tua puas. Perfect!'
        },
        {
          name: 'Pak Raymond',
          event: 'Dinner bisnis di rumah',
          quote: 'Klien-klien saya impressed berat! Quality-nya tidak kalah dengan restaurant hotel manapun. Highly recommended.'
        }
      ]
    },
    faq: {
      title: 'Pertanyaan Seputar Layanan',
      items: [
        {
          question: 'Apakah bisa untuk acara outdoor seperti poolside dinner?',
          answer: 'Tentu! Kami berpengalaman menangani poolside dinner, garden party, dan acara outdoor lainnya di Pondok Indah.'
        },
        {
          question: 'Berapa range harga untuk private chef?',
          answer: 'Mulai dari Rp 800.000/jam untuk chef service. Bahan makanan dihitung terpisah sesuai menu yang dipilih. Kami selalu transparan soal biaya.'
        },
        {
          question: 'Bisa minta menu vegetarian atau vegan?',
          answer: 'Absolutely! Chef kami terlatih membuat menu vegetarian, vegan, pescatarian, dan berbagai kebutuhan diet lainnya.'
        },
        {
          question: 'Perlu menyediakan apa dari pihak tuan rumah?',
          answer: 'Cukup dapur yang bersih dan peralatan standar. Jika perlu peralatan khusus, kami bisa arrange.'
        },
        {
          question: 'Apakah ada pilihan waiter tambahan?',
          answer: 'Ya, kami menyediakan waiter profesional dengan tambahan biaya. Sangat recommended untuk acara di atas 10 orang.'
        },
        {
          question: 'Bagaimana jika ada food allergy?',
          answer: 'Informasikan semua alergi saat konsultasi menu. Chef kami akan memastikan keamanan makanan untuk semua tamu.'
        }
      ]
    },
    closingCta: {
      title: 'Wujudkan Pengalaman Kuliner Impian',
      paragraph: 'Rumah mewah Anda di Pondok Indah pantas mendapatkan pengalaman kuliner yang setara. Hubungi myCHEF sekarang untuk konsultasi gratis. Kami siap membantu merencanakan acara kuliner tak terlupakan untuk Anda dan orang-orang tersayang.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-pondok-indah",
      "name": "Private Chef Pondok Indah",
      "description": "Layanan private chef eksklusif di Pondok Indah, Jakarta Selatan. Hidangan fine dining untuk keluarga dan acara spesial.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Pondok Indah", "Jakarta Selatan", "Jakarta"]
    }
  },

  'senayan': {
    name: 'Senayan',
    slug: 'senayan',
    region: 'Jakarta Selatan',
    metaTitle: 'Private Chef Senayan | Jasa Koki Pribadi Premium',
    metaDescription: 'Layanan private chef profesional di Senayan. Hidangan berkualitas tinggi untuk dinner eksklusif. Menu custom, chef berpengalaman. Book now!',
    heroTitle: 'Private Chef Senayan',
    heroSubtitle: 'Nikmati kemewahan kuliner di jantung Jakarta. Chef profesional kami menghadirkan pengalaman fine dining istimewa di apartemen atau rumah Anda di Senayan.',
    heroBullets: [
      'Chef dengan background restoran fine dining ternama',
      'Cocok untuk apartemen mewah maupun landed house',
      'Service lengkap: perencanaan menu hingga clean up'
    ],
    ctaText: 'Pesan Chef Sekarang',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya tertarik private chef di area Senayan.',
    localPositioning: {
      areaType: 'Kawasan premium dengan apartemen mewah dan perumahan elit',
      paragraphs: [
        'Senayan adalah salah satu lokasi paling strategis dan prestisius di Jakarta, dikelilingi oleh kompleks olahraga internasional, pusat perbelanjaan mewah, dan gedung perkantoran premium. Area ini dihuni oleh eksekutif, pengusaha, dan keluarga mapan yang menghargai kualitas tinggi.',
        'Layanan private chef kami sangat cocok untuk penghuni apartemen mewah di Senayan yang ingin menjamu tamu tanpa repot, atau keluarga yang merayakan momen spesial seperti anniversary, graduation dinner, atau quality time bersama orang tua. Dengan dapur modern yang tersedia, chef kami bisa berkreasi maksimal.'
      ]
    },
    benefits: {
      title: 'Keuntungan Private Chef di Senayan',
      items: [
        { title: 'Tidak Perlu Keluar Rumah', description: 'Hindari macet Jakarta. Restoran bintang lima datang ke unit Anda.' },
        { title: 'Privasi Apartemen', description: 'Nikmati suasana intim tanpa kebisingan restoran umum.' },
        { title: 'Menu Sesuai Keinginan', description: 'Dari comfort food hingga haute cuisine, semua bisa diakomodasi.' },
        { title: 'Pengalaman Berkelas', description: 'Elevate setiap acara makan Anda menjadi momen memorable.' }
      ]
    },
    howItWorks: {
      title: 'Cara Booking Private Chef',
      steps: [
        { step: 'Hubungi Tim Kami', description: 'Chat via WhatsApp dengan detail acara: tanggal, lokasi unit, jumlah tamu.' },
        { step: 'Pilih Menu', description: 'Diskusikan preferensi: Indonesian, Western, Asian, atau fusion.' },
        { step: 'Konfirmasi Booking', description: 'Terima proposal, setuju dengan terms, dan bayar deposit.' },
        { step: 'Chef On Site', description: 'Chef datang ke apartemen/rumah Anda di Senayan, ready to cook.' },
        { step: 'Enjoy & Relax', description: 'Anda tinggal menikmati hidangan dan quality time dengan tamu.' }
      ]
    },
    menuExamples: {
      title: 'Opsi Menu Populer',
      packages: [
        {
          name: 'Jakarta Comfort Food',
          description: 'Hidangan comfort food khas Jakarta dengan twist gourmet.',
          highlights: ['Sop buntut spesial', 'Nasi goreng wagyu', 'Gado-gado premium', 'Pisang goreng keju']
        },
        {
          name: 'European Classic',
          description: 'Menu klasik Eropa untuk suasana yang lebih formal dan elegan.',
          highlights: ['French onion soup', 'Duck confit', 'Grilled ribeye steak', 'Profiteroles']
        },
        {
          name: 'Seafood Extravaganza',
          description: 'Pesta seafood segar untuk pencinta hasil laut.',
          highlights: ['Fresh oysters', 'Garlic butter prawns', 'Baked whole fish', 'Coconut panna cotta']
        }
      ]
    },
    testimonials: {
      title: 'Testimoni dari Senayan',
      reviews: [
        {
          name: 'Mbak Felicia',
          event: 'Birthday dinner di apartemen',
          quote: 'Surprise ultah untuk suami jadi perfect! Chef-nya kreatif, makanannya enak, dan yang paling penting: dapur bersih setelahnya!'
        },
        {
          name: 'Pak Gunawan',
          event: 'Family reunion',
          quote: 'Menjamu orang tua dan saudara dari luar kota jadi mudah. Tidak perlu pusing cari restoran. Semua happy!'
        },
        {
          name: 'Mrs. Angela',
          event: 'Intimate dinner 6 orang',
          quote: 'Quality makanan setara dengan restaurant fine dining di Senayan City. Worth every penny!'
        }
      ]
    },
    faq: {
      title: 'FAQ Private Chef Senayan',
      items: [
        {
          question: 'Apakah cocok untuk dapur apartemen yang tidak terlalu besar?',
          answer: 'Tentu! Chef kami terbiasa bekerja di berbagai ukuran dapur. Kami akan menyesuaikan menu dan metode masak dengan fasilitas yang tersedia.'
        },
        {
          question: 'Bagaimana dengan akses ke apartemen untuk chef?',
          answer: 'Chef akan koordinasi dengan Anda tentang proses masuk gedung. Biasanya cukup dengan access card tamu atau diregistrasi di lobby.'
        },
        {
          question: 'Bisa untuk acara kecil 2-4 orang saja?',
          answer: 'Sangat bisa! Kami sering melayani intimate dinner untuk pasangan atau small family gathering.'
        },
        {
          question: 'Area Senayan mana saja yang dilayani?',
          answer: 'Seluruh Senayan: Fairground, FX, Senayan City area, Gelora, Permata Hijau, dan sekitarnya.'
        },
        {
          question: 'Apakah bisa request wine pairing?',
          answer: 'Ya, kami bisa bantu arrange wine pairing dengan tambahan biaya. Chef akan merekomendasikan wine yang cocok dengan menu.'
        },
        {
          question: 'Berapa lama notice yang dibutuhkan untuk booking?',
          answer: 'Idealnya 3-5 hari sebelumnya. Untuk weekend dan tanggal populer, booking lebih awal sangat disarankan.'
        }
      ]
    },
    closingCta: {
      title: 'Elevate Your Dining Experience',
      paragraph: 'Jadikan setiap momen makan di Senayan lebih istimewa dengan private chef profesional. Hubungi myCHEF sekarang – konsultasi gratis, tanpa komitmen. Kami siap membantu mewujudkan pengalaman kuliner premium di rumah Anda.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-senayan",
      "name": "Private Chef Senayan",
      "description": "Layanan private chef profesional di Senayan, Jakarta. Fine dining untuk apartemen mewah dan rumah elit.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Senayan", "Jakarta Selatan", "Jakarta"]
    }
  },

  'scbd': {
    name: 'SCBD Sudirman',
    slug: 'scbd',
    region: 'Jakarta Pusat',
    metaTitle: 'Private Chef SCBD | Koki Pribadi untuk Eksekutif',
    metaDescription: 'Private chef profesional di SCBD Sudirman. Layanan kuliner eksklusif untuk eksekutif dan profesional. Menu premium, chef berpengalaman. Booking now!',
    heroTitle: 'Private Chef SCBD Sudirman',
    heroSubtitle: 'Layanan kuliner eksklusif untuk para eksekutif di pusat bisnis Jakarta. Chef profesional kami menghadirkan pengalaman fine dining di apartemen mewah SCBD.',
    heroBullets: [
      'Chef dengan pengalaman di hotel dan restoran internasional',
      'Sempurna untuk business dinner dan client entertainment',
      'Layanan fleksibel untuk busy professional'
    ],
    ctaText: 'Book Private Chef',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya ingin booking private chef di SCBD.',
    localPositioning: {
      areaType: 'Central Business District dengan apartemen mewah high-rise',
      paragraphs: [
        'SCBD (Sudirman Central Business District) adalah jantung bisnis Jakarta, tempat berkumpulnya gedung-gedung pencakar langit, kantor multinasional, dan apartemen super mewah. Para penghuninya adalah eksekutif, entrepreneur, dan profesional sukses dengan standar hidup tinggi.',
        'Layanan private chef kami dirancang untuk memenuhi kebutuhan busy professional di SCBD. Ideal untuk menjamu klien penting tanpa harus keluar ke restoran, merayakan closing deal dengan tim, dinner romantis setelah hari kerja yang panjang, atau simply treating yourself dengan hidangan gourmet tanpa repot.'
      ]
    },
    benefits: {
      title: 'Mengapa Private Chef untuk Profesional SCBD?',
      items: [
        { title: 'Time Efficiency', description: 'Tidak perlu booking restoran atau stuck di traffic. Maksimalkan waktu produktif Anda.' },
        { title: 'Impress Your Clients', description: 'Entertainment di private setting lebih memorable dan personal dibanding restoran.' },
        { title: 'Work-Life Balance', description: 'Nikmati makanan berkualitas tanpa mengorbankan waktu istirahat di rumah.' },
        { title: 'Confidential Setting', description: 'Diskusi bisnis sensitif lebih aman di ruang privat Anda.' }
      ]
    },
    howItWorks: {
      title: 'Simple Booking Process',
      steps: [
        { step: 'Quick Inquiry', description: 'WhatsApp kami dengan tanggal, waktu, jumlah tamu, dan jenis acara.' },
        { step: 'Menu Planning', description: 'Tim kami bantu pilih menu yang sesuai dengan tujuan acara Anda.' },
        { step: 'Swift Confirmation', description: 'Terima proposal, approve, dan secure booking dengan DP.' },
        { step: 'Seamless Execution', description: 'Chef tiba tepat waktu, eksekusi sempurna, bersih-bersih lengkap.' },
        { step: 'Focus on What Matters', description: 'Anda fokus pada tamu dan percakapan, biarkan chef handle sisanya.' }
      ]
    },
    menuExamples: {
      title: 'Menu untuk Business & Pleasure',
      packages: [
        {
          name: 'Executive Dinner',
          description: 'Menu refined untuk impress klien dan partner bisnis.',
          highlights: ['Amuse-bouche', 'Seared scallops', 'Prime beef tenderloin', 'Chocolate soufflé']
        },
        {
          name: 'Team Celebration',
          description: 'Menu sharing style untuk merayakan success bersama tim.',
          highlights: ['Assorted canapés', 'Pasta station', 'Mixed grill platter', 'Dessert selection']
        },
        {
          name: 'After Work Unwind',
          description: 'Comfort food premium untuk decompress setelah hari yang panjang.',
          highlights: ['Truffle fries', 'Wagyu burger', 'Mac and cheese', 'New York cheesecake']
        }
      ]
    },
    testimonials: {
      title: 'Feedback dari SCBD',
      reviews: [
        {
          name: 'Mr. Kevin',
          event: 'Client dinner di Pacific Place Residence',
          quote: 'My clients from Singapore were very impressed. The whole experience was seamless and the food was exceptional. Definitely my go-to for client entertainment now.'
        },
        {
          name: 'Ms. Priscilla',
          event: 'Team celebration closing deal',
          quote: 'Merayakan closing big deal dengan tim jadi lebih meaningful di apartemen daripada restoran. Chef-nya sangat accommodate request kami.'
        },
        {
          name: 'Pak Andri',
          event: 'Anniversary dinner',
          quote: 'Setelah meeting seharian, pulang ke apartemen dan ada private dinner romantis yang sudah ready. Best surprise untuk istri!'
        }
      ]
    },
    faq: {
      title: 'FAQ untuk SCBD',
      items: [
        {
          question: 'Apakah bisa last-minute booking untuk hari yang sama?',
          answer: 'Tergantung ketersediaan, tapi kami berusaha mengakomodasi. Semakin awal booking, semakin baik pilihan menu dan chef.'
        },
        {
          question: 'Bagaimana dengan parking dan akses gedung?',
          answer: 'Chef akan koordinasi dengan concierge gedung. Anda cukup inform building management tentang kedatangan chef.'
        },
        {
          question: 'Bisa untuk meeting sambil makan?',
          answer: 'Absolutely! Banyak klien kami gunakan layanan ini untuk working dinner atau lunch meeting di apartemen.'
        },
        {
          question: 'Apartemen mana saja di SCBD yang dilayani?',
          answer: 'Semua: Pacific Place, The Pakubuwono, Keraton, Anandamaya, Sudirman Suites, dan gedung lainnya di SCBD area.'
        },
        {
          question: 'Bisa arrange minuman juga?',
          answer: 'Ya, kami bisa bantu arrange wine, champagne, atau minuman lainnya dengan biaya tambahan.'
        },
        {
          question: 'Apakah chef bisa standby lebih lama jika meeting molor?',
          answer: 'Bisa diatur. Akan ada tambahan biaya untuk extended hours, tapi kami fleksibel untuk kebutuhan profesional.'
        }
      ]
    },
    closingCta: {
      title: 'Upgrade Your Entertainment Game',
      paragraph: 'Sebagai profesional di SCBD, Anda tahu pentingnya first impression. Hubungi myCHEF sekarang dan biarkan kami membantu Anda impress klien, reward tim, atau simply enjoy quality dining tanpa hassle. Konsultasi gratis!'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-scbd",
      "name": "Private Chef SCBD Sudirman",
      "description": "Layanan private chef eksklusif di SCBD Sudirman, Jakarta. Kuliner premium untuk eksekutif dan profesional.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["SCBD", "Sudirman", "Jakarta Pusat", "Jakarta"]
    }
  },

  'kemang': {
    name: 'Kemang',
    slug: 'kemang',
    region: 'Jakarta Selatan',
    metaTitle: 'Private Chef Kemang | Koki Pribadi untuk Expat & Lokal',
    metaDescription: 'Private chef profesional di Kemang. Layanan koki pribadi untuk expat dan keluarga Indonesia. Menu internasional & lokal. Booking sekarang!',
    heroTitle: 'Private Chef Kemang',
    heroSubtitle: 'Layanan kuliner premium di kawasan kosmopolitan Kemang. Chef profesional kami menghadirkan cita rasa dunia langsung ke villa atau rumah Anda.',
    heroBullets: [
      'Chef berpengalaman dengan berbagai cuisine internasional',
      'Melayani komunitas expat dan keluarga Indonesia',
      'Fleksibel untuk casual gathering hingga formal dinner'
    ],
    ctaText: 'Chat dengan Kami',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya tertarik dengan private chef di Kemang.',
    localPositioning: {
      areaType: 'Kawasan kosmopolitan dengan banyak expat dan keluarga modern',
      paragraphs: [
        'Kemang adalah salah satu kawasan paling kosmopolitan di Jakarta Selatan, terkenal dengan deretan café trendy, restoran internasional, dan komunitas expat yang besar. Area ini memiliki karakter unik: vibrant, casual, tapi tetap sophisticated.',
        'Layanan private chef kami sangat populer di kalangan penghuni Kemang – baik expat yang rindu masakan dari negaranya, maupun keluarga Indonesia yang ingin mencoba sesuatu berbeda. Cocok untuk house party dengan teman-teman, Sunday brunch di rumah, kids birthday party, atau makan malam intim dengan pasangan tanpa harus keluar.'
      ]
    },
    benefits: {
      title: 'Keunggulan Private Chef di Kemang',
      items: [
        { title: 'Cuisine Diversity', description: 'Dari Indonesian, Italian, Japanese, hingga Middle Eastern – chef kami bisa handle semuanya.' },
        { title: 'Kemang Vibe', description: 'Suasana casual tapi tetap gourmet, sesuai dengan karakter Kemang.' },
        { title: 'Family-Friendly', description: 'Menu bisa disesuaikan untuk anak-anak dan adults dengan preferensi berbeda.' },
        { title: 'Home Comfort', description: 'Nikmati makanan lezat di zona nyaman rumah Anda sendiri.' }
      ]
    },
    howItWorks: {
      title: 'Cara Kerja yang Simple',
      steps: [
        { step: 'Reach Out', description: 'WhatsApp kami dengan detil acara: kapan, berapa orang, mau menu apa.' },
        { step: 'Menu Discussion', description: 'Ceritakan preferensi, alergi, dan budget. Kami bantu design menu-nya.' },
        { step: 'Get Quote', description: 'Terima proposal lengkap dengan breakdown biaya yang transparan.' },
        { step: 'Confirm & Pay', description: 'Happy dengan proposal? Bayar DP dan tanggal Anda sudah di-lock.' },
        { step: 'Sit Back & Enjoy', description: 'Chef handle semuanya. Anda tinggal enjoy time dengan tamu.' }
      ]
    },
    menuExamples: {
      title: 'Popular Menu Choices',
      packages: [
        {
          name: 'Kemang Brunch',
          description: 'Perfect untuk lazy Sunday brunch di rumah bersama keluarga atau teman.',
          highlights: ['Eggs Benedict', 'Pancake stack', 'Fresh juice bar', 'Fruit platter']
        },
        {
          name: 'International BBQ',
          description: 'BBQ party ala Kemang dengan berbagai protein premium.',
          highlights: ['Marinated ribs', 'Grilled seafood', 'Korean BBQ station', 'Grilled vegetables']
        },
        {
          name: 'Kids Party Special',
          description: 'Menu yang disukai anak-anak dengan presentasi yang fun.',
          highlights: ['Mini burgers', 'Pizza station', 'Chicken nuggets homemade', 'Ice cream sundae bar']
        }
      ]
    },
    testimonials: {
      title: 'Apa Kata Warga Kemang',
      reviews: [
        {
          name: 'Sarah (Australian expat)',
          event: 'Housewarming party',
          quote: 'Moved to Kemang last year and this was the best way to celebrate our new home! Chef made amazing food and everyone had a great time.'
        },
        {
          name: 'Keluarga Sutanto',
          event: 'Birthday party anak',
          quote: 'Anak-anak senang banget! Menu-nya kid-friendly tapi orang tua juga puas. Service-nya profesional dan ramah.'
        },
        {
          name: 'Mas Ricky',
          event: 'Weekend gathering dengan teman-teman',
          quote: 'BBQ party di halaman rumah jadi next level dengan private chef. Gak perlu repot bolak-balik ke grill, semua dihandle!'
        }
      ]
    },
    faq: {
      title: 'FAQ Kemang',
      items: [
        {
          question: 'Bisa untuk outdoor party di halaman rumah?',
          answer: 'Tentu! Kemang terkenal dengan rumah-rumah yang punya halaman. Kami bisa setup outdoor cooking station dan BBQ.'
        },
        {
          question: 'Apakah chef bisa masak menu dari negara tertentu?',
          answer: 'Yes! Chef kami bisa handle berbagai cuisine: Italian, Japanese, Korean, Middle Eastern, Indian, dan lainnya. Diskusikan saja dengan tim kami.'
        },
        {
          question: 'Minimum berapa orang?',
          answer: 'Mulai dari 2 orang saja untuk intimate dinner. Untuk party, kami bisa handle hingga 50+ orang.'
        },
        {
          question: 'Area Kemang mana yang dicakup?',
          answer: 'Seluruh Kemang: Kemang Raya, Kemang Timur, Kemang Selatan, Kemang Utara, Bangka, Ampera, dan sekitarnya.'
        },
        {
          question: 'Apakah bisa bilingual service?',
          answer: 'Ya, sebagian besar chef dan tim kami bisa berbahasa Inggris. Perfect untuk acara dengan tamu expat.'
        },
        {
          question: 'Berapa lama durasi typical untuk party?',
          answer: 'Untuk party 15-20 orang, biasanya 5-6 jam termasuk persiapan dan cleanup. Bisa lebih lama untuk acara besar.'
        }
      ]
    },
    closingCta: {
      title: 'Ready to Elevate Your Home Dining?',
      paragraph: 'Kemang life just got better! Hubungi myCHEF sekarang untuk diskusi tentang acara Anda. Whether it\'s a casual brunch atau fancy dinner, kami siap bantu. Konsultasi gratis, no strings attached!'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-kemang",
      "name": "Private Chef Kemang",
      "description": "Layanan private chef profesional di Kemang, Jakarta Selatan. Cuisine internasional untuk expat dan keluarga Indonesia.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Kemang", "Jakarta Selatan", "Jakarta"]
    }
  },

  'pantai-indah-kapuk': {
    name: 'Pantai Indah Kapuk',
    slug: 'pantai-indah-kapuk',
    region: 'Jakarta Utara',
    metaTitle: 'Private Chef PIK | Koki Pribadi untuk Keluarga Elite',
    metaDescription: 'Private chef profesional di Pantai Indah Kapuk. Layanan kuliner eksklusif untuk keluarga PIK. Menu custom, chef tersertifikasi. Pesan sekarang!',
    heroTitle: 'Private Chef Pantai Indah Kapuk',
    heroSubtitle: 'Hadirkan pengalaman fine dining di kawasan premium PIK. Chef profesional kami siap melayani keluarga Anda dengan hidangan berkualitas tinggi.',
    heroBullets: [
      'Chef berpengalaman dalam berbagai cuisine Asia dan Western',
      'Familiar dengan gated community dan cluster PIK',
      'Service lengkap dari menu planning hingga bersih-bersih'
    ],
    ctaText: 'Hubungi Kami Sekarang',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya mau tanya layanan private chef di PIK.',
    localPositioning: {
      areaType: 'Kawasan gated community mewah dengan keluarga upper-class',
      paragraphs: [
        'Pantai Indah Kapuk (PIK) adalah salah satu kawasan paling eksklusif di Jakarta Utara, dengan perumahan cluster mewah, fasilitas premium, dan komunitas yang solid. PIK terkenal dengan penghuni yang menghargai kualitas hidup tinggi dan pengalaman kuliner yang excellent.',
        'Layanan private chef kami sangat diminati di PIK untuk berbagai kesempatan: family dinner rutin di rumah, Chinese New Year celebration besar-besaran, birthday party anak di halaman, gathering dengan tetangga satu cluster, atau simply pampering diri sendiri dengan makanan enak tanpa harus keluar kompleks.'
      ]
    },
    benefits: {
      title: 'Kenapa Private Chef untuk Keluarga PIK?',
      items: [
        { title: 'Tidak Perlu Keluar Kompleks', description: 'Makanan restoran berkualitas datang ke rumah. Praktis dan efisien.' },
        { title: 'Perfect untuk Keluarga Besar', description: 'PIK terkenal dengan extended family. Kami bisa handle gathering besar.' },
        { title: 'Menu Variatif', description: 'Chinese, Indonesian, Western, Japanese – semua bisa kami sediakan.' },
        { title: 'Keamanan Terjamin', description: 'Chef kami profesional dan terverifikasi, aman untuk rumah Anda.' }
      ]
    },
    howItWorks: {
      title: 'Proses Booking',
      steps: [
        { step: 'Kontak Kami', description: 'WhatsApp dengan detail: cluster/alamat, tanggal, jumlah tamu, preferensi menu.' },
        { step: 'Diskusi Menu', description: 'Konsultasi tentang menu, dietary requirements, dan budget.' },
        { step: 'Proposal & Confirm', description: 'Terima proposal lengkap, setujui, dan bayar DP.' },
        { step: 'Chef Datang', description: 'Chef koordinasi dengan security cluster dan tiba tepat waktu.' },
        { step: 'Nikmati Hidangan', description: 'Semua dimasak fresh, disajikan cantik, dapur dibersihkan setelahnya.' }
      ]
    },
    menuExamples: {
      title: 'Menu Favorit Keluarga PIK',
      packages: [
        {
          name: 'Chinese Feast',
          description: 'Hidangan Chinese autentik untuk gathering keluarga atau perayaan.',
          highlights: ['Peking duck', 'Steamed fish hongkong style', 'Dim sum assortment', 'Mango sago']
        },
        {
          name: 'Family Style Indonesian',
          description: 'Masakan Indonesia rumahan dengan kualitas premium.',
          highlights: ['Sop iga premium', 'Ayam bakar taliwang', 'Udang saus padang', 'Es buah segar']
        },
        {
          name: 'International Selection',
          description: 'Mix menu internasional untuk selera yang beragam.',
          highlights: ['Salad bar', 'Pasta station', 'Grilled meat selection', 'Dessert platter']
        }
      ]
    },
    testimonials: {
      title: 'Ulasan dari Warga PIK',
      reviews: [
        {
          name: 'Ibu Lilian',
          event: 'Chinese New Year dinner di Golf Island',
          quote: 'Tahun Baru Imlek jadi lebih spesial! Makanan Chinese-nya authentic, semua keluarga besar sangat puas. Chef-nya ramah dan profesional.'
        },
        {
          name: 'Keluarga Tanujaya',
          event: 'Birthday party anak di PIK 2',
          quote: 'Anak-anak happy, orang tua juga makan enak. Tidak perlu repot prepare dan bersih-bersih. Highly recommended!'
        },
        {
          name: 'Pak William',
          event: 'Weekly family dinner',
          quote: 'Sudah 3x pakai myCHEF untuk family dinner mingguan. Konsisten enak dan service-nya excellent. Jadi langganan!'
        }
      ]
    },
    faq: {
      title: 'FAQ untuk PIK',
      items: [
        {
          question: 'Bagaimana chef masuk ke gated community?',
          answer: 'Chef akan koordinasi dengan Anda untuk proses masuk. Biasanya Anda perlu inform security gate dengan nama dan waktu kedatangan chef.'
        },
        {
          question: 'Cluster mana saja di PIK yang dilayani?',
          answer: 'Semua cluster di PIK: Golf Island, PIK 2, Pantai Maju, Bukit Golf, Sunrise Garden, dan seluruh area PIK.'
        },
        {
          question: 'Bisa untuk acara besar seperti Imlek atau wedding?',
          answer: 'Tentu! Kami berpengalaman menangani acara besar dengan 50-100+ tamu. Akan ada tim chef dan waiter tambahan.'
        },
        {
          question: 'Apakah ada menu khusus Chinese cuisine?',
          answer: 'Ya, chef kami ada yang spesialis Chinese cuisine. Bisa request specific dishes atau let chef create the menu.'
        },
        {
          question: 'Berapa lama waktu persiapan untuk acara besar?',
          answer: 'Untuk acara 30+ orang, idealnya booking 2 minggu sebelumnya. Untuk acara lebih kecil, 3-5 hari sudah cukup.'
        },
        {
          question: 'Bisa minta chef datang lebih awal untuk setup?',
          answer: 'Ya, untuk acara besar chef bisa datang lebih awal untuk preparation. Waktu kedatangan bisa didiskusikan.'
        }
      ]
    },
    closingCta: {
      title: 'Manjakan Keluarga dengan Private Chef',
      paragraph: 'Keluarga PIK pantas mendapat yang terbaik. Hubungi myCHEF sekarang untuk konsultasi gratis. Apapun acaranya – dari dinner intim hingga celebration besar – kami siap bantu wujudkan pengalaman kuliner istimewa di rumah Anda.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-pantai-indah-kapuk",
      "name": "Private Chef Pantai Indah Kapuk",
      "description": "Layanan private chef profesional di PIK, Jakarta Utara. Kuliner eksklusif untuk keluarga dan acara spesial.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Pantai Indah Kapuk", "PIK", "Jakarta Utara", "Jakarta"]
    }
  },

  'kelapa-gading': {
    name: 'Kelapa Gading',
    slug: 'kelapa-gading',
    region: 'Jakarta Utara',
    metaTitle: 'Private Chef Kelapa Gading | Layanan Koki Keluarga',
    metaDescription: 'Private chef profesional di Kelapa Gading. Hidangan berkualitas untuk keluarga dan acara spesial. Chef berpengalaman, menu custom. Booking now!',
    heroTitle: 'Private Chef Kelapa Gading',
    heroSubtitle: 'Layanan kuliner premium untuk keluarga Kelapa Gading. Chef profesional kami siap menghadirkan hidangan istimewa di rumah Anda.',
    heroBullets: [
      'Chef berpengalaman dengan berbagai cuisine',
      'Perfect untuk family gathering dan acara anak',
      'Service lengkap: menu planning, masak, sampai bersih-bersih'
    ],
    ctaText: 'Pesan Private Chef',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya mau booking private chef di Kelapa Gading.',
    localPositioning: {
      areaType: 'Kawasan keluarga premium dengan fasilitas lengkap',
      paragraphs: [
        'Kelapa Gading adalah kawasan family-friendly premium di Jakarta Utara, dengan perumahan cluster mewah, mall besar, dan sekolah internasional terbaik. Area ini dihuni oleh keluarga mapan yang mengutamakan kualitas hidup dan kenyamanan.',
        'Layanan private chef kami sangat cocok untuk kesibukan keluarga di Kelapa Gading. Ideal untuk family dinner di akhir pekan, birthday party anak yang meriah, gathering dengan keluarga besar saat lebaran atau natal, arisan ibu-ibu yang ingin tampil beda, atau makan malam romantis orang tua setelah anak-anak tidur.'
      ]
    },
    benefits: {
      title: 'Keuntungan Private Chef di Kelapa Gading',
      items: [
        { title: 'Hemat Waktu', description: 'Tidak perlu antar-jemput ke restoran. Makanan berkualitas datang ke rumah.' },
        { title: 'Kids-Friendly', description: 'Lebih nyaman untuk anak-anak makan di rumah sendiri dengan menu yang mereka suka.' },
        { title: 'Customizable', description: 'Menu bisa disesuaikan untuk berbagai selera dalam satu keluarga.' },
        { title: 'Hassle-Free', description: 'Chef handle semuanya. Anda fokus quality time dengan keluarga.' }
      ]
    },
    howItWorks: {
      title: 'Cara Booking Mudah',
      steps: [
        { step: 'Hubungi Kami', description: 'Chat via WhatsApp dengan tanggal, alamat cluster, jumlah orang.' },
        { step: 'Konsultasi Menu', description: 'Diskusikan preferensi: anak-anak suka apa, orang tua mau apa, ada alergi tidak.' },
        { step: 'Terima Proposal', description: 'Kami kirim proposal lengkap dengan menu dan harga transparan.' },
        { step: 'Konfirmasi Booking', description: 'Setujui proposal, bayar DP 50%, tanggal Anda aman.' },
        { step: 'Enjoy the Day', description: 'Chef tiba, masak hidangan lezat, bersihkan semua. Anda tinggal nikmati!' }
      ]
    },
    menuExamples: {
      title: 'Menu Populer untuk Keluarga',
      packages: [
        {
          name: 'Family Comfort',
          description: 'Hidangan comfort food yang disukai semua anggota keluarga.',
          highlights: ['Chicken katsu', 'Spaghetti bolognese', 'French fries', 'Ice cream sundae']
        },
        {
          name: 'Indonesian Homestyle',
          description: 'Masakan Indonesia rumahan yang hangat dan lezat.',
          highlights: ['Nasi goreng spesial', 'Ayam goreng kremes', 'Sayur asem', 'Kolak pisang']
        },
        {
          name: 'Asian Mix',
          description: 'Kombinasi hidangan Asia favorit keluarga.',
          highlights: ['Dimsum set', 'Teriyaki chicken', 'Pad thai', 'Mango pudding']
        }
      ]
    },
    testimonials: {
      title: 'Testimoni dari Kelapa Gading',
      reviews: [
        {
          name: 'Mama Clara',
          event: 'Birthday party anak di Sunter',
          quote: 'Party ulang tahun anak jadi super! Anak-anak makan lahap, orang tua juga puas. Bersih-bersihnya sampai tuntas. Top!'
        },
        {
          name: 'Keluarga Sutedja',
          event: 'Family dinner mingguan',
          quote: 'Sudah jadi rutinitas Minggu malam pakai myCHEF. Praktis, enak, dan bonding time dengan keluarga jadi lebih berkualitas.'
        },
        {
          name: 'Ibu Meilani',
          event: 'Arisan bulanan',
          quote: 'Ibu-ibu arisan pada kagum! Makanannya cantik dan enak. Saya tidak perlu repot sama sekali. Pasti repeat order!'
        }
      ]
    },
    faq: {
      title: 'FAQ Kelapa Gading',
      items: [
        {
          question: 'Area mana saja di Kelapa Gading yang dilayani?',
          answer: 'Seluruh Kelapa Gading: Kelapa Gading Permai, Boulevard, Sunter, Pegangsaan Dua, Kelapa Gading Timur, dan sekitarnya.'
        },
        {
          question: 'Bisa untuk birthday party anak-anak?',
          answer: 'Tentu! Kami berpengalaman menangani kids party dengan menu yang disukai anak-anak dan presentasi yang fun.'
        },
        {
          question: 'Apakah bisa request menu yang ramah anak?',
          answer: 'Pasti bisa! Kami bisa buat menu terpisah untuk anak-anak yang berbeda dengan menu orang dewasa.'
        },
        {
          question: 'Berapa minimum tamu untuk booking?',
          answer: 'Mulai dari 4 orang untuk family dinner. Tidak ada maksimum – kami bisa handle acara besar dengan tim tambahan.'
        },
        {
          question: 'Bagaimana kalau anak punya food allergy?',
          answer: 'Informasikan saat konsultasi menu. Chef kami akan memastikan semua makanan aman untuk anak-anak dengan alergi.'
        },
        {
          question: 'Apakah bisa minta menu yang tidak terlalu pedas?',
          answer: 'Tentu saja! Level kepedasan bisa disesuaikan. Untuk keluarga dengan anak kecil, kami biasanya buat versi mild.'
        }
      ]
    },
    closingCta: {
      title: 'Quality Time Keluarga Dimulai dari Sini',
      paragraph: 'Jadikan momen makan bersama keluarga di Kelapa Gading lebih spesial. Hubungi myCHEF sekarang untuk konsultasi gratis. Kami siap membantu menciptakan pengalaman kuliner yang memorable untuk seluruh keluarga Anda.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-kelapa-gading",
      "name": "Private Chef Kelapa Gading",
      "description": "Layanan private chef profesional di Kelapa Gading, Jakarta Utara. Kuliner keluarga untuk dinner dan acara spesial.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Kelapa Gading", "Sunter", "Jakarta Utara", "Jakarta"]
    }
  },

  'kuningan': {
    name: 'Kuningan',
    slug: 'kuningan',
    region: 'Jakarta Selatan',
    metaTitle: 'Private Chef Kuningan | Koki Pribadi untuk Profesional',
    metaDescription: 'Layanan private chef di Kuningan Jakarta. Hidangan fine dining untuk eksekutif dan keluarga. Chef profesional, menu premium. Book now!',
    heroTitle: 'Private Chef Kuningan',
    heroSubtitle: 'Layanan kuliner eksklusif di kawasan bisnis premium Kuningan. Chef profesional kami menghadirkan pengalaman fine dining di apartemen atau rumah Anda.',
    heroBullets: [
      'Chef dengan pengalaman di restoran fine dining',
      'Melayani apartemen high-end dan perumahan elite',
      'Fleksibel untuk business dinner dan personal celebration'
    ],
    ctaText: 'Book Chef Sekarang',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya tertarik private chef di Kuningan.',
    localPositioning: {
      areaType: 'Kawasan bisnis dengan apartemen mewah dan embassy row',
      paragraphs: [
        'Kuningan adalah kawasan premium yang menggabungkan area bisnis internasional dengan hunian mewah. Dengan kedutaan besar, gedung perkantoran kelas A, dan apartemen high-end, Kuningan menjadi pilihan para eksekutif, diplomat, dan profesional sukses.',
        'Layanan private chef kami sangat sesuai untuk gaya hidup penghuni Kuningan. Ideal untuk menjamu tamu bisnis internasional, merayakan momen spesial tanpa harus keluar gedung, dinner romantis setelah hari kerja yang sibuk, atau gathering dengan rekan kerja dalam suasana lebih personal.'
      ]
    },
    benefits: {
      title: 'Mengapa Private Chef di Kuningan?',
      items: [
        { title: 'Efisiensi Waktu', description: 'Tidak perlu stuck di traffic Kuningan. Fine dining datang ke unit Anda.' },
        { title: 'Privacy Matters', description: 'Diskusi bisnis atau momen personal lebih terjaga di ruang privat.' },
        { title: 'International Standard', description: 'Chef kami terbiasa dengan ekspektasi tamu internasional.' },
        { title: 'Apartment-Friendly', description: 'Kami berpengalaman cooking di berbagai ukuran dapur apartemen.' }
      ]
    },
    howItWorks: {
      title: 'Simple Booking Process',
      steps: [
        { step: 'Contact Us', description: 'WhatsApp dengan detail: tanggal, lokasi (nama gedung/cluster), jumlah tamu.' },
        { step: 'Menu Consultation', description: 'Diskusikan preferensi menu dan kebutuhan khusus.' },
        { step: 'Receive Proposal', description: 'Dapatkan proposal lengkap dengan menu dan pricing transparan.' },
        { step: 'Confirm Booking', description: 'Approve proposal dan secure tanggal dengan DP.' },
        { step: 'Enjoy Excellence', description: 'Chef handle segalanya. Anda fokus entertain tamu atau nikmati momen.' }
      ]
    },
    menuExamples: {
      title: 'Menu Options',
      packages: [
        {
          name: 'Business Dinner Menu',
          description: 'Menu refined untuk impress klien dan partner bisnis.',
          highlights: ['Amuse-bouche', 'Seafood appetizer', 'Grilled premium steak', 'Elegant dessert']
        },
        {
          name: 'Romantic Evening',
          description: 'Menu special untuk momen romantis berdua.',
          highlights: ['Champagne oysters', 'Lobster pasta', 'Surf and turf', 'Chocolate fondant for two']
        },
        {
          name: 'Casual Gathering',
          description: 'Menu sharing style untuk kumpul santai dengan teman.',
          highlights: ['Cheese board', 'Mezze platter', 'Grill selection', 'Mixed desserts']
        }
      ]
    },
    testimonials: {
      title: 'Feedback dari Kuningan',
      reviews: [
        {
          name: 'Mr. Anthony',
          event: 'Client dinner di Raffles Residences',
          quote: 'Impressed my Japanese clients with the quality of food and service. They thought we went to a Michelin restaurant! Great job myCHEF.'
        },
        {
          name: 'Ibu Dian',
          event: 'Anniversary dinner di apartemen',
          quote: 'Surprise anniversary untuk suami jadi sempurna! 5-course dinner yang romantic dan chef-nya sangat profesional.'
        },
        {
          name: 'Pak Herman',
          event: 'Weekend gathering di Setiabudi',
          quote: 'Kumpul dengan teman-teman kuliah jadi lebih seru dengan private chef. Makanan enak, tidak perlu pusing reservasi restoran.'
        }
      ]
    },
    faq: {
      title: 'FAQ Kuningan',
      items: [
        {
          question: 'Apartemen mana saja di Kuningan yang dilayani?',
          answer: 'Semua: Raffles Residences, Kuningan City, Pacific Place area, Bellagio, Somerset, Oakwood, dan gedung lainnya di Kuningan.'
        },
        {
          question: 'Bagaimana dengan akses ke gedung apartemen?',
          answer: 'Chef akan koordinasi dengan Anda untuk registrasi tamu. Biasanya melalui lobby atau access card temporary.'
        },
        {
          question: 'Apakah dapur apartemen cukup untuk chef cooking?',
          answer: 'Kami berpengalaman di berbagai ukuran dapur. Chef akan menyesuaikan teknik dan peralatan dengan fasilitas yang ada.'
        },
        {
          question: 'Bisa untuk acara kecil 2-3 orang?',
          answer: 'Sangat bisa! Kami sering melayani intimate dinner untuk couple atau small group.'
        },
        {
          question: 'Apakah ada minimum spending?',
          answer: 'Tidak ada minimum spending kaku. Kami akan berikan proposal sesuai dengan kebutuhan dan budget Anda.'
        },
        {
          question: 'Berapa notice time yang dibutuhkan?',
          answer: 'Idealnya 3-5 hari sebelumnya. Last minute bisa diusahakan tergantung ketersediaan chef.'
        }
      ]
    },
    closingCta: {
      title: 'Elevate Your Kuningan Lifestyle',
      paragraph: 'Penghuni Kuningan berhak atas pengalaman kuliner terbaik. Hubungi myCHEF sekarang untuk konsultasi gratis. Apakah untuk business dinner atau personal celebration, kami siap menghadirkan fine dining experience di rumah Anda.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-kuningan",
      "name": "Private Chef Kuningan",
      "description": "Layanan private chef profesional di Kuningan, Jakarta Selatan. Fine dining untuk eksekutif dan keluarga.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Kuningan", "Setiabudi", "Jakarta Selatan", "Jakarta"]
    }
  },

  'puri-indah': {
    name: 'Puri Indah',
    slug: 'puri-indah',
    region: 'Jakarta Barat',
    metaTitle: 'Private Chef Puri Indah | Koki Pribadi Profesional',
    metaDescription: 'Private chef profesional di Puri Indah Jakarta Barat. Layanan kuliner eksklusif untuk keluarga dan acara. Menu custom, chef berpengalaman. Booking now!',
    heroTitle: 'Private Chef Puri Indah',
    heroSubtitle: 'Layanan kuliner premium untuk keluarga Puri Indah. Chef profesional kami siap menghadirkan hidangan istimewa di kediaman Anda.',
    heroBullets: [
      'Chef tersertifikasi dengan pengalaman luas',
      'Cocok untuk keluarga dan acara sosial',
      'Full service dari perencanaan hingga bersih-bersih'
    ],
    ctaText: 'Hubungi Kami',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya ingin tanya layanan private chef di Puri Indah.',
    localPositioning: {
      areaType: 'Kawasan residensial berkembang dengan keluarga menengah-atas',
      paragraphs: [
        'Puri Indah adalah kawasan hunian premium yang berkembang pesat di Jakarta Barat. Dengan perumahan cluster modern, akses mudah ke pusat perbelanjaan, dan komunitas yang solid, area ini menjadi pilihan keluarga menengah-atas yang mengutamakan kenyamanan dan kualitas hidup.',
        'Layanan private chef kami sangat sesuai untuk keluarga di Puri Indah yang ingin menikmati makanan berkualitas tanpa repot. Ideal untuk family dinner akhir pekan, merayakan momen spesial seperti anniversary atau wisuda, mengadakan gathering dengan tetangga, atau simply treating keluarga dengan hidangan istimewa.'
      ]
    },
    benefits: {
      title: 'Keunggulan Private Chef di Puri Indah',
      items: [
        { title: 'Praktis & Efisien', description: 'Tidak perlu keluar rumah. Makanan berkualitas restoran hadir di meja Anda.' },
        { title: 'Perfect untuk Keluarga', description: 'Menu bisa disesuaikan untuk semua anggota keluarga dari anak hingga orang tua.' },
        { title: 'Fleksibel', description: 'Dari dinner intim hingga acara besar, kami bisa handle.' },
        { title: 'No Hassle', description: 'Chef mengurus semuanya termasuk belanja dan bersih-bersih setelahnya.' }
      ]
    },
    howItWorks: {
      title: 'Langkah-langkah Booking',
      steps: [
        { step: 'Kontak Kami', description: 'Hubungi via WhatsApp dengan info tanggal, alamat, dan gambaran acara.' },
        { step: 'Konsultasi Menu', description: 'Diskusikan preferensi menu, jumlah orang, dan budget.' },
        { step: 'Terima Proposal', description: 'Kami kirimkan proposal lengkap dengan detail menu dan biaya.' },
        { step: 'Konfirmasi & Bayar DP', description: 'Setujui proposal dan amankan tanggal dengan pembayaran DP.' },
        { step: 'Hari H', description: 'Chef datang, memasak hidangan lezat, dan bersihkan dapur setelahnya.' }
      ]
    },
    menuExamples: {
      title: 'Pilihan Menu Populer',
      packages: [
        {
          name: 'Paket Keluarga',
          description: 'Menu comfort food yang cocok untuk semua umur.',
          highlights: ['Sup ayam homemade', 'Ikan bakar bumbu kecap', 'Capcay sayuran', 'Puding coklat']
        },
        {
          name: 'Paket Spesial',
          description: 'Menu premium untuk acara istimewa.',
          highlights: ['Salad premium', 'Grilled salmon', 'Steak tenderloin', 'Cheesecake']
        },
        {
          name: 'Paket Indonesian Lengkap',
          description: 'Rijsttafel Indonesia dengan berbagai lauk.',
          highlights: ['Nasi putih pulen', 'Rendang premium', 'Ayam goreng lengkuas', 'Es campur']
        }
      ]
    },
    testimonials: {
      title: 'Testimoni dari Puri Indah',
      reviews: [
        {
          name: 'Keluarga Santoso',
          event: 'Dinner perayaan kelulusan anak',
          quote: 'Acara wisuda anak jadi lebih berkesan dengan private chef. Makanannya enak, presentasinya cantik. Terima kasih myCHEF!'
        },
        {
          name: 'Ibu Yenny',
          event: 'Arisan ibu-ibu komplek',
          quote: 'Ibu-ibu pada kagum dengan makanannya. Saya tidak perlu repot masak atau pesan dari luar. Sangat recommended!'
        },
        {
          name: 'Pak Budi',
          event: 'Sunday family dinner',
          quote: 'Sekarang Minggu jadi hari yang ditunggu-tunggu keluarga. Private chef dari myCHEF selalu memberikan yang terbaik.'
        }
      ]
    },
    faq: {
      title: 'FAQ Puri Indah',
      items: [
        {
          question: 'Area mana saja di Puri Indah yang dilayani?',
          answer: 'Seluruh Puri Indah: Puri Indah Raya, Puri Botanical, Puri Mansion, Taman Puri Indah, Puri Kembangan, dan sekitarnya.'
        },
        {
          question: 'Berapa minimum tamu untuk booking?',
          answer: 'Mulai dari 4 orang untuk family dinner. Untuk acara besar, kami bisa handle hingga 50+ orang.'
        },
        {
          question: 'Apakah chef membawa sendiri peralatannya?',
          answer: 'Chef menggunakan peralatan dapur Anda. Untuk peralatan khusus seperti grill atau alat BBQ, bisa kami sediakan dengan biaya tambahan.'
        },
        {
          question: 'Bisa untuk acara outdoor di halaman?',
          answer: 'Tentu bisa! Kami berpengalaman menangani garden party dan BBQ di halaman rumah.'
        },
        {
          question: 'Bagaimana sistem pembayarannya?',
          answer: 'DP 50% saat konfirmasi booking, pelunasan sebelum hari H. Transfer bank atau kartu kredit.'
        },
        {
          question: 'Berapa hari sebelumnya harus booking?',
          answer: 'Idealnya 3-5 hari sebelumnya. Untuk acara besar, 1-2 minggu lebih baik.'
        }
      ]
    },
    closingCta: {
      title: 'Wujudkan Pengalaman Makan Istimewa',
      paragraph: 'Keluarga Puri Indah berhak mendapatkan yang terbaik. Hubungi myCHEF sekarang untuk konsultasi gratis dan cek ketersediaan. Kami siap membantu menciptakan momen kuliner yang berkesan di rumah Anda.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-puri-indah",
      "name": "Private Chef Puri Indah",
      "description": "Layanan private chef profesional di Puri Indah, Jakarta Barat. Kuliner keluarga untuk dinner dan acara spesial.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Puri Indah", "Puri Kembangan", "Jakarta Barat", "Jakarta"]
    }
  }
};
