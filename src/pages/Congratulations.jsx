import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { useLogin } from "@/context/LoginContext";

const CongratulatoryPage = () => {
  const [countdown, setCountdown] = useState(5);
  const [ellipsis, setEllipsis] = useState("");
  const { logout } = useLogin();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      // logout();
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
      <div className="text-center">
        <h1 className="font-bold text-3xl pb-4">Congratulations!</h1>
        <p>
          You have successfully voted in the <br />{" "}
          <span className="font-bold text-primary_variant">
            {" "}
            NATIONAL ASSOCIATION OF POLITICAL SCIENCE STUDENTS
          </span>{" "}
          <br /> election.
        </p>
        <Button text={"Click here to logout"} handleSubmit={logout} />

        <p className="">
          <span className="capitalize">or</span>
          <br />
          You would be logged out automatically in{" "}
          {countdown == 1 ? `${countdown} sec` : `${countdown} secs`}
          {ellipsis}
        </p>
      </div>
    </div>
  );
};

export default CongratulatoryPage;
