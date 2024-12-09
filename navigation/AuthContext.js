import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Define the AuthProvider component
export const AuthProvider = ({ children }) => {
 const [isAuthenticated, setIsAuthenticated] = useState(false);

 const value = {
    isAuthenticated,
    setIsAuthenticated,
 };

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Define the useAuth hook
export const useAuth = () => {
 return useContext(AuthContext);
};
