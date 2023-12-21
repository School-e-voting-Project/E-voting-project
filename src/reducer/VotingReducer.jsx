import { actionTypes } from "@/constants/default";

export const VotingReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.VOTE:
      return {
        ...state,
        [action.position]: action.candidate,
      };
    case actionTypes.ABSTAIN:
      // Toggle between "ABSTAIN" and undefined
      const currentVote = state[action.position];
      const newVote = currentVote === "ABSTAIN" ? "" : "ABSTAINED";

      return {
        ...state,
        [action.position]: newVote,
      };

    default:
      return state;
  }
};
