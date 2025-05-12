import axios from 'axios';

const API_BASE_URL = 'https://681877695a4b07b9d1cf36b5.mockapi.io/api';

export const getObat = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/obat`);
    return response.data;
  } catch (error) {
    console.error('Gagal mengambil data obat:', error);
    return [];
  }
};