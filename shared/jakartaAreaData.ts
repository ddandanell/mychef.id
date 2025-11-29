export interface JakartaAreaData {
  name: string;
  slug: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBullets: string[];
  heroStats: Array<{ value: string; label: string }>;
  ctaText: string;
  ctaWhatsAppMessage: string;
  introSection: {
    title: string;
    paragraphs: string[];
  };
  experienceOverview: {
    title: string;
    subtitle: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    reasons: Array<{
      title: string;
      description: string;
    }>;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  occasions: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      description: string;
    }>;
  };
  menuExamples: {
    title: string;
    subtitle: string;
    packages: Array<{
      name: string;
      description: string;
      highlights: string[];
      priceRange: string;
    }>;
  };
  chefHighlight: {
    title: string;
    description: string;
    qualities: string[];
  };
  pricingInfo: {
    title: string;
    subtitle: string;
    tiers: Array<{
      name: string;
      rate: string;
      description: string;
    }>;
    note: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    reviews: Array<{
      name: string;
      event: string;
      location: string;
      quote: string;
      rating: number;
    }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  areaDetails: {
    title: string;
    description: string;
    neighborhoods: string[];
  };
  closingCta: {
    title: string;
    paragraph: string;
    secondaryParagraph: string;
  };
  structuredData: object;
}

export const JAKARTA_AREA_DATA: Record<string, JakartaAreaData> = {
  'menteng': {
    name: 'Menteng',
    slug: 'menteng',
    region: 'Jakarta Pusat',
    metaTitle: 'Private Chef Menteng Jakarta | Layanan Koki Pribadi Eksklusif',
    metaDescription: 'Nikmati layanan private chef profesional di Menteng Jakarta Pusat. Chef berpengalaman dengan hidangan fine dining di rumah Anda. Menu custom, harga transparan. Hubungi sekarang!',
    heroTitle: 'Private Chef Menteng',
    heroSubtitle: 'Hadirkan pengalaman kuliner eksklusif di kawasan elit Menteng. Chef profesional kami dengan pengalaman di restoran bintang lima siap menciptakan hidangan istimewa langsung di rumah heritage Anda. Nikmati kualitas fine dining tanpa perlu keluar rumah.',
    heroBullets: [
      'Chef berpengalaman dengan standar restoran bintang lima internasional',
      'Menu disesuaikan 100% dengan selera, preferensi, dan kebutuhan diet keluarga Anda',
      'Layanan lengkap dan profesional: konsultasi menu, belanja bahan premium, memasak, penyajian elegan, hingga bersih-bersih dapur',
      'Tersedia untuk dinner romantis 2 orang hingga pesta 50+ tamu',
      'Background check dan verifikasi ketat untuk keamanan keluarga Anda'
    ],
    heroStats: [
      { value: '1000+', label: 'Acara Sukses' },
      { value: '4.9/5', label: 'Rating Pelanggan' },
      { value: '50+', label: 'Chef Terverifikasi' },
      { value: '13+', label: 'Tahun Pengalaman' }
    ],
    ctaText: 'Pesan Private Chef Sekarang',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya tertarik dengan layanan private chef di Menteng, Jakarta Pusat.',
    introSection: {
      title: 'Layanan Private Chef Premium di Kawasan Menteng',
      paragraphs: [
        'Menteng adalah salah satu kawasan paling prestisius dan bersejarah di Jakarta Pusat. Dengan deretan rumah-rumah kolonial megah, jalan-jalan rindang yang teduh, dan lingkungan yang tenang nan eksklusif, Menteng telah lama menjadi simbol kemapanan dan kehidupan berkelas di ibukota Indonesia. Sebagai area hunian para pejabat tinggi, diplomat internasional, pengusaha terkemuka, dan keluarga-keluarga terpandang, Menteng membutuhkan layanan kuliner yang setara dengan standar kehidupan penghuninya yang sophisticated.',
        'myCHEF Indonesia dengan bangga menghadirkan layanan private chef profesional yang dirancang khusus untuk memenuhi ekspektasi tinggi warga Menteng. Dengan pengalaman lebih dari 13 tahun melayani lebih dari 1000 acara di seluruh Indonesia, kami memahami bahwa setiap detail penting. Dari pemilihan bahan makanan premium hingga presentasi hidangan yang memukau, setiap aspek layanan kami dirancang untuk memberikan pengalaman kuliner yang tak terlupakan di kediaman Anda.',
        'Bayangkan menikmati hidangan berkualitas restoran fine dining tanpa harus meninggalkan kenyamanan rumah heritage Anda di Menteng. Chef profesional kami tiba dengan bahan-bahan segar pilihan, memasak di dapur Anda, menyajikan hidangan dengan presentasi elegan, dan membereskan semuanya hingga dapur Anda kembali bersih seperti sedia kala. Anda dan tamu-tamu istimewa hanya perlu duduk, bersantai, dan menikmati setiap suapan hidangan yang lezat.',
        'Apakah Anda merencanakan dinner keluarga intim di ruang makan klasik, jamuan makan malam untuk kolega bisnis penting, perayaan ulang tahun eksklusif untuk orang tersayang, arisan ibu-ibu yang ingin tampil beda, atau sekadar memanjakan diri dengan hidangan gourmet setelah hari yang melelahkan – layanan private chef kami adalah solusi sempurna. Kami memahami kebutuhan privasi dan kualitas yang diharapkan warga Menteng, dan kami berkomitmen untuk melampaui setiap ekspektasi.'
      ]
    },
    experienceOverview: {
      title: 'Pengalaman Kuliner Premium di Rumah Anda',
      subtitle: 'Kami menghadirkan seluruh pengalaman fine dining langsung ke kediaman Anda di Menteng',
      features: [
        { icon: 'chef', title: 'Chef Bersertifikat', description: 'Setiap chef kami memiliki minimal 5 tahun pengalaman di restoran fine dining dan hotel bintang lima. Mereka telah melalui proses seleksi ketat dan pelatihan standar internasional.' },
        { icon: 'ingredients', title: 'Bahan Premium Segar', description: 'Chef berbelanja bahan-bahan terbaik di hari H dari supplier terpercaya. Dari wagyu beef grade A5 hingga seafood segar dari laut, kami hanya menggunakan yang terbaik.' },
        { icon: 'service', title: 'Full Service Profesional', description: 'Dari konsultasi menu hingga bersih-bersih setelah acara, semua ditangani dengan profesional. Anda benar-benar hanya perlu menikmati.' },
        { icon: 'custom', title: 'Menu 100% Custom', description: 'Tidak ada batasan menu. Indonesian, Western, Asian, Fusion, atau kreasi khusus sesuai keinginan Anda. Termasuk akomodasi diet khusus.' },
        { icon: 'privacy', title: 'Privasi Terjamin', description: 'Chef dan tim kami menghormati privasi keluarga Anda. Background check ketat dan NDA tersedia untuk acara sensitif.' },
        { icon: 'flexible', title: 'Jadwal Fleksibel', description: 'Layanan tersedia setiap hari, termasuk hari libur dan tanggal khusus. Kami menyesuaikan dengan jadwal sibuk Anda.' }
      ]
    },
    whyChooseUs: {
      title: 'Kenapa Memilih myCHEF untuk Private Chef di Menteng?',
      subtitle: 'Lebih dari sekadar layanan catering, kami adalah partner kuliner terpercaya Anda',
      reasons: [
        { title: 'Privasi Maksimal Terjaga', description: 'Nikmati hidangan lezat berkualitas restoran tanpa perlu keluar rumah dan bertemu banyak orang. Acara Anda tetap privat, intim, dan nyaman di lingkungan rumah sendiri yang familiar.' },
        { title: 'Efisiensi Waktu Berharga', description: 'Tidak perlu repot reservasi restoran yang fully booked, stuck di macet Jakarta yang menyita waktu, atau menunggu pesanan yang lama. Chef profesional datang langsung ke rumah Anda di Menteng.' },
        { title: 'Personalisasi Menu Tanpa Batas', description: 'Sesuaikan setiap detail menu dengan preferensi keluarga: halal, vegetarian, vegan, bebas gluten, rendah garam, low carb, keto, atau diet medis khusus lainnya. Kami mengakomodasi semua kebutuhan.' },
        { title: 'Kualitas Fine Dining Restaurant', description: 'Rasakan hidangan dengan standar restoran bintang lima, disajikan dengan presentasi memukau langsung di meja makan rumah Anda. Pengalaman fine dining tanpa harga fine dining restaurant.' },
        { title: 'Keamanan Keluarga Terjamin', description: 'Semua chef dan tim kami telah melalui background check ketat, verifikasi identitas, dan screening kesehatan. Keamanan keluarga Anda adalah prioritas utama kami.' },
        { title: 'Harga Transparan Tanpa Hidden Cost', description: 'Tidak ada biaya tersembunyi atau surprise charge. Semua biaya dijelaskan di awal dengan proposal lengkap dan transparan sebelum Anda memutuskan.' }
      ]
    },
    howItWorks: {
      title: 'Cara Kerja Layanan Private Chef Kami',
      subtitle: 'Proses booking yang simpel dan transparan dari awal hingga akhir',
      steps: [
        { step: '1', title: 'Hubungi & Konsultasi', description: 'Kirim pesan via WhatsApp dengan tanggal acara, jumlah tamu, preferensi menu, dan gambaran acara Anda. Tim kami akan merespons dalam hitungan jam untuk diskusi lebih lanjut.' },
        { step: '2', title: 'Perencanaan Menu Detail', description: 'Tim kuliner kami akan membantu merancang menu sesuai selera, budget, dan kebutuhan dietary. Kami juga memberikan rekomendasi berdasarkan jenis acara dan preferensi tamu Anda.' },
        { step: '3', title: 'Proposal & Konfirmasi', description: 'Terima proposal lengkap dengan detail menu, breakdown biaya transparan, dan timeline acara. Setelah disetujui, bayar DP 50% untuk mengamankan tanggal dan chef Anda.' },
        { step: '4', title: 'Chef Tiba & Berbelanja', description: 'Di hari H, chef profesional tiba di rumah Anda di Menteng 2-3 jam sebelum serving time. Chef membawa bahan-bahan segar premium yang sudah dibelanjakan dengan uang terpisah.' },
        { step: '5', title: 'Masak, Sajikan & Bersihkan', description: 'Semua hidangan dimasak fresh di dapur Anda dengan presentasi restoran bintang lima. Setelah acara selesai, chef membereskan dapur hingga bersih seperti sedia kala. Anda hanya fokus menikmati.' }
      ]
    },
    occasions: {
      title: 'Cocok untuk Berbagai Kesempatan Spesial',
      subtitle: 'Layanan private chef kami ideal untuk berbagai momen penting dalam hidup Anda',
      items: [
        { name: 'Dinner Keluarga Intim', description: 'Kumpul keluarga dengan hidangan istimewa yang dimasak khusus. Sempurna untuk quality time dengan orang-orang tersayang di suasana nyaman rumah.' },
        { name: 'Business Dinner & Client Entertainment', description: 'Impress klien dan partner bisnis dengan jamuan makan malam eksklusif di kediaman Anda. Lebih personal dan memorable dibanding restoran.' },
        { name: 'Perayaan Anniversary & Romantis', description: 'Ciptakan momen romantis tak terlupakan dengan dinner candlelight dan hidangan fine dining untuk Anda dan pasangan tercinta.' },
        { name: 'Birthday Party Eksklusif', description: 'Rayakan ulang tahun dengan pesta yang memorable. Menu custom sesuai keinginan birthday person dan presentasi yang Instagram-worthy.' },
        { name: 'Arisan & Social Gathering', description: 'Tampil beda di arisan dengan hidangan gourmet yang pasti membuat teman-teman terkesan. Tidak perlu repot memasak sendiri atau pesan catering biasa.' },
        { name: 'Holiday Celebration', description: 'Rayakan Lebaran, Natal, Tahun Baru, Imlek, atau hari besar lainnya dengan hidangan spesial yang disiapkan chef profesional.' },
        { name: 'Graduation & Achievement Dinner', description: 'Rayakan pencapaian penting dalam hidup dengan jamuan makan malam istimewa bersama keluarga dan sahabat terdekat.' },
        { name: 'Weekly/Monthly Meal Service', description: 'Nikmati kemewahan private chef secara rutin untuk dinner keluarga mingguan atau bulanan. Hemat waktu, konsisten lezat.' }
      ]
    },
    menuExamples: {
      title: 'Contoh Menu & Paket Kuliner',
      subtitle: 'Beragam pilihan menu yang bisa disesuaikan dengan selera dan kebutuhan Anda',
      packages: [
        {
          name: 'Paket Indonesian Heritage Premium',
          description: 'Hidangan Indonesia autentik dengan bahan-bahan premium dan sentuhan modern yang memukau. Perjalanan kuliner Nusantara dari Sabang sampai Merauke.',
          highlights: ['Soto betawi dengan daging sapi premium dan emping gurih', 'Rendang daging sapi wagyu 48 jam slow-cooked', 'Nasi liwet komplit dengan lauk pauk tradisional', 'Gurame bakar bumbu Bali dengan sambal matah', 'Es cendol durian Medan premium', 'Klepon dan kue lapis handmade'],
          priceRange: 'Mulai Rp 500.000/orang'
        },
        {
          name: 'Paket Western Fine Dining Experience',
          description: 'Menu ala restoran fine dining internasional untuk acara formal dan elegan yang membutuhkan kesan sophisticated.',
          highlights: ['Amuse-bouche selection', 'Beef carpaccio dengan truffle oil dan parmesan', 'Mushroom risotto dengan truffle shaving', 'Grilled wagyu steak dengan reduction sauce', 'Pan-seared Chilean sea bass', 'Chocolate lava cake dengan vanilla gelato', 'Cheese board premium'],
          priceRange: 'Mulai Rp 750.000/orang'
        },
        {
          name: 'Paket Asian Fusion Contemporary',
          description: 'Perpaduan cita rasa Asia yang kreatif, inovatif, dan menggugah selera dengan presentasi modern.',
          highlights: ['Dim sum premium handmade (har gao, siu mai, char siu bao)', 'Thai tom yum seafood dengan udang galah', 'Japanese A5 wagyu teppanyaki', 'Korean BBQ premium set', 'Teriyaki salmon dengan miso glaze', 'Mango sticky rice dengan coconut cream', 'Matcha tiramisu'],
          priceRange: 'Mulai Rp 600.000/orang'
        },
        {
          name: 'Paket BBQ & Grill Party',
          description: 'Perfect untuk outdoor gathering di halaman atau poolside dengan berbagai protein premium grilled to perfection.',
          highlights: ['Australian ribeye steak', 'Lamb chops rosemary', 'Jumbo prawns garlic butter', 'BBQ ribs dengan house sauce', 'Grilled vegetables medley', 'Corn on the cob', 'Caesar salad dan fresh garden salad'],
          priceRange: 'Mulai Rp 550.000/orang'
        }
      ]
    },
    chefHighlight: {
      title: 'Chef Profesional Terverifikasi untuk Anda',
      description: 'Setiap chef di jaringan myCHEF Indonesia telah melalui proses seleksi ketat dan verifikasi menyeluruh. Kami hanya bekerja dengan chef terbaik yang memiliki passion tinggi terhadap kuliner dan pelayanan prima.',
      qualities: [
        'Minimal 5 tahun pengalaman di restoran fine dining atau hotel bintang lima',
        'Sertifikasi food safety dan hygiene standar internasional',
        'Background check lengkap dan verifikasi identitas',
        'Pelatihan khusus untuk private chef service',
        'Kemampuan multi-cuisine: Indonesian, Western, Asian, Fusion',
        'Profesionalisme tinggi dan attitude melayani yang excellent',
        'Kreativitas dalam menciptakan dan mempresentasikan hidangan',
        'Kemampuan beradaptasi dengan berbagai jenis dapur dan peralatan'
      ]
    },
    pricingInfo: {
      title: 'Informasi Harga Transparan',
      subtitle: 'Kami percaya pada transparansi penuh tanpa biaya tersembunyi',
      tiers: [
        { name: 'Daily Rate', rate: 'Rp 800.000/jam', description: 'Untuk acara single event dengan durasi di bawah 25 jam. Cocok untuk dinner party, birthday, atau gathering.' },
        { name: 'Weekly Rate', rate: 'Rp 350.000/jam', description: 'Untuk booking 25-140 jam. Ideal untuk event series, multiple dinners, atau short-term arrangement.' },
        { name: 'Monthly Rate', rate: 'Rp 250.000/jam', description: 'Untuk booking lebih dari 140 jam. Perfect untuk full-time private chef atau long-term arrangement.' }
      ],
      note: 'Biaya di atas adalah untuk chef service saja. Bahan makanan dihitung terpisah sesuai menu yang dipilih dan ditransfer langsung ke chef untuk berbelanja. Semua biaya dijelaskan detail di proposal sebelum Anda memutuskan. Tidak ada hidden cost atau surprise charge.'
    },
    testimonials: {
      title: 'Apa Kata Pelanggan di Menteng',
      subtitle: 'Pengalaman nyata dari keluarga dan profesional di kawasan Menteng',
      reviews: [
        {
          name: 'Ibu Ratna Dewi',
          event: 'Dinner Keluarga Besar',
          location: 'Rumah di Menteng Dalam',
          quote: 'Chef-nya sangat profesional dan makanannya luar biasa enak! Kami menjamu 20 anggota keluarga besar untuk Lebaran dan semua sangat puas. Masakan Indonesia-nya autentik tapi dengan presentasi yang cantik dan modern. Ibu mertua yang biasanya kritis pun memuji habis-habisan. Pelayanannya ramah, dapurnya dibersihkan sempurna. Pasti akan pakai lagi tahun depan!',
          rating: 5
        },
        {
          name: 'Pak Hendro Wijaya',
          event: 'Business Dinner untuk Klien',
          location: 'Residence di Menteng Atas',
          quote: 'Saya menjamu klien penting dari Singapura dan Hong Kong. Menu Western fine dining-nya setara dengan restoran hotel bintang lima terbaik. Mereka sangat impressed dengan kualitas makanan dan service-nya. Suasana lebih intim dan diskusi bisnis jadi lebih produktif dibanding di restoran. Deal senilai milyaran rupiah berhasil closing malam itu. Worth every penny!',
          rating: 5
        },
        {
          name: 'Dina Kartika',
          event: 'Arisan Bulanan Ibu-Ibu',
          location: 'Menteng Park',
          quote: 'Ibu-ibu arisan sangat terkesan dengan hidangannya! Biasanya kami makan di restoran atau catering biasa, kali ini saya coba pakai myCHEF dan hasilnya beyond expectation. Makanannya enak, presentasinya Instagram-worthy, dan yang paling penting saya tidak perlu repot sama sekali. Chef-nya ramah dan profesional. Teman-teman langsung minta kontaknya untuk acara mereka masing-masing!',
          rating: 5
        },
        {
          name: 'Keluarga Sutanto',
          event: 'Perayaan Anniversary ke-25',
          location: 'Menteng Tenggara',
          quote: 'Kami merayakan silver anniversary dengan private dinner romantis di rumah. Chef menyiapkan 7-course French menu yang indah dan sangat lezat. Suasananya intimate dan personal, jauh lebih special dibanding makan di restoran. Istri sangat terharu dengan surprise-nya. Terima kasih myCHEF sudah membuat momen ini tak terlupakan!',
          rating: 5
        },
        {
          name: 'Pak Bambang Hartono',
          event: 'Birthday Party Anak',
          location: 'Gondangdia',
          quote: 'Ulang tahun ke-10 putri kami jadi sangat memorable! Chef menyiapkan menu kids-friendly yang tetap gourmet: pasta station, mini burger, dan dessert bar yang cantik. Anak-anak happy, orang tua juga makan enak. Setup-nya profesional dan bersih-bersihnya tuntas. Highly recommended untuk parents yang mau party hassle-free tapi tetap impressive!',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'Pertanyaan yang Sering Diajukan',
      subtitle: 'Jawaban untuk pertanyaan umum seputar layanan private chef di Menteng',
      items: [
        {
          question: 'Berapa minimum dan maksimum tamu untuk layanan private chef?',
          answer: 'Layanan kami tersedia mulai dari 2 orang untuk dinner romantis hingga 50+ tamu untuk acara besar seperti wedding atau corporate event. Untuk acara sangat besar, kami bisa provide tim chef tambahan. Tidak ada minimum spending yang kaku – kami menyesuaikan dengan kebutuhan Anda.'
        },
        {
          question: 'Apakah bahan makanan disediakan oleh chef atau harus saya siapkan?',
          answer: 'Chef kami yang akan berbelanja semua bahan-bahan segar berkualitas premium di hari H. Biaya bahan makanan terpisah dari biaya chef dan akan diinformasikan di proposal. Anda mentransfer budget bahan ke chef, dan chef belanja dengan bukti struk yang transparan.'
        },
        {
          question: 'Bisa custom menu untuk diet khusus seperti halal, vegetarian, atau alergi?',
          answer: 'Tentu saja! Kami melayani berbagai kebutuhan diet: halal, vegetarian, vegan, pescatarian, bebas gluten, bebas dairy, rendah garam, low carb, keto, dan alergi spesifik lainnya. Informasikan saat konsultasi menu dan chef akan memastikan semua hidangan aman untuk Anda dan tamu.'
        },
        {
          question: 'Area mana saja di Menteng yang dilayani?',
          answer: 'Kami melayani seluruh kawasan Menteng tanpa biaya transportasi tambahan: Menteng Dalam, Menteng Atas, Menteng Tenggara, Gondangdia, Pegangsaan, Cikini, Kebon Sirih, dan sekitarnya. Untuk area Jakarta lainnya juga kami layani.'
        },
        {
          question: 'Berapa lama durasi layanan dari awal sampai selesai?',
          answer: 'Rata-rata 4-5 jam untuk dinner standar, termasuk persiapan (chef tiba 2-3 jam sebelum serving), memasak, penyajian, dan beres-beres. Untuk acara besar atau menu yang kompleks, bisa lebih lama sesuai kebutuhan. Durasi akan diinformasikan di proposal.'
        },
        {
          question: 'Bagaimana sistem pembayaran dan apakah ada DP?',
          answer: 'Sistem pembayaran: DP 50% saat konfirmasi booking untuk mengamankan tanggal, pelunasan 50% sisanya sehari sebelum hari H. Biaya bahan makanan ditransfer terpisah ke chef sebelum belanja. Kami menerima transfer bank dan kartu kredit utama.'
        },
        {
          question: 'Berapa lama sebelumnya harus booking?',
          answer: 'Idealnya booking dilakukan 3-7 hari sebelum acara untuk memastikan ketersediaan chef dan waktu persiapan yang cukup. Untuk acara besar (20+ tamu), 2 minggu lebih baik. Last minute booking juga bisa diusahakan tergantung ketersediaan – hubungi kami untuk mengecek.'
        },
        {
          question: 'Apakah chef membawa peralatan sendiri atau menggunakan dapur saya?',
          answer: 'Chef menggunakan dapur dan peralatan standar Anda (kompor, oven, panci, wajan, dll). Jika menu membutuhkan peralatan khusus seperti outdoor grill, BBQ set, atau alat spesifik lainnya, kami bisa menyediakan dengan biaya tambahan yang diinformasikan sebelumnya.'
        },
        {
          question: 'Bagaimana jika saya perlu membatalkan atau mengubah tanggal?',
          answer: 'Pembatalan 7+ hari sebelum acara: refund DP 100%. Pembatalan 3-6 hari: refund DP 50%. Pembatalan kurang dari 3 hari: DP tidak bisa dikembalikan. Perubahan tanggal bisa dilakukan tergantung ketersediaan chef tanpa biaya tambahan jika diinformasikan minimal 5 hari sebelumnya.'
        },
        {
          question: 'Apakah tersedia layanan tambahan seperti waiter atau dekorasi?',
          answer: 'Ya, kami menyediakan waiter profesional untuk membantu penyajian dan pelayanan tamu dengan biaya tambahan. Untuk dekorasi, kami bisa merekomendasikan partner terpercaya. Event organizer dan coordinator juga tersedia untuk acara besar. Semua bisa didiskusikan saat konsultasi.'
        }
      ]
    },
    areaDetails: {
      title: 'Cakupan Layanan di Kawasan Menteng',
      description: 'Kami melayani seluruh kawasan Menteng dan sekitarnya di Jakarta Pusat tanpa biaya transportasi tambahan. Tim kami familiar dengan area ini dan dapat mengakses berbagai tipe properti dari rumah heritage hingga apartemen modern.',
      neighborhoods: ['Menteng Dalam', 'Menteng Atas', 'Menteng Tenggara', 'Gondangdia', 'Pegangsaan', 'Cikini', 'Kebon Sirih', 'Senen', 'Kramat', 'Kenari']
    },
    closingCta: {
      title: 'Siap Menikmati Private Chef di Menteng?',
      paragraph: 'Jangan biarkan acara spesial Anda menjadi biasa-biasa saja. Dengan layanan private chef dari myCHEF Indonesia, setiap momen makan menjadi pengalaman kuliner yang memorable dan berkesan. Lebih dari 1000 keluarga di Indonesia telah mempercayakan acara mereka kepada kami – sekarang giliran Anda.',
      secondaryParagraph: 'Hubungi kami sekarang untuk konsultasi menu gratis dan cek ketersediaan tanggal. Tim kami siap membantu merencanakan dan mewujudkan pengalaman kuliner tak terlupakan di rumah Anda di Menteng. Proses booking mudah, harga transparan, kepuasan terjamin.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-menteng",
      "name": "Private Chef Menteng Jakarta",
      "description": "Layanan private chef profesional di Menteng, Jakarta Pusat. Chef berpengalaman untuk dinner keluarga, acara bisnis, dan perayaan spesial dengan kualitas fine dining.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jakarta",
          "addressRegion": "DKI Jakarta",
          "addressCountry": "ID"
        }
      },
      "areaServed": ["Menteng", "Jakarta Pusat", "Jakarta"],
      "serviceType": "Private Chef Service",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      }
    }
  },

  'kebayoran-baru': {
    name: 'Kebayoran Baru',
    slug: 'kebayoran-baru',
    region: 'Jakarta Selatan',
    metaTitle: 'Private Chef Kebayoran Baru | Koki Pribadi Profesional Jakarta Selatan',
    metaDescription: 'Layanan private chef eksklusif di Kebayoran Baru Jakarta Selatan. Chef profesional untuk dinner keluarga dan acara spesial. Menu custom, harga transparan. Hubungi sekarang!',
    heroTitle: 'Private Chef Kebayoran Baru',
    heroSubtitle: 'Wujudkan pengalaman makan mewah di kawasan prestisius Kebayoran Baru. Chef profesional kami dengan keahlian multi-cuisine siap memanjakan lidah Anda dan tamu-tamu istimewa di kediaman Anda yang nyaman.',
    heroBullets: [
      'Chef tersertifikasi dengan pengalaman di restoran top Jakarta dan hotel bintang lima',
      'Fleksibel untuk berbagai acara: intimate dinner 2 orang hingga party besar 50+ tamu',
      'Semua kebutuhan ditangani profesional: konsultasi menu, belanja bahan premium, masak, hingga bersih-bersih',
      'Menu custom tanpa batasan: Indonesian, Western, Asian, Mediterranean, atau fusion sesuai keinginan',
      'Background check dan verifikasi ketat untuk keamanan keluarga Anda'
    ],
    heroStats: [
      { value: '1000+', label: 'Acara Sukses' },
      { value: '4.9/5', label: 'Rating Pelanggan' },
      { value: '50+', label: 'Chef Terverifikasi' },
      { value: '13+', label: 'Tahun Pengalaman' }
    ],
    ctaText: 'Hubungi Kami via WhatsApp',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya ingin booking private chef di Kebayoran Baru, Jakarta Selatan.',
    introSection: {
      title: 'Layanan Private Chef Eksklusif di Kebayoran Baru',
      paragraphs: [
        'Kebayoran Baru adalah salah satu kawasan hunian paling bergengsi dan established di Jakarta Selatan. Dengan deretan rumah-rumah besar bergaya modern dan klasik yang megah, jalan-jalan yang tertata rapi dan teduh, serta akses mudah ke pusat bisnis dan lifestyle, area ini telah lama menjadi pilihan keluarga mapan, profesional sukses, dan expatriat yang menghargai kualitas hidup tinggi.',
        'myCHEF Indonesia menghadirkan layanan private chef profesional yang dirancang khusus untuk memenuhi standar tinggi warga Kebayoran Baru. Dengan pengalaman lebih dari 13 tahun dan track record lebih dari 1000 acara sukses, kami memahami bahwa setiap rumah tangga memiliki preferensi unik. Tim chef kami siap mengakomodasi berbagai selera kuliner, dari masakan Indonesia tradisional hingga fine dining internasional.',
        'Layanan kami sangat ideal untuk gaya hidup warga Kebayoran Baru yang menghargai kualitas, kenyamanan, dan efisiensi waktu. Tidak perlu lagi menghabiskan waktu di kemacetan Jakarta untuk pergi ke restoran atau repot memesan catering yang kurang personal. Chef profesional kami datang langsung ke rumah Anda, membawa bahan-bahan segar premium, dan menghadirkan pengalaman kuliner fine dining tanpa Anda perlu beranjak dari sofa.',
        'Apakah Anda merencanakan dinner romantis anniversary dengan pasangan, perayaan ulang tahun anak yang meriah, gathering keluarga besar saat Lebaran atau Natal, business dinner untuk menjamu rekan bisnis penting, atau sekadar arisan ibu-ibu yang ingin tampil beda – layanan private chef kami adalah solusi yang tepat. Setiap acara kami tangani dengan profesionalisme tinggi, kreativitas kuliner, dan perhatian pada detail.'
      ]
    },
    experienceOverview: {
      title: 'Pengalaman Kuliner Premium di Kediaman Anda',
      subtitle: 'Kami membawa seluruh pengalaman fine dining langsung ke rumah Anda di Kebayoran Baru',
      features: [
        { icon: 'chef', title: 'Chef Profesional Tersertifikasi', description: 'Chef kami memiliki minimal 5 tahun pengalaman di restoran fine dining dan hotel bintang lima, dengan berbagai spesialisasi cuisine dari Indonesian hingga International.' },
        { icon: 'ingredients', title: 'Bahan Makanan Premium', description: 'Hanya bahan-bahan terbaik: wagyu beef, seafood segar, sayuran organik, dan ingredients premium lainnya yang dibelanjakan fresh di hari H.' },
        { icon: 'service', title: 'Full Service End-to-End', description: 'Dari konsultasi menu awal, shopping list, eksekusi masak, presentasi hidangan, hingga bersih-bersih dapur – semua kami tangani dengan profesional.' },
        { icon: 'custom', title: 'Menu Fully Customizable', description: 'Tidak ada template menu kaku. Semua disesuaikan dengan preferensi, budget, dan kebutuhan dietary Anda dan tamu-tamu.' },
        { icon: 'privacy', title: 'Keamanan & Privasi', description: 'Background check menyeluruh untuk setiap chef. Privasi keluarga Anda terjaga dengan baik. NDA tersedia untuk acara sensitif.' },
        { icon: 'flexible', title: 'Fleksibilitas Maksimal', description: 'Layanan tersedia 7 hari seminggu, termasuk hari libur dan tanggal khusus. Waktu dan durasi disesuaikan dengan jadwal Anda.' }
      ]
    },
    whyChooseUs: {
      title: 'Keunggulan Private Chef myCHEF di Kebayoran Baru',
      subtitle: 'Lebih dari sekadar catering, kami adalah partner kuliner terpercaya untuk setiap momen spesial Anda',
      reasons: [
        { title: 'Privasi Terjamin di Rumah Sendiri', description: 'Nikmati hidangan berkualitas restoran dalam kenyamanan dan privasi rumah Anda sendiri. Tidak perlu khawatir dengan keramaian atau mata-mata di restoran.' },
        { title: 'Hemat Waktu Berharga', description: 'Skip kemacetan Jakarta, antrian restoran, dan waktu tunggu pesanan. Chef datang ke rumah Anda di Kebayoran Baru dengan semua yang dibutuhkan.' },
        { title: 'Personalisasi Menu Sepenuhnya', description: 'Setiap hidangan disesuaikan dengan selera keluarga: halal, vegetarian, vegan, bebas alergen, rendah karbo, atau diet medis lainnya.' },
        { title: 'Kualitas Restaurant Grade', description: 'Hidangan dengan standar fine dining restaurant, presentasi memukau, taste yang consistent – semua di meja makan rumah Anda.' },
        { title: 'Keamanan Keluarga Prioritas', description: 'Semua chef melalui background check ketat, verifikasi identitas, dan health screening. Keamanan keluarga Anda adalah prioritas utama.' },
        { title: 'Transparansi Harga Penuh', description: 'Proposal detail dengan breakdown biaya lengkap. Tidak ada hidden cost, tidak ada surprise charge. What you see is what you pay.' }
      ]
    },
    howItWorks: {
      title: 'Langkah-langkah Booking yang Mudah',
      subtitle: 'Proses sederhana dan transparan dari inquiry hingga selesai acara',
      steps: [
        { step: '1', title: 'Kontak & Diskusi Awal', description: 'Hubungi kami via WhatsApp dengan detail acara: tanggal, jumlah tamu, jenis acara, dan gambaran menu yang diinginkan. Tim kami merespons cepat.' },
        { step: '2', title: 'Konsultasi Menu Detail', description: 'Diskusikan preferensi menu, dietary requirements, budget, dan ekspektasi Anda dengan tim kuliner kami. Kami berikan rekomendasi terbaik.' },
        { step: '3', title: 'Proposal & Konfirmasi', description: 'Terima proposal lengkap dengan menu detail, timeline, dan breakdown biaya transparan. Setujui dan bayar DP 50% untuk lock tanggal.' },
        { step: '4', title: 'Chef Datang & Eksekusi', description: 'Di hari H, chef profesional tiba 2-3 jam sebelum serving time dengan bahan-bahan segar premium yang sudah dibelanjakan.' },
        { step: '5', title: 'Nikmati & Relax', description: 'Anda fokus menikmati acara dan quality time dengan tamu. Chef handle semua: masak, sajikan, hingga bersih-bersih dapur.' }
      ]
    },
    occasions: {
      title: 'Ideal untuk Berbagai Kesempatan Spesial',
      subtitle: 'Layanan private chef kami cocok untuk setiap momen penting dalam hidup Anda',
      items: [
        { name: 'Family Dinner Gathering', description: 'Kumpul keluarga dengan hidangan istimewa. Quality time yang berkualitas dengan orang-orang tersayang di kenyamanan rumah.' },
        { name: 'Business Dinner & Entertainment', description: 'Impress klien dan partner bisnis dalam setting yang lebih personal dan intimate dibanding restoran biasa.' },
        { name: 'Anniversary Celebration', description: 'Rayakan momen romantis dengan dinner candlelight dan menu fine dining yang disiapkan khusus untuk Anda berdua.' },
        { name: 'Birthday Party', description: 'Ulang tahun yang memorable dengan menu custom sesuai keinginan dan presentasi yang Instagram-worthy.' },
        { name: 'Arisan & Social Gathering', description: 'Tampil beda di arisan dengan hidangan gourmet yang membuat teman-teman terkesan dan bertanya-tanya.' },
        { name: 'Holiday Celebration', description: 'Lebaran, Natal, Tahun Baru, Imlek – rayakan hari besar dengan hidangan spesial dari chef profesional.' },
        { name: 'Graduation & Milestone', description: 'Rayakan pencapaian penting dengan jamuan makan malam istimewa bersama orang-orang tersayang.' },
        { name: 'Regular Weekly Service', description: 'Nikmati kemewahan private chef secara rutin untuk family dinner mingguan. Konsisten, praktis, selalu lezat.' }
      ]
    },
    menuExamples: {
      title: 'Pilihan Menu Populer',
      subtitle: 'Contoh menu yang bisa disesuaikan dengan preferensi dan kebutuhan Anda',
      packages: [
        {
          name: 'Rijsttafel Indonesia Premium',
          description: 'Hidangan Indonesia lengkap dengan berbagai lauk pauk autentik dari berbagai daerah Nusantara, disajikan dengan presentasi modern.',
          highlights: ['Sate lilit Bali dengan bumbu kecap manis', 'Gulai kambing Padang dengan santan kental', 'Ayam betutu slow-cooked 24 jam', 'Ikan bakar bumbu Manado', 'Nasi liwet Solo komplit', 'Klepon handmade dan kue lapis legit'],
          priceRange: 'Mulai Rp 500.000/orang'
        },
        {
          name: 'Mediterranean Feast',
          description: 'Cita rasa Mediterania yang segar, sehat, dan cocok untuk suasana casual gathering yang lebih santai.',
          highlights: ['Mezze platter lengkap (hummus, baba ganoush, falafel)', 'Greek salad dengan feta cheese premium', 'Grilled lamb chops dengan rosemary', 'Seafood paella Valencia style', 'Baklava dan tiramisu homemade'],
          priceRange: 'Mulai Rp 600.000/orang'
        },
        {
          name: 'Japanese Omakase Experience',
          description: 'Pengalaman omakase autentik dengan bahan-bahan premium pilihan chef dalam multi-course presentation.',
          highlights: ['Sashimi platter premium (salmon, tuna, hamachi)', 'Chawanmushi dengan shiitake dan truffle', 'Wagyu A5 teppanyaki', 'Unagi kabayaki', 'Matcha tiramisu dan mochi ice cream'],
          priceRange: 'Mulai Rp 750.000/orang'
        },
        {
          name: 'Healthy Gourmet Menu',
          description: 'Menu sehat tanpa kompromi rasa untuk yang conscious tentang nutrisi tapi tetap ingin makan enak.',
          highlights: ['Quinoa superfood salad', 'Grilled salmon dengan asparagus', 'Steamed vegetables dengan lemon butter', 'Cauliflower rice pilaf', 'Fresh fruit pavlova dengan Greek yogurt'],
          priceRange: 'Mulai Rp 550.000/orang'
        }
      ]
    },
    chefHighlight: {
      title: 'Chef Profesional Berpengalaman untuk Anda',
      description: 'Setiap chef di jaringan myCHEF Indonesia adalah profesional terlatih dengan passion tinggi terhadap kuliner. Kami hanya bekerja dengan chef terbaik yang memenuhi standar ketat kami.',
      qualities: [
        'Minimal 5 tahun pengalaman di restoran fine dining atau hotel bintang lima',
        'Sertifikasi food safety dan hygiene internasional (HACCP)',
        'Background check lengkap dan verifikasi identitas menyeluruh',
        'Training khusus untuk private chef service dan hospitality',
        'Multi-cuisine expertise: Indonesian, Western, Asian, Mediterranean',
        'Profesionalisme tinggi dan service-oriented mindset',
        'Kreativitas dalam menu development dan food presentation',
        'Kemampuan adaptasi dengan berbagai jenis dapur dan peralatan'
      ]
    },
    pricingInfo: {
      title: 'Informasi Harga yang Transparan',
      subtitle: 'Kami percaya pada transparansi penuh – no hidden cost, no surprise',
      tiers: [
        { name: 'Single Event Rate', rate: 'Rp 800.000/jam', description: 'Untuk acara tunggal dengan durasi di bawah 25 jam. Cocok untuk dinner party, birthday celebration, atau gathering.' },
        { name: 'Weekly Package', rate: 'Rp 350.000/jam', description: 'Untuk booking 25-140 jam. Ideal untuk event series, multiple dinners dalam seminggu, atau short-term arrangement.' },
        { name: 'Monthly Package', rate: 'Rp 250.000/jam', description: 'Untuk booking lebih dari 140 jam. Perfect untuk full-time private chef atau long-term household arrangement.' }
      ],
      note: 'Harga di atas adalah untuk chef service saja. Bahan makanan dihitung terpisah sesuai menu yang dipilih dan ditransfer ke chef untuk berbelanja dengan bukti transparan. Semua biaya dijelaskan detail di proposal sebelum konfirmasi. Zero hidden cost guaranteed.'
    },
    testimonials: {
      title: 'Testimoni Pelanggan dari Kebayoran Baru',
      subtitle: 'Pengalaman nyata dari keluarga dan profesional di kawasan Kebayoran Baru',
      reviews: [
        {
          name: 'Keluarga Wijaya',
          event: 'Perayaan Ulang Tahun Pernikahan ke-20',
          location: 'Senopati, Kebayoran Baru',
          quote: 'Suami sangat terkesan dengan surprise anniversary dinner yang kami arrange! Menu 6-course French dining-nya luar biasa authentic. Seperti makan di restoran Michelin tapi di ruang makan rumah sendiri. Chef-nya profesional, ramah, dan sangat accommodate dengan request kami. Dapur dibersihkan sempurna setelahnya. Highly recommended untuk siapapun yang mau bikin acara special!',
          rating: 5
        },
        {
          name: 'Bu Sandra Hartono',
          event: 'Arisan Gathering Ibu-Ibu',
          location: 'Gunawarman, Kebayoran Baru',
          quote: 'Ibu-ibu arisan pada heboh karena makanannya enak banget dan presentasinya cantik! Biasanya kami rotating ke rumah masing-masing dan pesan catering, tapi kali ini saya coba pakai private chef. Hasilnya jauh beda – fresh, hangat, dan service-nya top. Semua langsung minta contact untuk arisan bulan depan di rumah mereka.',
          rating: 5
        },
        {
          name: 'Pak Dharma Putra',
          event: 'Business Dinner untuk Investor',
          location: 'Wijaya, Kebayoran Baru',
          quote: 'Klien dari Singapura dan Australia sangat impressed dengan kualitas makanan dan setup-nya. Mereka tidak expect bisa mendapat fine dining experience di private residence. Suasana lebih intim untuk diskusi bisnis dan deal senilai significant amount berhasil closing. Investasi yang sangat worth it untuk client entertainment.',
          rating: 5
        },
        {
          name: 'Ibu Melani Susanto',
          event: 'Sunday Family Dinner',
          location: 'Prapanca, Kebayoran Baru',
          quote: 'Kami sudah 5x pakai myCHEF untuk Sunday family dinner. Anak-anak selalu excited menunggu chef datang. Menu-nya bisa request berbeda setiap minggu. Practical banget untuk working parents yang tidak punya waktu masak tapi tetap mau quality family time dengan makanan enak homemade style.',
          rating: 5
        },
        {
          name: 'Keluarga Tanaka',
          event: 'Japanese New Year Celebration',
          location: 'Gandaria, Kebayoran Baru',
          quote: 'Kami keluarga Japanese expat dan sangat rindu authentic Japanese cuisine. Chef dari myCHEF ternyata pernah training di Tokyo dan bisa masak osechi ryori yang sangat authentic! Family dari Jepang yang video call juga impressed. Terima kasih sudah membuat Tahun Baru kami terasa seperti di home country.',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'FAQ Layanan di Kebayoran Baru',
      subtitle: 'Jawaban untuk pertanyaan yang sering diajukan seputar layanan kami',
      items: [
        {
          question: 'Minimal berapa orang untuk booking private chef?',
          answer: 'Mulai dari 2 orang saja untuk intimate dinner atau romantic dinner. Untuk acara besar, kami bisa handle hingga 100+ tamu dengan tim chef dan waiter tambahan. Tidak ada minimum spending yang kaku.'
        },
        {
          question: 'Apakah chef membawa peralatan sendiri?',
          answer: 'Chef menggunakan peralatan dapur standar Anda (kompor, oven, panci, wajan, dll). Jika menu membutuhkan peralatan khusus seperti outdoor grill, teppanyaki plate, atau alat BBQ, kami bisa sediakan dengan biaya tambahan yang diinformasikan sebelumnya.'
        },
        {
          question: 'Bisa request menu tertentu yang tidak ada di contoh menu?',
          answer: 'Tentu! Kami sangat fleksibel. Sampaikan permintaan spesifik Anda – apakah itu resep keluarga, hidangan dari restoran favorit, atau kreasi baru – chef kami akan berusaha mengakomodasi selama bahan tersedia.'
        },
        {
          question: 'Area Kebayoran Baru mana saja yang dijangkau?',
          answer: 'Seluruh Kebayoran Baru tanpa biaya transport tambahan: Senopati, Gunawarman, Prapanca, Wijaya, Cipete, Gandaria, Dharmawangsa, Radio Dalam, dan sekitarnya. Untuk area Jakarta Selatan lainnya juga kami layani.'
        },
        {
          question: 'Apakah ada biaya transportasi tambahan?',
          answer: 'Untuk area Kebayoran Baru dan Jakarta Selatan pada umumnya, tidak ada biaya transportasi tambahan. Sudah termasuk dalam chef service fee.'
        },
        {
          question: 'Berapa lama notice time yang dibutuhkan untuk booking?',
          answer: 'Idealnya 3-7 hari sebelum acara. Untuk acara besar (20+ tamu) atau weekend, 2 minggu lebih baik. Last minute booking bisa diusahakan tergantung ketersediaan chef – hubungi kami untuk cek availability.'
        },
        {
          question: 'Apakah bisa arrange table setup dan dekorasi juga?',
          answer: 'Ya, kami bisa merekomendasikan dan coordinate dengan partner untuk table setup, flower arrangement, dan dekorasi. Untuk acara besar, kami juga bisa provide event coordinator. Semua bisa didiskusikan saat konsultasi.'
        },
        {
          question: 'Bagaimana jika ada tamu yang mendadak tidak bisa hadir?',
          answer: 'Perubahan jumlah tamu bisa diinformasikan hingga 2 hari sebelum acara tanpa biaya tambahan. Untuk perubahan mendadak di hari H, kami akan flexible semaksimal mungkin. Bahan yang sudah dibeli tetap menjadi tanggungan Anda.'
        },
        {
          question: 'Apakah ada garansi kepuasan?',
          answer: 'Kami sangat yakin dengan kualitas layanan kami. Jika ada ketidakpuasan, silakan sampaikan dan kami akan berusaha menyelesaikan. Track record kami: 4.9/5 rating dari lebih dari 1000+ acara. Kepuasan Anda adalah prioritas utama.'
        },
        {
          question: 'Bisa untuk acara rutin mingguan atau bulanan?',
          answer: 'Tentu! Banyak keluarga di Kebayoran Baru yang sudah menjadi pelanggan regular kami untuk Sunday dinner atau monthly family gathering. Untuk arrangement regular, kami berikan rate spesial yang lebih hemat.'
        }
      ]
    },
    areaDetails: {
      title: 'Cakupan Layanan di Kawasan Kebayoran Baru',
      description: 'Kami melayani seluruh kawasan Kebayoran Baru dan sekitarnya di Jakarta Selatan tanpa biaya transportasi tambahan. Tim kami sangat familiar dengan area ini dan dapat mengakses berbagai tipe properti dari rumah besar hingga apartment.',
      neighborhoods: ['Senopati', 'Gunawarman', 'Prapanca', 'Wijaya', 'Cipete', 'Gandaria', 'Dharmawangsa', 'Radio Dalam', 'Pakubuwono', 'Simprug']
    },
    closingCta: {
      title: 'Jadikan Setiap Acara Makan Istimewa',
      paragraph: 'Warga Kebayoran Baru layak mendapat yang terbaik untuk setiap momen kuliner. Dengan layanan private chef dari myCHEF Indonesia, Anda bisa menikmati hidangan fine dining berkualitas restoran bintang lima tanpa perlu meninggalkan kenyamanan rumah. Lebih dari 1000 acara sukses telah kami tangani – sekarang giliran Anda merasakan perbedaannya.',
      secondaryParagraph: 'Hubungi kami sekarang untuk konsultasi gratis dan penawaran spesial. Tim myCHEF siap membantu mewujudkan pengalaman kuliner impian Anda di Kebayoran Baru. Proses booking mudah, harga transparan, kepuasan terjamin.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-kebayoran-baru",
      "name": "Private Chef Kebayoran Baru Jakarta",
      "description": "Layanan private chef profesional di Kebayoran Baru, Jakarta Selatan. Chef berpengalaman untuk dinner keluarga, acara bisnis, dan perayaan spesial.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Kebayoran Baru", "Jakarta Selatan", "Jakarta"],
      "serviceType": "Private Chef Service",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "180"
      }
    }
  },

  'pondok-indah': {
    name: 'Pondok Indah',
    slug: 'pondok-indah',
    region: 'Jakarta Selatan',
    metaTitle: 'Private Chef Pondok Indah | Layanan Koki Pribadi Eksklusif',
    metaDescription: 'Private chef profesional di Pondok Indah Jakarta Selatan. Nikmati hidangan mewah berkualitas fine dining di rumah Anda. Menu custom, chef berpengalaman. Pesan sekarang!',
    heroTitle: 'Private Chef Pondok Indah',
    heroSubtitle: 'Hadirkan kemewahan kuliner fine dining di "Beverly Hills-nya Jakarta". Chef profesional kami dengan standar internasional siap menciptakan pengalaman makan eksklusif di kediaman mewah Anda di Pondok Indah.',
    heroBullets: [
      'Chef berpengalaman dengan track record di hotel bintang lima dan restoran fine dining internasional',
      'Menu 100% custom sesuai selera: Indonesian heritage, Western fine dining, Asian fusion, atau kreasi khusus',
      'Full service profesional: konsultasi menu, belanja bahan premium, memasak, penyajian elegan, hingga bersih-bersih',
      'Tersedia untuk dinner romantis 2 orang hingga garden party 100+ tamu',
      'Verifikasi ketat dan background check untuk keamanan keluarga Anda'
    ],
    heroStats: [
      { value: '1000+', label: 'Acara Sukses' },
      { value: '4.9/5', label: 'Rating Pelanggan' },
      { value: '50+', label: 'Chef Terverifikasi' },
      { value: '13+', label: 'Tahun Pengalaman' }
    ],
    ctaText: 'Booking Private Chef',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya mau booking private chef di Pondok Indah, Jakarta Selatan.',
    introSection: {
      title: 'Layanan Private Chef Premium untuk Kawasan Pondok Indah',
      paragraphs: [
        'Pondok Indah dikenal sebagai "Beverly Hills-nya Jakarta" – kawasan elit dengan rumah-rumah mewah megah, fasilitas lifestyle premium, dan gaya hidup kelas atas yang sophisticated. Sebagai salah satu area residensial paling prestisius di Indonesia, Pondok Indah dihuni oleh para pengusaha sukses, eksekutif top, selebriti, dan keluarga-keluarga mapan yang terbiasa dengan standar tertinggi dalam segala hal, termasuk pengalaman kuliner.',
        'myCHEF Indonesia dengan bangga menghadirkan layanan private chef yang dirancang khusus untuk memenuhi ekspektasi tinggi penghuni Pondok Indah. Dengan lebih dari 13 tahun pengalaman dan track record 1000+ acara sukses, kami memahami bahwa di Pondok Indah, ordinary is not enough. Setiap hidangan harus extraordinary, setiap detail harus sempurna, dan setiap pengalaman harus memorable.',
        'Bayangkan menikmati hidangan berkualitas restoran Michelin-star langsung di ruang makan megah Anda, atau mengadakan poolside dinner party dengan menu yang dibuat khusus oleh chef berpengalaman. Dari garden party elegan di halaman luas hingga intimate dinner romantis di gazebo, chef profesional kami siap menciptakan pengalaman kuliner yang tak terlupakan sesuai dengan setting rumah mewah Anda.',
        'Layanan kami sangat cocok untuk berbagai kesempatan: intimate anniversary dinner yang romantis, birthday bash spectacular untuk anak-anak, family gathering dengan extended family dari luar kota, business entertainment untuk klien VIP, atau simply pampering yourself dengan hidangan gourmet setelah minggu yang melelahkan. Di Pondok Indah, Anda layak mendapatkan yang terbaik – dan itulah yang kami berikan.'
      ]
    },
    experienceOverview: {
      title: 'Pengalaman Fine Dining di Rumah Mewah Anda',
      subtitle: 'Kami menghadirkan kemewahan kuliner kelas dunia langsung ke kediaman Anda di Pondok Indah',
      features: [
        { icon: 'chef', title: 'Chef Kelas Internasional', description: 'Chef kami memiliki pengalaman di restoran fine dining top dan hotel bintang lima internasional. Beberapa bahkan pernah bekerja di restoran Michelin-starred.' },
        { icon: 'ingredients', title: 'Bahan Premium Pilihan', description: 'Wagyu A5, seafood segar import, truffle, foie gras, dan bahan-bahan premium lainnya. Kami hanya menggunakan ingredients terbaik yang tersedia.' },
        { icon: 'service', title: 'White Glove Service', description: 'Pelayanan sekelas hotel bintang lima: profesional, attentive, dan seamless. Dari konsultasi hingga cleanup, semuanya handled dengan excellence.' },
        { icon: 'custom', title: 'Bespoke Menu Creation', description: 'Menu dirancang khusus untuk Anda – tidak ada template. Setiap preferensi, dietary requirement, dan keinginan diakomodasi dengan kreativitas chef.' },
        { icon: 'privacy', title: 'Discretion Guaranteed', description: 'Privasi adalah prioritas. Background check menyeluruh, NDA available, dan profesionalisme tinggi untuk tamu-tamu VIP Anda.' },
        { icon: 'flexible', title: 'Venue Flexibility', description: 'Indoor dining room, outdoor terrace, poolside, garden gazebo – chef kami bisa beroperasi di berbagai setting rumah mewah Anda.' }
      ]
    },
    whyChooseUs: {
      title: 'Mengapa Private Chef myCHEF untuk Pondok Indah?',
      subtitle: 'Kami memahami standar tinggi penghuni Pondok Indah dan berkomitmen untuk melampaui ekspektasi',
      reasons: [
        { title: 'Eksklusivitas & Privasi Total', description: 'Acara Anda 100% private, tidak ada mata-mata atau gangguan dari pengunjung lain. Perfect untuk tamu-tamu VIP atau diskusi sensitif.' },
        { title: 'Kenyamanan Rumah Premium', description: 'Nikmati hidangan fine dining tanpa keluar dari zona nyaman rumah mewah Anda. Tidak ada kemacetan, tidak ada parkir, tidak ada waiting list.' },
        { title: 'Personalisasi Tak Terbatas', description: 'Setiap detail menu disesuaikan dengan preferensi keluarga: cuisine type, dietary needs, presentation style, bahkan musik dan ambiance.' },
        { title: 'Standar Hotel Bintang Lima Plus', description: 'Kualitas hidangan dan pelayanan tidak hanya setara, tapi seringkali melampaui restoran hotel mewah. Personal attention yang tidak bisa didapat di restaurant.' },
        { title: 'Keamanan Keluarga Terjamin', description: 'Semua chef dan tim melalui background check ketat dan verifikasi menyeluruh. Keamanan keluarga Anda adalah prioritas non-negotiable.' },
        { title: 'Value for Investment', description: 'Dibandingkan dengan makan di restoran fine dining dengan harga yang sama, Anda mendapat experience yang jauh lebih personal dan memorable di rumah sendiri.' }
      ]
    },
    howItWorks: {
      title: 'Proses Booking yang Seamless',
      subtitle: 'Dari inquiry hingga acara selesai, semuanya smooth dan hassle-free',
      steps: [
        { step: '1', title: 'Initial Inquiry', description: 'WhatsApp kami dengan tanggal, jumlah tamu, jenis acara, dan gambaran menu. Tim concierge kami merespons dalam hitungan jam.' },
        { step: '2', title: 'Consultation & Menu Design', description: 'Diskusikan preferensi detail dengan tim kuliner kami. Kami bantu design menu yang perfect untuk acara Anda – dari appetizer hingga dessert.' },
        { step: '3', title: 'Proposal & Confirmation', description: 'Terima proposal lengkap dengan menu detail, timeline, dan transparent pricing. Setujui dan bayar DP 50% untuk secure tanggal dan chef.' },
        { step: '4', title: 'Pre-Event Coordination', description: 'Tim kami coordinate semua detail: waktu kedatangan chef, shopping list, equipment needs, dan setup requirements.' },
        { step: '5', title: 'Execution Excellence', description: 'Chef tiba, masak hidangan spectacular, sajikan dengan presentasi memukau, dan bersihkan sampai spotless. You just enjoy.' }
      ]
    },
    occasions: {
      title: 'Perfect untuk Berbagai Acara Mewah',
      subtitle: 'Layanan kami designed untuk setiap momen special di kehidupan penghuni Pondok Indah',
      items: [
        { name: 'Poolside Dinner Party', description: 'Pesta makan malam di tepi kolam renang dengan setting yang Instagram-worthy dan menu yang memorable.' },
        { name: 'Anniversary Celebration Romantis', description: 'Dinner candlelight untuk dua dengan menu fine dining dan service yang membuat momen semakin special.' },
        { name: 'Birthday Bash Spectacular', description: 'Ulang tahun yang memorable dengan theme menu, presentasi wow, dan experience yang tidak terlupakan.' },
        { name: 'Garden Party Elegan', description: 'Pesta di taman dengan setup outdoor catering yang sophisticated dan menu yang refreshing.' },
        { name: 'Business Entertainment VIP', description: 'Impress klien dan partner bisnis penting dalam setting yang exclusive dan personal.' },
        { name: 'Holiday Grand Celebration', description: 'Rayakan Lebaran, Natal, Tahun Baru dengan gathering keluarga besar dan hidangan festive.' },
        { name: 'Intimate Gathering with Friends', description: 'Quality time dengan sahabat terdekat dengan hidangan gourmet dan suasana yang relaxed.' },
        { name: 'Regular Weekly Fine Dining', description: 'Jadikan setiap minggu special dengan private chef untuk family dinner rutin.' }
      ]
    },
    menuExamples: {
      title: 'Signature Menu Collection',
      subtitle: 'Contoh menu yang bisa di-customize sepenuhnya sesuai preferensi Anda',
      packages: [
        {
          name: 'Nusantara Luxury Experience',
          description: 'Masakan Indonesia premium dengan bahan-bahan terbaik dan presentasi modern yang sophisticated.',
          highlights: ['Oxtail soup premium dengan rempah pilihan', 'Bebek betutu 24 jam wrapped daun pisang', 'Gurame terbang saus asam manis premium', 'Rendang wagyu dengan bumbu authentic', 'Nasi liwet dengan lauk komplit', 'Es teler premium dengan durian dan avocado'],
          priceRange: 'Mulai Rp 600.000/orang'
        },
        {
          name: 'International Gourmet Journey',
          description: 'Perjalanan kuliner internasional dengan hidangan fine dining dari berbagai negara.',
          highlights: ['Foie gras torchon dengan brioche toast', 'Lobster thermidor dengan champagne sauce', 'Wagyu beef tenderloin dengan truffle jus', 'Chilean sea bass dengan saffron risotto', 'Valrhona chocolate sphere', 'Premium cheese selection'],
          priceRange: 'Mulai Rp 900.000/orang'
        },
        {
          name: 'Healthy Gourmet Luxe',
          description: 'Menu sehat premium tanpa kompromi rasa untuk health-conscious foodies.',
          highlights: ['Superfood salad dengan ancient grains', 'Grilled Hokkaido scallops', 'Herb-crusted lamb rack', 'Organic vegetables dengan truffle oil', 'Fresh fruit tart dengan mascarpone', 'Cold-pressed juice pairing'],
          priceRange: 'Mulai Rp 700.000/orang'
        },
        {
          name: 'Grand BBQ Celebration',
          description: 'BBQ party premium dengan berbagai protein terbaik dan sides yang complement.',
          highlights: ['Australian wagyu ribeye', 'Lamb T-bone dengan rosemary rub', 'Tiger prawns dan lobster tail', 'Smoked beef ribs 12 jam', 'Grilled seasonal vegetables', 'Artisan salads dan premium sauces'],
          priceRange: 'Mulai Rp 650.000/orang'
        }
      ]
    },
    chefHighlight: {
      title: 'Chef Profesional Berkaliber Internasional',
      description: 'Chef yang melayani Anda di Pondok Indah adalah profesional dengan kredensial impressive dan passion tinggi terhadap culinary excellence.',
      qualities: [
        'Track record di restoran fine dining internasional dan hotel bintang lima global',
        'Beberapa chef dengan pengalaman di Michelin-starred restaurants',
        'Sertifikasi international food safety dan hygiene standards',
        'Background check comprehensive dan verifikasi credentials',
        'Specialized training untuk private chef service dan high-end hospitality',
        'Multi-cuisine mastery: French, Italian, Japanese, Modern Indonesian, dll',
        'Creativity dalam menu development dan avant-garde presentation',
        'Professional demeanor yang suitable untuk VIP clientele'
      ]
    },
    pricingInfo: {
      title: 'Transparent Premium Pricing',
      subtitle: 'Investment yang worth it untuk experience yang unforgettable',
      tiers: [
        { name: 'Single Event', rate: 'Rp 800.000/jam', description: 'Untuk acara tunggal dengan durasi standard. Perfect untuk dinner party, celebration, atau special occasion.' },
        { name: 'Weekly Arrangement', rate: 'Rp 350.000/jam', description: 'Untuk booking 25-140 jam. Ideal untuk multiple events atau short-term regular service.' },
        { name: 'Monthly Retainer', rate: 'Rp 250.000/jam', description: 'Untuk booking 140+ jam. Best value untuk full-time private chef atau ongoing household service.' }
      ],
      note: 'Rate di atas untuk chef service. Premium ingredients dihitung terpisah sesuai menu dan sourced dari supplier terbaik. Semua costs fully transparent dalam proposal. Additional services (waiter, sommelier, decoration) available dengan quote terpisah.'
    },
    testimonials: {
      title: 'Review dari Penghuni Pondok Indah',
      subtitle: 'Pengalaman nyata dari keluarga-keluarga di kawasan paling prestisius Jakarta',
      reviews: [
        {
          name: 'Mrs. Tania Hartono',
          event: 'Garden Party 30 Orang',
          location: 'Pondok Indah Residences',
          quote: 'Acara garden party anniversary kami jadi sangat memorable! Setup di halaman belakang dengan string lights, menu 5-course yang incredible, dan service yang impeccable. Tamu-tamu sampai bertanya ini chef dari restoran mana karena kualitasnya outstanding. Sudah 3x pakai myCHEF dan never disappoints!',
          rating: 5
        },
        {
          name: 'Keluarga Hartono',
          event: 'Family New Year Dinner',
          location: 'Pondok Indah Golf Residence',
          quote: 'Tahun Baru di rumah jadi lebih special dengan private chef. Kami gathering 25 orang keluarga besar dan semua impressed dengan kualitas makanannya. Dari appetizer sampai dessert, every course was perfect. Anak-anak happy, orang tua puas, dan yang paling penting: tidak ada yang perlu kerja di dapur!',
          rating: 5
        },
        {
          name: 'Pak Raymond Kosasih',
          event: 'Business Dinner untuk Investors',
          location: 'Pondok Indah Kapuk',
          quote: 'Investor dari Hong Kong dan Singapore sangat impressed berat! Quality makanannya tidak kalah dengan restoran fine dining terbaik, tapi setting-nya jauh lebih private dan comfortable untuk business discussion. Mereka even commented bahwa ini one of the best dining experiences in Jakarta. Deal closed successfully!',
          rating: 5
        },
        {
          name: 'Ibu Melissa Tanujaya',
          event: 'Kids Birthday Party',
          location: 'Metro Pondok Indah',
          quote: 'Birthday party putri kami yang ke-7 jadi unforgettable! Chef prepare menu yang kids-friendly tapi tetap gourmet: pasta station, mini burger bar, dan dessert table yang cantik banget. Anak-anak excited, foto-fotonya Instagram-worthy, dan parents juga enjoy the food. Perfect!',
          rating: 5
        },
        {
          name: 'Mr. & Mrs. Liem',
          event: 'Romantic Anniversary Dinner',
          location: 'Pondok Indah CBD',
          quote: 'Our 10th anniversary dinner was absolutely magical! Chef set up candlelit dinner di terrace dengan view ke pool, 7-course French menu yang exquisite, dan personalized touches everywhere. My wife was so touched. Better than any restaurant experience we have ever had. Thank you myCHEF!',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers untuk pertanyaan yang sering diajukan seputar layanan di Pondok Indah',
      items: [
        {
          question: 'Apakah bisa untuk acara outdoor seperti poolside atau garden party?',
          answer: 'Tentu! Kami sangat berpengalaman menangani outdoor events di rumah-rumah Pondok Indah: poolside dinner, garden party, terrace gathering, dan berbagai outdoor setup lainnya. Chef dan tim kami equipped untuk berbagai venue settings.'
        },
        {
          question: 'Berapa range budget untuk private chef di Pondok Indah?',
          answer: 'Chef service mulai dari Rp 800.000/jam. Bahan makanan dihitung terpisah tergantung menu – untuk menu standar sekitar Rp 500.000-600.000/orang, untuk premium menu bisa Rp 700.000-1.000.000+/orang. Semua breakdown transparan di proposal.'
        },
        {
          question: 'Bisa minta menu vegetarian, vegan, atau kebutuhan diet khusus?',
          answer: 'Absolutely! Chef kami sangat experienced dengan berbagai dietary requirements: vegetarian, vegan, pescatarian, gluten-free, dairy-free, nut-free, keto, halal, dan berbagai medical diets. Just inform us saat konsultasi.'
        },
        {
          question: 'Apa yang perlu kami sediakan dari pihak tuan rumah?',
          answer: 'Cukup dapur yang functional dan peralatan standar (kompor, oven, basic cookware). Untuk equipment khusus seperti outdoor grill, BBQ setup, atau specialized tools, kami bisa arrange dengan biaya tambahan.'
        },
        {
          question: 'Apakah ada pilihan waiter atau butler service tambahan?',
          answer: 'Ya, kami provide professional waiters untuk service dan butler-style attendance. Untuk acara 10+ tamu, waiter sangat recommended. Rate additional staff akan di-quote terpisah.'
        },
        {
          question: 'Bagaimana handling food allergies untuk tamu?',
          answer: 'Allergies adalah serious matter. Informasikan semua known allergies saat menu consultation. Chef akan ensure complete avoidance dan bahkan prepare separate dishes jika diperlukan. Safety adalah prioritas.'
        },
        {
          question: 'Cluster mana saja di Pondok Indah yang dilayani?',
          answer: 'Seluruh Pondok Indah area: Metro Pondok Indah, Pondok Indah Golf, Pondok Indah Residences, Puri Indah area, Lebak Bulus, Cilandak, dan sekitarnya. No additional transport fee untuk area ini.'
        },
        {
          question: 'Bisa coordinate dengan event organizer atau decorator yang kami hire?',
          answer: 'Tentu! Kami sangat terbiasa collaborate dengan EO, decorators, dan other vendors. Coordination untuk timing dan logistics bisa dilakukan untuk seamless execution.'
        },
        {
          question: 'Apakah ada wine pairing atau beverage service?',
          answer: 'Ya, kami bisa arrange wine pairing recommendations dan bahkan sommelier service untuk acara besar. Beverages bisa disourcing melalui kami atau Anda provide sendiri.'
        },
        {
          question: 'Berapa advance notice yang ideal untuk booking?',
          answer: 'Untuk acara standard: 5-7 hari. Untuk weekend atau holiday period: 2 minggu+. Untuk large events 30+ orang: 3-4 minggu. Last minute possible tergantung availability.'
        }
      ]
    },
    areaDetails: {
      title: 'Coverage Area di Kawasan Pondok Indah',
      description: 'Kami melayani seluruh kawasan Pondok Indah dan sekitarnya di Jakarta Selatan tanpa biaya transportasi tambahan. Tim kami sangat familiar dengan berbagai residential clusters dan tipe properti di area ini.',
      neighborhoods: ['Metro Pondok Indah', 'Pondok Indah Golf', 'Pondok Indah Residences', 'Puri Indah', 'Lebak Bulus', 'Cilandak', 'Pondok Labu', 'Cinere', 'TB Simatupang', 'Ampera']
    },
    closingCta: {
      title: 'Wujudkan Pengalaman Kuliner Impian Anda',
      paragraph: 'Rumah mewah Anda di Pondok Indah pantas mendapatkan pengalaman kuliner yang setara dengan kemegahannya. Dengan myCHEF Indonesia, setiap momen makan bisa menjadi fine dining experience yang unforgettable – dengan privacy dan comfort yang tidak bisa didapat di restaurant manapun.',
      secondaryParagraph: 'Hubungi kami sekarang untuk konsultasi gratis. Tim concierge kami siap membantu merencanakan acara kuliner yang perfect untuk Anda dan orang-orang tersayang. From intimate dinners to grand celebrations, we make it exceptional.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-pondok-indah",
      "name": "Private Chef Pondok Indah Jakarta",
      "description": "Layanan private chef eksklusif di Pondok Indah, Jakarta Selatan. Fine dining experience untuk keluarga elite dan acara mewah.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Pondok Indah", "Jakarta Selatan", "Jakarta"],
      "serviceType": "Private Chef Service",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200"
      }
    }
  },

  'senayan': {
    name: 'Senayan',
    slug: 'senayan',
    region: 'Jakarta Selatan',
    metaTitle: 'Private Chef Senayan Jakarta | Jasa Koki Pribadi Premium',
    metaDescription: 'Layanan private chef profesional di Senayan Jakarta. Chef berpengalaman untuk dinner eksklusif di apartemen mewah atau rumah Anda. Menu custom, harga transparan. Book now!',
    heroTitle: 'Private Chef Senayan',
    heroSubtitle: 'Nikmati kemewahan kuliner fine dining di jantung Jakarta. Chef profesional kami menghadirkan pengalaman makan istimewa langsung di apartemen mewah atau kediaman Anda di kawasan prestisius Senayan.',
    heroBullets: [
      'Chef dengan background restoran fine dining ternama dan hotel bintang lima internasional',
      'Cocok untuk apartemen high-end maupun landed house dengan dapur modern',
      'Service lengkap end-to-end: perencanaan menu, sourcing ingredients premium, memasak, hingga clean up',
      'Tersedia untuk intimate dinner 2 orang hingga gathering 50+ tamu',
      'Background check dan verifikasi lengkap untuk keamanan Anda'
    ],
    heroStats: [
      { value: '1000+', label: 'Acara Sukses' },
      { value: '4.9/5', label: 'Rating Pelanggan' },
      { value: '50+', label: 'Chef Terverifikasi' },
      { value: '13+', label: 'Tahun Pengalaman' }
    ],
    ctaText: 'Pesan Chef Sekarang',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya tertarik private chef di area Senayan, Jakarta.',
    introSection: {
      title: 'Layanan Private Chef Premium di Kawasan Senayan',
      paragraphs: [
        'Senayan adalah salah satu lokasi paling strategis dan prestisius di jantung Jakarta. Dikelilingi oleh kompleks olahraga internasional Gelora Bung Karno, pusat perbelanjaan mewah seperti Senayan City dan Plaza Senayan, serta gedung-gedung perkantoran premium, kawasan ini menjadi pilihan utama para eksekutif, profesional sukses, dan keluarga mapan yang menginginkan akses terbaik ke berbagai fasilitas kota.',
        'myCHEF Indonesia menghadirkan layanan private chef yang dirancang khusus untuk memenuhi kebutuhan penghuni apartemen high-end dan perumahan elit di Senayan. Kami memahami bahwa waktu adalah aset paling berharga bagi para profesional sibuk, dan layanan kami designed untuk memberikan pengalaman kuliner berkualitas tanpa mengorbankan waktu produktif Anda.',
        'Dengan chef profesional yang datang langsung ke unit apartemen atau rumah Anda, Anda bisa menikmati hidangan fine dining tanpa perlu keluar rumah, menghindari kemacetan Jakarta yang menyita waktu, atau menunggu meja di restoran yang fully booked. Semua kemewahan kuliner hadir di ruang makan Anda sendiri.',
        'Layanan kami sangat cocok untuk penghuni apartemen mewah di Senayan yang ingin menjamu tamu tanpa repot, pasangan yang ingin romantic dinner after work, keluarga yang merayakan momen spesial seperti anniversary atau graduation dinner, atau profesional yang ingin quality time dengan orang tua yang berkunjung dari luar kota. Dengan dapur modern yang tersedia di apartemen-apartemen Senayan, chef kami bisa berkreasi maksimal untuk menghadirkan hidangan memorable.'
      ]
    },
    experienceOverview: {
      title: 'Fine Dining Experience di Unit Anda',
      subtitle: 'Kami menghadirkan pengalaman restoran bintang lima langsung ke apartemen atau rumah Anda di Senayan',
      features: [
        { icon: 'chef', title: 'Chef Berpengalaman', description: 'Chef dengan minimal 5 tahun pengalaman di fine dining restaurants dan hotel chains internasional. Expertise dalam berbagai cuisine dan adaptable dengan berbagai kitchen setup.' },
        { icon: 'ingredients', title: 'Premium Ingredients', description: 'Bahan-bahan berkualitas tinggi dari supplier terpercaya, dari wagyu beef hingga seafood segar import. Semua dibelanjakan fresh di hari H.' },
        { icon: 'service', title: 'Apartment-Friendly Service', description: 'Kami terbiasa bekerja di berbagai ukuran dan layout dapur apartemen. Chef akan menyesuaikan teknik dan workflow dengan fasilitas yang tersedia.' },
        { icon: 'custom', title: 'Menu Personalization', description: 'Tidak ada menu template. Setiap hidangan disesuaikan dengan preferensi Anda, dari cuisine type hingga dietary requirements.' },
        { icon: 'privacy', title: 'Privacy & Discretion', description: 'Untuk penghuni apartemen yang menghargai privasi, layanan kami discrete dan profesional. Background check lengkap untuk setiap chef.' },
        { icon: 'flexible', title: 'Scheduling Flexibility', description: 'Layanan tersedia setiap hari. Untuk working professionals, kami bisa accommodate jadwal makan malam after office hours.' }
      ]
    },
    whyChooseUs: {
      title: 'Keuntungan Private Chef untuk Penghuni Senayan',
      subtitle: 'Solusi kuliner yang designed untuk lifestyle profesional urban di Senayan',
      reasons: [
        { title: 'Skip Traffic & Hassle', description: 'Hindari macet Jakarta yang bisa memakan waktu berjam-jam. Restoran bintang lima datang langsung ke unit Anda.' },
        { title: 'Apartment Privacy', description: 'Nikmati suasana makan yang intim dan private tanpa kebisingan dan distraction dari restoran umum.' },
        { title: 'Flexible Menu Options', description: 'Dari comfort food setelah hari kerja panjang hingga haute cuisine untuk impress tamu, semua bisa diakomodasi.' },
        { title: 'Memorable Dining Experience', description: 'Elevate setiap momen makan menjadi special occasion. Di rumah sendiri, tapi dengan kualitas restaurant.' },
        { title: 'Time Efficiency', description: 'Tidak perlu travel, parkir, waiting for table. Waktu yang dihemat bisa untuk rest atau quality time.' },
        { title: 'Building Coordination', description: 'Kami terbiasa dengan prosedur building access di berbagai apartemen Senayan. Koordinasi dengan security dan management handled.' }
      ]
    },
    howItWorks: {
      title: 'Cara Booking Private Chef di Senayan',
      subtitle: 'Proses simple dan efficient untuk busy professionals',
      steps: [
        { step: '1', title: 'Quick Inquiry', description: 'WhatsApp kami dengan tanggal, waktu preferred, lokasi unit/gedung, jumlah tamu, dan gambaran menu. Tim kami respond cepat.' },
        { step: '2', title: 'Menu Consultation', description: 'Diskusikan preferensi dengan tim kuliner. Kami help select menu yang sesuai dengan tujuan acara dan dietary needs.' },
        { step: '3', title: 'Proposal & Confirmation', description: 'Terima proposal lengkap dengan menu detail, timeline, dan pricing transparent. Approve dan bayar DP untuk secure booking.' },
        { step: '4', title: 'Building Coordination', description: 'Kami koordinasi dengan Anda untuk building access: waktu kedatangan chef, registration di lobby, access card temporary.' },
        { step: '5', title: 'Seamless Execution', description: 'Chef tiba tepat waktu, eksekusi perfect, serve dengan presentasi elegant, dan bersih-bersih lengkap. You just enjoy.' }
      ]
    },
    occasions: {
      title: 'Cocok untuk Berbagai Momen',
      subtitle: 'Layanan kami designed untuk berbagai needs penghuni Senayan',
      items: [
        { name: 'After Work Dinner', description: 'Pulang kerja ke apartment dan nikmati hidangan gourmet tanpa effort. Perfect untuk decompress after long day.' },
        { name: 'Romantic Date Night', description: 'Candlelight dinner di apartment dengan view Jakarta. More intimate dan special dibanding restaurant.' },
        { name: 'Client Entertainment', description: 'Impress clients dengan private dining experience yang memorable dan conducive untuk business discussion.' },
        { name: 'Family Gathering', description: 'Quality time dengan orang tua atau saudara yang visit dari luar kota. No need to find restaurant – chef comes to you.' },
        { name: 'Birthday Celebration', description: 'Rayakan ulang tahun dengan dinner special di apartment. Personalized menu dan presentation.' },
        { name: 'Anniversary Dinner', description: 'Celebrate milestones dengan partner. Romantic setting di rumah sendiri dengan hidangan fine dining.' },
        { name: 'Weekend Brunch', description: 'Lazy Sunday brunch di apartment dengan menu yang indulgent. Invite friends untuk gathering santai.' },
        { name: 'Regular Weekly Dinner', description: 'Untuk professionals yang ingin consistent quality dining weekly tanpa cooking effort.' }
      ]
    },
    menuExamples: {
      title: 'Menu Options untuk Berbagai Occasions',
      subtitle: 'Pilihan menu yang bisa disesuaikan dengan preference Anda',
      packages: [
        {
          name: 'Jakarta Comfort Food Gourmet',
          description: 'Hidangan comfort food khas Jakarta dengan twist gourmet yang satisfying.',
          highlights: ['Sop buntut premium dengan rempah pilihan', 'Nasi goreng wagyu dengan telur mata sapi', 'Gado-gado dengan bumbu kacang special', 'Pisang goreng crispy dengan caramel sauce', 'Wedang jahe premium'],
          priceRange: 'Mulai Rp 450.000/orang'
        },
        {
          name: 'European Classic Fine Dining',
          description: 'Menu klasik Eropa untuk suasana formal dan elegant yang sophisticated.',
          highlights: ['Amuse-bouche trio', 'French onion soup dengan Gruyère', 'Duck confit dengan orange glaze', 'Grilled ribeye steak dengan béarnaise', 'Profiteroles dengan chocolate ganache'],
          priceRange: 'Mulai Rp 650.000/orang'
        },
        {
          name: 'Seafood Celebration',
          description: 'Pesta seafood segar untuk pecinta hasil laut dengan preparation yang impressive.',
          highlights: ['Fresh oysters dengan mignonette', 'Garlic butter king prawns', 'Baked whole barramundi', 'Lobster tail dengan butter sauce', 'Coconut panna cotta'],
          priceRange: 'Mulai Rp 700.000/orang'
        },
        {
          name: 'Light & Healthy Executive',
          description: 'Menu sehat dan light untuk health-conscious professionals yang tetap ingin indulge.',
          highlights: ['Quinoa salad dengan roasted vegetables', 'Grilled salmon dengan asparagus', 'Cauliflower steak dengan herb butter', 'Fresh fruit dengan Greek yogurt', 'Green smoothie bowl'],
          priceRange: 'Mulai Rp 500.000/orang'
        }
      ]
    },
    chefHighlight: {
      title: 'Chef Profesional untuk Kebutuhan Anda',
      description: 'Chef yang melayani area Senayan adalah professionals dengan experience extensive dan kemampuan beradaptasi dengan berbagai environment.',
      qualities: [
        'Background di fine dining restaurants dan hotel internasional',
        'Terbiasa bekerja di berbagai ukuran dan setup dapur apartment',
        'Food safety certified dan hygiene standards compliant',
        'Professional demeanor yang suitable untuk executive clientele',
        'Multi-cuisine capability dari Indonesian hingga International',
        'Time-efficient cooking untuk busy professionals schedule',
        'Adaptable dengan building regulations dan access procedures',
        'Discrete service yang menghormati privacy penghuni'
      ]
    },
    pricingInfo: {
      title: 'Transparent Pricing Information',
      subtitle: 'Clear pricing structure tanpa hidden fees',
      tiers: [
        { name: 'Single Occasion', rate: 'Rp 800.000/jam', description: 'Untuk dinner atau event tunggal. Typical duration 4-5 jam including prep dan cleanup.' },
        { name: 'Weekly Package', rate: 'Rp 350.000/jam', description: 'Untuk regular weekly dinners atau multiple events dalam seminggu. Best for busy professionals.' },
        { name: 'Monthly Arrangement', rate: 'Rp 250.000/jam', description: 'Untuk ongoing regular service atau full-time private chef arrangement.' }
      ],
      note: 'Rate above adalah untuk chef service. Food ingredients dihitung terpisah berdasarkan menu selection dan ditransfer ke chef untuk shopping. Building access coordination included. Semua costs disclosed upfront dalam proposal.'
    },
    testimonials: {
      title: 'Feedback dari Penghuni Senayan',
      subtitle: 'Pengalaman nyata dari professionals dan keluarga di kawasan Senayan',
      reviews: [
        {
          name: 'Mbak Felicia Tanoto',
          event: 'Birthday Dinner di Apartment',
          location: 'Senayan City Residences',
          quote: 'Surprise birthday dinner untuk suami jadi perfect! Chef tiba tepat waktu, masak 5-course menu yang incredible, dan yang paling penting: dapur apartment bersih spotless setelahnya! Suami sangat impressed dan bertanya ini chef dari mana. Will definitely book again!',
          rating: 5
        },
        {
          name: 'Pak Gunawan Santoso',
          event: 'Family Reunion Dinner',
          location: 'Fairground Apartment',
          quote: 'Menjamu orang tua dan saudara dari Surabaya jadi sangat mudah dengan myCHEF. Tidak perlu pusing cari restaurant yang bisa accommodate 12 orang. Chef datang ke apartment, masak Indonesian menu yang authentic, dan semua keluarga happy. Quality time tanpa hassle!',
          rating: 5
        },
        {
          name: 'Mrs. Angela Wijaya',
          event: 'Intimate Dinner untuk 6',
          location: 'FX Residences',
          quote: 'Quality makanan setara atau bahkan better than fine dining restaurants di Senayan City. We had guests from Singapore dan mereka very impressed dengan the whole experience. Private, comfortable, dan food-nya excellent. This is the way to entertain!',
          rating: 5
        },
        {
          name: 'Mas Ricky Permana',
          event: 'Weekly After-Work Dinner',
          location: 'The Pakubuwono Signature',
          quote: 'Sudah langganan 2 bulan untuk Wednesday dinner setelah kerja. Perfect way to unwind – pulang ke apartment dan makanan gourmet sudah ready. Menu bisa ganti-ganti setiap minggu. Much better than eating out every time.',
          rating: 5
        },
        {
          name: 'Keluarga Hadiwijaya',
          event: 'Anniversary Celebration',
          location: 'Senayan Apartment',
          quote: 'Our 15th anniversary dinner was magical. Chef setup romantic dinner di balcony dengan city view, 7-course French menu yang exquisite. So much more special than restaurant karena it was just the two of us in our home. Highly recommend!',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'FAQ Private Chef Senayan',
      subtitle: 'Jawaban untuk pertanyaan umum seputar layanan di area Senayan',
      items: [
        {
          question: 'Apakah cocok untuk dapur apartment yang tidak terlalu besar?',
          answer: 'Tentu! Chef kami sangat terbiasa bekerja di berbagai ukuran dapur apartment. Kami menyesuaikan menu dan cooking method dengan fasilitas yang tersedia. Bahkan dapur compact bisa produce impressive meals.'
        },
        {
          question: 'Bagaimana dengan akses ke apartment building untuk chef?',
          answer: 'Chef akan koordinasi dengan Anda untuk building entry. Biasanya cukup dengan visitor registration di lobby atau temporary access card. Kami terbiasa dengan prosedur berbagai building di Senayan.'
        },
        {
          question: 'Bisa untuk acara kecil 2-4 orang saja?',
          answer: 'Sangat bisa! Banyak booking kami untuk intimate dinner couples atau small family gathering. No minimum guest requirement – kami melayani mulai dari 2 orang.'
        },
        {
          question: 'Apartment dan area mana saja di Senayan yang dilayani?',
          answer: 'Seluruh area Senayan: Fairground, FX Residences, Senayan City area, The Pakubuwono, Gelora area, Permata Hijau, Simprug, dan sekitarnya. No transport fee untuk area ini.'
        },
        {
          question: 'Apakah bisa request wine pairing?',
          answer: 'Ya, kami bisa help arrange wine pairing dengan menu. Chef akan recommend wines yang complement the courses. Beverages bisa kami source atau Anda provide sendiri.'
        },
        {
          question: 'Berapa lama notice yang dibutuhkan untuk booking?',
          answer: 'Idealnya 3-5 hari sebelumnya. Untuk weekend atau tanggal popular, booking lebih awal recommended. Last minute possible tergantung chef availability – contact us untuk check.'
        },
        {
          question: 'Bagaimana jika apartment rules tidak allow cooking smells?',
          answer: 'Kami bisa adjust menu untuk minimize strong odors. Techniques like sous vide, baking, atau dishes yang less aromatic bisa diprioritaskan. Discuss dengan tim kami untuk solutions.'
        },
        {
          question: 'Apakah chef bisa accommodate late timing karena meeting molor?',
          answer: 'Yes, kami flexible untuk working professionals. Inform kami jika ada potential delay dan chef bisa adjust prep timing. Extended hours available dengan additional fee.'
        },
        {
          question: 'Berapa durasi typical untuk dinner service?',
          answer: 'Untuk dinner 4-6 orang dengan 4-5 courses: sekitar 4-5 jam total (prep, cooking, serving, cleanup). Untuk lebih banyak tamu atau courses lebih elaborate, durasi bisa lebih lama.'
        },
        {
          question: 'Apakah ada parking arrangement untuk chef?',
          answer: 'Chef biasanya menggunakan transport apps atau motor untuk efficiency di Jakarta. Jika membawa equipment banyak dan perlu parking, kami akan coordinate dengan Anda untuk visitor parking di building.'
        }
      ]
    },
    areaDetails: {
      title: 'Cakupan Area Layanan Senayan',
      description: 'Kami melayani seluruh kawasan Senayan dan sekitarnya tanpa biaya transportasi tambahan. Tim kami familiar dengan berbagai apartment buildings dan residential areas di Senayan.',
      neighborhoods: ['Senayan City', 'FX Sudirman', 'Fairground', 'Gelora', 'Permata Hijau', 'Simprug', 'Patra Kuningan', 'Mega Kuningan', 'Pakubuwono', 'SCBD Area']
    },
    closingCta: {
      title: 'Elevate Your Dining Experience di Senayan',
      paragraph: 'Jadikan setiap momen makan di apartment atau rumah Anda di Senayan lebih istimewa dengan private chef profesional. Skip the traffic, skip the hassle, dan enjoy restaurant-quality dining dalam comfort rumah sendiri.',
      secondaryParagraph: 'Hubungi myCHEF sekarang untuk konsultasi gratis tanpa komitmen. Tim kami siap membantu plan dining experience yang perfect untuk Anda – whether it is weekly routine atau special celebration.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-senayan",
      "name": "Private Chef Senayan Jakarta",
      "description": "Layanan private chef profesional di Senayan, Jakarta. Fine dining untuk apartemen mewah dan rumah elit.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Senayan", "Jakarta Selatan", "Jakarta"],
      "serviceType": "Private Chef Service",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "170"
      }
    }
  },

  'scbd': {
    name: 'SCBD Sudirman',
    slug: 'scbd',
    region: 'Jakarta Pusat',
    metaTitle: 'Private Chef SCBD Sudirman | Koki Pribadi untuk Eksekutif Jakarta',
    metaDescription: 'Private chef profesional di SCBD Sudirman Jakarta. Layanan kuliner eksklusif untuk eksekutif dan profesional. Menu premium, chef berpengalaman. Booking sekarang!',
    heroTitle: 'Private Chef SCBD Sudirman',
    heroSubtitle: 'Layanan kuliner eksklusif yang dirancang untuk para eksekutif di pusat bisnis Jakarta. Chef profesional kami menghadirkan pengalaman fine dining premium di apartemen mewah SCBD tanpa Anda perlu meninggalkan zona nyaman.',
    heroBullets: [
      'Chef dengan pengalaman di hotel dan restoran internasional kelas dunia',
      'Sempurna untuk business dinner, client entertainment, dan personal celebration',
      'Layanan fleksibel yang accommodate jadwal sibuk busy professionals',
      'Menu custom dari comfort food hingga haute cuisine multi-course',
      'Background check dan discretion untuk high-profile clientele'
    ],
    heroStats: [
      { value: '1000+', label: 'Acara Sukses' },
      { value: '4.9/5', label: 'Rating Pelanggan' },
      { value: '50+', label: 'Chef Terverifikasi' },
      { value: '13+', label: 'Tahun Pengalaman' }
    ],
    ctaText: 'Book Private Chef',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya ingin booking private chef di SCBD Sudirman, Jakarta.',
    introSection: {
      title: 'Layanan Private Chef Eksklusif untuk Eksekutif SCBD',
      paragraphs: [
        'SCBD (Sudirman Central Business District) adalah jantung bisnis Jakarta yang paling prestisius. Tempat berkumpulnya gedung-gedung pencakar langit ikonik, kantor-kantor multinasional terkemuka, dan apartemen super mewah dengan fasilitas world-class. Para penghuninya adalah eksekutif C-level, entrepreneur sukses, expatriat senior, dan profesional high-achieving dengan standar hidup tinggi dan jadwal yang sangat demanding.',
        'myCHEF Indonesia menghadirkan layanan private chef yang dirancang khusus untuk memenuhi kebutuhan unik busy professionals di SCBD. Kami memahami bahwa waktu adalah resource paling berharga bagi Anda – dan layanan kami designed untuk memberikan pengalaman kuliner exceptional tanpa mengorbankan waktu produktif atau rest time yang sudah limited.',
        'Layanan kami ideal untuk berbagai skenario kehidupan profesional di SCBD: menjamu klien penting tanpa harus keluar ke restoran yang crowded, merayakan closing deal dengan tim dalam setting yang lebih private, menikmati romantic dinner setelah hari kerja yang panjang tanpa effort tambahan, hosting intimate gathering dengan colleagues, atau simply treating yourself dengan hidangan gourmet sebagai reward after demanding week.',
        'Dengan chef profesional yang datang langsung ke unit apartemen mewah Anda, Anda mendapat experience fine dining yang setara atau lebih baik dari restoran top Jakarta – tapi dengan privacy, convenience, dan personalization yang tidak bisa didapat di restaurant manapun. Perfect untuk executives yang value both quality dan efficiency.'
      ]
    },
    experienceOverview: {
      title: 'Executive Dining Experience di Unit Anda',
      subtitle: 'Fine dining service yang designed untuk lifestyle high-achieving professionals',
      features: [
        { icon: 'chef', title: 'Executive Chef Caliber', description: 'Chef dengan track record di hotel chains internasional dan fine dining restaurants. Profesional yang memahami expectation high-end clientele.' },
        { icon: 'ingredients', title: 'Premium Sourcing', description: 'Ingredients berkualitas tinggi: wagyu, caviar, truffle, imported seafood, dan premium products lainnya sesuai menu selection.' },
        { icon: 'service', title: 'Business-Ready Service', description: 'Seamless execution yang tidak mengganggu flow jika Anda sedang meeting sambil dinner. Chef work quietly dan efficiently.' },
        { icon: 'custom', title: 'Menu Flexibility', description: 'Dari quick executive lunch hingga elaborate multi-course dinner untuk client entertainment. Semua customizable.' },
        { icon: 'privacy', title: 'Confidential Setting', description: 'Private dining di unit Anda untuk sensitive business discussions. More secure dibanding public restaurants.' },
        { icon: 'flexible', title: 'Schedule Accommodation', description: 'Layanan available untuk late dinners, working lunches, atau last-minute bookings sesuai unpredictable executive schedule.' }
      ]
    },
    whyChooseUs: {
      title: 'Mengapa Private Chef untuk Profesional SCBD?',
      subtitle: 'Solusi dining yang aligned dengan lifestyle executives dan business needs',
      reasons: [
        { title: 'Time Efficiency Maximum', description: 'Tidak perlu booking restaurant, travel, parking, atau wait for table. Maximize waktu produktif dan rest time. Chef brings everything to you.' },
        { title: 'Impress Your Clients', description: 'Private entertainment di residence adalah ultimate gesture of hospitality. More memorable dan impactful dibanding restaurant dinner.' },
        { title: 'Work-Life Integration', description: 'Enjoy quality dining tanpa sacrificing limited personal time. Pulang ke apartment, food sudah ready atau being prepared.' },
        { title: 'Confidential Environment', description: 'Diskusi bisnis sensitif, M&A negotiations, atau private conversations – lebih aman di space Anda sendiri.' },
        { title: 'Personalized Experience', description: 'Menu tailored untuk preferences Anda dan guests. Dietary restrictions, favorite cuisines, atau specific requests – all accommodated.' },
        { title: 'Premium Quality Assured', description: 'Consistent fine dining quality setiap waktu. No variability yang kadang terjadi di restaurants.' }
      ]
    },
    howItWorks: {
      title: 'Simple & Efficient Booking Process',
      subtitle: 'Designed untuk busy professionals yang value efficiency',
      steps: [
        { step: '1', title: 'Quick Inquiry', description: 'WhatsApp dengan basic details: tanggal, waktu, jumlah tamu, jenis acara. Tim kami respond promptly.' },
        { step: '2', title: 'Efficient Menu Planning', description: 'Brief discussion untuk menu preferences. Kami suggest options yang suit your occasion dan guests.' },
        { step: '3', title: 'Swift Confirmation', description: 'Terima proposal dengan all details. Approve via message dan secure booking dengan DP.' },
        { step: '4', title: 'Seamless Coordination', description: 'Kami handle building access coordination. Chef tiba on time tanpa Anda perlu manage logistics.' },
        { step: '5', title: 'Focus on What Matters', description: 'Anda fokus pada guests atau personal enjoyment. Chef execute flawlessly dan cleanup completely.' }
      ]
    },
    occasions: {
      title: 'Designed untuk Business & Personal Occasions',
      subtitle: 'Layanan yang versatile untuk berbagai needs executives',
      items: [
        { name: 'Client Entertainment Dinner', description: 'Impress clients dengan private fine dining yang shows exceptional hospitality dan attention.' },
        { name: 'Deal Closing Celebration', description: 'Rayakan successful deals dengan team dalam setting yang lebih personal dan celebratory.' },
        { name: 'Board or Partner Meeting Dinner', description: 'Working dinner dengan colleagues dalam environment yang productive dan comfortable.' },
        { name: 'Investor Relations Hosting', description: 'Entertain investors dalam private setting yang conducive untuk relationship building.' },
        { name: 'After-Work Executive Unwind', description: 'Quality meal untuk decompress setelah demanding day tanpa leaving apartment.' },
        { name: 'Weekend Personal Treat', description: 'Reward yourself dengan gourmet experience sebagai respite dari hectic week.' },
        { name: 'Romantic Partner Dinner', description: 'Quality time dengan significant other tanpa effort atau travel. Focus on connection.' },
        { name: 'Family Visit Entertainment', description: 'Host family atau friends yang visit dalam comfortable home setting.' }
      ]
    },
    menuExamples: {
      title: 'Menu Selections untuk Business & Personal',
      subtitle: 'Options yang suit berbagai occasions dan preferences',
      packages: [
        {
          name: 'Executive Business Dinner',
          description: 'Menu refined dan impressive untuk client entertainment yang leaves lasting impression.',
          highlights: ['Amuse-bouche selection', 'Seared scallops dengan cauliflower purée', 'Prime beef tenderloin dengan truffle jus', 'Cheese course dengan premium selection', 'Signature chocolate dessert'],
          priceRange: 'Mulai Rp 750.000/orang'
        },
        {
          name: 'Team Celebration Feast',
          description: 'Sharing-style menu untuk merayakan wins dengan team dalam casual tapi quality setting.',
          highlights: ['Assorted premium canapés', 'Live pasta station dengan fresh pasta', 'Mixed grill platter premium', 'Sides dan salads variety', 'Dessert selection board'],
          priceRange: 'Mulai Rp 550.000/orang'
        },
        {
          name: 'After-Work Comfort Gourmet',
          description: 'Elevated comfort food untuk unwind setelah long day. Satisfying tapi tidak overly formal.',
          highlights: ['Truffle fries dengan aioli', 'Wagyu burger dengan all the fixings', 'Lobster mac and cheese', 'Seasonal vegetables', 'New York style cheesecake'],
          priceRange: 'Mulai Rp 500.000/orang'
        },
        {
          name: 'Romantic Fine Dining',
          description: 'Intimate dinner untuk two dengan multi-course menu dan romantic presentation.',
          highlights: ['Champagne oysters', 'Foie gras dengan brioche', 'Surf and turf duo', 'Palate cleanser sorbet', 'Chocolate dessert for sharing'],
          priceRange: 'Mulai Rp 850.000/orang'
        }
      ]
    },
    chefHighlight: {
      title: 'Chef Profesional untuk Executive Clientele',
      description: 'Chef yang melayani area SCBD dipilih khusus untuk kemampuan mereka melayani high-profile clients dengan discretion dan excellence.',
      qualities: [
        'Background di hotel chains internasional dan fine dining establishments',
        'Experience melayani corporate executives dan VIP guests',
        'Professional demeanor dan impeccable service standards',
        'Time-efficient execution yang respect client schedules',
        'Multi-cuisine expertise dari Western fine dining hingga Asian',
        'Discretion dan confidentiality dalam all interactions',
        'Adaptability dengan various apartment kitchens dan equipment',
        'Flexibility untuk accommodate last-minute changes'
      ]
    },
    pricingInfo: {
      title: 'Transparent Executive Pricing',
      subtitle: 'Clear structure untuk budget planning',
      tiers: [
        { name: 'Single Occasion', rate: 'Rp 800.000/jam', description: 'Untuk dinner atau event tunggal. Ideal untuk special occasions atau client entertainment.' },
        { name: 'Weekly Arrangement', rate: 'Rp 350.000/jam', description: 'Untuk regular weekly dinners. Perfect untuk busy executives yang want consistent quality meals.' },
        { name: 'Monthly Retainer', rate: 'Rp 250.000/jam', description: 'Untuk ongoing service atau full-time arrangement. Best value untuk frequent users.' }
      ],
      note: 'Rates above untuk chef service. Premium ingredients quoted separately based on menu. Building coordination included. All costs transparent dalam proposal sebelum confirmation.'
    },
    testimonials: {
      title: 'Feedback dari Professionals di SCBD',
      subtitle: 'Experiences dari executives dan business leaders',
      reviews: [
        {
          name: 'Mr. Kevin Tanujaya',
          event: 'Client Dinner di Pacific Place Residence',
          location: 'Pacific Place Residences',
          quote: 'Clients dari Singapore dan Hong Kong were extremely impressed. Quality tidak kalah dengan Michelin restaurants, tapi setting jauh lebih private untuk business discussion. They specifically commented ini salah satu best dining experiences mereka di Jakarta. Deal closed that evening. Worth every rupiah!',
          rating: 5
        },
        {
          name: 'Ms. Priscilla Hartono',
          event: 'Team Closing Deal Celebration',
          location: 'The Pakubuwono Signature',
          quote: 'Merayakan closing deal besar dengan tim jadi lebih meaningful di apartment daripada restoran. Chef accommodate our timing yang agak late karena meeting molor. Food was exceptional dan team really appreciated the personal touch. Will use myCHEF untuk future celebrations.',
          rating: 5
        },
        {
          name: 'Pak Andri Setiawan',
          event: 'Surprise Anniversary Dinner',
          location: 'Anandamaya Residences',
          quote: 'Setelah meeting marathon seharian, pulang ke apartment dan ternyata private dinner romantis sudah ready untuk anniversary kami. Wife was so surprised dan touched. Chef prepared 6-course French menu yang indah. Best anniversary ever – and I did not have to do any work!',
          rating: 5
        },
        {
          name: 'Mrs. Diana Kosasih',
          event: 'Weekly Executive Dinner',
          location: 'Keraton at The Plaza',
          quote: 'Sudah 4 bulan berlangganan untuk weekly dinner. Perfect untuk working professionals seperti kami – pulang kerja, quality food ready, no effort needed. Menu variety excellent, never bored. This service is a game-changer untuk busy couples.',
          rating: 5
        },
        {
          name: 'Mr. Jonathan Liem',
          event: 'Investor Dinner',
          location: 'Sudirman Suites',
          quote: 'Hosted potential investors dari Silicon Valley. Private setting membuat conversation lebih candid dan productive. Chef prepared contemporary Asian menu yang showcase Indonesian flavors dengan modern presentation. Investors impressed dengan both the food dan the hosting concept. Funding discussion went very well!',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'FAQ untuk Executives di SCBD',
      subtitle: 'Answers untuk common questions dari professionals',
      items: [
        {
          question: 'Apakah bisa last-minute booking untuk hari yang sama?',
          answer: 'Tergantung chef availability, tapi kami berusaha accommodate. Semakin awal booking, semakin baik untuk menu customization dan chef selection. Untuk same-day, contact us immediately untuk check.'
        },
        {
          question: 'Bagaimana dengan parking dan building access untuk chef?',
          answer: 'Chef coordinate dengan building concierge. Anda cukup inform management tentang visitor time dan purpose. Untuk most buildings di SCBD, standard visitor registration sudah sufficient.'
        },
        {
          question: 'Bisa untuk working dinner atau meeting sambil makan?',
          answer: 'Absolutely! Banyak klien kami use layanan untuk working dinner atau lunch meeting di apartment. Chef work quietly dan service designed untuk tidak mengganggu discussions.'
        },
        {
          question: 'Apartment mana saja di SCBD yang dilayani?',
          answer: 'Semua: Pacific Place Residences, The Pakubuwono, Keraton at The Plaza, Anandamaya, Sudirman Suites, Fairmont, dan semua gedung di SCBD area. No transport fee.'
        },
        {
          question: 'Bisa arrange beverages dan wine juga?',
          answer: 'Ya, kami bisa help arrange wine, champagne, atau beverages dengan additional cost. Wine pairing recommendations juga available. Alternatively, Anda bisa provide your own selection.'
        },
        {
          question: 'Apakah chef bisa standby lebih lama jika meeting molor?',
          answer: 'Yes, kami flexible. Extended hours bisa di-arrange dengan additional fee yang reasonable. Inform kami jika ada possibility of delay untuk smooth coordination.'
        },
        {
          question: 'Bagaimana dengan dietary restrictions untuk guests yang tidak saya ketahui beforehand?',
          answer: 'Kami always prepare with common restrictions in mind. Inform kami about general profile guests dan kami ensure menu has options. Day-of adjustments possible untuk common issues.'
        },
        {
          question: 'Apakah ada package untuk regular weekly service?',
          answer: 'Ya, kami offer weekly rate yang lebih ekonomis untuk regular bookings. Many executives subscribe untuk 2-3 dinners per week. Contact us untuk custom arrangement.'
        },
        {
          question: 'Bisa minta chef yang sama setiap waktu?',
          answer: 'Ya, jika Anda prefer consistency dengan specific chef, kami bisa arrange regular assignment. Chef availability permitting, kami accommodate preference ini.'
        },
        {
          question: 'Apakah service fee bisa di-invoice untuk company entertainment?',
          answer: 'Tentu. Kami provide proper invoice dengan all details untuk company reimbursement atau corporate billing. Tax invoice juga available.'
        }
      ]
    },
    areaDetails: {
      title: 'Coverage di SCBD dan Sekitarnya',
      description: 'Kami melayani seluruh kawasan SCBD dan Sudirman Corridor tanpa biaya transportasi tambahan. Tim kami sangat familiar dengan building procedures dan residences di area ini.',
      neighborhoods: ['Pacific Place', 'The Pakubuwono', 'Keraton at The Plaza', 'Anandamaya', 'Sudirman Suites', 'Fairmont', 'SCBD Lot', 'Mega Kuningan', 'Kuningan', 'Setiabudi']
    },
    closingCta: {
      title: 'Upgrade Your Executive Lifestyle',
      paragraph: 'Sebagai profesional di SCBD, Anda deserve dining experience yang match dengan lifestyle dan achievement Anda. Private chef adalah the ultimate efficiency – quality tanpa compromise, convenience tanpa hassle.',
      secondaryParagraph: 'Hubungi myCHEF sekarang. Whether untuk impress clients, celebrate wins, atau simply treat yourself – kami help Anda elevate every dining occasion. Consultation gratis, booking efficient, execution excellent.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-scbd",
      "name": "Private Chef SCBD Sudirman Jakarta",
      "description": "Layanan private chef eksklusif di SCBD Sudirman, Jakarta. Kuliner premium untuk eksekutif dan profesional.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["SCBD", "Sudirman", "Jakarta Pusat", "Jakarta"],
      "serviceType": "Private Chef Service",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "160"
      }
    }
  },

  'kemang': {
    name: 'Kemang',
    slug: 'kemang',
    region: 'Jakarta Selatan',
    metaTitle: 'Private Chef Kemang Jakarta | Koki Pribadi untuk Expat & Lokal',
    metaDescription: 'Private chef profesional di Kemang Jakarta Selatan. Layanan koki pribadi untuk expat dan keluarga Indonesia. Menu internasional & lokal. Booking sekarang!',
    heroTitle: 'Private Chef Kemang',
    heroSubtitle: 'Layanan kuliner premium di kawasan kosmopolitan Kemang. Chef profesional kami dengan expertise multi-cuisine siap menghadirkan cita rasa dunia langsung ke villa, rumah, atau apartemen Anda di jantung Kemang.',
    heroBullets: [
      'Chef berpengalaman dengan berbagai cuisine internasional: Italian, Japanese, French, Korean, Middle Eastern, dan Indonesian',
      'Melayani komunitas expat internasional dan keluarga Indonesia dengan equal excellence',
      'Fleksibel untuk casual brunch gathering hingga formal dinner party',
      'Perfect untuk outdoor events di halaman atau poolside Kemang homes',
      'Bilingual service untuk accommodate international guests'
    ],
    heroStats: [
      { value: '1000+', label: 'Acara Sukses' },
      { value: '4.9/5', label: 'Rating Pelanggan' },
      { value: '50+', label: 'Chef Terverifikasi' },
      { value: '13+', label: 'Tahun Pengalaman' }
    ],
    ctaText: 'Chat dengan Kami',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya tertarik dengan private chef di Kemang, Jakarta Selatan.',
    introSection: {
      title: 'Layanan Private Chef untuk Komunitas Kemang yang Kosmopolitan',
      paragraphs: [
        'Kemang adalah salah satu kawasan paling kosmopolitan dan vibrant di Jakarta Selatan. Terkenal dengan deretan café trendy, restoran internasional beragam, art galleries, dan boutiques stylish, Kemang memiliki karakter unik yang menarik baik expatriat dari berbagai negara maupun keluarga Indonesia modern yang menghargai lifestyle yang worldly dan eclectic.',
        'myCHEF Indonesia dengan bangga menghadirkan layanan private chef yang perfectly suited untuk diverse community Kemang. Dengan chef yang memiliki expertise dalam berbagai cuisine – dari Italian dan French hingga Japanese, Korean, Middle Eastern, dan tentu saja Indonesian – kami bisa accommodate virtually any culinary preference dari berbagai latar belakang budaya.',
        'Layanan kami sangat populer di kalangan penghuni Kemang – baik expat yang rindu masakan dari negara asalnya, pasangan international-Indonesian yang ingin fusion of cultures, maupun keluarga Indonesia modern yang ingin exploring world cuisines tanpa leaving comfort of home. Kemang homes dengan halaman yang spacious dan setup yang casual-elegant menjadi perfect setting untuk private chef experience.',
        'Apakah Anda merencanakan relaxed Sunday brunch dengan friends, house party yang lively dengan diverse crowd, kids birthday party yang fun dan delicious, dinner gathering dengan neighbors dari berbagai negara, atau romantic dinner untuk anniversary – chef profesional kami siap menghadirkan exactly what you envision. Di Kemang, diversity adalah celebrated, dan culinary offerings kami reflect that spirit.'
      ]
    },
    experienceOverview: {
      title: 'International Dining Experience di Rumah Anda',
      subtitle: 'Multi-cuisine expertise untuk melayani diverse Kemang community',
      features: [
        { icon: 'chef', title: 'Multi-Cuisine Chefs', description: 'Chef dengan training dan experience di berbagai cuisine internasional. Italian, Japanese, French, Korean, Middle Eastern, Indian – we have specialists.' },
        { icon: 'ingredients', title: 'Global Ingredients', description: 'Access ke ingredients dari berbagai negara melalui network supplier kami. Authentic flavors untuk setiap cuisine.' },
        { icon: 'service', title: 'Bilingual Service', description: 'Chef dan tim kami bisa communicate dalam English dan Indonesian. Perfect untuk international gatherings.' },
        { icon: 'custom', title: 'Fusion Possibilities', description: 'Creative fusion menus yang blend cultures. Perfect untuk mixed-nationality families dan gatherings.' },
        { icon: 'privacy', title: 'Casual or Formal', description: 'We adapt to your vibe. Relaxed garden party atau formal sit-down dinner – execution equally excellent.' },
        { icon: 'flexible', title: 'Outdoor Expertise', description: 'Kemang homes often have gardens dan outdoor spaces. Chef terbiasa dengan outdoor cooking dan setups.' }
      ]
    },
    whyChooseUs: {
      title: 'Keunggulan Private Chef di Kemang',
      subtitle: 'Layanan yang designed untuk diverse, dynamic Kemang lifestyle',
      reasons: [
        { title: 'Cuisine Diversity', description: 'Dari Indonesian traditional hingga Italian, Japanese, Korean, Middle Eastern – chef kami bisa handle semuanya dengan authenticity.' },
        { title: 'Kemang Vibe Understanding', description: 'Kami get the Kemang atmosphere: casual but quality, relaxed but sophisticated. Our service matches that energy.' },
        { title: 'Expat-Friendly Service', description: 'Bilingual communication, familiar dengan international expectations, dan understanding of expat needs.' },
        { title: 'Family-Friendly Options', description: 'Menu bisa divided untuk kids dan adults dengan different preferences. Everyone gets what they like.' },
        { title: 'Outdoor Venue Ready', description: 'Kemang homes dengan gardens, patios, pools – chef experienced dengan outdoor cooking dan weather considerations.' },
        { title: 'Home Comfort Enhanced', description: 'Enjoy international cuisines dalam comfortable home setting, lebih relaxed dibanding going out.' }
      ]
    },
    howItWorks: {
      title: 'Cara Booking yang Simple',
      subtitle: 'Easy process untuk a seamless experience',
      steps: [
        { step: '1', title: 'Reach Out', description: 'WhatsApp kami dengan details: when, how many people, cuisine preferences, dan type of event. We respond quickly.' },
        { step: '2', title: 'Menu Discussion', description: 'Tell us about your guests, dietary needs, dan budget. Kami help design menu yang perfect untuk occasion.' },
        { step: '3', title: 'Get Proposal', description: 'Receive detailed proposal dengan menu, timeline, dan transparent pricing breakdown. Review dan approve.' },
        { step: '4', title: 'Confirm & Pay', description: 'Happy dengan proposal? Pay DP dan your date is locked. Chef assignment confirmed.' },
        { step: '5', title: 'Sit Back & Enjoy', description: 'Chef handles everything: shopping, cooking, serving, cleanup. You focus on your guests dan having fun.' }
      ]
    },
    occasions: {
      title: 'Perfect untuk Kemang Social Scene',
      subtitle: 'Layanan untuk berbagai occasions yang common di Kemang community',
      items: [
        { name: 'Sunday Brunch Gathering', description: 'Lazy weekend brunch dengan friends. Pancakes, eggs benedict, fresh juices – relaxed dan delicious.' },
        { name: 'International House Party', description: 'Gathering dengan guests dari berbagai negara. Menu yang diverse dan crowd-pleasing.' },
        { name: 'Kids Birthday Party', description: 'Fun, kid-friendly menu dengan presentation yang exciting. Parents juga get great food.' },
        { name: 'Expat Farewell/Welcome', description: 'Celebrate comings dan goings dengan memorable dinner yang reflects Kemang community spirit.' },
        { name: 'Date Night at Home', description: 'Romantic dinner tanpa going out. Intimate, personal, dan way more special than restaurant.' },
        { name: 'Holiday Celebrations', description: 'Christmas, Thanksgiving, Diwali, Lunar New Year – authentic menus untuk any celebration.' },
        { name: 'Garden BBQ Party', description: 'Outdoor grilling party di halaman Kemang home. Premium meats, sides, dan relaxed vibe.' },
        { name: 'Neighborhood Potluck Upgrade', description: 'Take your turn hosting dengan impressive spread. Show off dengan professional chef.' }
      ]
    },
    menuExamples: {
      title: 'Popular Menu Choices di Kemang',
      subtitle: 'Options yang resonate dengan diverse Kemang community',
      packages: [
        {
          name: 'Kemang Weekend Brunch',
          description: 'Perfect untuk lazy Sunday gathering. Mix of international brunch favorites.',
          highlights: ['Eggs benedict dengan hollandaise', 'Fluffy pancake stack dengan maple syrup', 'Fresh juice bar station', 'Avocado toast dengan poached eggs', 'Fruit platter dan pastries', 'Specialty coffee service'],
          priceRange: 'Mulai Rp 400.000/orang'
        },
        {
          name: 'International BBQ Party',
          description: 'Outdoor grilling party dengan diverse protein selection. Perfect untuk garden gatherings.',
          highlights: ['American-style BBQ ribs', 'Korean bulgogi dan samgyupsal', 'Grilled seafood Mediterranean style', 'Lamb kofta Middle Eastern', 'Assorted grilled vegetables', 'Various sauces dan sides'],
          priceRange: 'Mulai Rp 500.000/orang'
        },
        {
          name: 'Kids Party Special',
          description: 'Menu yang kids love dengan presentation yang fun. Adults-friendly options included.',
          highlights: ['Mini burger station', 'Pizza dari scratch', 'Chicken nuggets homemade', 'Pasta bar dengan choices', 'Ice cream sundae station', 'Fun decorated cupcakes'],
          priceRange: 'Mulai Rp 350.000/orang'
        },
        {
          name: 'Italian Dinner Experience',
          description: 'Authentic Italian multi-course dinner untuk sophisticated gatherings.',
          highlights: ['Antipasti selection', 'Fresh pasta handmade', 'Risotto dengan seasonal ingredients', 'Ossobuco atau seabass', 'Tiramisu classic', 'Italian cheese selection'],
          priceRange: 'Mulai Rp 550.000/orang'
        }
      ]
    },
    chefHighlight: {
      title: 'Multi-Talented Chefs untuk Kemang',
      description: 'Chef yang melayani Kemang area dipilih untuk versatility dan ability to connect dengan diverse clientele.',
      qualities: [
        'Experience dengan multiple cuisines: Western, Asian, Middle Eastern, Indonesian',
        'Many trained internationally atau dengan international chefs di Indonesia',
        'English-speaking capability untuk communicate dengan expat clients',
        'Understanding of various cultural dietary practices',
        'Experience dengan outdoor cooking dan flexible setups',
        'Friendly, approachable demeanor yang suits Kemang casual vibe',
        'Creativity dalam fusion dan custom menu development',
        'Comfortable dengan families, kids, dan diverse guest profiles'
      ]
    },
    pricingInfo: {
      title: 'Flexible Pricing untuk Kemang',
      subtitle: 'Options untuk berbagai budgets dan occasions',
      tiers: [
        { name: 'Single Event', rate: 'Rp 800.000/jam', description: 'Untuk dinner party, birthday, atau gathering tunggal. Most common untuk Kemang events.' },
        { name: 'Weekly Arrangement', rate: 'Rp 350.000/jam', description: 'Untuk regular weekly meals. Great untuk busy families yang want consistent quality.' },
        { name: 'Monthly Package', rate: 'Rp 250.000/jam', description: 'Untuk ongoing regular service. Best value untuk frequent users.' }
      ],
      note: 'Rate di atas untuk chef service. Food ingredients dihitung terpisah based on menu selection. Outdoor setup equipment jika needed akan di-quote terpisah. All transparent dalam proposal.'
    },
    testimonials: {
      title: 'Apa Kata Warga Kemang',
      subtitle: 'Reviews dari expat dan Indonesian families di Kemang',
      reviews: [
        {
          name: 'Sarah Mitchell (Australian)',
          event: 'Housewarming Party',
          location: 'Kemang Timur',
          quote: 'Just moved to Kemang last year and this was the perfect way to celebrate our new home! Chef made amazing spread that pleased both our expat friends dan Indonesian neighbors. Everyone asking untuk contact. Such a great experience!',
          rating: 5
        },
        {
          name: 'Keluarga Sutanto',
          event: 'Birthday Party Anak',
          location: 'Kemang Selatan',
          quote: 'Anak-anak senang banget dengan the food! Menu kids-friendly tapi parents juga puas. Ada mini burger station yang jadi hit. Service profesional, ramah, dan semua beres sampai bersih. Pasti repeat untuk birthday tahun depan!',
          rating: 5
        },
        {
          name: 'Mas Ricky dan Mbak Anna',
          event: 'Weekend BBQ Gathering',
          location: 'Kemang Raya',
          quote: 'BBQ party di halaman rumah jadi next level dengan private chef. We invited mixed Indonesian dan expat friends, dan chef prepared diverse menu yang everyone loved. Korean BBQ, American ribs, grilled seafood – semua amazing. Best party we have hosted!',
          rating: 5
        },
        {
          name: 'The Johnson Family',
          event: 'Thanksgiving Dinner',
          location: 'Bangka, Kemang',
          quote: 'Being Americans far from home, we really wanted authentic Thanksgiving. Chef delivered perfectly! Turkey with all the trimmings, pumpkin pie, the works. Our expat friends were so grateful. Felt like home. Thank you myCHEF!',
          rating: 5
        },
        {
          name: 'Ibu Maya Kartika',
          event: 'Arisan dengan Tema Italian',
          location: 'Kemang Utara',
          quote: 'Untuk arisan bulanan, kita decide untuk Italian theme. Chef prepare pasta fresh di depan mata, risotto yang creamy, dan tiramisu yang perfect. Ibu-ibu pada kagum! Sekarang semua mau giliran host dengan myCHEF juga.',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'FAQ untuk Kemang Community',
      subtitle: 'Answers untuk common questions dari Kemang residents',
      items: [
        {
          question: 'Bisa untuk outdoor party di halaman atau poolside?',
          answer: 'Tentu! Kemang homes sering punya outdoor spaces yang great untuk events. Chef kami experienced dengan outdoor cooking. Kami bisa setup outdoor cooking station, BBQ, dan handle logistics untuk garden atau poolside party.'
        },
        {
          question: 'Apakah chef bisa masak cuisine dari negara tertentu?',
          answer: 'Yes! Chef kami ada yang specialist di berbagai cuisines: Italian, French, Japanese, Korean, Middle Eastern, Indian, dan tentu Indonesian. Diskusikan preference dan kami assign chef yang paling suitable.'
        },
        {
          question: 'Minimum berapa orang untuk booking?',
          answer: 'Mulai dari 2 orang saja untuk intimate dinner. Untuk party, kami bisa handle hingga 50+ guests. No strict minimum – we accommodate various sizes.'
        },
        {
          question: 'Area Kemang mana yang dicakup?',
          answer: 'Seluruh Kemang: Kemang Raya, Kemang Timur, Kemang Selatan, Kemang Utara, Bangka, Ampera, Pejaten, dan sekitarnya. No additional transport fee untuk areas ini.'
        },
        {
          question: 'Apakah available bilingual service in English?',
          answer: 'Ya, sebagian besar chef dan tim kami bisa communicate dalam English dengan comfort. Perfect untuk events dengan international guests atau expat families.'
        },
        {
          question: 'Berapa lama durasi typical untuk party?',
          answer: 'Untuk party 15-20 guests, biasanya 5-6 hours including prep dan cleanup. Untuk larger events atau more elaborate menus, bisa lebih lama. Timeline dijelaskan dalam proposal.'
        },
        {
          question: 'Bisa accommodate berbagai dietary restrictions dalam satu event?',
          answer: 'Absolutely! Kami sering handle events dengan guests yang punya berbagai needs: vegetarian, halal, kosher, allergies. Inform kami saat booking dan chef prepare accordingly.'
        },
        {
          question: 'Bagaimana dengan music dan entertainment?',
          answer: 'Chef focus on food. Untuk music, DJ, atau entertainment, kami bisa recommend partners. Atau Anda arrange sendiri – kami coordinate timing untuk work together smoothly.'
        },
        {
          question: 'Apakah bisa request menu fusion?',
          answer: 'Yes! Banyak Kemang clients request fusion menus yang blend cuisines – Japanese-Peruvian, Indonesian-Western, etc. Chef kami creative dan enjoy the challenge.'
        },
        {
          question: 'Berapa advance booking yang recommended?',
          answer: 'Untuk standard dinner: 4-5 days. Untuk weekend parties: 1-2 weeks. Untuk holiday periods seperti Christmas atau Lebaran: 3-4 weeks. Earlier is better untuk chef availability.'
        }
      ]
    },
    areaDetails: {
      title: 'Cakupan Layanan di Kemang Area',
      description: 'Kami melayani seluruh kawasan Kemang dan surrounding neighborhoods tanpa biaya transportasi tambahan. Tim kami sangat familiar dengan berbagai housing types di area ini, dari compounds hingga stand-alone villas.',
      neighborhoods: ['Kemang Raya', 'Kemang Timur', 'Kemang Selatan', 'Kemang Utara', 'Bangka', 'Ampera', 'Pejaten', 'Cilandak', 'Pasar Minggu', 'Mampang']
    },
    closingCta: {
      title: 'Ready to Elevate Your Kemang Dining?',
      paragraph: 'Kemang life is about enjoying the best of both worlds – international flavors dan Indonesian warmth. Private chef service brings that philosophy right into your home. Whether it is a casual brunch atau a grand celebration, we make it memorable.',
      secondaryParagraph: 'Hubungi myCHEF sekarang untuk diskusi about your event. We love the Kemang community dan excited to serve you. Consultation free, no obligations – just good conversation about great food!'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-kemang",
      "name": "Private Chef Kemang Jakarta",
      "description": "Layanan private chef profesional di Kemang, Jakarta Selatan. Cuisine internasional untuk expat dan keluarga Indonesia.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Kemang", "Jakarta Selatan", "Jakarta"],
      "serviceType": "Private Chef Service",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "190"
      }
    }
  },

  'pantai-indah-kapuk': {
    name: 'Pantai Indah Kapuk',
    slug: 'pantai-indah-kapuk',
    region: 'Jakarta Utara',
    metaTitle: 'Private Chef PIK Jakarta | Koki Pribadi untuk Keluarga Elite',
    metaDescription: 'Private chef profesional di Pantai Indah Kapuk Jakarta Utara. Layanan kuliner eksklusif untuk keluarga PIK. Menu custom Chinese, Indonesian, Western. Pesan sekarang!',
    heroTitle: 'Private Chef Pantai Indah Kapuk',
    heroSubtitle: 'Hadirkan pengalaman fine dining berkualitas premium di kawasan eksklusif PIK. Chef profesional kami siap melayani keluarga Anda dengan hidangan berkualitas tinggi di kenyamanan cluster rumah Anda.',
    heroBullets: [
      'Chef berpengalaman dalam berbagai cuisine: Chinese, Indonesian, Western, Asian Fusion',
      'Familiar dengan gated community dan cluster lifestyle di PIK',
      'Service lengkap dari menu planning, shopping bahan premium, memasak, hingga bersih-bersih',
      'Perfect untuk family dinner, Chinese celebration, holiday gathering, dan special occasions',
      'Coordination dengan security dan building management handled'
    ],
    heroStats: [
      { value: '1000+', label: 'Acara Sukses' },
      { value: '4.9/5', label: 'Rating Pelanggan' },
      { value: '50+', label: 'Chef Terverifikasi' },
      { value: '13+', label: 'Tahun Pengalaman' }
    ],
    ctaText: 'Hubungi Kami Sekarang',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya mau tanya layanan private chef di PIK, Jakarta Utara.',
    introSection: {
      title: 'Layanan Private Chef Premium untuk Keluarga PIK',
      paragraphs: [
        'Pantai Indah Kapuk (PIK) adalah salah satu kawasan paling eksklusif di Jakarta Utara, dengan perumahan cluster mewah, fasilitas lifestyle premium, waterfront living, dan komunitas yang solid. PIK terkenal dengan penghuni yang menghargai kualitas hidup tinggi, family values yang kuat, dan pengalaman kuliner yang excellent.',
        'myCHEF Indonesia menghadirkan layanan private chef yang specially designed untuk memenuhi kebutuhan unik keluarga di PIK. Dengan pemahaman mendalam tentang preferensi kuliner komunitas PIK – termasuk Chinese cuisine yang authentic, Indonesian favorites, dan international options – chef kami siap menghadirkan hidangan yang sesuai dengan selera dan tradisi keluarga Anda.',
        'Layanan kami sangat diminati di PIK untuk berbagai kesempatan: family dinner rutin yang membawa keluarga bersama, Chinese New Year celebration besar-besaran dengan extended family, birthday party anak yang meriah di halaman rumah, gathering dengan tetangga satu cluster, atau simply pampering the family dengan makanan enak tanpa harus keluar kompleks.',
        'Dengan gated community setting dan rumah-rumah yang spacious, PIK menawarkan perfect environment untuk private chef experience. Dapur yang modern dan well-equipped, ruang makan yang luas, dan outdoor spaces yang beautiful – semuanya menjadi canvas bagi chef kami untuk menciptakan culinary memories yang tak terlupakan untuk keluarga Anda.'
      ]
    },
    experienceOverview: {
      title: 'Premium Dining Experience untuk Keluarga PIK',
      subtitle: 'Layanan yang tailored untuk lifestyle dan preferences komunitas PIK',
      features: [
        { icon: 'chef', title: 'Multi-Cuisine Expertise', description: 'Chef dengan specialty di Chinese cuisine (Cantonese, Szechuan, dll), Indonesian classics, dan Western fine dining. Sesuai preferensi keluarga PIK.' },
        { icon: 'ingredients', title: 'Premium Ingredients', description: 'Bahan-bahan berkualitas tinggi: seafood segar, premium meats, authentic Chinese ingredients, dan produce terbaik.' },
        { icon: 'service', title: 'Family-Centric Service', description: 'Pelayanan yang memahami family dynamics: menu untuk anak-anak, adults, dan elderly dengan preferences berbeda.' },
        { icon: 'custom', title: 'Celebration Specialists', description: 'Experienced dengan Chinese celebrations: Imlek, weddings, birthdays dengan attention to traditions dan auspicious elements.' },
        { icon: 'privacy', title: 'Cluster-Familiar', description: 'Terbiasa dengan PIK gated community procedures. Coordination dengan security dan building untuk smooth access.' },
        { icon: 'flexible', title: 'Large Family Ready', description: 'Equipped untuk handle large family gatherings yang common di PIK. Dari 10 sampai 100+ guests.' }
      ]
    },
    whyChooseUs: {
      title: 'Kenapa Private Chef untuk Keluarga di PIK?',
      subtitle: 'Layanan yang designed untuk enhance family moments di PIK',
      reasons: [
        { title: 'Tidak Perlu Keluar Kompleks', description: 'Makanan restoran berkualitas datang ke rumah. Praktis, efisien, dan keluarga tetap di zona nyaman cluster.' },
        { title: 'Perfect untuk Keluarga Besar', description: 'PIK terkenal dengan extended families. Kami bisa handle gathering besar dengan berbagai preferences.' },
        { title: 'Chinese Cuisine Authentic', description: 'Chef dengan specialty Chinese cooking untuk Imlek, weddings, dan celebrations yang require authentic dishes.' },
        { title: 'Kids dan Elderly Friendly', description: 'Menu bisa customized untuk berbagai ages. Mild options untuk anak-anak, softer textures untuk elderly.' },
        { title: 'Keamanan Terjamin', description: 'Chef dan tim melalui verification ketat. Combined dengan PIK security, family safety is maximized.' },
        { title: 'Home Memories Created', description: 'Celebrations di rumah sendiri create lasting family memories. More meaningful dibanding restaurant.' }
      ]
    },
    howItWorks: {
      title: 'Proses Booking untuk PIK Families',
      subtitle: 'Simple steps untuk seamless experience',
      steps: [
        { step: '1', title: 'Kontak Tim Kami', description: 'WhatsApp dengan details: cluster/alamat, tanggal, jumlah keluarga, dan preferensi menu. Response cepat.' },
        { step: '2', title: 'Diskusi Menu Detail', description: 'Konsultasi tentang menu preferences, dietary requirements keluarga, dan budget. Kami berikan recommendations.' },
        { step: '3', title: 'Proposal & Confirm', description: 'Terima proposal lengkap dengan menu detail dan breakdown biaya. Setujui dan bayar DP.' },
        { step: '4', title: 'Security Coordination', description: 'Kami coordinate dengan Anda untuk security gate entry. Inform cluster security tentang chef arrival.' },
        { step: '5', title: 'Nikmati Bersama Keluarga', description: 'Chef tiba, masak hidangan lezat, serve dengan care, dan bersihkan semua. Family just enjoys!' }
      ]
    },
    occasions: {
      title: 'Cocok untuk Berbagai Momen Keluarga PIK',
      subtitle: 'Layanan untuk occasions yang matter bagi families di PIK',
      items: [
        { name: 'Family Sunday Dinner', description: 'Tradisi makan malam keluarga dengan hidangan istimewa yang membawa everyone together.' },
        { name: 'Chinese New Year Feast', description: 'Imlek celebration dengan menu authentic: yusheng, abalone, fish, dan all the auspicious dishes.' },
        { name: 'Birthday Party Anak', description: 'Kids party yang fun dengan menu yang anak-anak love. Setup di halaman atau indoor.' },
        { name: 'Wedding Tea Ceremony Lunch', description: 'Traditional Chinese wedding events dengan appropriate menu dan service.' },
        { name: 'Grandparents Anniversary', description: 'Honor elders dengan celebration dinner yang reflects their preferences dan traditions.' },
        { name: 'Cluster Gathering', description: 'Hosting neighbors dari cluster untuk social event. Show off dengan impressive spread.' },
        { name: 'Holiday Celebrations', description: 'Lebaran, Christmas, atau festival lainnya dengan menu yang fits the occasion.' },
        { name: 'Regular Weekly Family Dinner', description: 'Consistent quality family meals setiap minggu. Practical untuk busy families.' }
      ]
    },
    menuExamples: {
      title: 'Menu Favorit untuk Keluarga PIK',
      subtitle: 'Options yang resonate dengan PIK community preferences',
      packages: [
        {
          name: 'Chinese Feast Premium',
          description: 'Hidangan Chinese authentic untuk gatherings dan celebrations. Auspicious dan delicious.',
          highlights: ['Peking duck dengan pancakes', 'Steamed fish Hong Kong style', 'Dim sum assortment premium', 'Braised abalone dengan shiitake', 'Yang chow fried rice', 'Mango sago pomelo'],
          priceRange: 'Mulai Rp 600.000/orang'
        },
        {
          name: 'Family Style Indonesian',
          description: 'Masakan Indonesia rumahan dengan kualitas premium. Comfort food yang everyone loves.',
          highlights: ['Sop iga premium dengan kentang', 'Ayam bakar taliwang', 'Udang saus padang jumbo', 'Sayur asem segar', 'Nasi putih pulen', 'Es buah segar mixed'],
          priceRange: 'Mulai Rp 450.000/orang'
        },
        {
          name: 'International Mix Selection',
          description: 'Diverse menu untuk families dengan varied tastes. Something untuk everyone.',
          highlights: ['Caesar salad station', 'Pasta selection dengan sauces', 'Grilled meat selection', 'Stir-fry Asian vegetables', 'Mixed rice options', 'Dessert platter variety'],
          priceRange: 'Mulai Rp 500.000/orang'
        },
        {
          name: 'Kids Party Package',
          description: 'Menu yang kids love dengan fun presentation. Adults options included.',
          highlights: ['Chicken nuggets homemade', 'Mini pizza variety', 'French fries crispy', 'Pasta dengan cheese sauce', 'Fresh fruit skewers', 'Ice cream sundae bar'],
          priceRange: 'Mulai Rp 350.000/orang'
        }
      ]
    },
    chefHighlight: {
      title: 'Chef yang Memahami Keluarga PIK',
      description: 'Chef yang melayani PIK dipilih untuk expertise mereka dalam cuisines yang disukai komunitas dan kemampuan melayani family gatherings.',
      qualities: [
        'Specialty dalam Chinese cuisine: Cantonese, Szechuan, Teochew, dan lainnya',
        'Strong Indonesian dan Western cooking skills juga',
        'Experience dengan large family gatherings dan celebrations',
        'Understanding of Chinese traditions dan auspicious food elements',
        'Kid-friendly cooking dan presentation skills',
        'Patience dan care dalam melayani elderly guests',
        'Familiar dengan gated community procedures',
        'Professional yet warm demeanor yang suits family setting'
      ]
    },
    pricingInfo: {
      title: 'Informasi Harga untuk Keluarga PIK',
      subtitle: 'Transparent pricing untuk family budgeting',
      tiers: [
        { name: 'Single Event', rate: 'Rp 800.000/jam', description: 'Untuk dinner atau celebration tunggal. Common untuk birthday parties dan special occasions.' },
        { name: 'Weekly Package', rate: 'Rp 350.000/jam', description: 'Untuk regular weekly family dinners. Great value untuk consistent quality meals.' },
        { name: 'Monthly Arrangement', rate: 'Rp 250.000/jam', description: 'Untuk ongoing regular service. Best untuk families yang want frequent private chef meals.' }
      ],
      note: 'Harga di atas untuk chef service. Bahan makanan dihitung terpisah sesuai menu. Untuk menu Chinese dengan ingredients premium seperti abalone atau bird nest, akan di-quote khusus. Semua transparent dalam proposal.'
    },
    testimonials: {
      title: 'Ulasan dari Keluarga di PIK',
      subtitle: 'Experiences nyata dari families di berbagai cluster PIK',
      reviews: [
        {
          name: 'Ibu Lilian Tanuwijaya',
          event: 'Chinese New Year Dinner',
          location: 'Golf Island PIK',
          quote: 'Tahun Baru Imlek jadi sangat special! Chef prepare full Chinese feast untuk 30 orang keluarga besar. Makanan authentic, dari yusheng sampai steamed fish semua perfect. Orang tua dan mertua very happy. Extended family dari luar kota juga impressed. Terima kasih myCHEF sudah make our reunion memorable!',
          rating: 5
        },
        {
          name: 'Keluarga Tanujaya',
          event: 'Birthday Party Anak di PIK 2',
          location: 'PIK 2 Cluster',
          quote: 'Birthday party anak ke-8 jadi unforgettable! Chef setup di halaman dengan kids menu yang fun. Mini burgers, pizza station, dessert bar – anak-anak happy banget. Orang tua juga ada separate menu yang enak. No hassle, no stress – just celebrating. Highly recommend!',
          rating: 5
        },
        {
          name: 'Pak William Chandra',
          event: 'Weekly Family Sunday Dinner',
          location: 'Bukit Golf PIK',
          quote: 'Sudah 4 bulan langganan untuk Sunday dinner keluarga. Konsisten enak, menu bisa request berbeda setiap minggu. Anak-anak antusias, istri senang tidak perlu masak, orang tua puas dengan kualitas. Service excellent dan timely. Jadi tradisi keluarga yang berharga!',
          rating: 5
        },
        {
          name: 'The Wijaya Family',
          event: 'Wedding Tea Ceremony Lunch',
          location: 'Sunrise Garden PIK',
          quote: 'For our son wedding tea ceremony, we wanted authentic Chinese lunch untuk 50 family members. Chef delivered beyond expectations! Dishes beautiful dan delicious, timing perfect, service impeccable. In-laws very impressed. Made the ceremony so much more meaningful.',
          rating: 5
        },
        {
          name: 'Ibu Fenny Salim',
          event: 'Cluster Neighbors Gathering',
          location: 'Pantai Maju PIK',
          quote: 'Giliran host cluster gathering bulanan dan mau yang special. Private chef idea was perfect! Mix menu Indonesian dan Western untuk accommodate berbagai selera. Neighbors semua impressed dan bertanya service ini. Sekarang beberapa sudah jadi pelanggan juga!',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'FAQ untuk Keluarga di PIK',
      subtitle: 'Jawaban untuk pertanyaan umum dari residents PIK',
      items: [
        {
          question: 'Bagaimana chef masuk ke gated community?',
          answer: 'Chef coordinate dengan Anda untuk entry process. Biasanya Anda perlu inform security gate dengan chef name dan arrival time. Kami terbiasa dengan PIK security procedures di berbagai clusters.'
        },
        {
          question: 'Cluster mana saja di PIK yang dilayani?',
          answer: 'Semua clusters di PIK: Golf Island, PIK 2, Pantai Maju, Bukit Golf, Sunrise Garden, Pantai Indah Utara, Pantai Indah Selatan, dan seluruh area PIK tanpa tambahan transport fee.'
        },
        {
          question: 'Bisa untuk acara besar seperti Imlek atau wedding?',
          answer: 'Tentu! Kami sangat berpengalaman dengan large scale Chinese celebrations. Untuk 50-100+ guests, kami provide tim chef dan waiter tambahan. Book early untuk dates populer.'
        },
        {
          question: 'Apakah ada chef yang specialty Chinese cuisine?',
          answer: 'Ya, kami punya chef dengan specialty Chinese cooking – Cantonese, Szechuan, Teochew, etc. Bisa request specific style sesuai preferensi keluarga. Some chefs even trained di Hong Kong atau Mainland.'
        },
        {
          question: 'Berapa lama waktu persiapan untuk acara besar?',
          answer: 'Untuk acara 30+ guests, idealnya book 2 minggu sebelumnya. Untuk events seperti Imlek atau wedding season, 1 bulan sebelumnya recommended untuk secure date dan chef.'
        },
        {
          question: 'Bisa request menu yang tidak terlalu pedas untuk anak dan orang tua?',
          answer: 'Absolutely! Menu bisa adjusted untuk berbagai spice levels. Kami bisa prepare separate dishes untuk kids (mild) dan adults (regular spice). Orang tua juga bisa request softer textures.'
        },
        {
          question: 'Apakah chef bisa datang lebih awal untuk big setup?',
          answer: 'Ya, untuk acara besar chef dan tim bisa arrive earlier untuk preparation. Setup time akan discussed dan included dalam timeline proposal.'
        },
        {
          question: 'Bagaimana dengan parking untuk chef dan tim?',
          answer: 'Chef biasanya use transport apps untuk efficiency. Untuk events besar dengan equipment, kami coordinate visitor parking dengan Anda. Most PIK clusters have guest parking available.'
        },
        {
          question: 'Bisa minta menu yang auspicious untuk celebrations?',
          answer: 'Ya! Untuk Chinese celebrations, kami understand significance of auspicious foods: whole fish untuk abundance, noodles untuk longevity, dumplings untuk wealth, etc. Chef akan ensure menu reflects traditions.'
        },
        {
          question: 'Apakah ada package untuk regular monthly service?',
          answer: 'Ya, kami offer monthly packages dengan rate yang lebih ekonomis. Banyak keluarga PIK yang subscribe untuk regular Sunday dinners atau bi-weekly meals. Contact untuk custom arrangement.'
        }
      ]
    },
    areaDetails: {
      title: 'Cakupan Layanan di Kawasan PIK',
      description: 'Kami melayani seluruh kawasan Pantai Indah Kapuk tanpa biaya transportasi tambahan. Tim kami sangat familiar dengan berbagai clusters dan housing types di PIK area.',
      neighborhoods: ['Golf Island', 'PIK 2', 'Pantai Maju', 'Bukit Golf', 'Sunrise Garden', 'Pantai Indah Utara', 'Pantai Indah Selatan', 'PIK Avenue area', 'Sedayu City', 'Citra Garden']
    },
    closingCta: {
      title: 'Manjakan Keluarga dengan Private Chef',
      paragraph: 'Keluarga di PIK deserve the best untuk setiap momen together. Private chef service membawa restaurant-quality dining langsung ke rumah cluster Anda – dengan warmth dan personalization yang tidak bisa didapat di tempat lain.',
      secondaryParagraph: 'Hubungi myCHEF sekarang untuk konsultasi. Apapun occasion-nya – dari Sunday dinner sederhana hingga Imlek celebration besar – kami siap help create memorable culinary experience untuk keluarga Anda.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-pantai-indah-kapuk",
      "name": "Private Chef Pantai Indah Kapuk Jakarta",
      "description": "Layanan private chef profesional di PIK, Jakarta Utara. Kuliner eksklusif untuk keluarga dan acara spesial.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Pantai Indah Kapuk", "PIK", "Jakarta Utara", "Jakarta"],
      "serviceType": "Private Chef Service",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "210"
      }
    }
  },

  'kelapa-gading': {
    name: 'Kelapa Gading',
    slug: 'kelapa-gading',
    region: 'Jakarta Utara',
    metaTitle: 'Private Chef Kelapa Gading | Layanan Koki untuk Keluarga Jakarta Utara',
    metaDescription: 'Private chef profesional di Kelapa Gading Jakarta Utara. Hidangan berkualitas untuk keluarga dan acara spesial. Chef berpengalaman, menu custom. Booking now!',
    heroTitle: 'Private Chef Kelapa Gading',
    heroSubtitle: 'Layanan kuliner premium untuk keluarga Kelapa Gading. Chef profesional kami siap menghadirkan hidangan istimewa berkualitas restoran langsung di rumah cluster Anda di kawasan family-friendly ini.',
    heroBullets: [
      'Chef berpengalaman dengan berbagai cuisine: Chinese, Indonesian, Western, Asian',
      'Perfect untuk family gathering, kids party, dan acara keluarga besar',
      'Service lengkap end-to-end: menu planning, belanja bahan segar, masak, sampai bersih-bersih',
      'Memahami family dynamics dengan menu untuk anak-anak dan dewasa',
      'Familiar dengan clusters dan perumahan di area Kelapa Gading'
    ],
    heroStats: [
      { value: '1000+', label: 'Acara Sukses' },
      { value: '4.9/5', label: 'Rating Pelanggan' },
      { value: '50+', label: 'Chef Terverifikasi' },
      { value: '13+', label: 'Tahun Pengalaman' }
    ],
    ctaText: 'Pesan Private Chef',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya mau booking private chef di Kelapa Gading, Jakarta Utara.',
    introSection: {
      title: 'Layanan Private Chef untuk Keluarga di Kelapa Gading',
      paragraphs: [
        'Kelapa Gading adalah kawasan family-friendly premium di Jakarta Utara, dengan perumahan cluster mewah yang tertata rapi, mall-mall besar seperti Mall Kelapa Gading dan MOI, sekolah-sekolah internasional terbaik, dan berbagai fasilitas keluarga yang lengkap. Area ini dihuni oleh keluarga-keluarga mapan yang mengutamakan kualitas hidup, pendidikan anak, dan kenyamanan tinggal.',
        'myCHEF Indonesia menghadirkan layanan private chef yang perfectly suited untuk lifestyle keluarga di Kelapa Gading. Kami memahami bahwa keluarga di area ini memiliki jadwal yang sibuk – antara pekerjaan, sekolah anak, les, dan berbagai aktivitas – namun tetap ingin quality time dengan makanan berkualitas.',
        'Layanan kami sangat cocok untuk berbagai momen keluarga di Kelapa Gading: family dinner rutin di weekend yang membawa semua anggota keluarga together, birthday party anak yang meriah dengan menu kid-friendly, gathering keluarga besar saat Lebaran, Natal, atau Imlek, arisan ibu-ibu yang ingin tampil beda, atau sekadar memanjakan keluarga dengan hidangan lezat tanpa effort memasak.',
        'Dengan rumah-rumah yang spacious dan dapur yang well-equipped yang common di Kelapa Gading, chef kami bisa berkreasi maksimal untuk menghadirkan hidangan yang tidak hanya lezat tapi juga presentasinya cantik. Dari comfort food yang hangat sampai fine dining yang impressive – semuanya bisa di rumah Anda sendiri.'
      ]
    },
    experienceOverview: {
      title: 'Family Dining Experience di Rumah Anda',
      subtitle: 'Layanan yang designed untuk enhance quality time keluarga',
      features: [
        { icon: 'chef', title: 'Family-Friendly Chefs', description: 'Chef yang terbiasa dengan family settings. Sabar, ramah dengan anak-anak, dan bisa accommodate berbagai preferences dalam satu keluarga.' },
        { icon: 'ingredients', title: 'Fresh Quality Ingredients', description: 'Bahan-bahan segar berkualitas: sayuran bersih, protein premium, dan ingredients yang safe untuk semua ages.' },
        { icon: 'service', title: 'Hassle-Free Service', description: 'Semua diurus dari A-Z. Orang tua tidak perlu repot – just enjoy quality time dengan keluarga.' },
        { icon: 'custom', title: 'Age-Appropriate Menus', description: 'Menu bisa customized: mild untuk anak-anak, regular untuk adults, softer untuk elderly. Semua in one service.' },
        { icon: 'privacy', title: 'Home Comfort', description: 'Keluarga makan di zona nyaman sendiri. Anak-anak bebas bermain, tidak perlu worry tentang behavior di restaurant.' },
        { icon: 'flexible', title: 'Timing Flexibility', description: 'Jadwal disesuaikan dengan routine keluarga. Early dinner untuk anak-anak yang harus tidur cepat? No problem.' }
      ]
    },
    whyChooseUs: {
      title: 'Keuntungan Private Chef untuk Keluarga Kelapa Gading',
      subtitle: 'Solusi praktis untuk busy families yang want quality meals',
      reasons: [
        { title: 'Hemat Waktu Parents', description: 'Tidak perlu masak, tidak perlu antar-jemput ke restoran. Makanan berkualitas datang ke rumah. Time saved untuk family activities.' },
        { title: 'Kids-Friendly Environment', description: 'Anak-anak makan di rumah sendiri. Lebih nyaman, bisa play, tidak perlu worry tentang disturbing other diners.' },
        { title: 'Customizable untuk Semua', description: 'Satu meja, berbagai selera. Menu bisa divided untuk preferences berbeda dalam keluarga. Semua happy.' },
        { title: 'No Cleanup Hassle', description: 'Chef handle semua termasuk bersih-bersih. Parents tidak perlu facing kitchen mess setelah makan besar.' },
        { title: 'Quality Family Bonding', description: 'Focus on togetherness, bukan logistics makan. Create memories yang lasting di home environment.' },
        { title: 'Value for Families', description: 'Dibanding makan di restaurant dengan seluruh keluarga, private chef often more economical dan definitely more comfortable.' }
      ]
    },
    howItWorks: {
      title: 'Cara Booking yang Mudah untuk Busy Parents',
      subtitle: 'Simple process yang tidak add to your mental load',
      steps: [
        { step: '1', title: 'Hubungi Tim Kami', description: 'Chat via WhatsApp dengan tanggal, alamat cluster, jumlah keluarga, dan gambaran preferences. Quick response guaranteed.' },
        { step: '2', title: 'Konsultasi Menu', description: 'Diskusikan preferences keluarga: apa yang anak-anak suka, ada alergi tidak, budget range. Kami bantu design menu yang works.' },
        { step: '3', title: 'Terima Proposal', description: 'Kami kirim proposal lengkap dengan menu detail dan harga transparan. Review at your convenience.' },
        { step: '4', title: 'Konfirmasi Booking', description: 'Setujui proposal, bayar DP 50%, dan tanggal Anda locked. Done in minutes.' },
        { step: '5', title: 'Enjoy Family Time', description: 'Chef tiba, handle everything, dan cleanup thoroughly. Keluarga just sits, eats, dan enjoys being together.' }
      ]
    },
    occasions: {
      title: 'Perfect untuk Berbagai Momen Keluarga',
      subtitle: 'Layanan untuk occasions yang matter bagi families di Kelapa Gading',
      items: [
        { name: 'Weekend Family Dinner', description: 'Tradisi makan bersama di weekend. Bring everyone to the table dengan hidangan yang semua suka.' },
        { name: 'Kids Birthday Party', description: 'Birthday celebration yang fun dengan menu kid-friendly dan presentasi yang exciting. Parents juga get great food.' },
        { name: 'Holiday Family Gathering', description: 'Lebaran, Natal, Imlek – kumpul keluarga besar dengan hidangan festive yang memorable.' },
        { name: 'Grandparents Visit', description: 'Menyambut orang tua atau mertua yang visit dengan jamuan special di rumah.' },
        { name: 'Kids Graduation Celebration', description: 'Rayakan milestone anak dengan dinner keluarga yang marks the achievement.' },
        { name: 'Parents Anniversary', description: 'Celebrate marriage milestones dengan dinner romantis setelah anak-anak tidur, atau family celebration.' },
        { name: 'Report Card Celebration', description: 'Reward anak untuk academic achievement dengan dinner pilihan mereka.' },
        { name: 'Regular Weeknight Quality Meal', description: 'Sometimes you just want a great meal tanpa effort. Treat the family any day.' }
      ]
    },
    menuExamples: {
      title: 'Menu Populer untuk Keluarga',
      subtitle: 'Options yang designed dengan families in mind',
      packages: [
        {
          name: 'Family Comfort Package',
          description: 'Hidangan comfort food yang everyone loves. Crowd-pleasers untuk all ages.',
          highlights: ['Chicken katsu crispy', 'Spaghetti bolognese', 'French fries seasoned', 'Garden salad fresh', 'Ice cream sundae station', 'Fresh fruit selection'],
          priceRange: 'Mulai Rp 350.000/orang'
        },
        {
          name: 'Indonesian Homestyle',
          description: 'Masakan Indonesia rumahan yang hangat dan familiar. Like ibu masak, tapi lebih special.',
          highlights: ['Nasi goreng spesial', 'Ayam goreng kremes', 'Sayur asem segar', 'Tempe mendoan', 'Sambal selection', 'Kolak pisang atau es campur'],
          priceRange: 'Mulai Rp 400.000/orang'
        },
        {
          name: 'Asian Favorites Mix',
          description: 'Kombinasi hidangan Asia yang popular dengan families. Something untuk everyone.',
          highlights: ['Dim sum selection', 'Teriyaki chicken', 'Pad thai', 'Fried rice varieties', 'Edamame dan appetizers', 'Mango pudding dan fruits'],
          priceRange: 'Mulai Rp 450.000/orang'
        },
        {
          name: 'Kids Party Special',
          description: 'Menu khusus untuk kids parties. Fun, delicious, dan presentation yang exciting.',
          highlights: ['Mini burgers', 'Pizza homemade', 'Chicken nuggets fresh', 'Pasta mac n cheese', 'French fries shapes', 'Cake dan ice cream'],
          priceRange: 'Mulai Rp 300.000/orang'
        }
      ]
    },
    chefHighlight: {
      title: 'Chef yang Memahami Keluarga',
      description: 'Chef yang melayani Kelapa Gading dipilih untuk patience, warmth, dan kemampuan melayani family dynamics.',
      qualities: [
        'Experience cooking untuk families dengan children berbagai ages',
        'Patient dan warm demeanor yang makes kids comfortable',
        'Understanding of common kids food preferences',
        'Ability to adjust spice levels dan textures',
        'Knowledge of common allergies dan how to accommodate',
        'Efficient service yang respects family routines',
        'Clean, organized, dan thorough in cleanup',
        'Friendly dengan parents, grandparents, dan anak-anak alike'
      ]
    },
    pricingInfo: {
      title: 'Harga yang Ramah untuk Keluarga',
      subtitle: 'Affordable quality untuk regular family dining',
      tiers: [
        { name: 'Single Event', rate: 'Rp 800.000/jam', description: 'Untuk dinner atau party tunggal. Great untuk birthdays, gatherings, dan special occasions.' },
        { name: 'Weekly Package', rate: 'Rp 350.000/jam', description: 'Untuk regular weekly family dinners. Consistent quality, better value.' },
        { name: 'Monthly Arrangement', rate: 'Rp 250.000/jam', description: 'Untuk frequent service. Best value untuk families yang want regular private chef meals.' }
      ],
      note: 'Rate di atas untuk chef service. Bahan makanan dihitung terpisah based on menu. Kids menu generally more economical. Semua costs transparent dalam proposal sebelum booking.'
    },
    testimonials: {
      title: 'Testimoni dari Keluarga Kelapa Gading',
      subtitle: 'Experiences nyata dari families di berbagai area Kelapa Gading',
      reviews: [
        {
          name: 'Mama Clara',
          event: 'Birthday Party Anak',
          location: 'Sunter Paradise',
          quote: 'Birthday party putri ke-6 jadi super special! Chef prepare menu kids-friendly yang semua anak suka. Mini burger station, pizza fresh, dan dessert table yang cantik. Anak-anak happy, makan lahap, dan bersih-bersihnya sampai tuntas. Parents juga ada menu terpisah yang enak. Perfect!',
          rating: 5
        },
        {
          name: 'Keluarga Sutedja',
          event: 'Weekly Sunday Dinner',
          location: 'Kelapa Gading Permai',
          quote: 'Sudah jadi tradisi Sunday dinner dengan myCHEF. Anak-anak excited setiap minggu nunggu chef datang. Menu bisa request berbeda-beda, selalu enak dan fresh. Practical banget untuk working parents – quality time tanpa kitchen stress. Bonding keluarga jadi lebih berkualitas!',
          rating: 5
        },
        {
          name: 'Ibu Meilani',
          event: 'Arisan Bulanan',
          location: 'Kelapa Gading Boulevard',
          quote: 'Giliran host arisan dan mau bikin impressed. Private chef idea perfect! Ibu-ibu pada kagum dengan makanan dan presentasinya. Saya tidak perlu repot sama sekali, just mingle with friends. Semua langsung minta contact untuk arisan bulan depan di rumah mereka.',
          rating: 5
        },
        {
          name: 'Keluarga Wijaya',
          event: 'Chinese New Year Family Gathering',
          location: 'Kelapa Gading Timur',
          quote: 'Imlek gathering untuk 20 orang keluarga besar. Chef prepare Chinese feast yang authentic – dari yusheng sampai nian gao. Orang tua dan tante-tante impressed dengan taste dan presentation. First time Imlek tanpa ribut-ribut masak di dapur. Everyone happy, termasuk yang biasa masak!',
          rating: 5
        },
        {
          name: 'Pak Andreas & Ibu Dewi',
          event: 'Wedding Anniversary',
          location: 'Pegangsaan Dua',
          quote: 'Celebrate anniversary ke-15 dengan intimate dinner setelah anak-anak tidur. Chef prepare romantic French menu dengan candlelight setup. Seperti fine dining tapi di rumah sendiri. Jauh lebih special dan personal dibanding restoran. Wife sangat touched. Thank you myCHEF!',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'FAQ untuk Keluarga Kelapa Gading',
      subtitle: 'Answers untuk pertanyaan umum dari families',
      items: [
        {
          question: 'Area mana saja di Kelapa Gading yang dilayani?',
          answer: 'Seluruh Kelapa Gading: Kelapa Gading Permai, Boulevard, Kelapa Gading Timur, Sunter, Pegangsaan Dua, Kelapa Gading Barat, MOI area, dan sekitarnya. No additional transport fee untuk area ini.'
        },
        {
          question: 'Bisa untuk birthday party anak-anak?',
          answer: 'Tentu! Kami sangat berpengalaman dengan kids parties. Menu kid-friendly, presentation yang fun, dan service yang patient dengan anak-anak. Setup bisa indoor atau outdoor di halaman.'
        },
        {
          question: 'Apakah bisa request menu yang ramah anak?',
          answer: 'Pasti! Kami bisa prepare menu terpisah untuk anak-anak yang berbeda dari adults. Mild flavors, familiar foods, dan textures yang suitable untuk berbagai ages.'
        },
        {
          question: 'Berapa minimum tamu untuk booking?',
          answer: 'Mulai dari 4 orang untuk family dinner. Tidak ada maksimum – kami bisa handle acara besar dengan tim chef tambahan. Most family bookings range 6-20 orang.'
        },
        {
          question: 'Bagaimana kalau ada anak punya food allergy?',
          answer: 'Informasikan semua allergies saat konsultasi menu. Chef akan ensure complete avoidance dan prepare safe alternatives. Kami take allergies very seriously, especially untuk anak-anak.'
        },
        {
          question: 'Apakah bisa minta menu yang tidak terlalu pedas?',
          answer: 'Tentu! Spice levels bisa fully adjusted. Untuk families dengan anak kecil, kami defaultnya mild. Sambal dan extra spice bisa served on the side untuk adults yang prefer.'
        },
        {
          question: 'Berapa hari sebelumnya harus booking?',
          answer: 'Idealnya 3-5 hari sebelumnya. Untuk weekend atau events besar, 1-2 minggu lebih baik. Last minute bisa diusahakan tergantung availability.'
        },
        {
          question: 'Apakah chef bisa coordinate dengan party decorator?',
          answer: 'Ya! Untuk birthday parties, kami bisa coordinate dengan decorator atau EO yang Anda hire. Timing dan logistics bisa aligned untuk smooth execution.'
        },
        {
          question: 'Bisa untuk acara rutin mingguan atau bulanan?',
          answer: 'Ya! Banyak keluarga Kelapa Gading yang sudah langganan untuk Sunday dinner atau gathering bulanan. Kami offer package rates yang lebih ekonomis untuk regular bookings.'
        },
        {
          question: 'Apakah pembayaran bisa dicicil?',
          answer: 'Standard payment adalah DP 50% saat booking dan pelunasan sebelum hari H. Untuk events besar, payment arrangement bisa discussed. Contact kami untuk details.'
        }
      ]
    },
    areaDetails: {
      title: 'Cakupan Layanan di Kelapa Gading',
      description: 'Kami melayani seluruh kawasan Kelapa Gading dan sekitarnya tanpa biaya transportasi tambahan. Tim kami familiar dengan berbagai perumahan dan cluster di area ini.',
      neighborhoods: ['Kelapa Gading Permai', 'Kelapa Gading Boulevard', 'Kelapa Gading Timur', 'Kelapa Gading Barat', 'Sunter', 'Pegangsaan Dua', 'MOI area', 'Gading Serpong connector', 'Pulo Mas', 'Rawamangun']
    },
    closingCta: {
      title: 'Wujudkan Quality Time Keluarga',
      paragraph: 'Keluarga di Kelapa Gading deserve quality meals tanpa stress. Private chef service memberikan exactly that – delicious food, zero hassle, dan precious time untuk bonding dengan orang-orang tersayang di comfort rumah sendiri.',
      secondaryParagraph: 'Hubungi myCHEF sekarang untuk konsultasi gratis. Apakah untuk weekly dinner tradition atau special celebration, kami siap help create memorable dining experiences untuk keluarga Anda.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-kelapa-gading",
      "name": "Private Chef Kelapa Gading Jakarta",
      "description": "Layanan private chef profesional di Kelapa Gading, Jakarta Utara. Kuliner keluarga untuk dinner dan acara spesial.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Kelapa Gading", "Sunter", "Jakarta Utara", "Jakarta"],
      "serviceType": "Private Chef Service",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "185"
      }
    }
  },

  'kuningan': {
    name: 'Kuningan',
    slug: 'kuningan',
    region: 'Jakarta Selatan',
    metaTitle: 'Private Chef Kuningan Jakarta | Koki Pribadi untuk Profesional',
    metaDescription: 'Layanan private chef di Kuningan Jakarta Selatan. Hidangan fine dining untuk eksekutif dan keluarga di apartemen mewah. Chef profesional, menu premium. Book now!',
    heroTitle: 'Private Chef Kuningan',
    heroSubtitle: 'Layanan kuliner eksklusif di kawasan bisnis premium Kuningan. Chef profesional kami menghadirkan pengalaman fine dining berkualitas tinggi di apartemen mewah atau kediaman Anda.',
    heroBullets: [
      'Chef dengan pengalaman di restoran fine dining dan hotel internasional',
      'Melayani apartemen high-end dan perumahan elite di embassy row area',
      'Fleksibel untuk business dinner, client entertainment, dan personal celebration',
      'Menu custom dari comfort food hingga multi-course fine dining',
      'Background check dan discretion untuk professional clientele'
    ],
    heroStats: [
      { value: '1000+', label: 'Acara Sukses' },
      { value: '4.9/5', label: 'Rating Pelanggan' },
      { value: '50+', label: 'Chef Terverifikasi' },
      { value: '13+', label: 'Tahun Pengalaman' }
    ],
    ctaText: 'Book Chef Sekarang',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya tertarik private chef di Kuningan, Jakarta Selatan.',
    introSection: {
      title: 'Layanan Private Chef Premium di Kawasan Kuningan',
      paragraphs: [
        'Kuningan adalah kawasan premium yang strategically terletak di jantung Jakarta, menggabungkan area bisnis internasional dengan hunian mewah berkelas. Dengan deretan kedutaan besar dari berbagai negara, gedung perkantoran kelas A, dan apartemen high-end dengan fasilitas world-class, Kuningan menjadi pilihan para eksekutif senior, diplomat, expatriat, dan profesional sukses dengan standar hidup tinggi.',
        'myCHEF Indonesia menghadirkan layanan private chef yang perfectly suited untuk lifestyle penghuni Kuningan. Kami memahami bahwa para profesional di area ini memiliki jadwal demanding, standards tinggi untuk quality, dan kebutuhan akan flexibility dalam dining options. Layanan kami designed untuk deliver exceptional culinary experiences tanpa mengorbankan waktu berharga Anda.',
        'Layanan kami sangat sesuai untuk berbagai scenarios kehidupan di Kuningan: menjamu tamu bisnis internasional dalam setting yang private dan sophisticated, merayakan momen spesial dengan pasangan tanpa effort leaving the building, hosting gathering dengan colleagues dalam atmosphere yang lebih relaxed, atau simply enjoying gourmet meal sebagai reward setelah busy week.',
        'Dengan apartemen-apartemen modern yang well-equipped dan views Jakarta yang spectacular, Kuningan residences menawarkan perfect canvas untuk memorable dining experiences. Chef profesional kami siap transform your unit menjadi intimate restaurant untuk occasions apapun yang Anda envision.'
      ]
    },
    experienceOverview: {
      title: 'Executive Dining Experience di Kuningan',
      subtitle: 'Layanan yang tailored untuk professionals dan discerning residents',
      features: [
        { icon: 'chef', title: 'Internationally Trained Chefs', description: 'Chef dengan experience di international restaurants dan hotels. Accustomed untuk serve discerning, well-traveled clientele.' },
        { icon: 'ingredients', title: 'Premium Sourcing', description: 'Access ke finest ingredients: imported seafood, premium meats, specialty products. Quality yang match your standards.' },
        { icon: 'service', title: 'Professional Service', description: 'Discrete, efficient, dan polished service. Suitable untuk business entertainment dan VIP guests.' },
        { icon: 'custom', title: 'Bespoke Menus', description: 'Customized menus untuk any occasion dan preference. From quick executive lunch hingga elaborate tasting menu.' },
        { icon: 'privacy', title: 'Confidential Setting', description: 'Private dining di residence Anda untuk sensitive discussions atau intimate celebrations. Ultimate privacy.' },
        { icon: 'flexible', title: 'Adaptive Scheduling', description: 'Accommodate unpredictable professional schedules. Late dinners, early meetings, last-minute changes – we adapt.' }
      ]
    },
    whyChooseUs: {
      title: 'Mengapa Private Chef untuk Penghuni Kuningan?',
      subtitle: 'Solution yang aligned dengan professional lifestyle',
      reasons: [
        { title: 'Time Efficiency', description: 'Skip traffic, reservations, dan waiting. Fine dining hadir di unit Anda. Maximize productive time atau rest.' },
        { title: 'Impressive Entertainment', description: 'Hosting guests di private residence is ultimate hospitality gesture. More memorable dan impactful than any restaurant.' },
        { title: 'Privacy & Discretion', description: 'Untuk confidential discussions atau personal moments, home setting offers unmatched privacy.' },
        { title: 'International Standards', description: 'Chefs familiar dengan serving diplomats, executives, dan international clientele. Service meets global expectations.' },
        { title: 'Personalized Experience', description: 'Every detail customized to your preferences. Menu, timing, presentation – all tailored.' },
        { title: 'Consistent Quality', description: 'Reliable excellence setiap waktu. No variability yang sometimes occurs di restaurants.' }
      ]
    },
    howItWorks: {
      title: 'Streamlined Booking Process',
      subtitle: 'Efficient dari inquiry sampai execution',
      steps: [
        { step: '1', title: 'Quick Contact', description: 'WhatsApp dengan key details: date, guest count, occasion type, preferences. Fast response guaranteed.' },
        { step: '2', title: 'Menu Consultation', description: 'Brief discussion untuk finalize menu. Kami suggest options yang suit your event dan guests.' },
        { step: '3', title: 'Proposal & Confirmation', description: 'Receive detailed proposal. Approve dan confirm booking with deposit. Simple and swift.' },
        { step: '4', title: 'Coordination', description: 'We handle building access coordination. Chef arrives with everything needed.' },
        { step: '5', title: 'Flawless Execution', description: 'Chef delivers exceptional dining experience. You focus on guests atau enjoyment. Cleanup included.' }
      ]
    },
    occasions: {
      title: 'Ideal untuk Berbagai Occasions',
      subtitle: 'Layanan yang versatile untuk professional dan personal needs',
      items: [
        { name: 'Business Dinner Entertainment', description: 'Impress clients dan partners dengan private dining experience yang shows exceptional hospitality.' },
        { name: 'Diplomat & VIP Hosting', description: 'Appropriate setting untuk hosting high-level guests. Discretion dan quality guaranteed.' },
        { name: 'Romantic Celebration', description: 'Anniversary, special dates, atau simply quality time dengan partner dalam intimate setting.' },
        { name: 'Family Visit Entertainment', description: 'Host visiting family dalam comfort of your home. No need untuk restaurant logistics.' },
        { name: 'Colleagues Gathering', description: 'More relaxed setting untuk team bonding atau informal meetings dengan good food.' },
        { name: 'Weekend Personal Treat', description: 'Reward yourself dengan gourmet experience. Because you deserve it.' },
        { name: 'Birthday Celebration', description: 'Personal milestone celebrated dengan private dinner tailored to your preferences.' },
        { name: 'Regular Quality Dining', description: 'For those yang prefer consistent excellence untuk regular meals tanpa cooking effort.' }
      ]
    },
    menuExamples: {
      title: 'Menu Options untuk Kuningan',
      subtitle: 'Selections yang suit various occasions dan preferences',
      packages: [
        {
          name: 'Business Dinner Excellence',
          description: 'Refined menu designed untuk impress dan facilitate good conversation.',
          highlights: ['Elegant amuse-bouche', 'Seared seafood starter', 'Premium steak atau fish main', 'Sophisticated dessert', 'Cheese course optional'],
          priceRange: 'Mulai Rp 700.000/orang'
        },
        {
          name: 'Romantic Fine Dining',
          description: 'Intimate multi-course experience untuk special moments berdua.',
          highlights: ['Champagne paired appetizer', 'Soup atau salad course', 'Surf and turf main', 'Palate cleanser', 'Chocolate dessert for sharing'],
          priceRange: 'Mulai Rp 800.000/orang'
        },
        {
          name: 'Casual Gathering Menu',
          description: 'Quality food untuk relaxed entertainment dengan colleagues atau friends.',
          highlights: ['Mezze atau sharing starters', 'Pasta atau risotto', 'Grilled selections', 'Fresh sides', 'Dessert platter'],
          priceRange: 'Mulai Rp 550.000/orang'
        },
        {
          name: 'Comfort Gourmet',
          description: 'Elevated comfort food untuk satisfying personal dining experience.',
          highlights: ['Appetizer selection', 'Wagyu burger atau comfort main', 'Truffle accompaniments', 'Indulgent dessert'],
          priceRange: 'Mulai Rp 500.000/orang'
        }
      ]
    },
    chefHighlight: {
      title: 'Chef untuk Discerning Clientele',
      description: 'Chef yang melayani Kuningan area dipilih untuk expertise dan professionalism yang match expectations of the residents.',
      qualities: [
        'Experience di international fine dining establishments dan hotels',
        'Comfortable serving executives, diplomats, dan VIP guests',
        'Professional demeanor dan impeccable presentation',
        'Multi-cuisine expertise dengan focus on quality',
        'Understanding of business dining etiquette',
        'Discretion dalam handling sensitive events',
        'Efficient execution yang respects client time',
        'Adaptable untuk various apartment kitchen setups'
      ]
    },
    pricingInfo: {
      title: 'Transparent Pricing Structure',
      subtitle: 'Clear investment untuk exceptional experience',
      tiers: [
        { name: 'Single Occasion', rate: 'Rp 800.000/jam', description: 'Untuk business dinner, celebration, atau special event tunggal.' },
        { name: 'Weekly Package', rate: 'Rp 350.000/jam', description: 'Untuk regular weekly dinners atau multiple events. Ideal untuk busy professionals.' },
        { name: 'Monthly Arrangement', rate: 'Rp 250.000/jam', description: 'Untuk ongoing service. Best value untuk frequent private dining needs.' }
      ],
      note: 'Rates above untuk chef service. Premium ingredients quoted separately based on menu selection. All costs transparent dalam proposal. Corporate invoicing available.'
    },
    testimonials: {
      title: 'Feedback dari Penghuni Kuningan',
      subtitle: 'Experiences dari professionals dan families di area Kuningan',
      reviews: [
        {
          name: 'Mr. Anthony Widjaja',
          event: 'Client Dinner di Raffles Residences',
          location: 'Raffles Residences',
          quote: 'Impressed Japanese clients dengan private dining experience. Quality food, impeccable service, dan setting yang perfect untuk business discussion. They commented ini salah satu best hosting experiences mereka di Jakarta. Deal discussion went very smoothly. Highly recommend for business entertainment.',
          rating: 5
        },
        {
          name: 'Ibu Dian Permata',
          event: 'Anniversary Dinner',
          location: 'Kuningan City Apartment',
          quote: 'Surprise anniversary untuk suami jadi sempurna! Chef prepare 6-course French menu dengan romantic presentation. Candles, beautiful plating, attentive service – seperti di Paris tapi di apartment sendiri. Suami sangat touched. This is how special occasions should be celebrated!',
          rating: 5
        },
        {
          name: 'Pak Herman Susanto',
          event: 'Weekend Gathering dengan Teman',
          location: 'Setiabudi Sky Garden',
          quote: 'Kumpul dengan teman-teman kuliah jadi lebih berkesan dengan private chef. Tidak perlu pusing reservasi restoran yang crowded. Makanan enak, bisa ngobrol freely, dan suasana lebih santai. Everyone loved the experience. Will do this more often!',
          rating: 5
        },
        {
          name: 'The Hartono Family',
          event: 'Parents Visit from Surabaya',
          location: 'Somerset Grand Citra',
          quote: 'Orang tua visit dari Surabaya dan kami mau entertain mereka dengan proper dinner tanpa going out. Chef prepare Indonesian feast yang reminded them of home tapi dengan quality yang elevated. Parents very happy dan impressed dengan how we take care of them.',
          rating: 5
        },
        {
          name: 'Ms. Patricia Chen',
          event: 'Birthday Solo Celebration',
          location: 'Bellagio Residences',
          quote: 'Decided to treat myself untuk birthday dengan private chef dinner for one. Chef was professional, made me feel special, dan prepared exactly what I wanted. Sometimes you need to celebrate yourself! Best birthday gift I could give myself.',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'FAQ untuk Kuningan Area',
      subtitle: 'Answers untuk common questions dari residents',
      items: [
        {
          question: 'Apartemen mana saja di Kuningan yang dilayani?',
          answer: 'Semua: Raffles Residences, Kuningan City, Bellagio, Somerset varieties, Oakwood, Setiabudi area apartments, dan semua residences di Kuningan district. No transport fee.'
        },
        {
          question: 'Bagaimana dengan building access untuk chef?',
          answer: 'Chef coordinate dengan Anda untuk visitor registration. Kami terbiasa dengan procedures berbagai buildings di Kuningan. Usually standard visitor access sufficient.'
        },
        {
          question: 'Apakah dapur apartment cukup untuk chef cooking?',
          answer: 'Ya, kami experienced dengan berbagai apartment kitchens. Chef adapt techniques dengan available equipment. Most Kuningan apartments have well-equipped kitchens.'
        },
        {
          question: 'Bisa untuk acara kecil 2-3 orang saja?',
          answer: 'Absolutely! Banyak booking kami untuk intimate dinners atau solo dining. No minimum guest requirement – quality service untuk any size.'
        },
        {
          question: 'Apakah ada minimum spending?',
          answer: 'Tidak ada minimum spending kaku. Kami provide proposal based on your needs dan budget. Contact untuk discuss your specific requirements.'
        },
        {
          question: 'Berapa notice time yang dibutuhkan?',
          answer: 'Idealnya 3-5 hari. For last minute, contact us untuk check availability. Weekend spots fill faster, so earlier booking recommended.'
        },
        {
          question: 'Bisa untuk working lunch atau dinner meeting?',
          answer: 'Yes! Many clients use layanan untuk working meals. Chef work quietly, service efficient, tidak mengganggu discussion flow.'
        },
        {
          question: 'Apakah invoice bisa untuk company?',
          answer: 'Tentu. Kami provide proper invoice dengan all details untuk corporate entertainment billing atau reimbursement. Tax invoice available.'
        },
        {
          question: 'Bisa minta chef yang sama untuk repeat bookings?',
          answer: 'Ya, jika Anda prefer consistency dengan specific chef, kami arrange regular assignment subject to availability.'
        },
        {
          question: 'Apakah bisa coordinate dengan florist atau decorator?',
          answer: 'Ya, untuk special occasions kami bisa recommend partners atau coordinate dengan vendors yang Anda choose untuk seamless execution.'
        }
      ]
    },
    areaDetails: {
      title: 'Coverage di Kuningan Area',
      description: 'Kami melayani seluruh kawasan Kuningan dan sekitarnya tanpa biaya transportasi tambahan. Tim kami familiar dengan berbagai apartment buildings dan residential areas.',
      neighborhoods: ['Kuningan', 'Setiabudi', 'Mega Kuningan', 'Rasuna Said', 'Karet', 'Mampang', 'Gatot Subroto area', 'Casablanca', 'HR Rasuna Said corridor', 'Epicentrum']
    },
    closingCta: {
      title: 'Elevate Your Kuningan Lifestyle',
      paragraph: 'Residents Kuningan berhak atas dining experience yang match dengan lifestyle dan achievement. Private chef brings fine dining excellence langsung ke residence Anda – dengan privacy, convenience, dan personalization yang unmatched.',
      secondaryParagraph: 'Hubungi myCHEF sekarang untuk konsultasi. Whether untuk business entertainment, special celebration, atau personal indulgence – kami help create exceptional dining moments. Consultation free, no obligations.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-kuningan",
      "name": "Private Chef Kuningan Jakarta",
      "description": "Layanan private chef profesional di Kuningan, Jakarta Selatan. Fine dining untuk eksekutif dan keluarga.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Kuningan", "Setiabudi", "Jakarta Selatan", "Jakarta"],
      "serviceType": "Private Chef Service",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "165"
      }
    }
  },

  'puri-indah': {
    name: 'Puri Indah',
    slug: 'puri-indah',
    region: 'Jakarta Barat',
    metaTitle: 'Private Chef Puri Indah Jakarta | Koki Pribadi Profesional',
    metaDescription: 'Private chef profesional di Puri Indah Jakarta Barat. Layanan kuliner eksklusif untuk keluarga dan acara spesial. Menu custom, chef berpengalaman. Booking sekarang!',
    heroTitle: 'Private Chef Puri Indah',
    heroSubtitle: 'Layanan kuliner premium untuk keluarga di kawasan berkembang Puri Indah. Chef profesional kami siap menghadirkan hidangan istimewa berkualitas restoran di kediaman nyaman Anda.',
    heroBullets: [
      'Chef tersertifikasi dengan pengalaman luas di berbagai cuisine',
      'Cocok untuk family dinner, gatherings, dan berbagai acara sosial keluarga',
      'Full service profesional dari perencanaan menu hingga bersih-bersih',
      'Melayani perumahan cluster dan apartemen di kawasan Puri Indah',
      'Harga transparan dan kompetitif untuk family budgets'
    ],
    heroStats: [
      { value: '1000+', label: 'Acara Sukses' },
      { value: '4.9/5', label: 'Rating Pelanggan' },
      { value: '50+', label: 'Chef Terverifikasi' },
      { value: '13+', label: 'Tahun Pengalaman' }
    ],
    ctaText: 'Hubungi Kami',
    ctaWhatsAppMessage: 'Halo myCHEF! Saya ingin tanya layanan private chef di Puri Indah, Jakarta Barat.',
    introSection: {
      title: 'Layanan Private Chef untuk Keluarga Puri Indah',
      paragraphs: [
        'Puri Indah adalah kawasan hunian premium yang berkembang pesat di Jakarta Barat. Dengan perumahan cluster modern yang tertata rapi, akses mudah ke pusat perbelanjaan seperti Lippo Mall Puri dan fasilitas lifestyle, serta lingkungan yang family-friendly, area ini menjadi pilihan keluarga menengah-atas yang mengutamakan kenyamanan, keamanan, dan kualitas hidup.',
        'myCHEF Indonesia menghadirkan layanan private chef yang sangat sesuai untuk keluarga-keluarga di Puri Indah. Kami memahami bahwa families di area ini menghargai quality time bersama, makanan berkualitas, dan convenience tanpa kompromi. Layanan kami designed untuk deliver semua itu – exceptional dining experiences tanpa hassle.',
        'Layanan kami sangat ideal untuk berbagai momen keluarga di Puri Indah: family dinner rutin di weekend yang membawa semua anggota together, perayaan momen spesial seperti anniversary, graduation, atau promotion, gathering dengan extended family saat holidays, mengadakan arisan atau social gathering dengan tetangga, atau sekadar treating keluarga dengan hidangan lezat sebagai break dari routine.',
        'Dengan rumah-rumah yang spacious dan well-designed yang characteristic di Puri Indah, chef kami bisa berkreasi maksimal untuk menghadirkan hidangan yang impressive. Dari Indonesian comfort food yang hangat sampai international cuisine yang sophisticated – semuanya possible di dapur rumah Anda sendiri dengan hasil berkualitas restoran.'
      ]
    },
    experienceOverview: {
      title: 'Pengalaman Kuliner Premium untuk Keluarga',
      subtitle: 'Layanan yang designed untuk enhance family moments',
      features: [
        { icon: 'chef', title: 'Chef Berpengalaman', description: 'Chef dengan track record di restaurants dan hotels. Capable of various cuisines dan comfortable dengan family settings.' },
        { icon: 'ingredients', title: 'Bahan Berkualitas', description: 'Fresh ingredients dari supplier terpercaya. Quality yang visible dan tasteable dalam setiap hidangan.' },
        { icon: 'service', title: 'Full Service Included', description: 'Dari menu planning, shopping, cooking, serving, sampai cleanup – semua handled. Zero effort untuk Anda.' },
        { icon: 'custom', title: 'Menu Disesuaikan', description: 'Tidak ada template kaku. Menu customized untuk preferences keluarga, termasuk kids dan elderly.' },
        { icon: 'privacy', title: 'Home Comfort', description: 'Makan di rumah sendiri dengan kenyamanan maksimal. Anak-anak bebas, tidak ada time pressure.' },
        { icon: 'flexible', title: 'Fleksibel', description: 'Timing dan menu disesuaikan dengan routine keluarga Anda. Weekend, weeknight, atau holiday – available.' }
      ]
    },
    whyChooseUs: {
      title: 'Keunggulan Private Chef untuk Keluarga Puri Indah',
      subtitle: 'Solusi praktis untuk families yang want quality tanpa hassle',
      reasons: [
        { title: 'Praktis & Efisien', description: 'Tidak perlu keluar rumah, tidak perlu masak, tidak perlu reservasi. Makanan berkualitas hadir di meja makan Anda.' },
        { title: 'Perfect untuk Keluarga', description: 'Menu bisa accommodate berbagai preferences dalam satu keluarga. Anak-anak, adults, orang tua – semua terlayani.' },
        { title: 'Fleksibilitas Menu', description: 'Indonesian, Western, Asian, atau mix – semua bisa. Diet khusus juga diakomodasi.' },
        { title: 'No Hassle Cleanup', description: 'Chef membereskan semua setelah acara. Dapur Anda kembali bersih. No post-dinner stress.' },
        { title: 'Value for Money', description: 'Dibandingkan makan di restaurant dengan seluruh keluarga, often lebih economical dan pasti lebih comfortable.' },
        { title: 'Create Memories', description: 'Special moments celebrated di home setting create lasting family memories yang lebih meaningful.' }
      ]
    },
    howItWorks: {
      title: 'Langkah-langkah Booking yang Simple',
      subtitle: 'Easy process untuk busy families',
      steps: [
        { step: '1', title: 'Kontak Kami', description: 'Hubungi via WhatsApp dengan info tanggal, alamat, jumlah orang, dan gambaran acara. Response cepat.' },
        { step: '2', title: 'Konsultasi Menu', description: 'Diskusikan preferences keluarga, ada yang alergi tidak, budget range. Kami bantu design menu yang works.' },
        { step: '3', title: 'Terima Proposal', description: 'Kami kirimkan proposal lengkap dengan detail menu dan biaya transparan. Review dengan santai.' },
        { step: '4', title: 'Konfirmasi & DP', description: 'Setujui proposal dan amankan tanggal dengan pembayaran DP 50%. Done!' },
        { step: '5', title: 'Hari H Enjoyment', description: 'Chef datang, memasak hidangan lezat, serve dengan care, dan bersihkan sampai tuntas. Keluarga just enjoys!' }
      ]
    },
    occasions: {
      title: 'Cocok untuk Berbagai Momen Keluarga',
      subtitle: 'Layanan untuk occasions yang penting bagi families di Puri Indah',
      items: [
        { name: 'Weekend Family Dinner', description: 'Tradisi makan bersama keluarga dengan hidangan special. Quality time yang berkualitas.' },
        { name: 'Birthday Celebration', description: 'Rayakan ulang tahun anggota keluarga dengan dinner yang disesuaikan preferences mereka.' },
        { name: 'Anniversary Parents', description: 'Celebrate milestones orang tua dengan jamuan yang shows appreciation.' },
        { name: 'Graduation Dinner', description: 'Mark achievement anak dengan celebration dinner yang memorable.' },
        { name: 'Holiday Gathering', description: 'Lebaran, Natal, atau festivals – kumpul keluarga besar dengan hidangan festive.' },
        { name: 'Arisan & Social Events', description: 'Hosting arisan atau gathering tetangga dengan impressive spread.' },
        { name: 'New Home Celebration', description: 'Housewarming dengan family dan friends. Show off new home dengan great food.' },
        { name: 'Regular Quality Meals', description: 'Sometimes you just want great food tanpa cooking. Treat keluarga any time.' }
      ]
    },
    menuExamples: {
      title: 'Pilihan Menu Populer',
      subtitle: 'Options yang suit berbagai preferences keluarga',
      packages: [
        {
          name: 'Paket Keluarga Lengkap',
          description: 'Menu comfort food yang cocok untuk semua umur. Crowd-pleasers yang familiar.',
          highlights: ['Sup ayam bening atau cream soup', 'Ikan bakar bumbu kecap', 'Capcay sayuran fresh', 'Nasi putih atau nasi goreng', 'Buah segar', 'Puding coklat atau ice cream'],
          priceRange: 'Mulai Rp 350.000/orang'
        },
        {
          name: 'Paket Spesial Celebration',
          description: 'Menu lebih elaborate untuk occasions yang special.',
          highlights: ['Appetizer salad premium', 'Grilled salmon atau steak', 'Pasta atau risotto side', 'Roasted vegetables', 'Cheesecake atau brownies', 'Fresh fruit platter'],
          priceRange: 'Mulai Rp 500.000/orang'
        },
        {
          name: 'Paket Indonesian Komplit',
          description: 'Rijsttafel Indonesia dengan berbagai lauk favorit. Comfort food maksimal.',
          highlights: ['Soto atau sop buntut', 'Rendang daging premium', 'Ayam goreng lengkuas', 'Sayur lodeh atau urap', 'Nasi putih dan sambal', 'Es campur atau cendol'],
          priceRange: 'Mulai Rp 400.000/orang'
        },
        {
          name: 'Kids Party Package',
          description: 'Menu khusus untuk birthday party anak. Fun dan yummy!',
          highlights: ['Mini burgers atau hot dogs', 'Pizza homemade', 'Nuggets dan fries', 'Pasta dengan cheese', 'Fruit skewers', 'Cupcakes dan ice cream'],
          priceRange: 'Mulai Rp 300.000/orang'
        }
      ]
    },
    chefHighlight: {
      title: 'Chef yang Memahami Keluarga',
      description: 'Chef untuk Puri Indah dipilih untuk warmth, patience, dan kemampuan melayani family settings.',
      qualities: [
        'Experience cooking untuk families dengan berbagai ages',
        'Warm dan friendly demeanor',
        'Kemampuan adjust untuk kids preferences',
        'Patience dalam handle family dynamics',
        'Clean dan organized work style',
        'Thorough cleanup habits',
        'Indonesian dan Western cooking skills',
        'Understanding of common dietary needs'
      ]
    },
    pricingInfo: {
      title: 'Harga yang Transparan',
      subtitle: 'Clear pricing untuk family budget planning',
      tiers: [
        { name: 'Single Event', rate: 'Rp 800.000/jam', description: 'Untuk dinner atau party tunggal. Great untuk special occasions.' },
        { name: 'Weekly Package', rate: 'Rp 350.000/jam', description: 'Untuk regular weekly family dinners. Better value untuk consistent service.' },
        { name: 'Monthly Arrangement', rate: 'Rp 250.000/jam', description: 'Untuk frequent service. Best value untuk families yang want regular private chef.' }
      ],
      note: 'Harga di atas untuk chef service. Bahan makanan dihitung terpisah sesuai menu yang dipilih. Semua biaya dijelaskan transparan di proposal. Tidak ada biaya tersembunyi.'
    },
    testimonials: {
      title: 'Testimoni dari Keluarga Puri Indah',
      subtitle: 'Pengalaman nyata dari families di kawasan Puri Indah',
      reviews: [
        {
          name: 'Keluarga Santoso',
          event: 'Dinner Perayaan Kelulusan Anak',
          location: 'Puri Indah Raya',
          quote: 'Wisuda anak pertama kami jadi sangat berkesan dengan private chef! Menu Western yang elegant, presentasi cantik, dan semua keluarga puas. Tidak perlu repot cari restoran atau masak sendiri. Terima kasih myCHEF sudah bikin momen ini special!',
          rating: 5
        },
        {
          name: 'Ibu Yenny',
          event: 'Arisan Ibu-Ibu Komplek',
          location: 'Puri Botanical',
          quote: 'Giliran host arisan dan mau yang berbeda. Private chef idea luar biasa! Ibu-ibu pada kagum dengan makanannya yang enak dan presentasi yang cantik. Saya santai ngobrol, tidak repot sama sekali. Beberapa sudah booking untuk arisan di rumah mereka!',
          rating: 5
        },
        {
          name: 'Pak Budi Hartono',
          event: 'Sunday Family Dinner',
          location: 'Taman Puri Indah',
          quote: 'Sekarang Sunday dinner jadi tradisi yang ditunggu-tunggu keluarga. Chef dari myCHEF selalu memberikan yang terbaik. Anak-anak antusias, istri happy tidak masak, dan saya enjoy quality time. Practical banget untuk busy families!',
          rating: 5
        },
        {
          name: 'The Wijaya Family',
          event: 'Birthday Party Twins',
          location: 'Puri Mansion',
          quote: 'Birthday party untuk twins kami yang ke-7 jadi unforgettable! Chef prepare kids menu yang mereka love plus adult options. Setup di halaman, cuaca perfect, food amazing. Best birthday party we have thrown!',
          rating: 5
        },
        {
          name: 'Ibu Melisa',
          event: 'Wedding Anniversary',
          location: 'Puri Kembangan',
          quote: 'Celebrate anniversary ke-10 dengan romantic dinner setelah anak-anak tidur. Chef prepare French menu dengan candlelight setup. Suami sangat impressed – dia kira kami harus keluar. Much more special di rumah sendiri!',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'FAQ untuk Puri Indah',
      subtitle: 'Jawaban untuk pertanyaan umum dari keluarga',
      items: [
        {
          question: 'Area mana saja di Puri Indah yang dilayani?',
          answer: 'Seluruh Puri Indah area: Puri Indah Raya, Puri Botanical, Puri Mansion, Taman Puri Indah, Puri Kembangan, Puri CBD, dan sekitarnya tanpa biaya transport tambahan.'
        },
        {
          question: 'Berapa minimum tamu untuk booking?',
          answer: 'Mulai dari 4 orang untuk family dinner. Untuk acara besar, kami bisa handle hingga 50+ tamu dengan tim chef tambahan.'
        },
        {
          question: 'Apakah chef membawa sendiri peralatannya?',
          answer: 'Chef menggunakan peralatan dapur Anda (kompor, oven, panci standar). Untuk equipment khusus seperti grill atau BBQ tools, bisa kami sediakan dengan biaya tambahan.'
        },
        {
          question: 'Bisa untuk acara outdoor di halaman?',
          answer: 'Tentu bisa! Banyak rumah di Puri Indah punya halaman yang nice. Kami experienced dengan garden party, BBQ outdoor, dan poolside events.'
        },
        {
          question: 'Bagaimana sistem pembayarannya?',
          answer: 'DP 50% saat konfirmasi booking, pelunasan 50% sebelum hari H. Biaya bahan makanan ditransfer terpisah ke chef untuk shopping. Transfer bank atau credit card accepted.'
        },
        {
          question: 'Berapa hari sebelumnya harus booking?',
          answer: 'Idealnya 3-5 hari sebelumnya untuk memastikan chef availability. Untuk weekend atau acara besar, 1-2 minggu lebih baik.'
        },
        {
          question: 'Bisa request menu yang tidak pedas untuk anak-anak?',
          answer: 'Absolutely! Menu bisa fully adjusted untuk kids – mild flavors, familiar foods, appropriate portions. Sambal dan spicy items served separately untuk adults.'
        },
        {
          question: 'Apakah ada package untuk regular monthly service?',
          answer: 'Ya, kami offer monthly packages dengan rate lebih ekonomis untuk families yang want consistent quality meals. Contact untuk discuss arrangement.'
        },
        {
          question: 'Bagaimana kalau ada perubahan jumlah tamu mendadak?',
          answer: 'Perubahan bisa diinfo sampai 2 hari sebelumnya tanpa masalah. Untuk changes di hari H, kami flexible semaksimal mungkin tapi bahan yang sudah dibeli tetap charged.'
        },
        {
          question: 'Apakah tersedia tambahan waiter untuk service?',
          answer: 'Ya, untuk acara 15+ tamu kami recommend tambahan waiter untuk smoother service. Additional staff bisa di-quote terpisah.'
        }
      ]
    },
    areaDetails: {
      title: 'Cakupan Layanan di Puri Indah',
      description: 'Kami melayani seluruh kawasan Puri Indah dan sekitarnya di Jakarta Barat tanpa biaya transportasi tambahan. Tim kami familiar dengan berbagai perumahan di area ini.',
      neighborhoods: ['Puri Indah Raya', 'Puri Botanical', 'Puri Mansion', 'Taman Puri Indah', 'Puri Kembangan', 'Puri CBD', 'Intercon', 'Daan Mogot area', 'Kembangan', 'Cengkareng Barat']
    },
    closingCta: {
      title: 'Wujudkan Momen Makan Keluarga yang Istimewa',
      paragraph: 'Keluarga Puri Indah berhak mendapatkan quality dining experiences tanpa stress. Private chef service memberikan exactly that – delicious food, zero hassle, dan precious time untuk bonding dengan orang tersayang.',
      secondaryParagraph: 'Hubungi myCHEF sekarang untuk konsultasi gratis dan cek ketersediaan. Tim kami siap membantu menciptakan momen kuliner berkesan di rumah Anda. Proses booking mudah, harga transparan, kepuasan terjamin.'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://mychef.id/private-chef-puri-indah",
      "name": "Private Chef Puri Indah Jakarta",
      "description": "Layanan private chef profesional di Puri Indah, Jakarta Barat. Kuliner keluarga untuk dinner dan acara spesial.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "myCHEF Indonesia",
        "url": "https://mychef.id",
        "telephone": "+62-822-3756-5997"
      },
      "areaServed": ["Puri Indah", "Puri Kembangan", "Jakarta Barat", "Jakarta"],
      "serviceType": "Private Chef Service",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "155"
      }
    }
  }
};
