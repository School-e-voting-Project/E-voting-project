import { Route, Navigate } from "react-router-dom";
import { useLogin } from "@/context/LoginContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useLogin();

return  user ? <Component {...rest} /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
