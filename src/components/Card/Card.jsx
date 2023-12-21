import { useVoting } from "@/context/VotingContext";
import "./styles.css";
import { useEffect, useState } from "react";

export default function Card({ office, img, name, nickname }) {
  const { vote, state } = useVoting();
  const candidate = state.votes[office] === name;
  const [hasAbstained, setHasAbstained] = useState(false);

  useEffect(() => {
    setHasAbstained(state.votes[office] === "ABSTAIN");
  }, [state.votes[office]]);

  const handleClick = () => {
    if (!hasAbstained) {
      // If not abstained, vote or flip the card based on the current state
      vote(office, name);
    }
  };

  return (
    <article
      onClick={handleClick}
      className={`w-[300px] h-[400px] rounded-md border-t-2 border-r-2 border-transparent ease-in-out transition-all duration-300 shadow-md ${
        hasAbstained
          ? "abstained grayscale text-center"
          : candidate
          ? ""
          : "grayscale"
      } text-center`}
    >
      <div className="card-inner">
        <div className="front">
          <div className="h-[250px] overflow-hidden rounded-md group transition-all duration-300">
            <img
              src={img}
              alt={name}
              className="object-cover transition-all duration-300 group-hover:scale-125"
            />
          </div>
          <div className="py-4">
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="font-normal text-lg">{`(${nickname})`}</p>
          </div>
        </div>

        <div className="back">
          <p className="capitalize bold text-xl">Category abstained</p>
        </div>
      </div>
    </article>
  );
}