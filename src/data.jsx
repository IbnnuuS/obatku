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
  // Obat
  {
    id: '1',
    name: 'Paracetamol',
    category: 'Obat',
    description:
      'Obat analgesik dan antipiretik yang digunakan untuk meredakan nyeri dan menurunkan demam.',
    image: require('./assets/image/obat/paracetamol.png'),
  },
  {
    id: '2',
    name: 'Amoxicillin',
    category: 'Obat',
    description:
      'Antibiotik yang digunakan untuk mengobati berbagai infeksi bakteri.',
    image: require('./assets/image/obat/amoxicillin.png'),
  },
  {
    id: '3',
    name: 'Ibuprofen',
    category: 'Obat',
    description:
      'Obat antiinflamasi nonsteroid (NSAID) yang digunakan untuk meredakan nyeri dan peradangan.',
    image: require('./assets/image/obat/ibuprofen.png'),
  },
  {
    id: '4',
    name: 'Cetirizine',
    category: 'Obat',
    description:
      'Antihistamin yang digunakan untuk mengobati gejala alergi seperti bersin dan gatal.',
    image: require('./assets/image/obat/cetirizine.png'),
  },
  {
    id: '5',
    name: 'Omeprazole',
    category: 'Obat',
    description:
      'Obat yang digunakan untuk mengobati masalah lambung seperti refluks asam.',
    image: require('./assets/image/obat/omeprazole.png'),
  },

  // Vitamin
  {
    id: '6',
    name: 'Vitamin C',
    category: 'Vitamin',
    description:
      'Vitamin yang membantu meningkatkan daya tahan tubuh dan kesehatan kulit.',
    image: require('./assets/image/vitamin/vitamin_c.jpg'),
  },
  {
    id: '7',
    name: 'Vitamin D',
    category: 'Vitamin',
    description:
      'Membantu dalam penyerapan kalsium dan menjaga kesehatan tulang.',
    image: require('./assets/image/vitamin/vitamin_d.png'),
  },
  {
    id: '8',
    name: 'Vitamin B12',
    category: 'Vitamin',
    description:
      'Membantu dalam pembentukan sel darah merah dan kesehatan saraf.',
    image: require('./assets/image/vitamin/vitamin_b12.png'),
  },

  // Herbal
  {
    id: '9',
    name: 'Jahe Merah',
    category: 'Herbal',
    description:
      'Dikenal memiliki manfaat untuk meningkatkan daya tahan tubuh dan mengatasi mual.',
    image: require('./assets/image/herbal/jahe_merah.png'),
  },
  {
    id: '10',
    name: 'Kunyit',
    category: 'Herbal',
    description:
      'Memiliki sifat anti-inflamasi yang dapat membantu menjaga kesehatan pencernaan.',
    image: require('./assets/image/herbal/kunyit.png'),
  },
  {
    id: '11',
    name: 'Temulawak',
    category: 'Herbal',
    description:
      'Dapat membantu meningkatkan nafsu makan dan menjaga kesehatan hati.',
    image: require('./assets/image/herbal/temulawak.png'),
  },

  // Suplemen
  {
    id: '12',
    name: 'Omega-3',
    category: 'Suplemen',
    description:
      'Asam lemak esensial yang baik untuk kesehatan jantung dan otak.',
    image: require('./assets/image/suplemen/omega_3.png'),
  },
  {
    id: '13',
    name: 'Probiotik',
    category: 'Suplemen',
    description:
      'Membantu menjaga kesehatan pencernaan dengan meningkatkan bakteri baik di usus.',
    image: require('./assets/image/suplemen/probiotik.png'),
  },
  {
    id: '14',
    name: 'Zinc',
    category: 'Suplemen',
    description: 'Membantu dalam penyembuhan luka dan memperkuat sistem imun.',
    image: require('./assets/image/suplemen/zinc.png'),
  },
];

export const categories = ['Obat', 'Vitamin', 'Herbal', 'Suplemen'];
export const userProfile = {
  name: 'Sulton Ibnu Septiyan',
  email: 'sultonibnu123@google.com',
  profileImage: require('../src/assets/image/profile.jpg'),
};
