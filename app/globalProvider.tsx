import React from "react";

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export default GlobalProvider;
