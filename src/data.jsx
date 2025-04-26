export const images = [
  {
    source: require('./assets/image/poster/poster1.png'),
  },
  {
    source: require('./assets/image/poster/poster2.png'),
  },
  {
    source: require('./assets/image/poster/poster3.png'),
  },
];

export const obatList = [
  {
    id: '1',
    name: 'Paracetamol',
    category: 'Obat',
    description:
      'Obat analgesik dan antipiretik yang digunakan untuk meredakan nyeri dan menurunkan demam.',
    detail:
      'Paracetamol adalah obat yang umum digunakan untuk mengatasi nyeri ringan hingga sedang, seperti sakit kepala, nyeri otot, sakit gigi, dan nyeri haid. Obat ini juga efektif untuk menurunkan demam pada anak-anak maupun orang dewasa. Paracetamol bekerja dengan menghambat produksi prostaglandin di otak, yaitu zat yang menyebabkan rasa sakit dan peningkatan suhu tubuh.\n\nObat ini dapat dibeli tanpa resep dokter, namun penggunaannya harus tetap sesuai dosis yang dianjurkan. Penggunaan berlebihan dapat menyebabkan kerusakan hati yang serius. Oleh karena itu, sangat penting untuk membaca label dan tidak mengonsumsi lebih dari dosis harian maksimum yang direkomendasikan.',
    image: require('./assets/image/obat/paracetamol.png'),
  },
  {
    id: '2',
    name: 'Amoxicillin',
    category: 'Obat',
    description:
      'Antibiotik yang digunakan untuk mengobati berbagai infeksi bakteri.',
    detail:
      'Amoxicillin merupakan antibiotik golongan penisilin yang digunakan untuk mengobati berbagai infeksi bakteri seperti radang tenggorokan, infeksi telinga, sinusitis, bronkitis, hingga infeksi saluran kemih. Obat ini bekerja dengan cara menghentikan pertumbuhan bakteri dengan mengganggu pembentukan dinding sel bakteri.\n\nAmoxicillin tidak efektif untuk infeksi yang disebabkan oleh virus, seperti flu atau pilek. Penggunaan yang tidak sesuai, seperti tidak menghabiskan dosis yang diresepkan, dapat menyebabkan resistensi antibiotik. Selalu gunakan amoxicillin sesuai anjuran dokter untuk mendapatkan hasil yang maksimal dan mencegah efek samping.',
    image: require('./assets/image/obat/amoxicillin.png'),
  },
  {
    id: '3',
    name: 'Ibuprofen',
    category: 'Obat',
    description:
      'Obat antiinflamasi nonsteroid (NSAID) yang digunakan untuk meredakan nyeri dan peradangan.',
    detail:
      'Ibuprofen adalah obat antiinflamasi nonsteroid (NSAID) yang umum digunakan untuk meredakan nyeri seperti nyeri haid, nyeri otot, sakit gigi, dan nyeri sendi. Selain itu, ibuprofen juga efektif untuk menurunkan demam dan mengurangi peradangan akibat kondisi seperti arthritis.\n\nObat ini bekerja dengan menghambat enzim COX-1 dan COX-2, yang bertanggung jawab dalam produksi prostaglandin—zat yang menyebabkan peradangan, nyeri, dan demam. Penggunaan ibuprofen dalam jangka panjang atau dosis tinggi dapat meningkatkan risiko gangguan lambung dan ginjal, oleh karena itu harus digunakan dengan hati-hati.',
    image: require('./assets/image/obat/ibuprofen.png'),
  },
  {
    id: '4',
    name: 'Cetirizine',
    category: 'Obat',
    description:
      'Antihistamin yang digunakan untuk mengobati gejala alergi seperti bersin dan gatal.',
    detail:
      'Cetirizine adalah antihistamin yang digunakan untuk meredakan berbagai gejala alergi seperti bersin-bersin, pilek karena alergi, mata berair, dan ruam kulit. Obat ini bekerja dengan menghambat kerja histamin, yaitu zat kimia alami dalam tubuh yang muncul saat terjadi reaksi alergi.\n\nCetirizine umumnya tidak menyebabkan kantuk sebanyak antihistamin generasi sebelumnya, sehingga lebih nyaman digunakan pada siang hari. Meskipun begitu, beberapa orang tetap dapat merasakan efek kantuk ringan, jadi disarankan untuk mencoba di rumah terlebih dahulu sebelum digunakan saat berkegiatan.',
    image: require('./assets/image/obat/cetirizine.png'),
  },
  {
    id: '5',
    name: 'Omeprazole',
    category: 'Obat',
    description:
      'Obat yang digunakan untuk mengobati masalah lambung seperti refluks asam.',
    detail:
      'Omeprazole adalah obat yang tergolong sebagai penghambat pompa proton (PPI), digunakan untuk mengurangi produksi asam lambung. Obat ini sering diresepkan untuk mengobati gangguan seperti refluks asam (GERD), tukak lambung, dan sindrom Zollinger-Ellison.\n\nOmeprazole bekerja dengan menghambat enzim di dinding lambung yang bertanggung jawab dalam produksi asam. Untuk hasil yang optimal, obat ini biasanya dikonsumsi sebelum makan pagi. Penggunaan jangka panjang harus di bawah pengawasan dokter karena dapat menyebabkan efek samping seperti kekurangan vitamin B12 atau magnesium.',
    image: require('./assets/image/obat/omeprazole.png'),
  },

  // Vitamin
  {
    id: '6',
    name: 'Vitamin C',
    category: 'Vitamin',
    description:
      'Vitamin yang membantu meningkatkan daya tahan tubuh dan kesehatan kulit.',
    detail:
      'Vitamin C, juga dikenal sebagai asam askorbat, adalah nutrisi penting yang berfungsi sebagai antioksidan dan membantu melindungi sel-sel tubuh dari kerusakan. Vitamin ini juga berperan penting dalam produksi kolagen, penyerapan zat besi, dan penyembuhan luka.\n\nVitamin C dapat diperoleh dari berbagai makanan seperti jeruk, stroberi, kiwi, dan paprika. Kekurangan vitamin ini dapat menyebabkan gangguan seperti gusi berdarah dan penurunan daya tahan tubuh.',
    image: require('./assets/image/vitamin/vitamin_c.jpg'),
  },
  {
    id: '7',
    name: 'Vitamin D',
    category: 'Vitamin',
    description:
      'Membantu dalam penyerapan kalsium dan menjaga kesehatan tulang.',
    detail:
      'Vitamin D berperan penting dalam mengatur kadar kalsium dan fosfat dalam tubuh, yang dibutuhkan untuk menjaga tulang dan gigi tetap kuat. Vitamin ini juga membantu fungsi sistem kekebalan tubuh agar tetap optimal.\n\nTubuh bisa memproduksi vitamin D secara alami saat kulit terpapar sinar matahari. Selain itu, vitamin D juga bisa diperoleh dari makanan seperti ikan berlemak, hati sapi, dan susu yang diperkaya. Kekurangan vitamin D dapat menyebabkan tulang rapuh atau rakhitis pada anak-anak.',
    image: require('./assets/image/vitamin/vitamin_d.png'),
  },
  {
    id: '8',
    name: 'Vitamin B12',
    category: 'Vitamin',
    description:
      'Membantu dalam pembentukan sel darah merah dan kesehatan saraf.',
    detail:
      'Vitamin B12, atau kobalamin, diperlukan untuk pembentukan sel darah merah yang sehat, fungsi otak, serta sintesis DNA. Vitamin ini sangat penting terutama bagi sistem saraf dan metabolisme energi tubuh.\n\nSumber utama vitamin B12 adalah produk hewani seperti daging, ikan, telur, dan produk susu. Kekurangan vitamin ini dapat menyebabkan anemia megaloblastik dan gangguan neurologis seperti kesemutan, lemah otot, bahkan gangguan memori.',
    image: require('./assets/image/vitamin/vitamin_b12.png'),
  },

  // Herbal
  {
    id: '9',
    name: 'Jahe Merah',
    category: 'Herbal',
    description:
      'Dikenal memiliki manfaat untuk meningkatkan daya tahan tubuh dan mengatasi mual.',
    detail:
      'Jahe merah memiliki kandungan gingerol yang tinggi, senyawa aktif yang memiliki efek antioksidan dan anti-inflamasi. Rempah ini telah lama digunakan dalam pengobatan tradisional untuk meredakan nyeri, memperlancar sirkulasi darah, serta meredakan mual dan masuk angin.\n\nSelain itu, jahe merah juga dikenal mampu meningkatkan daya tahan tubuh secara alami. Banyak dikonsumsi dalam bentuk minuman hangat atau dicampur dalam ramuan herbal lainnya sebagai suplemen harian.',
    image: require('./assets/image/herbal/jahe_merah.png'),
  },
  {
    id: '10',
    name: 'Kunyit',
    category: 'Herbal',
    description:
      'Memiliki sifat anti-inflamasi yang dapat membantu menjaga kesehatan pencernaan.',
    detail:
      'Kunyit mengandung kurkumin, senyawa aktif yang bersifat anti-inflamasi dan antioksidan. Kurkumin dipercaya mampu membantu mengurangi peradangan dalam tubuh, serta meningkatkan fungsi otak dan sistem pencernaan.\n\nKunyit sering digunakan dalam pengobatan herbal untuk mengatasi masalah lambung, seperti maag dan gangguan pencernaan. Penggunaannya juga umum sebagai bahan alami untuk menjaga kesehatan kulit dan memperkuat daya tahan tubuh.',
    image: require('./assets/image/herbal/kunyit.png'),
  },
  {
    id: '11',
    name: 'Temulawak',
    category: 'Herbal',
    description:
      'Dapat membantu meningkatkan nafsu makan dan menjaga kesehatan hati.',
    detail:
      'Temulawak dikenal luas sebagai tanaman herbal khas Indonesia yang memiliki manfaat untuk menjaga fungsi hati dan meningkatkan nafsu makan. Kandungan kurkuminoid dalam temulawak berperan sebagai anti-inflamasi dan pelindung hati.\n\nSelain itu, temulawak juga sering digunakan untuk mengatasi gangguan pencernaan, kelelahan, serta meningkatkan daya tahan tubuh. Biasanya dikonsumsi dalam bentuk jamu atau suplemen herbal.',
    image: require('./assets/image/herbal/temulawak.png'),
  },

  // Suplemen
  {
    id: '12',
    name: 'Omega-3',
    category: 'Suplemen',
    description:
      'Asam lemak esensial yang baik untuk kesehatan jantung dan otak.',
    detail:
      'Omega-3 adalah asam lemak esensial yang sangat penting bagi kesehatan otak, jantung, dan mata. Tubuh tidak dapat memproduksi omega-3 sendiri, sehingga perlu didapatkan dari makanan seperti ikan berlemak atau suplemen khusus.\n\nOmega-3 dapat membantu menurunkan kadar trigliserida, mengurangi tekanan darah, serta meningkatkan fungsi kognitif. Suplemen ini juga bermanfaat untuk mengurangi peradangan dan menjaga kestabilan suasana hati.',
    image: require('./assets/image/suplemen/omega_3.png'),
  },
  {
    id: '13',
    name: 'Probiotik',
    category: 'Suplemen',
    description:
      'Membantu menjaga kesehatan pencernaan dengan meningkatkan bakteri baik di usus.',
    detail:
      'Probiotik adalah mikroorganisme hidup yang memberikan manfaat kesehatan saat dikonsumsi dalam jumlah cukup, terutama untuk menjaga keseimbangan flora usus. Probiotik membantu meningkatkan jumlah bakteri baik yang penting untuk pencernaan.\n\nKonsumsi probiotik secara rutin dapat membantu meredakan diare, sembelit, dan gejala iritasi usus. Probiotik dapat ditemukan dalam produk fermentasi seperti yogurt, kimchi, dan suplemen kapsul.',
    image: require('./assets/image/suplemen/probiotik.png'),
  },
  {
    id: '14',
    name: 'Zinc',
    category: 'Suplemen',
    description: 'Membantu dalam penyembuhan luka dan memperkuat sistem imun.',
    detail:
      'Zinc merupakan mineral esensial yang berperan penting dalam proses penyembuhan luka, pembelahan sel, serta memperkuat sistem kekebalan tubuh. Tubuh memerlukan zinc dalam jumlah kecil tetapi sangat vital untuk kesehatan.\n\nKekurangan zinc dapat menyebabkan gangguan pada sistem imun, rambut rontok, dan penurunan kemampuan penciuman dan pengecapan. Zinc biasanya dikonsumsi dalam bentuk suplemen, terutama saat tubuh memerlukan dukungan pemulihan atau saat mengalami infeksi.',
    image: require('./assets/image/suplemen/zinc.png'),
  },
];

export const categories = ['Obat', 'Vitamin', 'Herbal', 'Suplemen'];
export const userProfile = {
  name: 'Sulton Ibnu Septiyan',
  email: 'sultonibnu123@google.com',
  profileImage: require('../src/assets/image/profile.jpg'),
};
