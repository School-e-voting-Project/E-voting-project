import React, { createContext, useContext, useReducer, useEffect } from "react";
import contestants from "@/constants/contestants";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Create a function to generate the initial state based on the contestants data
const generateInitialState = () => {
  const initialState = {};
  contestants.forEach(({ office }) => {
    initialState[office] = {};
  });
  return initialState;
};

// Define initial state
const initialState = {
  votes: generateInitialState(),
};

// Define actions
const actionTypes = {
  VOTE: "VOTE",
  ABSTAIN: "ABSTAIN",
};

const votingReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.VOTE:
      return {
        ...state,
        votes: {
          ...state.votes,
          [action.position]: action.candidate,
        },
      };
    case actionTypes.ABSTAIN:
      // Toggle between "ABSTAIN" and undefined
      const currentVote = state.votes[action.position];
      const newVote = currentVote === "ABSTAIN" ? {} : "ABSTAIN";

      return {
        ...state,
        votes: {
          ...state.votes,
          [action.position]: newVote,
        },
      };

    default:
      return state;
  }
};

// Create context
const VotingContext = createContext();

// Create context provider
const VotingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(votingReducer, initialState);

  // Actions
  const vote = (position, candidate) => {
    dispatch({ type: actionTypes.VOTE, position, candidate });
  };

  const abstain = (position) => {
    dispatch({ type: actionTypes.ABSTAIN, position });
  };

  // Check if the user has voted for all positions
  const isVotingComplete = () => {
    const positions = Object.keys(state.votes);
    return positions.every((position) => state.votes[position] !== undefined);
  };

  // Save votes to local storage
  const saveVotesToLocalStorage = () => {
    localStorage.setItem("votes", JSON.stringify(state.votes));
  };

  const navigate = useNavigate();
  const submitHandler = () => {
    if (isVotingComplete()) {
      saveVotesToLocalStorage();
      console.log("submitting");
      navigate("/congrats");
    } else {
      // Handle case where not all positions are voted
      console.error("Please vote for all positions before submitting.");
    }
  };

  //syncing chnages to votes to local storage
  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(state.votes));
  }, [state.votes]);

  return (
    <VotingContext.Provider
      value={{
        state,
        vote,
        abstain,
        submitHandler,
      }}
    >
      <Outlet />
    </VotingContext.Provider>
  );
};

// Custom hook to access the voting context
const useVoting = () => {
  const context = useContext(VotingContext);
  if (!context) {
    throw new Error("useVoting must be used within a VotingProvider");
  }
  return context;
};

export { VotingProvider, useVoting };
