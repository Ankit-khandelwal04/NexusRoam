import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchHotels = async (city) => {
  const { data } = await axios.get('/api/hotels/city/${city}');
  return data;
};

export const useHotels = () => {
  return useQuery({
    queryKey: ['hotels'],
    queryFn: fetchHotels,
  });
};
