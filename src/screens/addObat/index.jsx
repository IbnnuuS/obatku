import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createObat } from '../../utility';
import ImagePicker from 'react-native-image-crop-picker';
import notifee, { AndroidImportance } from '@notifee/react-native';

const AddObat = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Data untuk opsi upload
  const [uploadOption, setUploadOption] = useState('immediate');

  const categories = [
    { id: 1, name: 'Obat' },
    { id: 2, name: 'Vitamin' },
    { id: 3, name: 'Herbal' },
    { id: 4, name: 'Suplemen' },
  ];

  // Fungsi untuk memulai setup Notifee (meminta izin dan membuat channel)
  useEffect(() => {
    async function setupNotifee() {
      // Pastikan channel hanya dibuat sekali di awal aplikasi
      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH, // Menentukan pentingnya notifikasi
      });

      // Meminta izin untuk menampilkan notifikasi
      await notifee.requestPermission();
    }

    setupNotifee();
  }, []);

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

  // Fungsi untuk mengirimkan notifikasi
  const sendNotification = async (message) => {
    await notifee.displayNotification({
      title: 'ObatKu Notification',
      body: message,
      android: {
        channelId: 'default',
      },
    });
  };

  // Fungsi untuk menangani penundaan pengiriman obat
  const handleDelayedPost = (delay) => {
    setTimeout(async () => {
      await sendNotification(`Obat akan segera ditambahkan setelah penundaan ${delay} detik.`);
    }, delay * 1000); // Mengonversi detik ke milidetik
  };

  // Fungsi untuk mengupload obat
  const handleUpload = async () => {
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
        await sendNotification('Obat berhasil ditambahkan!');
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
      await sendNotification('Gagal menambahkan obat!');
      Alert.alert('Error', 'Gagal menambahkan obat!');
    }

    // Mengatur penundaan notifikasi jika ada
    if (uploadOption === 'delayed10') {
      handleDelayedPost(10); // Penundaan 10 detik
    } else if (uploadOption === 'delayed30') {
      handleDelayedPost(30); // Penundaan 30 detik
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.container}>
        <Text style={styles.label}>Nama Obat :</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama Obat"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Deskripsi Obat :</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
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
          <Image source={{ uri: image }} style={styles.previewImage} />
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
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory?.id === category.id && styles.selectedText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Pilih Opsi Penundaan Notifikasi:</Text>
        <View style={styles.uploadOptionContainer}>
          <TouchableOpacity
            style={[styles.uploadOptionButton, uploadOption === 'immediate' && styles.selectedOption]}
            onPress={() => setUploadOption('immediate')}
          >
            <Text style={styles.uploadOptionText}>Tanpa Penundaan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.uploadOptionButton, uploadOption === 'delayed10' && styles.selectedOption]}
            onPress={() => setUploadOption('delayed10')}
          >
            <Text style={styles.uploadOptionText}>Penundaan 10 Detik</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.uploadOptionButton, uploadOption === 'delayed30' && styles.selectedOption]}
            onPress={() => setUploadOption('delayed30')}
          >
            <Text style={styles.uploadOptionText}>Penundaan 30 Detik</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleUpload}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 30,
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
  uploadOptionContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  uploadOptionButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: '#89AC46',
  },
  uploadOptionText: {
    fontSize: 16,
    color: '#333',
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
