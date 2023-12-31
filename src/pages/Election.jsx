import Header from "@/components/Header";
import Category from "@/components/Category";
import Warning from "@/components/Warning";
import Button from "@/components/Button";
import contestants from "@/constants/contestants";
import { useVotingContext } from "@/hooks/useVotingContext";
import { useEffect, useState } from "react";

const ElectionPage = () => {
  const { submitHandler, state } = useVotingContext();
  const [clickable, setClickable] = useState(false);

  const categories = contestants.map((category, index) => (
    <Category key={index} {...category} />
  ));

  useEffect(() => {
    const positions = Object.keys(state);
    setClickable(positions.every((position) => state[position] !== ""));
  }, [state]);

  return (
    <div className="bg-secondary ">
      <Header />
      <main className="py-10 max-w-[90%] md:max-w-[85%] mx-auto">
        {categories}
        <Warning />
        <div className="grid place-items-center">
          {" "}
          <Button
            size="large"
            text={"submit"}
            disabled={!clickable}
            handleSubmit={submitHandler}
          />
        </div>
      </main>
    </div>
  );
};

export default ElectionPage;
