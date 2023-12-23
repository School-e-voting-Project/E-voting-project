//1.

import { useState } from "react";
import credentials from "@/constants/loginInfo.json";
import { formDefault, errorDefault } from "@/constants/default.js";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [errors, setErrors] = useState(errorDefault);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(formDefault);
  const [usedCredentials, setUsedCredentials] = useState([]);

  //for navigation
  const navigate = useNavigate();

  //handles typing event

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    //saves input data as user types
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    //clears error when user starts typing
    if (errors[name] !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the entered credentials
    const user = credentials.find(
      (u) => u.name === formData.userId && u.password === formData.password
    );

    if (user) {
      // Successful login
      if (usedCredentials.includes(user.userId)) {
        setErrors({
          userId: "Credentials already used",
          password: "Credentials already used",
        });
      } else {
        // Successful login
        login(formData.userId);
        setErrors(errorDefault);
        setFormData(formDefault);
        setUsedCredentials((prevCredentials) => [
          ...prevCredentials,
          user.userId,
        ]);
      }
    } else {
      // Invalid credentials
      setErrors({
        userId: "Invalid username or password",
        password: "Invalid username or password",
      });
    }
  };

  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/vote");
  };

  const logout = () => {
    setUser(null);
    localStorage.clear("user");
    navigate("/");
  };

  return {
    errors,
    setErrors,
    user,
    login,
    logout,
    handleInputChange,
    formData,
    handleSubmit,
  };
};

export default useAuth;
