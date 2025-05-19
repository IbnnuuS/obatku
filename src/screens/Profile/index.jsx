import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Notification,
  Shield,
  Key,
  Global,
  MessageQuestion,
  LogoutCurve,
} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import Navbar from '../../../src/components/navbar';
import {userProfile} from '../../../src/data';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Keluar',
      'Apakah Anda yakin ingin keluar?',
      [
        {text: 'Batal', style: 'cancel'},
        {text: 'Keluar', onPress: () => console.log('User Keluar')},
      ],
      {cancelable: true},
    );
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profil', 'Fitur edit profil belum tersedia.');
  };

  const handleTambahObat = () => {
    navigation.navigate('addObat'); // pastikan route 'AddObat' sudah didaftarkan
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={styles.scrollView}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={userProfile.profileImage}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{userProfile.name}</Text>
            <Text style={styles.profileId}>{userProfile.email}</Text>

            {/* Tombol Edit Profile */}
            <TouchableOpacity
              style={styles.editProfileButton}
              onPress={handleEditProfile}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tambah Obat Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tambah Data</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleTambahObat}>
            <Text style={styles.addButtonText}>+ Tambah Obat</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pengaturan</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Key size={24} color="#89AC46" />
            <Text style={styles.menuText}>Ganti Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Global size={24} color="#89AC46" />
            <Text style={styles.menuText}>Ganti Bahasa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Notification size={24} color="#89AC46" />
            <Text style={styles.menuText}>Notifikasi</Text>
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tentang</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Shield size={24} color="#89AC46" />
            <Text style={styles.menuText}>Kebijakan Privasi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MessageQuestion size={24} color="#89AC46" />
            <Text style={styles.menuText}>Pusat Dukungan</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogoutCurve size={24} color="#FFF" />
          <Text style={styles.logoutText}>Keluar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  profileCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#89AC46',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileId: {
    fontSize: 14,
    color: '#888',
  },
  editProfileButton: {
    marginTop: 8,
    backgroundColor: '#89AC46',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  editProfileText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#89AC46',
    paddingVertical: 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  section: {
    backgroundColor: '#FFF',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9534F',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
  },
});

export default ProfileScreen;
