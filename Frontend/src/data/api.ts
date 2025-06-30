
import axios from "axios";
import {
  TouristSpot,
  Hotel,
  Restaurant,
  Transport,
  UserLogin,
  BackendRegisterPayload,
} from "../lib/types";

const API_BASE_URL = "http://localhost:8080/api"; // Keep this same

export const fetchTouristSpots = async (city: string) => {
  const response = await axios.get(`${API_BASE_URL}/touristspots/city/${city}`);
  return response.data;
};

export const fetchHotels = async (city: string) => {
  const response = await axios.get(`${API_BASE_URL}/hotels/city/${city}`);
  return response.data;
};

export const fetchRestaurants = async (city: string) => {
  const response = await axios.get(`${API_BASE_URL}/restaurants/city/${city}`);
  return response.data;
};

export const fetchTransports = async (city: string) => {
  const response = await axios.get(`${API_BASE_URL}/transports/city/${city}`);
  return response.data;
};

// ✅ Updated POST: Register User
export const registerUser = async (userData: BackendRegisterPayload) => {
  const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
  return response.data;
};

// ✅ Updated POST: Login User
export const loginUser = async (credentials: UserLogin) => {
  const response = await axios.post(`${API_BASE_URL}/users/login`, credentials);
  return response.data;
};

