import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchRestaurants = async (city) => {
  const { data } = await axios.get('/api/restaurants/city/${city}');
  return data;
};

export const useRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: fetchRestaurants,
  });
};
