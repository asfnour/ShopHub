import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
 //children is any component inside the <ProtectedRoute/> 
  return isAuth ? children : <Navigate to="/sign-in" />;
}

export default ProtectedRoute;