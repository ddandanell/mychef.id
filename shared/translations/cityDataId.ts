export interface CityTranslation {
  tagline: string;
  description: string;
  heroDescription: string;
  heroTitle?: string;
  localInsights: string;
  extendedContent?: {
    mainHeading: string;
    introParagraphs?: string[];
    paragraphs?: string[];
  };
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
}

export const CITY_TRANSLATIONS_ID: Record<string, CityTranslation> = {
  seminyak: {
    tagline: 'Chef Pribadi Seminyak: Makan Malam Gourmet di Villa Mewah Anda',
    description: 'Ubah villa Seminyak Anda menjadi restoran eksklusif. Chef pemenang penghargaan menyajikan menu khusus dengan seafood Jimbaran dan bahan impor. Dari koktail saat matahari terbenam hingga pesta tengah malam.',
    heroDescription: 'Tempat lingkungan paling glamor Bali bertemu seni kuliner. Villa Anda menjadi panggung untuk pengalaman gastronomi yang tak terlupakan.',
    heroTitle: 'Chef Pribadi Seminyak: Villa Anda, Menu Anda, Malam Anda',
    localInsights: 'Seminyak berdenyut dengan energi khas — galeri butik di siang hari, koktail rooftop saat senja, dan restoran kelas dunia berlomba menarik perhatian. Namun tidak ada yang menandingi makan di villa sendiri, di mana chef pribadi mengubah tangkapan segar dari pasar ikan Kedonganan menjadi hidangan yang menyaingi restoran Michelin manapun. Di sini, kecanggihan bertemu jiwa pulau.',
    extendedContent: {
      mainHeading: 'Seni Makan Pribadi di Seminyak',
      introParagraphs: [
        'Seminyak berbeda dari destinasi Bali lainnya. Di sinilah desainer fashion berlibur bersama miliarder teknologi, di mana beach club menetapkan tren global, dan di mana batas antara keanggunan kasual dan haute couture melebur dengan indah. Pengalaman chef pribadi Anda di sini harus sesuai dengan karakter khas ini — dan kami menyediakannya.',
        'Bayangkan pulang dari sore yang santai di Potato Head Beach Club dan menemukan villa Anda telah berubah. Champagne mendingin, lilin menyala di sepanjang infinity pool, dan aroma lobster yang dioles mentega mengambang dari dapur. Chef Anda, terlatih dalam teknik Paris namun fasih dalam rempah Indonesia, menyajikan menu yang dirancang berdasarkan keinginan Anda pagi itu. Inilah makan malam Seminyak terbaik.',
        'Kedekatan lingkungan ini dengan pasar ikan legendaris Jimbaran memberikan chef kami keunggulan. Pukul 5 pagi, mereka sudah memilih tangkapan malam — barramundi line-caught yang masih berkilau, udang sebesar telapak tangan, ikan karang dengan warna yang layak untuk akuarium. Saat matahari terbenam, harta karun ini menjadi seni yang dapat dimakan di teras Anda.'
      ]
    },
    faqItems: [
      {
        question: 'Apa saja yang termasuk dalam layanan chef pribadi di Seminyak?',
        answer: 'Layanan chef pribadi kami di Seminyak mencakup perencanaan menu lengkap, belanja bahan segar di pasar lokal, persiapan masakan profesional di villa Anda, penyajian elegan, dan pembersihan dapur menyeluruh. Chef kami menangani semuanya sehingga Anda bisa bersantai dan menikmati pengalaman bersantap Anda.'
      },
      {
        question: 'Berapa biaya menyewa chef pribadi di Seminyak?',
        answer: 'Layanan chef pribadi di Seminyak mulai dari Rp 800.000 per jam untuk jasa chef, dengan minimum 3-4 jam untuk sebagian besar makan malam. Biaya bahan terpisah dan dibayar langsung ke chef dengan harga pasar. Kami memberikan penawaran transparan sebelum pemesanan sehingga Anda tahu persis apa yang diharapkan.'
      },
      {
        question: 'Bagaimana cara memesan chef pribadi di Seminyak?',
        answer: 'Memesan itu mudah! Cukup WhatsApp kami dengan tanggal, jumlah tamu, preferensi masakan, dan lokasi villa Seminyak Anda. Kami akan mencocokkan Anda dengan chef yang sempurna dan mengirim proposal menu dalam hitungan jam. Setelah Anda menyetujui, bayar deposit 50% untuk mengamankan pemesanan Anda.'
      },
      {
        question: 'Masakan apa yang tersedia untuk makan malam pribadi di Seminyak?',
        answer: 'Chef kami di Seminyak mengkhususkan diri dalam berbagai masakan termasuk Indonesian kontemporer, Western fine dining, Mediterranean, Asian fusion, BBQ & grill, dan menu sehat. Kami dapat mengakomodasi semua preferensi diet termasuk vegetarian, vegan, bebas gluten, dan halal.'
      },
      {
        question: 'Kapan saya harus memesan chef pribadi untuk acara Seminyak saya?',
        answer: 'Kami merekomendasikan pemesanan setidaknya 48-72 jam sebelumnya untuk layanan chef pribadi di Seminyak, terutama selama musim ramai (Juli-Agustus dan Desember-Januari). Untuk acara besar atau permintaan khusus, pemesanan 1 minggu sebelumnya sangat disarankan untuk memastikan ketersediaan chef pilihan Anda.'
      }
    ]
  },
  canggu: {
    tagline: 'Chef Pribadi Canggu: Makan Malam Boho-Chic di Villa Anda',
    description: 'Dari sarapan peselancar hingga makan malam romantis saat matahari terbenam, chef pribadi kami menghadirkan energi kuliner Canggu langsung ke vila Anda. Bahan organik, masakan fusion, dan keahlian profesional.',
    heroDescription: 'Surga pantai Bali yang paling stylish layak mendapat pengalaman bersantap yang sesuai. Biarkan chef kami menciptakan keajaiban kuliner di villa Anda.',
    heroTitle: 'Chef Pribadi Canggu: Santap Mewah Gaya Pantai',
    localInsights: 'Canggu telah berevolusi dari desa berselancar tersembunyi menjadi episentrum gaya hidup Bali. Di sini, cafe sarapan yang layak Instagram berbagi ruang dengan restoran fine dining, dan komunitas kreatif terus berkembang. Chef pribadi kami memahami keseimbangan unik ini — mereka menyajikan hidangan yang sama fotogeniknya dengan nikmatnya.',
    extendedContent: {
      mainHeading: 'Pengalaman Kuliner Canggu yang Tak Tertandingi',
      introParagraphs: [
        'Canggu merepresentasikan wajah baru Bali — di mana kesadaran kesehatan bertemu kemewahan, di mana nomad digital bekerja dari cafe pantai, dan di mana pemandangan matahari terbenam tidak pernah membosankan. Layanan chef pribadi kami beradaptasi dengan sempurna dengan gaya hidup dinamis ini.',
        'Apakah Anda mencari sarapan sehat pasca-yoga, makan siang santai setelah berselancar, atau makan malam gourmet romantis di bawah bintang-bintang, chef kami menguasai semuanya. Kami memahami bahwa waktu Anda di Canggu berharga, itulah mengapa kami mengurus semuanya dari perencanaan menu hingga pembersihan.'
      ]
    },
    faqItems: [
      {
        question: 'Apakah chef pribadi di Canggu bisa membuat menu sehat dan organik?',
        answer: 'Tentu saja! Chef kami di Canggu mengkhususkan diri dalam masakan sehat menggunakan bahan organik lokal. Kami bisa membuat hidangan plant-based, raw food, keto, paleo, dan berbagai menu wellness sesuai kebutuhan diet Anda.'
      },
      {
        question: 'Berapa jauh sebelumnya saya perlu memesan chef pribadi di Canggu?',
        answer: 'Untuk makan malam standar, kami merekomendasikan pemesanan 24-48 jam sebelumnya. Selama musim ramai atau untuk acara besar, 3-7 hari lebih baik. Untuk kebutuhan mendadak, hubungi kami — kami akan berusaha mengakomodasi jika memungkinkan.'
      },
      {
        question: 'Apakah chef datang ke semua area di Canggu?',
        answer: 'Ya! Chef kami melayani semua area Canggu termasuk Berawa, Batu Bolong, Echo Beach, Pererenan, Nelayan, dan Seseh. Tidak ada biaya tambahan untuk lokasi manapun di wilayah Canggu.'
      },
      {
        question: 'Bisakah chef menyiapkan sarapan di Canggu?',
        answer: 'Tentu! Banyak klien kami menikmati layanan sarapan mewah — sempurna setelah sesi yoga pagi atau sebelum hari berselancar. Chef kami bisa datang pagi-pagi untuk menyiapkan smoothie bowls, avocado toast gourmet, eggs Benedict, atau sarapan continental lengkap.'
      },
      {
        question: 'Bagaimana dengan makan malam pantai di Canggu?',
        answer: 'Makan malam pantai adalah salah satu spesialisasi kami! Kami bisa mengatur setup makan malam romantis di tepi pantai Echo Beach, Batu Bolong, atau pantai privat villa Anda. Chef kami membawa semua peralatan dan setup yang diperlukan untuk pengalaman bersantap pantai yang tak terlupakan.'
      }
    ]
  },
  ubud: {
    tagline: 'Chef Pribadi Ubud: Masakan Farm-to-Table di Jantung Budaya Bali',
    description: 'Rasakan keajaiban kuliner di pusat spiritual Bali. Chef kami menyajikan bahan-bahan organik lokal dengan teknik memasak tradisional dan modern di villa Ubud Anda yang dikelilingi sawah.',
    heroDescription: 'Di mana teras sawah bertemu seni kuliner. Rasakan farm-to-table dining di pusat budaya Bali.',
    heroTitle: 'Chef Pribadi Ubud: Makan Malam Organik di Villa Sawah Anda',
    localInsights: 'Ubud adalah pusat spiritual dan artistik Bali. Dikelilingi hutan kera, candi kuno, dan sawah terasering ikonik, lokasi ini menawarkan latar yang tak tertandingi untuk pengalaman bersantap pribadi. Chef kami memahami filosofi wellness Ubud dan menyajikan hidangan yang menyehatkan tubuh dan jiwa.',
    extendedContent: {
      mainHeading: 'Pengalaman Farm-to-Table Ubud',
      introParagraphs: [
        'Ubud menawarkan sesuatu yang tidak bisa ditemukan di tempat lain di Bali — kedekatan dengan alam dan budaya yang mengubah setiap makan menjadi pengalaman spiritual. Chef kami mengambil inspirasi dari lingkungan ini, mencari bahan dari kebun organik lokal dan pasar tradisional.',
        'Bayangkan makan malam dengan pemandangan sawah terasering saat matahari terbenam, hidangan yang disiapkan dengan bahan yang dipetik pagi itu dari kebun terdekat. Ini bukan hanya makan malam — ini adalah perjalanan kuliner yang menghubungkan Anda dengan jiwa Bali.'
      ]
    },
    faqItems: [
      {
        question: 'Apa yang istimewa dari chef pribadi di Ubud?',
        answer: 'Chef kami di Ubud mengkhususkan diri dalam masakan farm-to-table menggunakan bahan organik dari kebun dan petani lokal. Mereka memahami filosofi wellness yang menjadi ciri khas Ubud dan menyajikan hidangan yang tidak hanya lezat tapi juga menyehatkan.'
      },
      {
        question: 'Bisakah chef menyiapkan menu vegetarian atau vegan di Ubud?',
        answer: 'Ubud adalah surganya makanan plant-based! Chef kami sangat berpengalaman dalam menyiapkan hidangan vegetarian, vegan, raw food, dan menu detox. Banyak bahan organik segar tersedia langsung dari kebun lokal.'
      },
      {
        question: 'Apakah ada pengalaman memasak tradisional Bali di Ubud?',
        answer: 'Ya! Kami menawarkan kelas memasak Bali tradisional di mana Anda bisa belajar membuat bumbu dasar, babi guling (atau versi vegetariannya), dan hidangan upacara Bali. Chef kami berbagi cerita dan filosofi di balik setiap hidangan.'
      },
      {
        question: 'Bagaimana makan malam di villa sawah?',
        answer: 'Makan malam di villa sawah adalah pengalaman magis. Chef kami menyiapkan hidangan sementara Anda menikmati pemandangan sawah terasering saat matahari terbenam. Kami bisa mengatur setup khusus dengan lilin dan dekorasi untuk momen yang benar-benar romantis.'
      },
      {
        question: 'Berapa biaya chef pribadi di Ubud?',
        answer: 'Layanan chef pribadi di Ubud mulai dari Rp 800.000 per jam untuk jasa chef, dengan minimum 3-4 jam. Harga bahan bervariasi tergantung menu yang dipilih. Bahan organik lokal sering kali lebih terjangkau daripada di area wisata lainnya.'
      }
    ]
  },
  sanur: {
    tagline: 'Chef Pribadi Sanur: Makan Malam Elegan di Pantai Terindah Bali',
    description: 'Nikmati hidangan gourmet di tepi pantai tenang Sanur. Chef kami menyajikan pengalaman bersantap yang elegan namun santai, sempurna untuk keluarga dan pasangan.',
    heroDescription: 'Ketenangan Sanur bertemu kecanggihan kuliner. Rasakan makan malam pribadi di pantai paling tenang Bali.',
    heroTitle: 'Chef Pribadi Sanur: Makan Malam Santai Tepi Pantai',
    localInsights: 'Sanur menawarkan sisi Bali yang lebih tenang — pantai berpasir putih dengan perairan tenang, promenade tepi laut yang indah, dan komunitas ekspatriat yang mapan. Chef kami menyesuaikan gaya mereka dengan atmosfer santai namun elegan Sanur, menyajikan hidangan yang cocok dinikmati sambil mendengar ombak lembut.',
    faqItems: [
      {
        question: 'Mengapa memilih chef pribadi di Sanur?',
        answer: 'Sanur menawarkan suasana tenang yang sempurna untuk makan malam pribadi. Dengan pantai yang lebih tenang dan komunitas yang lebih mature, ini adalah tempat ideal untuk menikmati hidangan gourmet tanpa keramaian. Chef kami memahami preferensi tamu Sanur yang menghargai kualitas dan ketenangan.'
      },
      {
        question: 'Apakah chef bisa menyiapkan makan malam di tepi pantai Sanur?',
        answer: 'Tentu! Pantai Sanur yang tenang sempurna untuk makan malam romantis tepi pantai. Kami bisa mengatur setup elegan di pantai depan villa atau hotel Anda dengan lilin, dekorasi, dan hidangan gourmet yang disiapkan segar.'
      },
      {
        question: 'Masakan apa yang populer di Sanur?',
        answer: 'Tamu Sanur cenderung menyukai seafood segar (mengingat kedekatan dengan pelabuhan nelayan tradisional), masakan Eropa klasik, dan Indonesian fine dining. Chef kami juga ahli dalam masakan Asia fusion dan menu sehat untuk gaya hidup aktif.'
      },
      {
        question: 'Apakah ada layanan sarapan di Sanur?',
        answer: 'Ya! Banyak tamu kami di Sanur menikmati sarapan mewah dengan pemandangan matahari terbit. Sanur menghadap ke timur, menawarkan pemandangan sunrise terbaik di Bali — pengalaman yang sempurna ditemani hidangan sarapan gourmet.'
      },
      {
        question: 'Berapa lama waktu persiapan yang dibutuhkan?',
        answer: 'Untuk makan malam standar, chef kami biasanya datang 2-3 jam sebelum waktu makan untuk berbelanja bahan segar dan menyiapkan semuanya. Untuk acara besar atau menu kompleks, waktu persiapan mungkin lebih lama.'
      }
    ]
  },
  'nusa-dua': {
    tagline: 'Chef Pribadi Nusa Dua: Makan Malam Resort-Style di Villa Anda',
    description: 'Hadirkan kemewahan resort bintang lima ke villa Anda di Nusa Dua. Chef profesional kami menyajikan hidangan kelas internasional dengan pelayanan sempurna.',
    heroDescription: 'Enklave mewah Bali layak mendapat pengalaman bersantap yang setara. Nikmati fine dining tingkat resort di kenyamanan villa Anda.',
    heroTitle: 'Chef Pribadi Nusa Dua: Kemewahan Resort di Villa Anda',
    localInsights: 'Nusa Dua adalah oasis kemewahan terencana di Bali, rumah bagi resort bintang lima dan lapangan golf kelas dunia. Tamu di sini terbiasa dengan standar layanan tertinggi, dan chef pribadi kami tidak mengecewakan. Kami menyajikan pengalaman fine dining yang menyaingi restoran resort manapun.',
    faqItems: [
      {
        question: 'Apa yang membuat layanan chef pribadi di Nusa Dua istimewa?',
        answer: 'Chef kami di Nusa Dua terlatih untuk memenuhi ekspektasi tamu resort bintang lima. Mereka menyajikan hidangan fine dining internasional dengan presentasi sempurna dan pelayanan profesional, membawa pengalaman restoran mewah langsung ke villa Anda.'
      },
      {
        question: 'Bisakah chef menangani acara besar di Nusa Dua?',
        answer: 'Tentu saja! Nusa Dua populer untuk pernikahan, acara perusahaan, dan perayaan besar. Tim chef kami berpengalaman menangani acara hingga 100+ tamu dengan catering profesional tingkat resort.'
      },
      {
        question: 'Apakah ada wine pairing untuk makan malam di Nusa Dua?',
        answer: 'Ya! Chef kami dapat merekomendasikan wine pairing yang sempurna untuk setiap hidangan. Kami juga bisa mengarahkan Anda ke sommelier partner jika Anda menginginkan pengalaman wine yang lebih mendalam.'
      },
      {
        question: 'Bagaimana dengan makan malam di pantai Nusa Dua?',
        answer: 'Pantai privat Nusa Dua yang bersih dan tenang ideal untuk makan malam romantis tepi pantai. Kami mengatur setup elegan dengan meja, lilin, dan dekorasi — pengalaman bersantap yang benar-benar magis.'
      },
      {
        question: 'Apakah layanan tersedia untuk tamu hotel di Nusa Dua?',
        answer: 'Ya, kami melayani tamu yang menginap di villa dan beberapa hotel di Nusa Dua. Koordinasi dengan pihak hotel dapat diatur untuk memastikan pengalaman yang lancar.'
      }
    ]
  },
  uluwatu: {
    tagline: 'Chef Pribadi Uluwatu: Makan Malam Cliff-Top dengan Pemandangan Spektakuler',
    description: 'Nikmati hidangan gourmet dengan pemandangan tebing dramatis Uluwatu. Chef kami menyajikan pengalaman bersantap yang tak terlupakan di salah satu lokasi paling ikonik Bali.',
    heroDescription: 'Di mana tebing dramatis bertemu samudra Hindia. Rasakan makan malam privat dengan pemandangan paling spektakuler di Bali.',
    heroTitle: 'Chef Pribadi Uluwatu: Makan Malam di Tepi Dunia',
    localInsights: 'Uluwatu menawarkan beberapa pemandangan paling dramatis di Bali — tebing tinggi menjulang di atas samudra Hindia yang bergelombang, candi kuno yang dikelilingi kera liar, dan sunset yang legendaris. Chef kami memanfaatkan latar belakang spektakuler ini untuk menciptakan momen bersantap yang benar-benar tak terlupakan.',
    faqItems: [
      {
        question: 'Apa yang istimewa dari makan malam di Uluwatu?',
        answer: 'Uluwatu menawarkan pemandangan tebing dan samudra yang tak tertandingi. Makan malam di villa cliff-top atau infinity pool dengan sunset Uluwatu adalah pengalaman yang tidak bisa Anda dapatkan di tempat lain. Chef kami memastikan makanannya setara dengan pemandangannya.'
      },
      {
        question: 'Apakah chef familiar dengan villa-villa di Uluwatu?',
        answer: 'Ya! Chef kami sangat familiar dengan berbagai villa di Uluwatu, dari hidden gems di Bingin hingga resort mewah di Pandawa. Mereka tahu cara memanfaatkan setiap lokasi untuk menciptakan pengalaman bersantap terbaik.'
      },
      {
        question: 'Bagaimana dengan makan malam setelah menonton Kecak?',
        answer: 'Ini adalah kombinasi favorit tamu kami! Menonton pertunjukan Kecak di Pura Uluwatu saat sunset, lalu pulang ke villa untuk menikmati makan malam gourmet yang sudah disiapkan chef. Timing sempurna untuk malam yang tak terlupakan.'
      },
      {
        question: 'Masakan apa yang cocok untuk suasana Uluwatu?',
        answer: 'Seafood segar sangat populer mengingat kedekatan dengan laut. Hidangan Mediterranean, Indonesian fine dining, dan BBQ juga sangat cocok dengan suasana outdoor Uluwatu. Chef kami menyesuaikan menu dengan preferensi Anda.'
      },
      {
        question: 'Apakah ada layanan untuk acara pernikahan di Uluwatu?',
        answer: 'Uluwatu adalah destinasi pernikahan paling populer di Bali! Tim chef kami berpengalaman menangani wedding dinner dari intimate gathering hingga resepsi mewah. Kami berkoordinasi dengan wedding planner untuk memastikan semuanya sempurna.'
      }
    ]
  },
  jimbaran: {
    tagline: 'Chef Pribadi Jimbaran: Seafood Segar Langsung dari Nelayan',
    description: 'Nikmati seafood paling segar di Bali langsung dari pasar ikan Jimbaran. Chef kami memilih tangkapan terbaik dan menyajikannya di villa Anda dengan gaya fine dining.',
    heroDescription: 'Rumah pasar ikan legendaris Bali. Rasakan seafood paling segar yang dimasak sempurna oleh chef profesional.',
    heroTitle: 'Chef Pribadi Jimbaran: Dari Laut ke Meja dalam Hitungan Jam',
    localInsights: 'Jimbaran terkenal di seluruh Asia karena pasar ikannya yang legendaris. Setiap pagi, nelayan lokal membawa tangkapan segar mereka, dan ini adalah tempat chef terbaik di Bali berbelanja. Dengan chef pribadi kami, Anda mendapat akses langsung ke harta karun kuliner ini — seafood dipilih pagi hari dan disajikan sempurna saat makan malam.',
    faqItems: [
      {
        question: 'Apa keunggulan seafood di Jimbaran?',
        answer: 'Jimbaran memiliki pasar ikan terbesar dan paling segar di Bali. Nelayan tradisional membawa tangkapan mereka setiap pagi — lobster, udang raksasa, ikan kakap, cumi-cumi, dan berbagai ikan karang. Chef kami pergi ke pasar pagi-pagi untuk memilih yang terbaik untuk makan malam Anda.'
      },
      {
        question: 'Bagaimana cara kerja belanja di pasar ikan?',
        answer: 'Chef kami datang 2-3 jam lebih awal, pergi ke pasar ikan Jimbaran yang legendaris, memilih tangkapan terbaik bersama atau sesuai preferensi Anda, lalu membawa semuanya ke villa Anda untuk dimasak segar. Anda bisa ikut ke pasar untuk pengalaman otentik!'
      },
      {
        question: 'Selain seafood, apa lagi yang tersedia?',
        answer: 'Meski terkenal untuk seafood, chef kami di Jimbaran juga ahli dalam berbagai masakan — daging premium, vegetarian, Indonesian fine dining, dan masakan internasional. Kami menyesuaikan dengan preferensi setiap tamu.'
      },
      {
        question: 'Bisakah makan malam di pantai Jimbaran?',
        answer: 'Tentu! Jimbaran terkenal dengan makan malam pantai tradisional. Kami bisa mengatur setup romantis di pantai dengan BBQ seafood segar — pengalaman yang jauh lebih intim dan eksklusif daripada restoran pantai yang ramai.'
      },
      {
        question: 'Apakah harga seafood transparan?',
        answer: 'Ya, sepenuhnya transparan. Chef akan menunjukkan kuitansi pembelian dari pasar. Anda membayar harga pasar aktual untuk semua bahan — tidak ada mark-up tersembunyi. Ini adalah salah satu komitmen transparansi kami.'
      }
    ]
  },
  jakarta: {
    tagline: 'Katering Jakarta Premium: Layanan Chef Profesional untuk Ibu Kota',
    description: 'Layanan katering dan chef pribadi premium di Jakarta. Dari acara perusahaan hingga pesta pernikahan, kami menghadirkan keunggulan kuliner Bali ke ibu kota Indonesia.',
    heroDescription: 'Keunggulan kuliner myCHEF kini hadir di Jakarta. Layanan katering premium untuk acara bisnis dan perayaan keluarga.',
    heroTitle: 'Katering Jakarta: Layanan Chef Premium untuk Setiap Acara',
    localInsights: 'Jakarta adalah pusat bisnis dan budaya Indonesia, di mana acara perusahaan, pesta pernikahan mewah, dan perayaan keluarga besar adalah bagian dari kehidupan. Tim chef kami yang berbasis di Bali kini membawa standar layanan yang sama ke ibu kota, menawarkan katering profesional untuk semua jenis acara.',
    faqItems: [
      {
        question: 'Apa layanan myCHEF di Jakarta?',
        answer: 'Di Jakarta, kami fokus pada layanan katering untuk acara — pernikahan, acara perusahaan, ulang tahun, dan perayaan besar lainnya. Tim chef profesional kami membawa standar kualitas myCHEF dari Bali ke ibu kota.'
      },
      {
        question: 'Berapa kapasitas minimum untuk acara Jakarta?',
        answer: 'Untuk layanan Jakarta, kami biasanya menangani acara mulai dari 20 tamu. Untuk acara lebih intim, silakan hubungi kami untuk diskusi khusus.'
      },
      {
        question: 'Area mana yang dilayani di Jakarta?',
        answer: 'Kami melayani seluruh area Jakarta termasuk Jakarta Selatan, Jakarta Pusat, Jakarta Barat, Jakarta Utara, dan Jakarta Timur. Kami juga melayani area Jabodetabek untuk acara besar.'
      },
      {
        question: 'Bagaimana proses pemesanan untuk Jakarta?',
        answer: 'Hubungi kami via WhatsApp dengan detail acara Anda — tanggal, lokasi, jumlah tamu, dan jenis acara. Tim kami akan menyiapkan proposal lengkap termasuk menu dan harga dalam 24-48 jam.'
      },
      {
        question: 'Apakah ada menu khusus untuk acara perusahaan?',
        answer: 'Ya! Kami memiliki menu khusus untuk acara perusahaan termasuk coffee break, lunch meeting, gala dinner, dan product launch. Semua menu dapat dikustomisasi sesuai tema dan preferensi perusahaan Anda.'
      }
    ]
  },
  kuta: {
    tagline: 'Chef Pribadi Kuta: Hidangan Gourmet di Pusat Pariwisata Bali',
    description: 'Nikmati makan malam berkelas jauh dari keramaian Kuta. Chef pribadi kami menghadirkan ketenangan kuliner ke villa atau hotel Anda.',
    heroDescription: 'Lupakan restoran yang ramai. Nikmati makan malam privat berkelas di akomodasi Anda di Kuta.',
    heroTitle: 'Chef Pribadi Kuta: Makan Malam Privat di Jantung Bali',
    localInsights: 'Kuta mungkin adalah area paling sibuk di Bali, tapi itu tidak berarti Anda harus bersaing untuk tempat di restoran. Dengan chef pribadi, Anda bisa menikmati hidangan gourmet dalam kenyamanan villa — jauh dari keramaian, dengan pelayanan yang sepenuhnya personal.',
    faqItems: [
      {
        question: 'Apakah chef pribadi tersedia di hotel Kuta?',
        answer: 'Kami melayani villa dan beberapa hotel di Kuta yang mengizinkan layanan memasak eksternal. Hubungi kami dengan detail akomodasi Anda dan kami akan membantu mengatur semuanya.'
      },
      {
        question: 'Kenapa memilih chef pribadi di Kuta?',
        answer: 'Kuta bisa sangat ramai dan menemukan restoran berkualitas tanpa antrean panjang bisa sulit. Chef pribadi memberikan Anda pengalaman bersantap mewah tanpa perlu keluar — sempurna setelah hari yang panjang di pantai atau berbelanja.'
      },
      {
        question: 'Berapa biaya chef pribadi di Kuta?',
        answer: 'Layanan mulai dari Rp 800.000 per jam untuk jasa chef. Lokasi Kuta tidak mempengaruhi harga — kami menawarkan tarif yang sama di semua area Bali Selatan.'
      },
      {
        question: 'Bisakah chef menyiapkan makanan khas Bali?',
        answer: 'Tentu! Chef kami bisa menyiapkan hidangan Bali tradisional seperti bebek betutu, sate lilit, lawar, dan banyak lagi. Ini cara sempurna untuk merasakan masakan lokal tanpa harus mencari restoran di tengah keramaian Kuta.'
      },
      {
        question: 'Apakah ada layanan untuk keluarga dengan anak-anak?',
        answer: 'Ya! Banyak keluarga dengan anak-anak memilih layanan chef pribadi di Kuta karena lebih nyaman daripada restoran. Chef kami bisa menyiapkan menu ramah anak sambil juga menyajikan hidangan dewasa yang lebih sophisticated.'
      }
    ]
  },
  legian: {
    tagline: 'Chef Pribadi Legian: Makan Malam Elegan di Antara Pantai dan Seminyak',
    description: 'Legian menawarkan keseimbangan sempurna antara energi Kuta dan kecanggihan Seminyak. Chef kami menghadirkan hidangan yang sesuai dengan karakter unik ini.',
    heroDescription: 'Zona transisi Bali yang stylish layak mendapat pengalaman kuliner yang setara. Nikmati fine dining privat di villa Legian Anda.',
    heroTitle: 'Chef Pribadi Legian: Elegan Tanpa Berlebihan',
    localInsights: 'Legian adalah sweet spot Bali Selatan — lebih tenang dari Kuta tapi lebih terjangkau dari Seminyak, dengan akses mudah ke kedua area. Chef pribadi kami memahami tamu Legian yang menghargai kualitas tanpa pretense berlebihan.',
    faqItems: [
      {
        question: 'Apa yang membedakan layanan di Legian?',
        answer: 'Legian menarik tamu yang menghargai kualitas tanpa keangkuhan. Chef kami menyajikan hidangan gourmet dengan suasana santai tapi tetap profesional — sesuai dengan karakter neighborhood ini.'
      },
      {
        question: 'Apakah chef melayani area sepanjang Jl. Legian?',
        answer: 'Ya! Kami melayani semua lokasi di Legian, dari gang-gang kecil dekat pantai hingga jalan utama. Cukup berikan alamat lengkap dan chef akan menemukan Anda.'
      },
      {
        question: 'Bisakah chef menangani makan malam grup di Legian?',
        answer: 'Tentu! Legian populer untuk perjalanan grup dan kami sering melayani makan malam untuk 8-20 orang. Untuk grup besar, kami menyediakan chef tambahan dan staf pelayanan.'
      },
      {
        question: 'Menu apa yang populer di Legian?',
        answer: 'Tamu Legian cenderung menyukai campuran masakan — Indonesian favorites, BBQ Barat, Asian fusion. Chef kami fleksibel dan bisa membuat menu yang memuaskan berbagai selera dalam satu grup.'
      },
      {
        question: 'Bagaimana dengan makan malam di rooftop?',
        answer: 'Beberapa villa di Legian memiliki rooftop terrace yang perfect untuk makan malam. Chef kami berpengalaman menyiapkan setup outdoor dan tahu cara membuat momen tersebut istimewa.'
      }
    ]
  },
  kerobokan: {
    tagline: 'Chef Pribadi Kerobokan: Makan Malam Mewah di Villa Tersembunyi',
    description: 'Kerobokan menyembunyikan villa-villa paling mewah Bali di balik dinding tinggi dan gang sempit. Chef kami membawa fine dining ke surga tersembunyi Anda.',
    heroDescription: 'Villa tersembunyi Bali layak mendapat pengalaman kuliner yang setara dengan kemewahan arsitekturnya.',
    heroTitle: 'Chef Pribadi Kerobokan: Fine Dining di Villa Tersembunyi',
    localInsights: 'Kerobokan adalah rahasia terbaik Bali Selatan — vila-vila spektakuler tersembunyi di balik dinding tinggi, jauh dari keramaian turis. Di sinilah tamu paling diskriminatif memilih untuk tinggal, dan chef pribadi kami memahami ekspektasi tinggi ini.',
    faqItems: [
      {
        question: 'Apa keunggulan chef pribadi di Kerobokan?',
        answer: 'Kerobokan memiliki villa-villa paling mewah di Bali dengan dapur profesional. Chef kami terbiasa bekerja di fasilitas kelas atas ini dan dapat memaksimalkan potensi setiap ruang untuk menciptakan pengalaman bersantap yang luar biasa.'
      },
      {
        question: 'Apakah chef bisa datang ke villa dengan akses terbatas?',
        answer: 'Ya! Kami terbiasa dengan villa-villa Kerobokan yang memiliki keamanan ketat dan akses terbatas. Cukup koordinasikan dengan pihak villa dan berikan informasi kepada kami, chef akan tiba tepat waktu.'
      },
      {
        question: 'Menu apa yang cocok untuk makan malam di Kerobokan?',
        answer: 'Tamu Kerobokan biasanya menghargai fine dining berkualitas tinggi — degustasi multi-course, wine pairing, dan presentasi yang sempurna. Chef kami menyesuaikan menu dengan standar tinggi ini.'
      }
    ]
  },
  petitenget: {
    tagline: 'Chef Pribadi Petitenget: Kuliner Kelas Dunia di Kawasan Paling Trendi Bali',
    description: 'Petitenget adalah pusat kuliner Bali dengan restoran-restoran pemenang penghargaan. Chef pribadi kami membawa standar yang sama ke villa Anda.',
    heroDescription: 'Kawasan paling trendi Bali layak mendapat chef yang memahami standar kuliner tinggi.',
    heroTitle: 'Chef Pribadi Petitenget: Standar Restoran Pemenang Penghargaan',
    localInsights: 'Petitenget adalah pusat kuliner Bali — rumah bagi restoran paling inovatif di pulau ini. Tamu di sini terbiasa dengan standar tertinggi, dan chef pribadi kami tidak mengecewakan. Kami membawa kreativitas dan keahlian tingkat restoran pemenang penghargaan langsung ke villa Anda.',
    faqItems: [
      {
        question: 'Bagaimana chef Petitenget berbeda?',
        answer: 'Banyak chef kami memiliki pengalaman di restoran pemenang penghargaan di Petitenget sendiri. Mereka membawa kreativitas, teknik, dan standar presentasi yang sama ke layanan villa privat.'
      },
      {
        question: 'Apakah tersedia tasting menu di Petitenget?',
        answer: 'Ya! Tasting menu multi-course adalah spesialisasi kami di Petitenget. Chef kami dapat menyajikan 5-10 course dengan wine pairing untuk pengalaman gastronomi yang lengkap.'
      },
      {
        question: 'Berapa kapasitas layanan di villa Petitenget?',
        answer: 'Kami melayani dari makan malam romantis untuk 2 hingga pesta villa untuk 50+ tamu. Villa Petitenget yang luas sangat cocok untuk acara besar dengan catering profesional.'
      }
    ]
  },
  berawa: {
    tagline: 'Chef Pribadi Berawa: Makan Malam Santai di Surga Pantai Canggu',
    description: 'Berawa menggabungkan vibes pantai santai Canggu dengan villa-villa premium. Chef kami menyajikan hidangan yang sesuai dengan karakter unik ini.',
    heroDescription: 'Pantai Berawa yang indah layak mendapat pengalaman kuliner yang setara.',
    heroTitle: 'Chef Pribadi Berawa: Makan Malam Pantai Premium',
    localInsights: 'Berawa adalah sweet spot Canggu — cukup dekat dengan aksi tapi cukup tenang untuk beristirahat. Pantainya yang indah dan villa-villa modern menarik tamu yang menghargai kualitas hidup. Chef kami memahami keseimbangan ini — santai tapi tetap sophisticated.',
    faqItems: [
      {
        question: 'Apakah chef bisa menyiapkan makan malam pantai di Berawa?',
        answer: 'Ya! Pantai Berawa sempurna untuk makan malam romantis tepi pantai. Kami bisa mengatur setup dengan obor, lilin, dan hidangan gourmet — pengalaman yang benar-benar magis saat matahari terbenam.'
      },
      {
        question: 'Menu apa yang populer di Berawa?',
        answer: 'Tamu Berawa menyukai campuran sehat dan indulgent — smoothie bowls untuk sarapan, BBQ seafood untuk makan siang, dan fine dining untuk makan malam. Chef kami fleksibel untuk semua gaya.'
      },
      {
        question: 'Berapa jarak jangkauan layanan dari Berawa?',
        answer: 'Kami melayani seluruh area Berawa dan sekitarnya termasuk Finns Beach Club area, Berawa Beach area, dan villa-villa di sepanjang Jl. Pantai Berawa. Tidak ada biaya tambahan untuk lokasi manapun.'
      }
    ]
  },
  pererenan: {
    tagline: 'Chef Pribadi Pererenan: Kuliner Otentik di Canggu yang Lebih Tenang',
    description: 'Pererenan menawarkan sisi Canggu yang lebih tenang dan autentik. Chef kami menghadirkan pengalaman bersantap yang sesuai dengan atmosfer damai ini.',
    heroDescription: 'Canggu yang lebih tenang layak mendapat chef yang memahami ketenangan dan kualitas.',
    heroTitle: 'Chef Pribadi Pererenan: Kedamaian Kuliner',
    localInsights: 'Pererenan adalah Canggu versi lebih tenang — sawah yang masih hijau, pantai yang lebih sepi, dan komunitas yang lebih intimate. Tamu di sini mencari pelarian sejati dari kesibukan, dan chef kami memahami ini. Kami menyajikan hidangan yang menenangkan sekaligus memuaskan.',
    faqItems: [
      {
        question: 'Apa yang istimewa dari makan malam di Pererenan?',
        answer: 'Pererenan menawarkan ketenangan yang sulit ditemukan di Canggu lainnya. Makan malam di villa dengan pemandangan sawah atau pantai yang sepi adalah pengalaman yang benar-benar menenangkan — ditambah hidangan gourmet dari chef kami.'
      },
      {
        question: 'Apakah tersedia menu farm-to-table di Pererenan?',
        answer: 'Ya! Kedekatan dengan area pertanian memungkinkan akses ke bahan-bahan segar langsung dari petani. Chef kami bisa menyajikan menu farm-to-table dengan sayuran organik dan bumbu segar.'
      },
      {
        question: 'Bagaimana akses ke villa di Pererenan?',
        answer: 'Pererenan memiliki jalan-jalan kecil yang lebih sepi. Chef kami familiar dengan area ini dan tahu cara menemukan villa-villa tersembunyi. Cukup berikan alamat lengkap dan instruksi akses.'
      }
    ]
  },
  bukit: {
    tagline: 'Chef Pribadi Bukit: Makan Malam Cliff-Top di Semenanjung Bukit',
    description: 'Semenanjung Bukit menawarkan pemandangan tebing paling dramatis di Bali. Chef kami menghadirkan pengalaman kuliner yang setara dengan keindahan alamnya.',
    heroDescription: 'Semenanjung Bukit yang spektakuler layak mendapat pengalaman bersantap yang tak terlupakan.',
    heroTitle: 'Chef Pribadi Bukit: Makan Malam di Tepi Tebing',
    localInsights: 'Semenanjung Bukit adalah keajaiban geografi Bali — tebing kapur yang menjulang tinggi di atas samudra, pantai-pantai tersembunyi, dan villa-villa dengan pemandangan yang tak tertandingi. Chef kami memanfaatkan latar belakang spektakuler ini untuk menciptakan momen bersantap yang benar-benar memorable.',
    faqItems: [
      {
        question: 'Apa keunggulan makan malam di Bukit?',
        answer: 'Bukit menawarkan pemandangan paling dramatis di Bali — tebing tinggi, samudra yang bergelora, dan sunset yang legendary. Makan malam di villa cliff-top dengan hidangan gourmet adalah pengalaman yang tidak bisa didapatkan di tempat lain.'
      },
      {
        question: 'Apakah chef familiar dengan villa di sepanjang Bukit?',
        answer: 'Ya! Chef kami sangat familiar dengan berbagai villa di seluruh Semenanjung Bukit, dari Pandawa hingga Padang-Padang. Kami tahu cara memaksimalkan setiap lokasi untuk pengalaman terbaik.'
      },
      {
        question: 'Menu apa yang cocok untuk suasana Bukit?',
        answer: 'Seafood segar sangat populer mengingat kedekatan dengan laut. BBQ di tepi tebing juga favorit tamu. Chef kami menyesuaikan menu dengan preferensi Anda dan memanfaatkan pemandangan spektakuler sebagai latar belakang.'
      }
    ]
  },
  ungasan: {
    tagline: 'Chef Pribadi Ungasan: Fine Dining di Kawasan Villa Mewah',
    description: 'Ungasan adalah rumah bagi villa-villa paling mewah di Bukit. Chef kami menyajikan pengalaman kuliner yang sesuai dengan kemewahan ini.',
    heroDescription: 'Villa-villa mewah Ungasan layak mendapat chef yang memahami standar tertinggi.',
    heroTitle: 'Chef Pribadi Ungasan: Kemewahan Kuliner di Bukit',
    localInsights: 'Ungasan adalah enklave kemewahan di Semenanjung Bukit — villa-villa spektakuler dengan infinity pool menghadap samudra, standar layanan tingkat resort, dan privasi yang sempurna. Chef kami memahami ekspektasi tamu Ungasan dan menyajikan fine dining yang sesuai.',
    faqItems: [
      {
        question: 'Apa yang membedakan layanan di Ungasan?',
        answer: 'Ungasan menarik tamu yang terbiasa dengan kemewahan tingkat tinggi. Chef kami menyajikan fine dining dengan presentasi sempurna, wine pairing yang tepat, dan pelayanan yang impeccable — sesuai dengan standar villa-villa mewah di area ini.'
      },
      {
        question: 'Apakah tersedia layanan untuk acara pernikahan di Ungasan?',
        answer: 'Ungasan adalah salah satu destinasi pernikahan paling populer di Bali. Tim chef kami berpengalaman menangani wedding dinner dari intimate gathering hingga resepsi mewah untuk ratusan tamu.'
      },
      {
        question: 'Berapa biaya chef pribadi di Ungasan?',
        answer: 'Layanan kami di Ungasan sama dengan area lainnya — mulai dari Rp 800.000 per jam untuk jasa chef. Tidak ada biaya tambahan untuk lokasi di Ungasan meskipun ini adalah area premium.'
      }
    ]
  },
  pecatu: {
    tagline: 'Chef Pribadi Pecatu: Kuliner Spektakuler di Pantai Tersembunyi',
    description: 'Pecatu menawarkan pantai-pantai tersembunyi paling indah di Bali. Chef kami menghadirkan pengalaman bersantap yang setara dengan keindahan alamnya.',
    heroDescription: 'Pantai tersembunyi Pecatu layak mendapat pengalaman kuliner yang sama spektakulernya.',
    heroTitle: 'Chef Pribadi Pecatu: Makan Malam di Surga Tersembunyi',
    localInsights: 'Pecatu adalah surga tersembunyi di ujung selatan Bali — pantai-pantai spektakuler dikelilingi tebing, surf breaks legendaris, dan ketenangan yang sulit ditemukan di tempat lain. Chef kami memahami tamu Pecatu yang mencari pengalaman autentik jauh dari keramaian.',
    faqItems: [
      {
        question: 'Apakah chef bisa datang ke villa terpencil di Pecatu?',
        answer: 'Ya! Kami terbiasa melayani villa di lokasi terpencil di Pecatu. Chef kami familiar dengan jalan-jalan sempit dan akses ke villa-villa tersembunyi. Cukup berikan instruksi yang jelas dan kami akan tiba tepat waktu.'
      },
      {
        question: 'Menu apa yang populer di Pecatu?',
        answer: 'Tamu Pecatu menyukai kesederhanaan berkualitas — BBQ seafood segar, Indonesian klasik, dan masakan sehat. Chef kami menyesuaikan dengan gaya hidup santai namun berkualitas khas Pecatu.'
      },
      {
        question: 'Bagaimana dengan makan malam setelah surfing di Pecatu?',
        answer: 'Kombinasi sempurna! Kembali dari sesi surf yang epic untuk menemukan makan malam gourmet sudah disiapkan. Chef kami bisa menyiapkan hidangan yang mengisi energi sekaligus memuaskan selera.'
      }
    ]
  },
  'tanah-lot': {
    tagline: 'Chef Pribadi Tanah Lot: Makan Malam dengan Pemandangan Pura Legendaris',
    description: 'Tanah Lot adalah rumah bagi pura laut paling ikonik di Bali. Chef kami menghadirkan pengalaman kuliner yang sesuai dengan keagungan spiritual tempat ini.',
    heroDescription: 'Pura legendaris Tanah Lot layak mendapat pengalaman kuliner yang sama mengesankannya.',
    heroTitle: 'Chef Pribadi Tanah Lot: Kuliner di Lokasi Spiritual',
    localInsights: 'Tanah Lot adalah salah satu lokasi paling ikonik di Bali — pura laut yang berdiri megah di atas batu karang, dikelilingi ombak yang bergelora. Makan malam dengan pemandangan sunset di Tanah Lot adalah pengalaman spiritual sekaligus kuliner yang tidak terlupakan.',
    faqItems: [
      {
        question: 'Apakah chef bisa menyiapkan makan malam dengan pemandangan Tanah Lot?',
        answer: 'Ya! Beberapa villa dan restoran di area ini menawarkan pemandangan Tanah Lot yang spektakuler. Chef kami bisa menyiapkan makan malam romantis dengan latar belakang pura saat sunset — pengalaman yang benar-benar magis.'
      },
      {
        question: 'Menu apa yang cocok untuk suasana Tanah Lot?',
        answer: 'Mengingat nuansa spiritual lokasi, banyak tamu menyukai menu Indonesian tradisional atau seafood segar. Chef kami juga bisa menyiapkan menu vegetarian untuk mereka yang mencari pengalaman lebih contemplatif.'
      },
      {
        question: 'Berapa jarak dari Tanah Lot ke area layanan lainnya?',
        answer: 'Tanah Lot berada di barat Bali, sekitar 30-45 menit dari Seminyak. Chef kami dengan senang hati melayani area ini tanpa biaya tambahan.'
      }
    ]
  },
  tabanan: {
    tagline: 'Chef Pribadi Tabanan: Kuliner Autentik di Jantung Pertanian Bali',
    description: 'Tabanan adalah lumbung padi Bali dengan sawah terasering paling indah. Chef kami menyajikan farm-to-table dining di tengah keindahan alam.',
    heroDescription: 'Sawah terasering Tabanan yang legendaris layak mendapat pengalaman kuliner farm-to-table.',
    heroTitle: 'Chef Pribadi Tabanan: Farm-to-Table di Sawah Bali',
    localInsights: 'Tabanan adalah jantung pertanian Bali — sawah terasering yang ikonik, petani tradisional, dan bahan-bahan segar langsung dari sumbernya. Chef kami memanfaatkan kedekatan dengan petani lokal untuk menyajikan farm-to-table dining yang benar-benar autentik.',
    faqItems: [
      {
        question: 'Apa keunggulan kuliner di Tabanan?',
        answer: 'Tabanan menawarkan akses langsung ke bahan-bahan paling segar — sayuran dari petani lokal, beras organik dari sawah terasering, dan bumbu segar dari kebun. Chef kami memaksimalkan ini untuk pengalaman farm-to-table yang autentik.'
      },
      {
        question: 'Apakah tersedia kelas memasak Bali di Tabanan?',
        answer: 'Ya! Tabanan adalah lokasi sempurna untuk kelas memasak Bali tradisional. Kami bisa mengatur kunjungan ke pasar tradisional, memetik sayuran dari kebun, dan memasak hidangan autentik bersama chef.'
      },
      {
        question: 'Bagaimana akses ke villa di Tabanan?',
        answer: 'Tabanan memiliki area yang luas dengan berbagai jenis akomodasi — dari rice field villa mewah hingga homestay sederhana. Chef kami melayani semua lokasi di Tabanan tanpa biaya tambahan.'
      }
    ]
  },
  denpasar: {
    tagline: 'Chef Pribadi Denpasar: Kuliner Urban di Ibukota Bali',
    description: 'Denpasar adalah pusat urban Bali dengan kehidupan lokal yang autentik. Chef kami menghadirkan pengalaman kuliner yang mencerminkan keragaman ibukota.',
    heroDescription: 'Ibukota Bali yang sibuk menawarkan akses ke pasar tradisional terbaik dan bahan paling segar.',
    heroTitle: 'Chef Pribadi Denpasar: Kuliner Autentik Ibukota',
    localInsights: 'Denpasar adalah jantung Bali yang sesungguhnya — pasar tradisional yang sibuk, warung legendaris, dan kehidupan lokal yang autentik. Chef kami memiliki akses ke pasar-pasar terbaik di Denpasar, memastikan bahan-bahan paling segar untuk setiap hidangan.',
    faqItems: [
      {
        question: 'Apa keunggulan chef pribadi di Denpasar?',
        answer: 'Denpasar memiliki pasar tradisional terbaik di Bali — Pasar Badung, Pasar Kumbasari, dan banyak lagi. Chef kami berbelanja langsung di pasar ini untuk mendapatkan bahan paling segar dengan harga lokal.'
      },
      {
        question: 'Apakah layanan tersedia untuk acara bisnis di Denpasar?',
        answer: 'Ya! Denpasar adalah pusat bisnis Bali dan kami sering melayani acara perusahaan, meeting lunch, dan corporate dinner. Tim chef kami berpengalaman dengan catering profesional untuk acara bisnis.'
      },
      {
        question: 'Menu apa yang khas Denpasar?',
        answer: 'Denpasar menawarkan masakan Bali paling autentik — babi guling, bebek betutu, sate lilit, dan lawar. Chef kami bisa menyiapkan hidangan tradisional ini dengan kualitas restoran fine dining.'
      }
    ]
  },
  gianyar: {
    tagline: 'Chef Pribadi Gianyar: Kuliner Seni di Pusat Budaya Bali',
    description: 'Gianyar adalah pusat seni dan kerajinan Bali. Chef kami menyajikan pengalaman kuliner yang sama artistiknya dengan karya-karya lokal.',
    heroDescription: 'Pusat seni Bali layak mendapat pengalaman kuliner yang sama kreatifnya.',
    heroTitle: 'Chef Pribadi Gianyar: Seni Kuliner di Pusat Budaya',
    localInsights: 'Gianyar adalah pusat seni Bali — pengukir kayu legendaris, pelukis terkenal, dan penari tradisional. Kreativitas mengalir di setiap sudut, dan chef kami membawa semangat artistik ini ke dalam masakan mereka — setiap hidangan adalah karya seni.',
    faqItems: [
      {
        question: 'Apa yang unik dari kuliner di Gianyar?',
        answer: 'Gianyar terkenal dengan babi guling terbaik di Bali! Chef kami bisa menyiapkan hidangan legendaris ini di villa Anda dengan bumbu rahasia dan teknik tradisional yang sempurna.'
      },
      {
        question: 'Apakah tersedia pengalaman budaya dengan makan malam?',
        answer: 'Ya! Kami bisa mengatur makan malam yang dikombinasikan dengan pertunjukan tari tradisional atau demonstrasi seni. Chef menyajikan hidangan sementara seniman lokal menampilkan budaya Bali.'
      },
      {
        question: 'Bagaimana akses ke villa di Gianyar?',
        answer: 'Gianyar memiliki banyak villa tersembunyi di antara sawah dan hutan. Chef kami familiar dengan area ini dan dapat menemukan lokasi Anda dengan mudah. Cukup berikan alamat lengkap dan landmark terdekat.'
      }
    ]
  },
  tegallalang: {
    tagline: 'Chef Pribadi Tegallalang: Makan Malam di Sawah Terasering Ikonik',
    description: 'Tegallalang memiliki sawah terasering paling terkenal di Bali. Chef kami menyajikan farm-to-table dining dengan pemandangan yang tak tertandingi.',
    heroDescription: 'Sawah terasering Tegallalang yang ikonik layak mendapat pengalaman kuliner yang sama spektakulernya.',
    heroTitle: 'Chef Pribadi Tegallalang: Kuliner di Sawah Legendaris',
    localInsights: 'Tegallalang adalah rumah bagi sawah terasering paling ikonik di Bali — pemandangan yang telah menghiasi ribuan foto dan video. Makan malam di villa dengan view sawah ini, disajikan oleh chef pribadi, adalah pengalaman yang tidak terlupakan.',
    faqItems: [
      {
        question: 'Apakah chef bisa menyiapkan makan malam dengan pemandangan sawah?',
        answer: 'Tentu! Banyak villa di Tegallalang menawarkan pemandangan sawah terasering yang spektakuler. Chef kami menyiapkan makan malam sementara Anda menikmati sunset di atas hamparan hijau — pengalaman yang benar-benar magis.'
      },
      {
        question: 'Menu apa yang cocok untuk suasana Tegallalang?',
        answer: 'Farm-to-table adalah pilihan sempurna mengingat kedekatan dengan pertanian. Chef kami menggunakan sayuran organik lokal, beras dari sawah terasering, dan bumbu segar untuk menciptakan hidangan yang mencerminkan lokasi.'
      },
      {
        question: 'Berapa jarak dari Tegallalang ke Ubud?',
        answer: 'Tegallalang hanya 20 menit dari pusat Ubud. Chef kami melayani seluruh area Tegallalang dan sekitarnya termasuk Ceking, Jatiluwih, dan desa-desa sekitar.'
      }
    ]
  },
  amed: {
    tagline: 'Chef Pribadi Amed: Makan Malam Tepi Laut di Bali Timur',
    description: 'Amed adalah surga diving dan snorkeling di Bali Timur. Chef kami menyajikan seafood paling segar langsung dari nelayan lokal.',
    heroDescription: 'Pantai vulkanik Amed yang unik layak mendapat pengalaman kuliner yang sama istimewanya.',
    heroTitle: 'Chef Pribadi Amed: Seafood Segar dari Nelayan Lokal',
    localInsights: 'Amed adalah Bali yang belum tersentuh — pantai pasir hitam vulkanik, terumbu karang yang menakjubkan, dan desa nelayan tradisional. Chef kami bekerja sama dengan nelayan lokal untuk mendapatkan tangkapan paling segar — ikan yang ditangkap pagi hari, disajikan malam itu.',
    faqItems: [
      {
        question: 'Apa keunggulan seafood di Amed?',
        answer: 'Amed masih mempertahankan tradisi nelayan asli. Chef kami membeli langsung dari perahu nelayan — tuna, kakap, cumi-cumi, dan kerang yang ditangkap pagi itu. Tidak ada seafood yang lebih segar di Bali.'
      },
      {
        question: 'Apakah chef bisa menyiapkan makan malam pantai di Amed?',
        answer: 'Ya! Pantai Amed yang tenang sempurna untuk makan malam romantis tepi laut. Kami mengatur setup dengan obor, BBQ seafood segar, dan pemandangan gunung Agung di kejauhan.'
      },
      {
        question: 'Berapa jarak dari Amed ke area wisata lainnya?',
        answer: 'Amed berada di timur Bali, sekitar 2-2.5 jam dari Seminyak. Perjalanan panjang tapi sepadan dengan keindahan dan ketenangan yang tidak bisa ditemukan di tempat lain.'
      }
    ]
  },
  lovina: {
    tagline: 'Chef Pribadi Lovina: Kuliner Tenang di Pantai Utara Bali',
    description: 'Lovina menawarkan sisi Bali yang berbeda — pantai tenang, dolphin liar, dan kehidupan yang lebih lambat. Chef kami menyajikan pengalaman bersantap yang sesuai dengan ketenangan ini.',
    heroDescription: 'Pantai utara Bali yang tenang layak mendapat pengalaman kuliner yang sama damainya.',
    heroTitle: 'Chef Pribadi Lovina: Kedamaian Kuliner di Utara',
    localInsights: 'Lovina adalah pelarian sejati dari Bali Selatan yang sibuk — pantai pasir hitam yang tenang, dolphin yang berenang bebas, dan komunitas lokal yang ramah. Chef kami memahami tamu Lovina yang mencari ketenangan, dan menyajikan hidangan yang menenangkan sekaligus memuaskan.',
    faqItems: [
      {
        question: 'Apa yang istimewa dari makan malam di Lovina?',
        answer: 'Lovina menawarkan kedamaian yang sulit ditemukan di tempat lain di Bali. Makan malam di villa dengan suara ombak yang tenang, tanpa keramaian turis, adalah pengalaman yang benar-benar menenangkan.'
      },
      {
        question: 'Apakah ada menu lokal khas Lovina?',
        answer: 'Lovina dan Bali Utara memiliki tradisi kuliner sendiri yang sedikit berbeda dari selatan. Chef kami bisa menyajikan hidangan lokal autentik yang mungkin belum pernah Anda coba sebelumnya.'
      },
      {
        question: 'Bisakah chef menyiapkan sarapan setelah dolphin watching?',
        answer: 'Tentu! Kombinasi sempurna — bangun pagi untuk melihat dolphin, lalu pulang ke villa untuk sarapan gourmet yang sudah disiapkan chef. Kami mengatur timing agar makanan siap saat Anda tiba.'
      }
    ]
  },
  candidasa: {
    tagline: 'Chef Pribadi Candidasa: Makan Malam di Pantai Tersembunyi Bali Timur',
    description: 'Candidasa adalah surga tersembunyi di timur Bali dengan pantai-pantai cantik dan ketenangan yang sempurna untuk pengalaman kuliner intim.',
    heroDescription: 'Pantai tersembunyi Candidasa layak mendapat pengalaman bersantap yang sama istimewanya.',
    heroTitle: 'Chef Pribadi Candidasa: Kuliner di Bali yang Belum Terjamah',
    localInsights: 'Candidasa menawarkan Bali yang lebih tenang dan autentik — pantai-pantai tersembunyi, pura kuno, dan kehidupan lokal yang belum tersentuh pariwisata massal. Chef kami memahami tamu Candidasa yang mencari pengalaman sejati, dan menyajikan hidangan yang mencerminkan keaslian ini.',
    faqItems: [
      {
        question: 'Apa keunggulan kuliner di Candidasa?',
        answer: 'Candidasa memiliki akses ke seafood segar dari nelayan lokal dan bahan-bahan dari pedesaan sekitar. Chef kami memanfaatkan ini untuk menyajikan hidangan yang benar-benar mencerminkan Bali Timur.'
      },
      {
        question: 'Apakah chef familiar dengan area Candidasa?',
        answer: 'Ya! Meski Candidasa lebih tenang dari Bali Selatan, chef kami familiar dengan area ini dan berbagai akomodasi di sini. Kami melayani dari resort mewah hingga homestay sederhana.'
      },
      {
        question: 'Bisakah kombinasi dengan kunjungan budaya?',
        answer: 'Candidasa dekat dengan Tirta Gangga, Pura Besakih, dan Tenganan village. Kami bisa mengatur makan malam setelah kunjungan budaya seharian — chef menyiapkan sementara Anda menjelajah.'
      }
    ]
  },
  'padang-bai': {
    tagline: 'Chef Pribadi Padang Bai: Kuliner Pelabuhan di Pintu Gerbang Pulau',
    description: 'Padang Bai adalah pelabuhan tradisional menuju Nusa Penida dan Lombok. Chef kami menyajikan seafood segar dari nelayan lokal.',
    heroDescription: 'Pelabuhan tradisional Padang Bai menawarkan akses ke seafood paling segar di Bali.',
    heroTitle: 'Chef Pribadi Padang Bai: Seafood Segar dari Pelabuhan',
    localInsights: 'Padang Bai adalah pelabuhan nelayan tradisional yang juga melayani ferry ke Nusa Penida dan Lombok. Desa ini mempertahankan karakter autentiknya, dan chef kami memanfaatkan akses langsung ke tangkapan nelayan segar untuk menyajikan seafood terbaik.',
    faqItems: [
      {
        question: 'Apa yang istimewa dari seafood Padang Bai?',
        answer: 'Padang Bai adalah pelabuhan nelayan aktif dengan tangkapan segar setiap hari. Chef kami membeli langsung dari perahu — ikan tuna, kakap, barramundi, cumi-cumi, dan berbagai kerang. Seafood tidak bisa lebih segar dari ini.'
      },
      {
        question: 'Apakah layanan tersedia sebelum/setelah trip ke Nusa Penida?',
        answer: 'Ya! Banyak tamu kami menikmati makan malam gourmet setelah seharian di Nusa Penida. Chef menyiapkan sementara Anda menjelajah pulau dan hidangan siap saat Anda kembali.'
      },
      {
        question: 'Bagaimana akomodasi di Padang Bai?',
        answer: 'Padang Bai memiliki berbagai akomodasi dari villa mewah hingga guesthouse sederhana. Chef kami melayani semua lokasi dan dapat menyesuaikan layanan dengan fasilitas dapur yang tersedia.'
      }
    ]
  }
};
