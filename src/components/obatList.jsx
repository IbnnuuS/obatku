import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ObatList = ({data = []}) => {
  return (
    <View style={styles.listContainer}>
      {/* Jika data kosong, tampilkan pesan */}
      {data.length === 0 ? (
        <Text style={styles.emptyText}>Obat tidak ditemukan</Text>
      ) : (
        data.map(obat => (
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
  detailButton: {
    backgroundColor: '#89AC46',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  detailButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ObatList;
