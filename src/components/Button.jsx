import React from "react";

export default function Button({
  handleSubmit,
  text,
  size = "s",
  disabled = false,
}) {
  const getButtonSizeClass = () => {
    switch (size) {
      case "s":
        return "text-sm py-2 px-4";
      case "l":
        return "text-lg py-4 px-8";
      default:
        return "text-md py-3 w-[60%]";
    }
  };

  return (
    <button
      onClick={() => {
        handleSubmit();
      }}
      disabled={disabled}
      className={`my-4 capitalize ${
        disabled ? "bg-gray" : ""
      } ${getButtonSizeClass()} bg-primary_variant hover:bg-primary text-white rounded-md`}
    >
      {text}
    </button>
  );
}
