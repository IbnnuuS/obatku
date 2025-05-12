import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ObatList = ({ selectedCategory }) => {
  const navigation = useNavigation();
  
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const emptyMessage =
    selectedCategory === 'Semua'
      ? 'Data tidak ditemukan'
      : `${selectedCategory} tidak ditemukan`;

  // Fungsi untuk fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get('https://681877695a4b07b9d1cf36b5.mockapi.io/api/obat');
      // Filter data berdasarkan kategori jika ada
      const filteredData = response.data.filter(obat =>
        selectedCategory === 'Semua' || obat.category === selectedCategory
      );
      setData(filteredData);
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data: ', error);
    }
  };

  // Mengambil data saat komponen pertama kali dimuat dan ketika refresh
  useEffect(() => {
    fetchData();
  }, [selectedCategory]); // Efek dijalankan ketika selectedCategory berubah

  // Menangani refresh ketika pull to refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData().then(() => setIsRefreshing(false));
  };

  return (
    <ScrollView
      style={styles.listContainer}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
    >
      {data.length === 0 ? (
        <Text style={styles.emptyText}>{emptyMessage}</Text>
      ) : (
        data.map((obat) => (
          <TouchableOpacity
            key={obat.id}
            style={styles.listItem}
            onPress={() => navigation.navigate('ObatDetail', { obatId: obat.id })}
          >
            <Image
              source={
                obat.image && obat.image.trim() !== ''
                  ? { uri: obat.image }
                  : require('../assets/image/default.jpg')
              }
              style={styles.obatImage}
              onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
            />
            <View style={styles.obatInfo}>
              <Text style={styles.obatName}>{obat.title ?? 'Tanpa Nama'}</Text>
              <Text style={styles.obatDescription}>
                {(obat.description ?? '').split(/[.!?]/)[0] + '.'}
              </Text>
            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    paddingVertical: 20,
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  obatImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  obatInfo: {
    flex: 1,
  },
  obatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  obatDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default ObatList;
