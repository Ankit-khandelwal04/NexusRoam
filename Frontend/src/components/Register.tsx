import React, { useState } from "react";
import { RegisterPayload, BackendRegisterPayload } from "../lib/types";
import { registerUser, loginUser } from "../data/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState<RegisterPayload>({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "", // Frontend only, for validation
  });

  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("🟢 Submitted form data:", formData);

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      // Create Backend payload by omitting confirmPassword
      const backendPayload: BackendRegisterPayload = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      };

      // Send the payload without confirmPassword to the backend
      await registerUser(backendPayload);

      setMessage("Registration successful!");

      // Login after successful registration
      const loginResponse = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (loginResponse.token) {
        localStorage.setItem("token", loginResponse.token);
      }

      navigate("/"); // Redirect to home or dashboard page
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Registration error:", error);
        const errorMessage =
          error.response?.data?.message ||
          (typeof error.response?.data === "string"
            ? error.response.data
            : JSON.stringify(error.response?.data)) ||
          "Something went wrong";
        setMessage(errorMessage);
      } else {
        console.error("Unexpected error:", error);
        setMessage("Unexpected error occurred");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
