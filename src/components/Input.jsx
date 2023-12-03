import useLogin from "@/hooks/useForm";

export default function Input({ type, label }) {
  const { isFocused, setIsFocused, handleInputChange, formData } = useLogin();

  const focusedLabel = "text-sm transform -translate-y-full";
  const blurredLabel = "bottom-2 text-md";
  return (
    <div className="relative transition-transform duration-300 ease-in-out">
      <input
        type= {type}
        id= {type}
        name= {type}
        value={formData[type]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleInputChange}
        className="outline-none p-2 w-full border-b border-b-gray focus:border-b-primary focus:border-b-2"
        required
      />
      <label
        htmlFor="email"
        className={`text-gray absolute left-1 capitalize ${
          !isFocused && !formData.email ? blurredLabel : focusedLabel
        }`}
      >
        {label}
      </label>
    </div>
  );
}
