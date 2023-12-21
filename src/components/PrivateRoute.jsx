import { Navigate } from "react-router-dom";
import { useLoginContext } from "@/hooks/useLoginContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useLoginContext();

  return user ? <Component {...rest} /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
