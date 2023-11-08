import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
  // Video 8 End - should now be able to log in and check with Firebase
  // Video 8 - 3:34 - should get redirect to sign in page
};

export default PrivateRoute;
