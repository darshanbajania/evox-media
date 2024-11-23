import React from "react";

const Paragraph = ({ children }) => {
  return (
    <p className="text-[1rem] xl:text-[1.2rem] text-[#1E1F22] text-justify">
      {children}
    </p>
  );
};

export default Paragraph;
