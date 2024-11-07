import React from "react";

const HowItWorksCardV2 = ({ title, description, imagePath }) => {
  return (
    <div className="w-[320px] flex flex-col items-center">
      <div className="h-[200px] w-[200px] bg-[#FCF8FF] rounded-full flex items-center justify-center p-8">
        <img src={imagePath} className="w-[90%] h-[90%] object-contain" />
      </div>
      <div className="p-2">
        <h3 className="text-[1.5rem] text-center text-[#B01A92]">{title}</h3>
        <p className="text-[1.2rem] text-[#1E1E1E] mt-2 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCardV2;
