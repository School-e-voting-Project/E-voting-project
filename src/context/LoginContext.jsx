// LoginContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import { errorDefault } from "@/constants/default.js";
import useAuth from "@/hooks/useAuth";
import { Outlet } from "react-router-dom";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [errors, setErrors] = useState(errorDefault);
  const [user, setUser] = useState(null);

  const { handleInputChange, formData, handleSubmit } = useForm(
    user,
    setUser,
    setErrors
  );

  useEffect(() => {
    // Debugging or additional logic can go here
    console.log(errors);
  }, [errors]);

  return (
    <LoginContext.Provider
      value={{
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
      <Outlet />
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
