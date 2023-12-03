import { useState } from "react";

const useForm = () => {
  // state for focused and blurred states
  const [isFocused, setIsFocused] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
    handleInputChange,
    handleSubmit,
    formData,
  };
};

export default useForm;
