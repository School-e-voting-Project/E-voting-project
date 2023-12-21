import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import { useReducerLogic } from "@/hooks/useReducerLogic";
import { useVotingLogic } from "@/hooks/useVotingLogic";

// Create context
export const VotingContext = createContext();

// Create context provider
export const VotingProvider = () => {
  //initialising hooks
  const { state, vote, abstain } = useReducerLogic();
  const { submitHandler } = useVotingLogic(state);

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
