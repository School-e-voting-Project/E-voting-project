import { useState, useEffect } from "react";
import axios from "axios";
import credentials from "@/constants/loginInfo.json";
import { formDefault } from "@/constants/default.js";

const useForm = () => {
  
  // State for form fields
  const [formData, setFormData] = useState(formDefault);
  const [isFocused, setIsFocused] = useState(false);

  //error fields
  const [errors, setErrors] = useState({
    password: "haha",
    userId: "stupid",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle validation
  const validateField = (name, value) => {
    // For example, if the email field has an error: setErrors({ ...errors, email: 'Invalid email format' });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
    console.log(formData);
  };

  useEffect(() => {
    console.log("formData changed:", formData);
    // You can add more debugging logic here if needed
  }, [formData]);

  return {
    isFocused,
    setIsFocused,
    errors,
    setErrors,
    handleInputChange,
    handleSubmit,
    formData,
  };
};

export default useForm;
