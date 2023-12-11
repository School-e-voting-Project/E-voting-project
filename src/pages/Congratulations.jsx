import React, { useState, useEffect } from "react";
import Button from "@/components/Button";

const CongratulatoryPage = () => {
  const [countdown, setCountdown] = useState(5);
  const [ellipsis, setEllipsis] = useState("");

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      // Call your logout function here
      // For example: logoutUser();
      console.log("User logged out automatically");
    } else {
      // Animate the ellipsis
      const ellipsisInterval = setInterval(() => {
        setEllipsis((prevEllipsis) =>
          prevEllipsis === "..." ? "" : `${prevEllipsis}.`
        );
      }, 333.3);

      // Clear the interval when the component unmounts or countdown reaches 0
      return () => clearInterval(ellipsisInterval);
    }
  }, [countdown]);

  return (
    <div className="w-full min-h-screen grid place-items-center bg-accent">
      <div>
        <h1 className="font-bold text-3xl">Congratulations!</h1>
        <p>
          You have successfully voted in the NATIONAL ASSOCIATION OF POLITICAL
          SCIENCE STUDENTS election
        </p>
        <Button
          text={"Click here to logout"}
          handleSubmit={() => abstain(office)}
        />
        <p> or </p>
        <p className = "text-3xl">
          You would be logged out automatically in{" "}
          {countdown == 1 ? `${countdown} sec` : `${countdown} secs`}
          {ellipsis}
        </p>
      </div>
    </div>
  );
};

export default CongratulatoryPage;
