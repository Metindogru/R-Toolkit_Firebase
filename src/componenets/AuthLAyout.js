import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const AuthLAyout = () => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLAyout;
