import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTransport = async (city) => {
  const { data } = await axios.get('/api/transport/city/${city}');
  return data;
};

export const useTransport = () => {
  return useQuery({
    queryKey: ['transport'],
    queryFn: fetchTransport,
  });
};
