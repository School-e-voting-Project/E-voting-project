// useForm.js

import { useState, useEffect } from "react";
import axios from "axios";
import credentials from "@/constants/loginInfo.json";
import { formDefault, errorDefault } from "@/constants/default.js";
import { useNavigate } from "react-router-dom";

const useForm = (user, setUser, setErrors) => {
  const [formData, setFormData] = useState(formDefault);

  //saves input data as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate(); //for navigation
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the entered credentials
    const user = credentials.find(
      (u) => u.name === formData.userId && u.password === formData.password
    );

    if (user) {
      // Successful login
      setUser(user.userId)
      setErrors(errorDefault);
      setFormData(formDefault);
      login();
    } else {
      // Invalid credentials
      setErrors({
        userId: "Invalid username or password",
        password: "Invalid username or password",
      });
    }
  };
  const login = () => {
    setIsLoggedIn(true);
    navigate("/vote");
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return {
    handleInputChange,
    formData,
    handleSubmit,
  };
};

export default useForm;
