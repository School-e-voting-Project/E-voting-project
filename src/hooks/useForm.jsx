// useForm.js

import { useState, useEffect } from "react";
import axios from "axios";
import credentials from "@/constants/loginInfo.json";
import { formDefault, errorDefault } from "@/constants/default.js";

const useForm = ({ setErrors }) => {
  const [formData, setFormData] = useState(formDefault);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateField = (name, value) => {
    // Imdplement your validation logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Validate the entered credentials
    const user = credentials.find(
      (u) => u.name === formData.userId && u.password === formData.password
    );

    if (user) {
      // Successful login
      console.log("Login successful!");
      setErrors(errorDefault);
      setFormData(formDefault);
    } else {
      // Invalid credentials
      setErrors({
        userId: "Invalid username or password",
        password: "Invalid username or password",
      });
    }
  };

  return {
    isFocused,
    setIsFocused,
    handleInputChange,
    formData,
    handleSubmit
  };
};

export default useForm;
