import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const isAuthenticated = useSelector((store) => store.isAuth);
  const Navigate = useNavigate();
  if (isAuthenticated === true) {
    return children;
  } else {
    return <Navigate to={"/signin"} />;
  }
};
