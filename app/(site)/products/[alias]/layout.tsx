import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ border: "1px solid green" }}>{children}</div>;
};

export default NewsLayout;
