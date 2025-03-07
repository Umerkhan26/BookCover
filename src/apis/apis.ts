import axios from "axios";

// const API_BASE_URL = "http://13.60.184.141/api";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

export const getPackagesByPageAPI = async (page: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/getPackagesByPage/${page}`
    ); // Updated URL format
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

export const fetchAddOnsByPackageId = async (packageId: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/getaddOnsByPackageId${packageId}`
    );
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

// Function to create an order

export const createOrderAPI = async (orderData: {
  userId: string;
  packageId: string;
  addOnIds: string[];
  bookTitle: string;
  bookSubtitle: string;
  authorName: string;
  genre: string;
  seriesContinuation: string;
  summary: string;
  coverStyle: string;
  coverMood: string;
  colorPalette: string;
  examples: string;
  file: string;
  firstOrder: boolean;
  shareOnPortfolio: boolean;
  paymentMethod: string;
  status: string;
  userContacts?: string[]; // New field added for contacts
}) => {
  try {
    // Sending a POST request to create an order
    const response = await axios.post(`${API_BASE_URL}/create`, orderData);

    // Returning the response from the API
    return response.data;
  } catch (error: any) {
    // Handle errors
    console.error("Error creating order:", error);
    throw error.response?.data?.message || "Failed to create order";
  }
};

export const fetchOrdersByUserId = async (): Promise<any> => {
  try {
    // Retrieve the entire user object from localStorage
    const user = localStorage.getItem("user");

    if (!user) {
      throw new Error("User not logged in");
    }

    // Parse the user object
    const userObject = JSON.parse(user);

    // Extract the userId from the parsed object
    const userId = userObject.userId;

    if (!userId) {
      throw new Error("User ID not found in localStorage");
    }

    // Make the GET request to the API to fetch orders by userId
    const response = await axios.get(
      `${API_BASE_URL}/getOrderByUserId/${userId}`
    );
    return response.data.orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders");
  }
};

export const fetchAllOrders = async (): Promise<any> => {
  try {
    // Make the GET request to the API to fetch all orders
    const response = await axios.get(`${API_BASE_URL}/getAllorders`); // Endpoint to fetch all orders

    return response.data.orders; // Return the fetched orders
  } catch (error) {
    console.error("Error fetching all orders:", error);
    throw new Error("Failed to fetch orders");
  }
};

export const createBookRequest = async (bookRequestData: {
  name: string;
  title: string;
  genre?: string;
  isSeries: boolean;
  description: string;
  coverPreference: string[]; // Array of selected cover types
  mainCharacters?: string;
  keyObjects?: string;
  setting?: string;
  comparableCovers: File[]; // Array of files to upload
  email: string;
}) => {
  try {
    // Create a FormData object to send the images as well as other form data
    const formData = new FormData();

    formData.append("name", bookRequestData.name);
    formData.append("title", bookRequestData.title);
    formData.append("genre", bookRequestData.genre || "");
    formData.append("isSeries", bookRequestData.isSeries.toString());
    formData.append("description", bookRequestData.description);
    formData.append(
      "coverPreference",
      JSON.stringify(bookRequestData.coverPreference)
    );
    formData.append("mainCharacters", bookRequestData.mainCharacters || "");
    formData.append("keyObjects", bookRequestData.keyObjects || "");
    formData.append("setting", bookRequestData.setting || "");
    formData.append("email", bookRequestData.email);

    // Append the files to FormData
    bookRequestData.comparableCovers.forEach((file) => {
      formData.append("comparableCovers", file);
    });

    // Send POST request with form data
    const response = await axios.post(
      `${API_BASE_URL}/createCoverIdea`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      }
    );

    return response.data; // Return the response from the backend
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to create book request";
  }
};
