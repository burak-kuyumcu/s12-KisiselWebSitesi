import axios from 'axios';

const api = axios.create({
  baseURL: 'https://69b3c740e224ec066bdd119b.mockapi.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function sendLanguageSelection(payload) {
  const response = await api.post('/languageLogs', payload);
  return response.data;
}