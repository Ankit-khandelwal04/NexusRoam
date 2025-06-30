import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTouristSpots = async (city) => {
  const { data } = await axios.get('/api/touristspots/city/${city}');
  return data;
};

export const useTouristSpots = () => {
  return useQuery({
    queryKey: ['touristspots'],
    queryFn: fetchTouristSpots,
  });
};
