import { useVotingContext } from "@/hooks/useVotingContext";
import "./styles.css";
import { useEffect, useState } from "react";

export default function Card({ office, img, name, party }) {
  const { vote, state } = useVotingContext();
  const candidate = state[office] === name;
  const [hasAbstained, setHasAbstained] = useState(false);

  useEffect(() => {
    setHasAbstained(state[office] === "ABSTAINED");
  }, [state[office]]);

  const handleClick = () => {
    if (!hasAbstained) {
      // If not abstained, vote or flip the card based on the current state
      vote(office, name);
    }
  };

  const getFilter = () =>
    hasAbstained
      ? "abstained unselected"
      : candidate
      ? "selected"
      : "unselected";

  return (
    <article
      onClick={handleClick}
      className={`w-[300px]     h-[400px] rounded-md border-t-2 border-r-2 border-transparent ease-in-out transition-all duration-300 shadow-md text-center ${getFilter()}`}
    >
      <div className="card-inner">
        <div className="front relative z-1">
          {candidate && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="green"
              className=" border-rounded w-12 h-12 z-[10] absolute right-[-5px] top-[-3px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          )}

          <div className=" z-1 h-[250px] overflow-hidden grid place-items-center rounded-md group transition-all duration-300">
            <img
              src={img}
              alt={name}
              className="w-[60%] transition-all duration-300 group-hover:scale-125 z-1"
            />
          </div>
          <div className="py-4">
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="font-normal text-lg">{`(${party})`}</p>
          </div>
        </div>

        <div className="back">
          <p className="capitalize bold text-xl">Category abstained</p>
        </div>
      </div>
    </article>
  );
}
99;
