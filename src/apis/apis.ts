import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; // Adjust the base URL if needed

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
    const response = await axios.get(
      `${API_BASE_URL}/verifyEmail?token=${token}`
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Email verification failed";
  }
};

export const loginAPI = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Login failed";
  }
};

// export const getPackagesByPageAPI = async (page: string) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/getPackagesByPage?page=${page}`);
//     return response.data;
//   } catch (error: any) {
//     throw error.response?.data?.message || "Error fetching packages";
//   }
// };

export const getPackagesByPageAPI = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/getPackagesByPage?page=fictionCover`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getAllUsers`);
    return response.data.users;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to fetch users";
  }
};

export const updateUserStatus = async (
  userId: string,
  status: "active" | "inactive"
) => {
  try {
    const token = localStorage.getItem("token"); // Get the token from local storage
    const response = await axios.put(
      `${API_BASE_URL}/update-status/${userId}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to update user status";
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const token = localStorage.getItem("token"); // Get the token from local storage
    console.log("Token:", token); // Log the token

    const response = await axios.delete(
      `${API_BASE_URL}/delete-user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Failed to delete user:",
      error.response?.data || error.message
    );
    throw error.response?.data?.message || "Failed to delete user";
  }
};
