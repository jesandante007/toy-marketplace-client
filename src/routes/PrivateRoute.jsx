import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div className="mx-auto mt-40 w-16 h-16 rounded-full border-black border-8 border-dotted animate-spin"></div>;

  if (user) return children;

  return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRoute;
