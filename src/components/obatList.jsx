import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const ObatList = ({data = [], selectedCategory}) => {
  // Pesan jika tidak ada data yang ditemukan
  const emptyMessage =
    selectedCategory === 'Semua'
      ? 'Data tidak ditemukan'
      : `${selectedCategory} tidak ditemukan`;

  return (
    <View style={styles.listContainer}>
      {data.length === 0 ? (
        <Text style={styles.emptyText}>{emptyMessage}</Text>
      ) : (
        data.map(obat => (
          <TouchableOpacity
            key={obat.id}
            style={styles.listItem}
            onPress={() => {
              console.log(`Mengklik ${obat.name}`); // Debugging
              Alert.alert(
                'Detail Obat',
                `Nama: ${obat.name}\nDeskripsi: ${obat.description}`,
              );
            }}>
            {/* Cek apakah gambar tersedia, jika tidak gunakan default */}
            <Image
              source={
                obat.image ? obat.image : require('../assets/image/default.jpg')
              }
              style={styles.obatImage}
              onError={e =>
                console.log('Error loading image:', e.nativeEvent.error)
              } // Debugging jika gambar error
            />
            <View style={styles.obatInfo}>
              <Text style={styles.obatName}>{obat.name}</Text>
              <Text style={styles.obatDescription}>{obat.description}</Text>
            </View>
          </TouchableOpacity>
        ))
      )}
    </View>
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
  },
  obatDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default ObatList;
