import { actionTypes } from "@/constants/default";

export const VotingReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.VOTE:
      const choice =
        state[action.position] === action.candidate ? "" : action.candidate;

      return {
        ...state,
        [action.position]: choice,
      };
    case actionTypes.ABSTAIN:
      const currentVote = state[action.position];
      const newVote = currentVote === "ABSTAINED" ? "" : "ABSTAINED";

      return {
        ...state,
        [action.position]: newVote,
      };

    default:
      return state;
  }
};
