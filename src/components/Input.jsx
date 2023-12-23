import { useLoginContext } from "@/hooks/useLoginContext";
import { useState } from "react";
import { errorDefault } from "@/constants/default.js";

export default function Input({ type, name, label }) {
  const { handleInputChange, formData, errors, setErrors } = useLoginContext();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const focusedLabel = "text-sm transform -translate-y-full";
  const blurredLabel = "bottom-[20%] text-md";
  const errorClass = errors[name] ? "border-b-2 border-b-red-500" : "";

  function handleBlur() {
    setIsFocused(false);

    if (formData[name].trim() === "") {
      setErrors((prev) => ({
        ...prev,
        [name]: "Field is required",
      }));
      return;
    }
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="relative transition-transform duration-300 ease-in-out">
      <input
        type={
          isPasswordVisible ? "text" : type === "password" ? "password" : "text"
        }
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
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-2 text-dark_gray"
        >
          {isPasswordVisible ? "Hide" : "Show"}
        </button>
      )}
      {errors[name] && (
        <p className="text-red-500 absolute text-sm">{errors[name]}</p>
      )}
    </div>
  );
}
