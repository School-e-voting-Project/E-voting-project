import { generateInitialState } from "@/constants/contestants";
import { useReducer } from "react";
import { VotingReducer } from "@/reducer/VotingReducer";
import { actionTypes } from "@/constants/default";
import { useEffect } from "react";
import { useLoginContext } from "@/hooks/useLoginContext";

export const useReducerLogic = () => {
  //get logged in user
  const { user, prevUser } = useLoginContext();

  // Define initial state
  const initialState = generateInitialState();
  const [state, dispatch] = useReducer(VotingReducer, initialState, () => {
    // Check if saved user is different from the current user
    if (prevUser && prevUser !== user) {
      // Reset state if the user has changed
      localStorage.removeItem("votes");
      return initialState;
    }
    const existingData = localStorage.getItem("votes");

    return existingData ? JSON.parse(existingData) : initialState;
  });

  //syncing with local storage
  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(state));
  }, [state]);

  // Actions
  const vote = (position, candidate) => {
    dispatch({ type: actionTypes.VOTE, position, candidate });
  };

  const abstain = (position) => {
    dispatch({ type: actionTypes.ABSTAIN, position });
  };

  const refresh = (position) => {
    dispatch({ type: actionTypes.REFRESH, position });
  };

  return { state, actionTypes, vote, abstain, refresh };
};
