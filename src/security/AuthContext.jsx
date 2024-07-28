import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in when the app starts
    const token = localStorage.getItem('token');
    if (token) {
      // You might want to validate the token and fetch the user data
      setCurrentUser({ token });
    }
  }, []);

  const login = (userData) => {
    // Save user data and token in local storage
    localStorage.setItem('token', userData.token);
    setCurrentUser(userData);
    navigate('/'); // Redirect to the homepage or dashboard
  };

  const logout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
    navigate('/login'); // Redirect to the login page
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
