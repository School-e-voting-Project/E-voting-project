import { useLoginContext } from "@/hooks/useLoginContext";
import Input from "@/components/Input";

const Login = () => {
  const { handleSubmit, formData } = useLoginContext();
  const isDisabled = !formData.password || !formData.userId;
  return (
    <div className="w-full min-h-screen grid place-items-center bg-accent">
      <div className="form-width p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-12">
          <Input type="text" name="userId" label="User Id" />
          <Input type="password" name="password" label="password" />
          <button
            type="submit"
            className={`bg-primary w-full text-white py-4 rounded-md hover:bg-primary_variant ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isDisabled}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
