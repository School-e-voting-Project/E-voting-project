// LoginContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import { errorDefault } from "@/constants/default.js";
import useForm from "@/hooks/useForm";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState(errorDefault);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };
  console.log(setErrors)

  const { handleInputChange, formData, isFocused, setIsFocused, handleSubmit } =
    useForm({setErrors});

  useEffect(() => {
    // Debugging or additional logic can go here
    console.log(errors);
  }, [errors]);

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
        handleSubmit,
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
