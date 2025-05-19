// src/screens/addObat/index.jsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createObat} from '../../utility';
import ImagePicker from 'react-native-image-crop-picker';

const AddObat = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {id: 1, name: 'Obat'},
    {id: 2, name: 'Vitamin'},
    {id: 3, name: 'Herbal'},
    {id: 4, name: 'Suplemen'},
  ];

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        console.log('Image path:', image.path);
        setImage(image.path);
      })
      .catch(error => {
        console.log('Image pick cancelled or failed:', error);
      });
  };

  const handleSubmit = async () => {
    if (!title || !description || !image || !selectedCategory) {
      Alert.alert('Input Error', 'Harap lengkapi semua data!');
      return;
    }

    const newObat = {
      title,
      description,
      image,
      category: selectedCategory.name,
      createdAt: new Date().toISOString(),
    };

    try {
      const result = await createObat(newObat);
      if (result) {
        console.log('Data berhasil ditambahkan ke Firestore:', result);
        Alert.alert('Success', 'Obat berhasil ditambahkan!', [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]);
      } else {
        throw new Error('Gagal menambahkan obat ke Firestore.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      Alert.alert('Error', 'Gagal menambahkan obat!');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nama Obat :</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Obat"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Deskripsi Obat :</Text>
      <TextInput
        style={[styles.input, {height: 100}]}
        placeholder="Deskripsi"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <Text style={styles.label}>Gambar :</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
        <Text style={styles.imagePickerText}>Pilih Gambar</Text>
      </TouchableOpacity>
      {image ? (
        <Image source={{uri: image}} style={styles.previewImage} />
      ) : null}

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
  input: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  imagePicker: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  imagePickerText: {
    color: '#333',
    fontSize: 16,
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
    resizeMode: 'cover',
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

export default AddObat;
