import { ToastContainer } from "react-toastify";

const Warning = () => {
  return (
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar>
      {" "}
      Please ensure you have voted in each category.
    </ToastContainer>
  );
};

export default Warning;
