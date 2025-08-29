import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-[5rem] px-4">{children}</div>;
}

export default Container;
