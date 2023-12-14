// Warning.js
import React from "react";

const Warning = () => {
  return (
    <div className="bg-yellow-200 p-4 rounded-md text-yellow-800">
      <p className="text-center">
        Please ensure you have voted in each category. Votes not cast would be
        considered abstained.
      </p>
    </div>
  );
};

export default Warning;
