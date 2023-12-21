import { generateInitialState } from "@/constants/contestants";
import { useReducer } from "react";
import { VotingReducer } from "@/reducer/VotingReducer";
import { actionTypes } from "@/constants/default";
import { useEffect } from "react";

export const useReducerLogic = () => {
  // Define initial state
  const initialState = generateInitialState();

  //create reducer
  const [state, dispatch] = useReducer(VotingReducer, () => {
    const existingData = localStorage.getItem("votes");
    console.log(initialState);
    console.log(existingData);
    return existingData ? existingData : initialState;
  });
  //syncing with local storage
  //   useEffect(() => {
  //     // localStorage.setItem("votes", JSON.stringify(state));
  //   }, [state]);

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
