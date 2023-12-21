import { useState } from "react";
import credentials from "@/constants/loginInfo.json";
import { formDefault, errorDefault } from "@/constants/default.js";
import { useNavigate } from "react-router-dom";

const useAuth = (setErrors) => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(formDefault);
  const [usedCredentials, setUsedCredentials] = useState([]);

  const navigate = useNavigate(); //for navigation

  //saves input data as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
    navigate("/vote");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return { user, login, logout, handleInputChange, formData, handleSubmit };
};

export default useAuth;
