import React from "react";

const BenefitsCard = ({ title, description, imagePath }) => {
  return (
    <div className="w-[250px] flex flex-col items-center">
      <div className="h-[150px] w-[150px] bg-[#FCF8FF] rounded-full flex items-center justify-center">
        <img src={imagePath} className="w-[80px] h-[80px]" />
      </div>
      <p className="text-xl font-medium text-center mt-2">{title}</p>
      <p className="text-lg text-center mt-2">{description}</p>
    </div>
  );
};

export default BenefitsCard;
