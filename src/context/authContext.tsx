import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | null>(null);

// Create a provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") // Check if a token exists in localStorage
  );

  // Function to log in the user
  const login = (token: string) => {
    localStorage.setItem("token", token); // Store the token in localStorage
    setIsAuthenticated(true); // Update the authentication state
  };

  // Function to log out the user
  const logout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    setIsAuthenticated(false); // Update the authentication state
  };

  // Provide the context value to children
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
