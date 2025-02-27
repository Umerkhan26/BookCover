
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; 

export const registerUser = async (userData: {
  firstName: string;
  lastName: string; 
  email: string;
  password: string;
  role: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Registration failed";
  }
};




export const verifyEmailAPI = async (token: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/verifyEmail?token=${token}`);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Email verification failed";
  }
};






export const loginAPI = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Login failed";
  }
};




export const getPackagesByPageAPI = async (page:string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getPackagesByPage/${page}`);  // Updated URL format
    return response.data;
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
};



export const fetchAddOnsByPackageId = async (packageId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getaddOnsByPackageId${packageId}`);
    return response.data.data; // Return only the data array
  } catch (error) {
    console.error("Error fetching add-ons:", error);
    throw new Error("Failed to fetch add-ons. Please try again.");
  }
};


export const submitContactFormAPI = async (contactData: {
  firstName: string;
  lastName: string;
  email: string;
  referral: string;
  message: string;
}) => {
  try {
    // Sending a POST request to submit the contact form data
    const response = await axios.post(`${API_BASE_URL}/submit`, contactData);

    // Returning the response from the API
    return response.data;
  } catch (error: any) {
    // Handle errors
    throw error.response?.data?.message || "Failed to submit contact form";
  }
};