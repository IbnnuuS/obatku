import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput} from 'react-native';
import {images, obatList, categories} from './src/data';
import Navbar from './src/components/navbar';
import Carousel from './src/components/carousel';
import CategoryList from './src/components/categoryList';
import ObatList from './src/components/obatList';

export default function App() {
  const [searchText, setSearchText] = useState('');

  // Filter obat berdasarkan searchText
  const filteredObatList = obatList.filter(obat =>
    obat.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Navbar title="ObatKu" />
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <Carousel images={images} />
        <CategoryList categories={categories} />

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

          {/* Kirim filteredObatList ke ObatList */}
          <ObatList data={filteredObatList} />
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
});
