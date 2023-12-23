import React, { createContext, useState } from "react";
import { errorDefault } from "@/constants/default.js";
import useLoginLogic from "@/hooks/useLoginLogic";
import { Outlet } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = () => {
  const {
    errors,
    setErrors,
    user,
    prevUser,
    login,
    logout,
    handleInputChange,
    formData,
    handleSubmit,
  } = useLoginLogic();

  return (
    <LoginContext.Provider
      value={{
        user,
        prevUser,
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
