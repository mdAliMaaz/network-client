import useLocalStroage from "@/hooks/useLocalStroage";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { getValue } = useLocalStroage();

  const user = getValue("network-user");

  if (!user) {
    return <Navigate to={"/auth"} />;
  }

  return children;
};

export default ProtectedRoute;
