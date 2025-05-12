import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native'; // Pastikan Anda import useNavigation

const AddObatScreen = () => {
  const navigation = useNavigation(); // Inisialisasi hook navigation

  // State untuk input
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Data kategori
  const categories = [
    {id: 1, name: 'Obat'},
    {id: 2, name: 'Vitamin'},
    {id: 3, name: 'Herbal'},
    {id: 4, name: 'Suplemen'},
  ];

  // Menangani submit
  const handleSubmit = async () => {
    if (!title || !description || !selectedCategory) {
      Alert.alert('Input Error', 'Harap lengkapi semua data!');
      return;
    }

    // Kirim data ke API
    const newObat = {
      title,
      description,
      image,
      category: selectedCategory,
      createdAt: new Date().toISOString(),
    };

    try {
      // Ganti URL API dengan endpoint yang sesuai
      const response = await axios.post(
        'https://681877695a4b07b9d1cf36b5.mockapi.io/api/obat',
        newObat,
      );
      console.log('Data yang berhasil disubmit: ', response.data);

      // Tampilkan alert sukses dan lakukan aksi kembali setelah klik OK
      Alert.alert('Success', 'Obat berhasil ditambahkan!', [
        {
          text: 'OK',
          onPress: () => {
            navigation.goBack(); // Kembali ke halaman sebelumnya setelah OK
          },
        },
      ]);
    } catch (error) {
      console.error('Terjadi kesalahan saat mengirim data ke API: ', error);
      Alert.alert('Error', 'Gagal menambahkan obat!');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Label untuk Nama Obat */}
      <Text style={styles.label}>Nama Obat :</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Obat"
        value={title}
        onChangeText={setTitle}
      />

      {/* Label untuk Deskripsi */}
      <Text style={styles.label}>Deskripsi Obat :</Text>
      <TextInput
        style={styles.input}
        placeholder="Deskripsi"
        value={description}
        onChangeText={setDescription}
      />

      {/* Label untuk Gambar URL */}
      <Text style={styles.label}>Gambar URL :</Text>
      <TextInput
        style={styles.input}
        placeholder="Gambar URL"
        value={image}
        onChangeText={setImage}
      />

      {/* Label untuk kategori */}
      <Text style={styles.label}>Kategori :</Text>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory?.id === category.id && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory?.id === category.id && styles.selectedText,
              ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
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
  submitButton: {
    backgroundColor: '#89AC46',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddObatScreen;
