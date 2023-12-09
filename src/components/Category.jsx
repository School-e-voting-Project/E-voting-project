// Position.js
import Candidate from "@/components/Card";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import { useVoting } from "@/context/VotingContext";

export default function Position({ office, contestants }) {
  const {  abstain} =
    useVoting();

  const navigate = useNavigate();

  

  return (
    <div
      className={`mb-10 border-l-2 py-8 shadow-md bg-white rounded-md border-primary`}
    >
      <div className="flex flex-col items-center mx-auto w-[90%]">
        <h2 className="uppercase text-2xl font-bold text-center">{office}</h2>
        <div className="flex w-full flex-wrap items-center justify-center gap-4 mx-auto py-4">
          {contestants.map((contestant, index) => (
            <Candidate key={index} office={office} {...contestant} />
          ))}
        </div>
        <Button text={"abstain"} handleSubmit={() => abstain(office)} />
      </div>
    </div>
  );
}
