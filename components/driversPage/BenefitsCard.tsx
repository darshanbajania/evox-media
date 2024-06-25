import React from "react";

const BenefitsCard = ({ description, imagePath }) => {
  return (
    <div className="w-[200px] flex flex-col items-center">
      <div className="h-[104px] w-[104px] bg-[#FCF8FF] rounded-full flex items-center justify-center">
        <img src={imagePath} className="w-[56px] h-[56px]" />
      </div>
      <p className="text-base text-center mt-2">{description}</p>
    </div>
  );
};

export default BenefitsCard;
