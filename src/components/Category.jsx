// Position.js
import Candidate from "@/components/Card";
import useRandomColor from "@/hooks/useRandomColor";
import Button from "@/components/Button";

export default function Position({ office, contestants }) {
  const { color: borderColor } = useRandomColor();

  return (
    <div
      className={`mb-10 border-l-2 py-8 shadow-md bg-white rounded-md border-primary`}
    >
      <div className="flex flex-col items-center mx-auto w-[90%]">
        <h2 className="uppercase text-2xl font-bold text-center">{office}</h2>
        <div className="flex w-full items-center justify-center gap-4 mx-auto">
          {contestants.map((contestant, index) => (
            <Candidate key={index} {...contestant} />
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
}
