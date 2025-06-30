export interface TouristSpot {
  id: number;
  name: string;
  description?: string;
  location: string;
}

export interface Hotel {
  id: number;
  name: string;
  city: string;
  address?: string;
  rating: number;
  pricePerNight: number;
}

export interface Restaurant {
  id: number;
  name: string;
  cuisine?: string;
  address: string;
  rating: number;
}

export interface Transport {
  id: number;
  type: string;
  route: string;
  fare: number;
}

// ✅ For Register Form
export interface RegisterPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface BackendRegisterPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword?: string; // transient field for backend
}

// ✅ For Login Form
export interface UserLogin {
  email: string;
  password: string;
}
