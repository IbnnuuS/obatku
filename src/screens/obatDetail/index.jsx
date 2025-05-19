// src/screens/ObatDetail.js
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
  Alert,
  StyleSheet,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { More } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { getObatById, deleteObat } from '../../utility';

export default function ObatDetail({ route }) {
  const { obatId } = route.params;
  const [obat, setObat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;
  const actionSheetRef = useRef();
  const navigation = useNavigation();

  const fetchObat = async () => {
    try {
      setLoading(true);
      const obatSelected = await getObatById(obatId);
      console.log('Data obat yang diambil:', obatSelected);
      setObat(obatSelected || null);
    } catch (error) {
      console.error('Error fetching obat:', error);
      setObat(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('obatId yang diterima:', obatId); 
    fetchObat();
  }, [obatId]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchObat();
    setRefreshing(false);
  };

  const handleDelete = async () => {
    try {
      const success = await deleteObat(obatId);
      if (success) {
        actionSheetRef.current?.setModalVisible(false);
        Alert.alert('Berhasil', 'Obat berhasil dihapus.');
        navigation.goBack();
      } else {
        Alert.alert('Gagal', 'Terjadi kesalahan saat menghapus obat.');
      }
    } catch (error) {
      console.error('Gagal menghapus obat:', error);
      Alert.alert('Error', 'Gagal menghapus obat.');
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      'Konfirmasi Hapus',
      'Apakah Anda yakin ingin menghapus data ini?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: handleDelete,
        },
      ],
      { cancelable: true },
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#89AC46" />
      </View>
    );
  }

  if (!obat) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Obat tidak ditemukan</Text>
      </View>
    );
  }

  const imageScale = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -20],
    extrapolate: 'clamp',
  });
  const descriptionOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0.7],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}
        onPress={() => actionSheetRef.current?.setModalVisible(true)}>
        <More size={24} color="#000" />
      </TouchableOpacity>

      <Animated.ScrollView
        contentContainerStyle={styles.container}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Animated.Image
          source={
            obat.image
              ? { uri: obat.image }
              : require('../../assets/image/default.jpg')
          }
          style={[styles.image, { transform: [{ scale: imageScale }] }]}
          resizeMode="contain"
        />
        <Text style={styles.category}>
          Kategori {obat.category || 'Tidak diketahui'}
        </Text>
        <Animated.Text
          style={[styles.title, { transform: [{ translateY: titleTranslateY }] }]}>
          {obat.title}
        </Animated.Text>
        <Animated.Text
          style={[styles.description, { opacity: descriptionOpacity }]}>
          {obat.description}
        </Animated.Text>
      </Animated.ScrollView>

      <ActionSheet ref={actionSheetRef}>
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              actionSheetRef.current?.setModalVisible(false);
              navigation.navigate('editObat', { obatId });
            }}>
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={confirmDelete}>
            <Text style={[styles.actionText, { color: 'red' }]}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, { marginTop: 10 }]}
            onPress={() => actionSheetRef.current?.setModalVisible(false)}>
            <Text style={[styles.actionText, { color: '#999' }]}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#f00',
    textAlign: 'center',
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
    alignSelf: 'flex-start',
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
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  actionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
