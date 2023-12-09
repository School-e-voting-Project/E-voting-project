import React from "react";

export default function Button({ handleSubmit, text }) {
  return (
    <button
      onClick={() => {
        handleSubmit();
      }}
      className="mt-4 capitalize px-8 text-md py-2 bg-primary hover:bg-primary_variant text-white rounded-md"
    >
      {text}
    </button>
  );
}
