// src/utility/index.jsx
import firestore from '@react-native-firebase/firestore';

const obatCollection = firestore().collection('obat');

export const getObat = async () => {
  try {
    const snapshot = await obatCollection.get();
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error('Gagal mengambil data obat dari Firestore:', error);
    return [];
  }
};

export const getObatById = async (id) => {
  try {
    const doc = await obatCollection.doc(id).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    } else {
      console.warn('Obat tidak ditemukan dengan ID:', id);
      return null;
    }
  } catch (error) {
    console.error('Gagal mengambil data obat berdasarkan ID:', error);
    return null;
  }
};

export const createObat = async (data) => {
  try {
    const docRef = await obatCollection.add(data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error('Gagal menambah data obat:', error);
    return null;
  }
};

export const updateObat = async (id, data) => {
  try {
    await obatCollection.doc(id).update(data);
    return true;
  } catch (error) {
    console.error('Gagal mengupdate data obat:', error);
    return false;
  }
};

export const deleteObat = async (id) => {
  try {
    await obatCollection.doc(id).delete();
    return true;
  } catch (error) {
    console.error('Gagal menghapus data obat:', error);
    return false;
  }
};
