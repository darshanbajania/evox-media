import React from "react";

const PartnerCard = ({ path }) => {
  return (
    <img
      src={path}
      className="w-[50px] md:w-[120px] lg:w-[180px]  h-[40px] lg:h-[80px] object-contain"
    />
  );
};

export default PartnerCard;
