import { Navigate, useLocation } from "react-router-dom";
import UserCtx from "../Context/UserCtx";

export default function AuthCheck({ children }) {
  const location = useLocation();
  const { user } = UserCtx();
  return user ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
