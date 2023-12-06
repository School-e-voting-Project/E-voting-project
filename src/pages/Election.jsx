import React from "react";
import { useLogin } from "@/context/LoginContext";

const ElectionPage = () => {
  const { logout } = useLogin();

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-4xl font-bold mb-4">Election Page</h2>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to the Election Page. Here, you can find information about
        ongoing elections.
        {/* Add your election-related content here. */}
      </p>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default ElectionPage;
