import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';

const images = [
  {
    source: require('./assets/image/poster1.png'),
    title: 'Image 1 Title',
    date: 'Nov 10, 2023',
  },
  {
    source: require('./assets/image/poster2.png'),
    title: 'Image 2 Title',
    date: 'Nov 10, 2023',
  },
  {
    source: require('./assets/image/poster3.png'),
    title: 'Image 3 Title',
    date: 'Nov 10, 2023',
  },
];

const obatList = [
  {
    id: '1',
    name: 'Paracetamol',
    description:
      'Obat analgesik dan antipiretik yang digunakan untuk meredakan nyeri dan menurunkan demam.',
    image: require('./assets/image/paracetamol.png'),
  },
  {
    id: '2',
    name: 'Amoxicillin',
    description:
      'Antibiotik yang digunakan untuk mengobati berbagai infeksi bakteri.',
    image: require('./assets/image/amoxicillin.png'),
  },
  {
    id: '3',
    name: 'Ibuprofen',
    description:
      'Obat antiinflamasi nonsteroid (NSAID) yang digunakan untuk meredakan nyeri dan peradangan.',
    image: require('./assets/image/ibuprofen.png'),
  },
  {
    id: '4',
    name: 'Cetirizine',
    description:
      'Antihistamin yang digunakan untuk mengobati gejala alergi seperti bersin dan gatal.',
    image: require('./assets/image/cetirizine.png'),
  },
  {
    id: '5',
    name: 'Omeprazole',
    description:
      'Obat yang digunakan untuk mengobati masalah lambung seperti refluks asam.',
    image: require('./assets/image/omeprazole.png'),
  },
];

const categories = ['Obat', 'Vitamin', 'Herbal', 'Suplement'];

export default function App() {
  const [searchText, setSearchText] = useState('');
  const filteredObatList = obatList.filter(obat =>
    obat.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      {/* Navbar tetap di atas */}
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Text style={styles.icon}>🔔</Text>
        </TouchableOpacity>
        <Text style={styles.brand}>ObatKu</Text>
        <TouchableOpacity>
          <Text style={styles.icon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Wrapper untuk konten agar tidak tertutup navbar */}
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {images.map((image, index) => (
              <View key={index} style={styles.cardItem}>
                <ImageBackground
                  style={styles.carouselImage}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}
                  source={image.source}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Kategori */}
        <View style={styles.categoryContainer}>
          <Text style={styles.listTitle}>Kategori</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryButton}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* List Obat */}
        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Daftar Obat</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Cari Obat?"
              placeholderTextColor="#888"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          {filteredObatList.map(obat => (
            <View key={obat.id} style={styles.listItem}>
              <Image source={obat.image} style={styles.obatImage} />
              <View style={styles.obatInfo}>
                <Text style={styles.obatName}>{obat.name}</Text>
                <Text style={styles.obatDescription}>{obat.description}</Text>
              </View>
              <TouchableOpacity
                style={styles.detailButton}
                onPress={() => alert(`Detail tentang ${obat.name}`)}>
                <Text style={styles.detailButtonText}>Detail</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    position: 'absolute', // Navbar tetap di atas
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Supaya navbar tetap di atas elemen lain
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#89AC46',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
  },
  contentWrapper: {
    paddingHorizontal: 20,
  },
  brand: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  carouselContainer: {
    marginTop: 70, // Menambahkan jarak dari navbar
    marginBottom: 20,
  },
  cardItem: {
    marginHorizontal: 5,
  },
  carouselImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  cardContent: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDate: {
    color: '#fff',
    fontSize: 14,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align title and search input
    alignItems: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '40%', // Adjust width as needed
    color: '#000',
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  obatImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  obatInfo: {
    flex: 1,
  },
  obatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  obatDescription: {
    fontSize: 14,
    color: '#666',
  },
  detailButton: {
    marginTop: 10,
    backgroundColor: '#89AC46',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  detailButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
