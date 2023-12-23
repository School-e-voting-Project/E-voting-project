import { generateInitialState } from "@/constants/contestants";
import { useReducer } from "react";
import { VotingReducer } from "@/reducer/VotingReducer";
import { actionTypes } from "@/constants/default";
import { useEffect } from "react";

export const useReducerLogic = () => {
  // Define initial state
  const initialState = generateInitialState();
  const [state, dispatch] = useReducer(VotingReducer, initialState, () => {
    const existingData = localStorage.getItem("votes");
    const savedUser = localStorage.getItem("user");
    // if(!savedUser === )
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
