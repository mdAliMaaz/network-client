import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="h-full max-w-2xl p-2 m-auto ">{children}</main>;
};

export default Layout;
