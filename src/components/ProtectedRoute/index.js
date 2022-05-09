import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();

  if (!token) {
    return navigate("/signin");
  } else {
    return children;
  }
};

export default ProtectedRoute;
