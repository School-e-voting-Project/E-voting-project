import { useState } from "react";
import credentials from "@/constants/loginInfo.json";
import { formDefault, errorDefault } from "@/constants/default.js";
import { useNavigate } from "react-router-dom";

const useLoginLogic = () => {
  const [errors, setErrors] = useState(errorDefault);
  const [prevUser, setPrevUser] = useState(null);
  const [formData, setFormData] = useState(formDefault);
  const [usedCredentials, setUsedCredentials] = useState([]);
  const [user, setUser] = useState(() => {
    //checks if user has been logged in already
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      const savedUser = JSON.parse(existingUser);
      setPrevUser(savedUser);
      setUsedCredentials((prevCredentials) => [...prevCredentials, savedUser]);
      return savedUser;
    }
  });

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
    const validatedUser = credentials.find(
      (u) => u.userId === formData.userId && u.password === formData.password
    );

    // If validated
    if (validatedUser) {
      //if credential used before
      if (usedCredentials.includes(validatedUser.userId)) {
        setErrors({
          userId: "Credentials already used",
          password: "Credentials already used",
        });
      } else {
        // Successful login (resets everyth)
        login(formData.userId);
        setErrors(errorDefault);
        setFormData(formDefault);
        setUsedCredentials((prevCredentials) => [
          ...prevCredentials,
          validatedUser.userId,
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
    setPrevUser(JSON.parse(localStorage.getItem("user")));
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
    prevUser,
    login,
    logout,
    handleInputChange,
    formData,
    handleSubmit,
  };
};

export default useLoginLogic;
