import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo?.data?.token) {
    toast.error("Not Authorized", { position: "top-right" });
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
