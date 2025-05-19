// src/screens/EditObat/index.jsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';

export default function EditObat({ route, navigation }) {
  const { obatId } = route.params;
  const [obat, setObat] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
  });

  const categories = [
    { id: 1, name: 'Obat' },
    { id: 2, name: 'Vitamin' },
    { id: 3, name: 'Herbal' },
    { id: 4, name: 'Suplemen' },
  ];

  useEffect(() => {
    const fetchObat = async () => {
      try {
        const doc = await firestore().collection('obat').doc(obatId).get();
        if (doc.exists) {
          setObat(doc.data());
        } else {
          Alert.alert('Error', 'Obat tidak ditemukan');
        }
      } catch (error) {
        Alert.alert('Error', 'Gagal memuat data obat');
        console.error('Error fetching obat:', error);
      }
    };

    fetchObat();
  }, [obatId]);

  const handleUpdate = async () => {
    try {
      await firestore().collection('obat').doc(obatId).update({
        title: obat.title,
        description: obat.description,
        image: obat.image,
        category: obat.category, 
      });
      Alert.alert('Berhasil', 'Data obat berhasil diperbarui');
      navigation.goBack(); 
    } catch (error) {
      Alert.alert('Error', 'Gagal memperbarui data obat');
      console.error('Error updating obat:', error);
    }
  };

  const confirmUpdate = () => {
    Alert.alert(
      'Konfirmasi Update',
      'Apakah Anda yakin ingin menyimpan perubahan pada data ini?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Simpan',
          onPress: handleUpdate,
        },
      ],
      { cancelable: true }
    );
  };

  const chooseImage = () => {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
    }).then(image => {
      setObat({ ...obat, image: image.path });
    }).catch(error => {
      console.log('Image picker error: ', error);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nama Obat</Text>
      <TextInput
        style={styles.input}
        value={obat.title}
        onChangeText={text => setObat({ ...obat, title: text })}
      />

      <Text style={styles.label}>Deskripsi</Text>
      <TextInput
        style={styles.textarea}
        value={obat.description}
        onChangeText={text => setObat({ ...obat, description: text })}
        multiline
      />

      <Text style={styles.label}>URL Gambar</Text>
      <TextInput
        style={styles.input}
        value={obat.image}
        editable={false} 
      />
      <Text style={styles.label2}>*Jika tidak ada perubahan pada gambar, tidak perlu pilih gambar</Text>
      <TouchableOpacity onPress={chooseImage} style={styles.button}>
        <Text style={styles.buttonText}>Pilih Gambar</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Kategori</Text>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              obat.category === category.name && styles.selectedCategory,
            ]}
            onPress={() => setObat({ ...obat, category: category.name })}
          >
            <Text
              style={[
                styles.categoryButtonText,
                obat.category === category.name && styles.selectedText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={confirmUpdate}>
        <Text style={styles.buttonText}>Simpan Perubahan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
    label2: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  categoryButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 8,
  },
  selectedCategory: {
    backgroundColor: '#89AC46',
  },
  categoryButtonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    color: '#FFF',
  },
  button: {
    backgroundColor: '#89AC46',
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
