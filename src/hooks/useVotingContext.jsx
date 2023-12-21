import { useContext } from "react";
import { VotingContext } from "@/context/VotingContext";

export const useVotingContext = () => {
  const context = useContext(VotingContext);
  if (!context) {
    throw new Error("useVotingContext must be used within a VotingProvider");
  }
  return context;
};
