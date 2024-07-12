import React, { createContext, useState } from 'react';
import axios from 'axios';

export const uploadcontext = createContext(0);

async function uploadimage(imageData) {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    console.log("Token found:", token); // Debug log

    const response = await axios.post('http://localhost:3000/upload', imageData, {
      headers: { Authorization: `Bearer ${token}` }, // Correct header format
    });
    console.log("Image uploaded, response received"); // Debug log
    return response.data;
  } catch (error) {
    console.error('Error uploading the image:', error);
    throw error;
  }
}
async function saveToHistory(imageData, saveHistory) {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    console.log("Token found:", token); // Debug log

    const response = await axios.post(`http://localhost:3000/upload?saveHistory=${saveHistory}`, imageData, {
      headers: { Authorization: `Bearer ${token}` }, // Correct header format
    });
    console.log("Image uploaded, response received"); // Debug log
    return response.data;
  } catch (error) {
    console.error('Error uploading the image:', error);
    throw error;
  }
}
export default function UploadContextProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <uploadcontext.Provider value={{ counter, setCounter, uploadimage ,saveToHistory }}>
      {children}
    </uploadcontext.Provider>
  );
}
