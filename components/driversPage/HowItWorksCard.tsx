import React from "react";

const HowItWorksCard = ({ title, description, imagePath }) => {
  return (
    <div className="w-[300px] shadow-md">
      <img src={imagePath} />
      <div className="p-2">
        <h3 className="text-[1.125rem]">{title}</h3>
        <p className="text-base text-[#1E1F22] mt-2">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
