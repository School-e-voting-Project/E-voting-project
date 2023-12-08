import Header from "@/components/Header";
import Card from "@/components/Card";
import { useLogin } from "@/context/LoginContext";

const ElectionPage = () => {
  const { logout } = useLogin();

  return (
    <div className="">
      <Header />
      <Card />
    </div>
  );
};

export default ElectionPage;
