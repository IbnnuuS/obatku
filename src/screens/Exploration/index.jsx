import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {obatList} from '../../../src/data';
import Navbar from '../../../src/components/navbar';
import ObatList from '../../../src/components/obatList';

const customCategories = ['Semua', 'Obat', 'Vitamin', 'Herbal', 'Suplemen'];

export default function Exploration() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredObatList = obatList.filter(obat => {
    const name = (obat.name ?? '').toLowerCase();
    const category = obat.category ?? '';

    return (
      name.includes(searchText.toLowerCase()) &&
      (selectedCategory === 'Semua' || category === selectedCategory)
    );
  });

  return (
    <View style={styles.container}>
      <Navbar title="Exploration" />
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <View style={styles.listHeader}>
          <TextInput
            style={styles.searchInput}
            placeholder="Mau cari apa?"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={styles.categoryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {customCategories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.selectedCategory,
                ]}
                onPress={() => setSelectedCategory(category)}>
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.selectedText,
                  ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.listContainer}>
          <ObatList
            data={filteredObatList}
            selectedCategory={selectedCategory}
          />
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
  categoryContainer: {
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  categoryText: {
    fontSize: 16,
    color: '#000',
  },
  selectedCategory: {
    borderColor: '#89AC46',
    backgroundColor: '#f0fff0',
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#89AC46',
  },
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    color: '#000',
  },
});
