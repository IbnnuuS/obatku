import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images, obatList} from '../../../src/data';
import Navbar from '../../../src/components/navbar';
import Carousel from '../../../src/components/carousel';
import ObatList from '../../../src/components/obatList';

export default function Home() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const filteredObatList = obatList.filter(obat =>
    obat.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const displayedObatList = filteredObatList.slice(0, 5); // tampilkan sebagian saja

  return (
    <View style={styles.container}>
      <Navbar title="ObatKu" />
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <Carousel images={images} />

        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Daftar Obat</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Mau Cari apa?"
              placeholderTextColor="#888"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>

          <ObatList data={displayedObatList} selectedCategory="Semua" />

          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => navigation.navigate('Exploration')}>
            <Text style={styles.viewAllText}>Lihat Semua Obat →</Text>
          </TouchableOpacity>
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
  contentWrapper: {
    paddingHorizontal: 20,
  },
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '50%',
    color: '#000',
  },
  viewAllButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  viewAllText: {
    color: '#89AC46',
    fontWeight: 'bold',
  },
});
