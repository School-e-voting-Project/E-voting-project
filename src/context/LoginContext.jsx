import React, { createContext, useContext, useState } from "react";
import useForm from "@/hooks/useForm";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  //states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  

  //functions

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const { handleInputChange, formData, errors, setErrors,     isFocused,
    setIsFocused, } = useForm();

  return (
    <LoginContext.Provider
      value={{
    isFocused,
    setIsFocused,
        isLoggedIn,
        user,
        login,
        logout,
        handleInputChange,
        formData,
        errors,
        setErrors,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
