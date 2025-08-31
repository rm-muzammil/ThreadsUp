import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="md:mx-[5rem] md:px-4 mx-[1rem]">{children}</div>;
}

export default Container;
