import Header from "@/components/Header";
import Category from "@/components/Category";
import Warning from "@/components/Warning";
import Button from "@/components/Button";
import contestants from "@/constants/contestants";
import { useVotingContext } from "@/hooks/useVotingContext";

const ElectionPage = () => {
  const { submitHandler } = useVotingContext();

  const categories = contestants.map((category, index) => (
    <Category key={index} {...category} />
  ));

  return (
    <div className="bg-secondary ">
      <Header />
      <main className="py-10 max-w-[90%] md:max-w-[85%] mx-auto">
        {categories}
        <Warning />
        <div className="grid place-items-center">
          {" "}
          <Button size="large" text={"submit"} handleSubmit={submitHandler} />
        </div>
      </main>
    </div>
  );
};

export default ElectionPage;
