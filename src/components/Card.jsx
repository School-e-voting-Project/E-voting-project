import { useVoting } from "@/context/VotingContext";

export default function Card({ office, img, name, nickname }) {
  const { vote, state } = useVoting();
  const candidate = state.votes[office] === name;

  return (
    <article
      onClick={() => vote(office, name)}
      className={`w-[300px] rounded-md border-t-2 border-r-2 border-transparent ease-in-out  transition-all duration-300 hover:border-primary shadow-md ${
        candidate ? "" : "filter grayscale"
      } text-center`}
    >
      <div className="">
        <div className="h-[250px] overflow-hidden rounded-md">
          <img src={img} alt={name} className="object-cover" />
        </div>
        <div className="py-4">
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="font-normal text-lg">{`(${nickname})`}</p>
        </div>
      </div>
    </article>
  );
}
