import { useState } from "react";

const useForm = () => {
  // state for focused and blurred states
  const [isFocused, setIsFocused] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //error fields
  const [errors, setErrors] = useState({
    password: "wrong password",
    id: "wrong id"
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
    // Add your logic for form submission here
    console.log("Form submitted with data:", formData);
  };

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
