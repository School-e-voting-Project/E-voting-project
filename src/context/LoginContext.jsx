import React, { createContext, useState } from "react";
import { errorDefault } from "@/constants/default.js";
import useAuth from "@/hooks/useAuth";
import { Outlet } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [errors, setErrors] = useState(errorDefault);

  const { user, login, logout, handleInputChange, formData, handleSubmit } =
    useAuth(setErrors);

  return (
    <LoginContext.Provider
      value={{
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
