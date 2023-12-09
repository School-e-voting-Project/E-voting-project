import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h2>
      <p className="text-lg text-gray-600">
        The page you are looking for might be unavailable or does not exist.
      </p>
    </div>
  );
};

export default ErrorPage;
