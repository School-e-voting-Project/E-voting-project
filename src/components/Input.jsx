import {useLogin} from "@/context/LoginContext"

export default function Input({ type, name, label }) {
  const {
    isFocused,
    setIsFocused,
    handleInputChange,
    formData,
    errors,
    setErrors,
  } = useLogin();

  const focusedLabel = "text-sm transform -translate-y-full";
  const blurredLabel = "bottom-[20%] text-md";
  const errorClass = errors[name] ? "border-b-2 border-b-red-500" : "";

  return (
    <div className="relative transition-transform duration-300 ease-in-out">
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleInputChange}
        className={`outline-none p-2 w-full border-b border-b-gray focus:border-b-primary focus:border-b-2 ${errorClass}`}
        required
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
