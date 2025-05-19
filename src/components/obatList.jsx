import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getObat } from '../utility/index';

const ObatList = ({ selectedCategory }) => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const emptyMessage =
    selectedCategory === 'Semua'
      ? 'Data tidak ditemukan'
      : `${selectedCategory} tidak ditemukan`;

  const fetchData = async () => {
    setErrorMsg('');
    setIsLoading(true);
    try {
      const allData = await getObat();
      const filteredData = allData.filter(
        (obat) =>
          selectedCategory === 'Semua' || obat.category === selectedCategory
      );
      setData(filteredData);
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data dari Firestore: ', error);
      setErrorMsg('Gagal memuat data. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData().then(() => setIsRefreshing(false));
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{errorMsg}</Text>
        <TouchableOpacity onPress={fetchData} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ObatList;
