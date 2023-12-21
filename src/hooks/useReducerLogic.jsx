import { generateInitialState } from "@/constants/contestants";
import { useReducer } from "react";
import { VotingReducer } from "@/reducer/VotingReducer";
import { actionTypes } from "@/constants/default";
import { useEffect } from "react";

export const useReducerLogic = () => {
  // Define initial state
  const initialState = generateInitialState();

  //create reducer
  const [state, dispatch] = useReducer(VotingReducer, initialState);

  // Syncing with local storage on component mount
  useEffect(() => {
    // Fetch data from local storage
    const storedVotes = localStorage.getItem("votes");

    // Parse the stored data (assuming it's in JSON format)
    const parsedVotes = JSON.parse(storedVotes);

    // If there is data in local storage, dispatch an action to update the state
    if (parsedVotes) {
      dispatch({ type: actionTypes.SET_VOTES, payload: parsedVotes });
    }
  }, []); // Empty dependency array to run the effect only on mount

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
