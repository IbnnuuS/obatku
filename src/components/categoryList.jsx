import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const CategoryList = ({categories}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.listTitle}>Kategori</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
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
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'transparent', // Default tanpa outline
  },
  categoryText: {
    fontSize: 16,
    color: '#000',
  },
  selectedCategory: {
    borderColor: '#89AC46', // Warna hijau navbar
    backgroundColor: '#f0fff0', // Warna lebih terang saat dipilih
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#89AC46',
  },
});

export default CategoryList;
