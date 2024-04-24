import { userState } from "@/atoms/userAtom";
import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useRecoilValue(userState);

  if (!user) {
    return <Navigate to={"/auth"} />;
  }

  return children;
};

export default ProtectedRoute;
