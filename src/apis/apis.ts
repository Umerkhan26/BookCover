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

export const verifyEmailWithOTP = async (email: string, otp: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/verify-email`, {
      email,
      otp,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "OTP verification failed";
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
    const message = error.response?.data?.message || "Login failed";

    throw new Error(message);
  }
};

export const forgotPasswordAPI = async (email: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/forgot-password`, {
      email,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to send password reset email",
    );
  }
};

export const verifyOtpAPI = async (email: string, otp: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/verify-otp`, {
      email,
      otp,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to verify OTP");
  }
};

export const resetPasswordAPI = async (email: string, newPassword: string) => {
  const res = await fetch(`${API_BASE_URL}/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, newPassword }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to reset password");
  return data;
};

export const getPackagesByPageAPI = async (page: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/getPackagesByPage/${page}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
};

/**
 * Server-paged responses include numeric `total`. Legacy responses omit it and
 * return the full list; we then slice client-side to `limit` so the UI stays at 10 (etc.) per page.
 */
function normalizeListPagination(
  fullList: unknown[],
  rawBody: Record<string, unknown>,
  params: { page?: number; limit?: number } | undefined,
  defaultLimit = 10,
): {
  pageItems: unknown[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
} {
  const limitNum = Number(rawBody.limit);
  const pageNum = Number(rawBody.page);
  const limit =
    Number.isFinite(limitNum) && limitNum > 0
      ? limitNum
      : params?.limit ?? defaultLimit;
  const page =
    Number.isFinite(pageNum) && pageNum >= 1 ? pageNum : params?.page ?? 1;

  const totalRaw = rawBody.total;
  const serverTotal =
    totalRaw === undefined || totalRaw === null || totalRaw === ""
      ? NaN
      : Number(totalRaw);
  const hasServerTotal = Number.isFinite(serverTotal) && serverTotal >= 0;

  if (hasServerTotal) {
    const total = serverTotal;
    const tpRaw = rawBody.totalPages;
    const totalPages =
      tpRaw !== undefined && tpRaw !== null && tpRaw !== ""
        ? Math.max(1, Number(tpRaw))
        : Math.max(1, Math.ceil(total / limit));
    const pageClamped = Math.min(page, Math.max(1, totalPages));
    return {
      pageItems: fullList,
      total,
      page: pageClamped,
      limit,
      totalPages,
    };
  }

  const total = fullList.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const pageClamped = Math.min(page, totalPages);
  const start = (pageClamped - 1) * limit;
  return {
    pageItems: fullList.slice(start, start + limit),
    total,
    page: pageClamped,
    limit,
    totalPages,
  };
}

export interface FetchUsersParams {
  page?: number;
  limit?: number;
}

export interface FetchUsersResponse {
  users: unknown[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const fetchUsers = async (
  params?: FetchUsersParams,
): Promise<FetchUsersResponse> => {
  try {
    const search = new URLSearchParams();
    if (params?.page != null) search.set("page", String(params.page));
    if (params?.limit != null) search.set("limit", String(params.limit));
    const qs = search.toString();
    const url = `${API_BASE_URL}/getAllUsers${qs ? `?${qs}` : ""}`;
    const response = await axios.get(url);
    const d = response.data as Record<string, unknown>;
    const users = Array.isArray(d.users) ? d.users : [];
    const n = normalizeListPagination(users, d, params);
    return {
      users: n.pageItems,
      total: n.total,
      page: n.page,
      limit: n.limit,
      totalPages: n.totalPages,
    };
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to fetch users";
  }
};

export const updateUserStatus = async (
  userId: string,
  status: "active" | "inactive",
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${API_BASE_URL}/update-status/${userId}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to update user status";
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.delete(
      `${API_BASE_URL}/delete-user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Failed to delete user:",
      error.response?.data || error.message,
    );
    throw error.response?.data?.message || "Failed to delete user";
  }
};

export const fetchAddOnsByPackageId = async (packageId: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/getaddOnsByPackageId${packageId}`,
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
    const response = await axios.post(`${API_BASE_URL}/submit`, contactData);

    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to submit contact form";
  }
};

export const createOrderAPI = async (orderData: {
  userId: string;
  packageId: string;
  addOnIds: string[];
  bookTitle: string;
  bookSubtitle: string;
  name: string;
  narratorName: string;
  genre: string;
  seriesContinuation: string;
  summary: string;
  prefferedCoverStyle: string;
  likeToSeeOnCover: string;
  // colorPalette: string;
  // examples: string;
  // file: string;
  firstOrder: boolean;
  shareOnPortfolio: boolean;
  // paymentMethod: string;
  status: string;
  userContacts?: string[];
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, orderData);

    return response.data;
  } catch (error: any) {
    console.error("Error creating order:", error);
    throw error.response?.data?.message || "Failed to create order";
  }
};
export const fetchOrdersByUserId = async (): Promise<any[]> => {
  try {
    const user = localStorage.getItem("user");

    if (!user) {
      console.warn("User not logged in");
      return [];
    }

    const userObject = JSON.parse(user);
    const userId = userObject.userId;

    if (!userId) {
      console.warn("User ID not found in localStorage");
      return [];
    }

    const response = await axios.get(
      `${API_BASE_URL}/getOrderByUserId/${userId}`,
    );

    return response.data?.orders || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};

export interface FetchAllOrdersParams {
  page?: number;
  limit?: number;
}

export interface FetchAllOrdersResponse {
  orders: unknown[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const fetchAllOrders = async (
  params?: FetchAllOrdersParams,
): Promise<FetchAllOrdersResponse> => {
  try {
    const search = new URLSearchParams();
    if (params?.page != null) search.set("page", String(params.page));
    if (params?.limit != null) search.set("limit", String(params.limit));
    const qs = search.toString();
    const response = await axios.get(
      `${API_BASE_URL}/getAllorders${qs ? `?${qs}` : ""}`,
    );
    const d = response.data as Record<string, unknown>;
    const orders = Array.isArray(d.orders) ? d.orders : [];
    const n = normalizeListPagination(orders, d, params);
    return {
      orders: n.pageItems,
      total: n.total,
      page: n.page,
      limit: n.limit,
      totalPages: n.totalPages,
    };
  } catch (error) {
    console.error("Error fetching all orders:", error);
    throw new Error("Failed to fetch orders");
  }
};

export const deleteOrderById = async (orderId: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `${API_BASE_URL}/deleteOrder/${encodeURIComponent(orderId)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data?.message ||
      error.message ||
      "Failed to delete order"
    );
  }
};

export const createBookRequest = async (bookRequestData: {
  name: string;
  title: string;
  genre?: string;
  isSeries: boolean;
  description: string;
  coverPreference: string[];
  mainCharacters?: string;
  keyObjects?: string;
  setting?: string;
  comparableCovers: File[];
  email: string;
}) => {
  try {
    const formData = new FormData();

    formData.append("name", bookRequestData.name);
    formData.append("title", bookRequestData.title);
    formData.append("genre", bookRequestData.genre || "");
    formData.append("isSeries", bookRequestData.isSeries.toString());
    formData.append("description", bookRequestData.description);
    formData.append(
      "coverPreference",
      JSON.stringify(bookRequestData.coverPreference),
    );
    formData.append("mainCharacters", bookRequestData.mainCharacters || "");
    formData.append("keyObjects", bookRequestData.keyObjects || "");
    formData.append("setting", bookRequestData.setting || "");
    formData.append("email", bookRequestData.email);

    bookRequestData.comparableCovers.forEach((file) => {
      formData.append("comparableCovers", file);
    });

    const response = await axios.post(
      `${API_BASE_URL}/createCoverIdea`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to create book request";
  }
};

export interface FetchCoverIdeasParams {
  page?: number;
  limit?: number;
}

export interface FetchCoverIdeasResponse {
  bookRequests: unknown[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const fetchAllBookRequests = async (
  params?: FetchCoverIdeasParams,
): Promise<FetchCoverIdeasResponse> => {
  try {
    const search = new URLSearchParams();
    if (params?.page != null) search.set("page", String(params.page));
    if (params?.limit != null) search.set("limit", String(params.limit));
    const qs = search.toString();
    const response = await axios.get(
      `${API_BASE_URL}/getCoverIdeas${qs ? `?${qs}` : ""}`,
    );
    const d = response.data;

    if (Array.isArray(d)) {
      const n = normalizeListPagination(
        d,
        { page: params?.page, limit: params?.limit },
        params,
      );
      return {
        bookRequests: n.pageItems,
        total: n.total,
        page: n.page,
        limit: n.limit,
        totalPages: n.totalPages,
      };
    }

    const body = d as Record<string, unknown>;
    const bookRequests = Array.isArray(body.bookRequests)
      ? body.bookRequests
      : [];
    const n = normalizeListPagination(bookRequests, body, params);

    return {
      bookRequests: n.pageItems,
      total: n.total,
      page: n.page,
      limit: n.limit,
      totalPages: n.totalPages,
    };
  } catch (error) {
    console.error("Error fetching all book requests:", error);
    throw new Error("Failed to fetch book requests");
  }
};

export const deleteBookRequestById = async (id: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `${API_BASE_URL}/deleteCoverIdeasById/${encodeURIComponent(id)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw (
      error.response?.data?.message ||
      error.message ||
      "Failed to delete book request"
    );
  }
};

// Blog API Functions
export const createBlogPost = async (postData: any) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_BASE_URL}/blog/posts`,
      postData,
      token ? { headers: { Authorization: `Bearer ${token}` } } : undefined,
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to create blog post";
  }
};

export const getBlogPosts = async (filters?: {
  status?: string;
  author?: string;
  category?: string;
  tag?: string;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}) => {
  try {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    const response = await axios.get(
      `${API_BASE_URL}/blog/posts?${params.toString()}`,
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to fetch blog posts";
  }
};

export const getBlogPostById = async (postId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog/posts/${postId}`);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to fetch blog post";
  }
};

export const getBlogPostBySlug = async (slug: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog/posts/slug/${slug}`);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to fetch blog post";
  }
};

export const updateBlogPost = async (postId: string, postData: any) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${API_BASE_URL}/blog/posts/${postId}`,
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to update blog post";
  }
};

export const updateBlogPostContent = async (postId: string, content: any[]) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.patch(
      `${API_BASE_URL}/blog/posts/${postId}/content`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to update blog post content";
  }
};

export const deleteBlogPost = async (postId: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `${API_BASE_URL}/blog/posts/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to delete blog post";
  }
};

export const publishBlogPost = async (
  postId: string,
  status: "draft" | "published" | "archived",
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.patch(
      `${API_BASE_URL}/blog/posts/${postId}/publish`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to update blog post status";
  }
};

// Category API Functions
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog/categories`);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to fetch categories";
  }
};

export const createCategory = async (categoryData: {
  name: string;
  slug?: string;
  description?: string;
}) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_BASE_URL}/blog/categories`,
      categoryData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to create category";
  }
};

export const uploadBlogImage = async (file: File) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Not logged in (missing token)");
    }
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post(
      `${API_BASE_URL}/blog/upload-image`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data as { message: string; url: string };
  } catch (error: any) {
    const serverMsg = error.response?.data?.message;
    const status = error.response?.status;
    const detail = serverMsg
      ? `${serverMsg}${status ? ` (HTTP ${status})` : ""}`
      : status
        ? `Upload failed (HTTP ${status})`
        : "Failed to upload image";
    throw new Error(detail);
  }
};
