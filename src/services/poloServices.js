import api from './api';

export async function getAllPolos() {
  try {
    const response = await api.get('/polos');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
