import { useLogin } from "@/context/LoginContext";
import { useState } from "react";
import { errorDefault } from "@/constants/default.js";

export default function Input({ type, name, label }) {
  const { handleInputChange, formData, errors, setErrors } = useLogin();
  const [isFocused, setIsFocused] = useState(false);

  const focusedLabel = "text-sm transform -translate-y-full";
  const blurredLabel = "bottom-[20%] text-md";
  const errorClass = errors[name] ? "border-b-2 border-b-red-500" : "";
  function handleBlur() {
    setIsFocused(false);
    console.log("blurred");
    if (formData[name].trim() === "") {
      
      console.log("empty field");
      setErrors((prev) => ({
        ...prev,
        [name]: "Field is required",
      }));
      return
    }
    
    setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
  }

  return (
    <div className="relative transition-transform duration-300 ease-in-out">
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onChange={handleInputChange}
        className={`outline-none p-2 w-full border-b border-b-gray focus:border-b-primary focus:border-b-2 ${errorClass}`}
      />
      <label
        htmlFor={name}
        className={`text-gray absolute left-1 capitalize transparent ${
          !isFocused && !formData[name] ? blurredLabel : focusedLabel
        }`}
      >
        {label}
      </label>
      {errors[name] && (
        <p className="text-red-500 absolute text-sm">{errors[name]}</p>
      )}
    </div>
  );
}
