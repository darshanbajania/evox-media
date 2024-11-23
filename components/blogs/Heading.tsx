import React from "react";

const Heading = ({ children }) => {
  return (
    <h1 className="text-[1.5rem] font-medium xl:text-[1.5rem] text-[#1E1F22] mb-3">
      {children}
    </h1>
  );
};

export default Heading;
