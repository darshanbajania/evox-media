import React from "react";

const Title = ({ children = "Blog" }) => {
  return (
    <h1 className="text-[2rem] font-medium xl:text-[2.5rem] text-[#1E1F22] mb-3">
      {children}
    </h1>
  );
};

export default Title;
