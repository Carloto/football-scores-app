import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000,
});

export const fetcher = async (url: string) => {
  const res = await instance.get(url);
  return res.data;
};
