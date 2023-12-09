import Header from "@/components/Header";
import Category from "@/components/Category";
import { useLogin } from "@/context/LoginContext";
import contestants from "@/constants/contestants";
import Warning from "@/components/Warning";
import Button from "@/components/Button";
const ElectionPage = () => {
  const { logout } = useLogin();

  const categories = contestants.map((category, index) => (
    <Category key={index} {...category} />
  ));

  return (
    <div className="bg-secondary ">
      <Header />
      <main className="max-w-[90%] md:max-w-[85%] mx-auto">
        {categories}
        <Warning />
        <div className="grid place-items-center">
          {" "}
          <Button />
        </div>
      </main>
    </div>
  );
};

export default ElectionPage;
