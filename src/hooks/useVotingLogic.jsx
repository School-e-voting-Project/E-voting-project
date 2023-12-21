import { useNavigate } from "react-router-dom";

export const useVotingLogic = (state) => {
  // initializing hook
  const navigate = useNavigate();

  // Check if the user has voted for all positions
  const isVotingComplete = () => {
    const positions = Object.keys(state);
    return positions.every((position) => state[position] !== "");
  };

  // Save votes to local storage
  const saveVotesToLocalStorage = () => {
    localStorage.setItem("votes", JSON.stringify(state));
  };

  // handles voting
  const submitHandler = () => {
    console.log(state);
    if (isVotingComplete()) {
      saveVotesToLocalStorage(state);
      navigate("/congrats");
    } else {
      // Handle case where not all positions are voted
      console.error("Please vote for all positions before submitting.");
    }
  };

  return { isVotingComplete, saveVotesToLocalStorage, submitHandler };
};
