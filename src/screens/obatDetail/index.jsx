import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function ObatDetail({route}) {
  const {obat} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={
          obat.image ? obat.image : require('../../assets/image/default.jpg')
        }
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.category}>
        Kategori {obat.category || 'Tidak diketahui'}
      </Text>

      <Text style={styles.title}>{obat.name}</Text>
      <Text style={styles.description}>{obat.detail || obat.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    fontWeight: '500',
    color: '#89AC46',
    marginBottom: 15,
    alignSelf: 'flex-start', // Rata kiri
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#89AC46',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
  },
});
